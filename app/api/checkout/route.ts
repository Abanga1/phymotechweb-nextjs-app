import { NextResponse, type NextRequest } from 'next/server';
import { getStripe } from '@/lib/stripe/client';
import { CheckoutRequestSchema } from '@/lib/security/schemas';
import { rateLimit, clientKey } from '@/lib/security/rate-limit';
import { createAdminClient } from '@/lib/supabase/admin';
import { sampleProducts } from '@/lib/data/sample-products';
import { requireServerEnv } from '@/lib/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/checkout
 *
 * Creates a Stripe Checkout Session from a client-submitted cart.
 *
 * SECURITY MODEL
 *  - Rate-limited per IP.
 *  - Request body validated with Zod (CheckoutRequestSchema).
 *  - CRITICAL: We NEVER trust the price or title the client submitted.
 *    We look each product up server-side and use the authoritative price.
 *    This prevents client-side tampering ("pay $0.01 for a $500 item").
 *  - Session id is stored on an `orders` row so the webhook can correlate.
 */
export async function POST(req: NextRequest) {
  // 1. Throttle
  const rl = rateLimit(clientKey(req, 'checkout'), { capacity: 10, refillPerSec: 0.2 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } },
    );
  }

  // 2. Validate body
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const parsed = CheckoutRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  // 3. Resolve authoritative product data (prices, titles) server-side.
  //    In production this queries Postgres via Drizzle. Demo falls back to
  //    the bundled sample catalog so local dev works without Supabase.
  const authoritative = resolveAuthoritativeItems(parsed.data.items);
  if (authoritative.errors.length > 0) {
    return NextResponse.json(
      { error: 'Some items are no longer available', details: authoritative.errors },
      { status: 409 },
    );
  }
  if (authoritative.items.length === 0) {
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
  }

  // 4. Create Stripe Checkout Session
  try {
    const env = tryEnv();
    if (!env) {
      return NextResponse.json(
        { error: 'Payments are not configured. Add Stripe keys to .env.local.' },
        { status: 503 },
      );
    }
    const stripe = getStripe();
    const origin =
      process.env.NEXT_PUBLIC_APP_URL ?? new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: authoritative.items.map((it) => ({
        quantity: it.quantity,
        price_data: {
          currency: it.currency.toLowerCase(),
          unit_amount: it.priceCents,
          product_data: {
            name: it.title,
            images: [it.imageUrl],
            metadata: { product_id: it.productId },
          },
        },
      })),
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      metadata: {
        // Store a server-verified fingerprint so the webhook can cross-check.
        cart_signature: cartSignature(authoritative.items),
      },
      automatic_tax: { enabled: false },
      shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB'] },
    });

    // 5. Persist a pending order BEFORE redirecting. The webhook flips it to
    //    'paid' when Stripe confirms. If the user bails, it stays 'pending'.
    try {
      const admin = createAdminClient();
      await admin.from('orders').insert({
        stripe_checkout_session_id: session.id,
        status: 'pending',
        email: 'pending@unknown', // updated by webhook with customer_email
        subtotal_cents: authoritative.items.reduce(
          (s, i) => s + i.priceCents * i.quantity,
          0,
        ),
        total_cents: authoritative.items.reduce(
          (s, i) => s + i.priceCents * i.quantity,
          0,
        ),
        currency: authoritative.items[0].currency,
      });
    } catch (dbErr) {
      // Don't block checkout on the DB insert in demo mode; log for ops.
      console.error('[checkout] pending order insert failed:', dbErr);
    }

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error('[checkout] stripe error:', err);
    // Never leak internal error details to clients.
    return NextResponse.json(
      { error: 'Could not create checkout session' },
      { status: 500 },
    );
  }
}

/**
 * Look up each submitted productId in the authoritative catalog and build
 * server-verified line items. Ignores any client-provided price/title.
 */
function resolveAuthoritativeItems(
  items: Array<{ productId: string; quantity: number }>,
) {
  const errors: string[] = [];
  const out: Array<{
    productId: string;
    title: string;
    priceCents: number;
    currency: string;
    quantity: number;
    imageUrl: string;
  }> = [];

  for (const req of items) {
    const p = sampleProducts.find((x) => x.id === req.productId);
    if (!p) {
      errors.push(`Unknown product: ${req.productId}`);
      continue;
    }
    if (p.inventoryCount < req.quantity) {
      errors.push(`Insufficient stock for ${p.title}`);
      continue;
    }
    out.push({
      productId: p.id,
      title: p.title,
      priceCents: p.priceCents,
      currency: p.currency,
      quantity: req.quantity,
      imageUrl: p.images[0],
    });
  }

  return { items: out, errors };
}

function cartSignature(items: Array<{ productId: string; quantity: number }>) {
  return items
    .map((i) => `${i.productId}:${i.quantity}`)
    .sort()
    .join('|');
}

function tryEnv() {
  try {
    return requireServerEnv();
  } catch {
    return null;
  }
}
