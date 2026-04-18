import Link from 'next/link';

export const metadata = { title: 'Orders' };

export default function OrdersPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
        Your orders
      </h1>
      <p className="mt-2 text-sm text-ink-500">
        Orders will appear here once you make your first purchase.
      </p>
      <div className="mt-8 rounded-3xl border border-dashed border-ink-200 bg-white p-10 text-center">
        <p className="text-ink-500">No orders yet.</p>
        <Link
          href="/products"
          className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline"
        >
          Start shopping →
        </Link>
      </div>
    </div>
  );
}
