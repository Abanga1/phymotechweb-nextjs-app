import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = { title: 'Order confirmed' };

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  // Note: we do NOT trust this page to mark the order paid. That only happens
  // via the Stripe webhook (app/api/webhooks/stripe). This page is purely UX.
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 text-center shadow-card">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 size={28} />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-ink-900">Thank you!</h1>
        <p className="mt-2 text-sm text-ink-500">
          Your order is being processed. You’ll get an email confirmation shortly.
        </p>
        {searchParams.session_id && (
          <p className="mt-3 break-all text-xs text-ink-400">
            Ref: {searchParams.session_id.slice(0, 32)}…
          </p>
        )}
        <div className="mt-8 flex flex-col gap-2">
          <Link href="/orders">
            <Button className="w-full" variant="secondary">
              View my orders
            </Button>
          </Link>
          <Link href="/products">
            <Button className="w-full" variant="outline">
              Keep shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
