import { NextResponse, type NextRequest } from 'next/server';
import { getStripe } from '@/lib/stripe/client';
import { handleStripeEvent } from '@/lib/stripe/events';
import { requireServerEnv } from '@/lib/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Stripe webhook receiver.
 *
 * SECURITY:
 *  - We MUST verify the `stripe-signature` header with STRIPE_WEBHOOK_SECRET.
 *    Without that, any attacker who learns the URL can forge events and
 *    mark orders as paid.
 *  - We read the raw body (NOT the parsed JSON) because Stripe signs bytes.
 *  - Handlers are idempotent: Stripe retries, we must not double-apply.
 */
export async function POST(req: NextRequest) {
  let env;
  try {
    env = requireServerEnv();
  } catch (e) {
    console.error('[stripe webhook]', e);
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  const rawBody = await req.text();
  const stripe = getStripe();

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('[stripe webhook] signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    const result = await handleStripeEvent(event);
    return NextResponse.json({ received: true, result });
  } catch (err) {
    console.error('[stripe webhook] handler error:', err);
    // Return 500 so Stripe retries.
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 });
  }
}
