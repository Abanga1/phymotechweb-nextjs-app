import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not set. Configure it in .env.local to enable checkout.');
  }
  _stripe = new Stripe(key, {
    // Pin the API version so behavior is stable even if the default on the
    // account changes. Bump this intentionally after reading the changelog.
    apiVersion: '2024-09-30.acacia' as Stripe.LatestApiVersion,
    typescript: true,
    appInfo: { name: 'my-ecom-site', version: '0.1.0' },
  });
  return _stripe;
}
