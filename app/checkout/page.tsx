import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CheckoutButton } from '@/components/checkout/CheckoutButton';
import { Lock } from 'lucide-react';

export const metadata = { title: 'Checkout' };

export default function CheckoutPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 shadow-card text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <Lock size={22} />
        </div>
        <h1 className="mt-4 text-2xl font-extrabold text-ink-900">Secure checkout</h1>
        <p className="mt-2 text-sm text-ink-500">
          You’ll be redirected to Stripe to complete your purchase. We never see your card details.
        </p>
        <div className="mt-8">
          <CheckoutButton />
        </div>
        <Link
          href="/cart"
          className="mt-4 inline-block text-sm font-semibold text-ink-500 hover:text-brand-600"
        >
          Back to cart
        </Link>
      </div>
    </div>
  );
}
