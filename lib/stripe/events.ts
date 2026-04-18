import type Stripe from 'stripe';
import { createAdminClient } from '@/lib/supabase/admin';

/**
 * Handle Stripe webhook events. The webhook endpoint verifies the signature
 * before calling into here, so by this point we trust `event`.
 *
 * Keep these handlers idempotent — Stripe may deliver the same event twice.
 */
export async function handleStripeEvent(event: Stripe.Event) {
  switch (event.type) {
    case 'checkout.session.completed':
      return handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
    case 'payment_intent.payment_failed':
      return handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
    case 'charge.refunded':
      return handleRefund(event.data.object as Stripe.Charge);
    default:
      // Unhandled events are fine — we return 200 to stop Stripe retries.
      return { ok: true, ignored: event.type };
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const admin = createAdminClient();
  const { error } = await admin
    .from('orders')
    .update({
      status: 'paid',
      stripe_payment_intent_id:
        typeof session.payment_intent === 'string' ? session.payment_intent : null,
      paid_at: new Date().toISOString(),
    })
    .eq('stripe_checkout_session_id', session.id);

  if (error) throw error;
  return { ok: true };
}

async function handlePaymentFailed(pi: Stripe.PaymentIntent) {
  const admin = createAdminClient();
  await admin
    .from('orders')
    .update({ status: 'cancelled' })
    .eq('stripe_payment_intent_id', pi.id);
  return { ok: true };
}

async function handleRefund(charge: Stripe.Charge) {
  const admin = createAdminClient();
  await admin
    .from('orders')
    .update({ status: 'refunded' })
    .eq('stripe_payment_intent_id', charge.payment_intent as string);
  return { ok: true };
}
