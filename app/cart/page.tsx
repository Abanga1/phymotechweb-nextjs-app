'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart/store';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { CheckoutButton } from '@/components/checkout/CheckoutButton';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, updateQty, removeItem, subtotalCents } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Avoid hydration mismatch since cart is persisted in localStorage.
    return (
      <div className="container py-16 text-center text-ink-400">Loading cart…</div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container py-16">
        <div className="mx-auto max-w-md rounded-3xl border border-dashed border-ink-200 bg-white p-10 text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-ink-100 text-ink-500">
            <ShoppingBag size={24} />
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-ink-900">Your cart is empty</h1>
          <p className="mt-2 text-sm text-ink-500">
            Looks like you haven’t added anything yet. Let’s fix that.
          </p>
          <Link href="/products" className="mt-6 inline-block">
            <Button>Browse products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = subtotalCents();
  const shipping = subtotal >= 5000 ? 0 : 499;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;
  const currency = items[0]?.currency ?? 'USD';

  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
        Shopping cart
      </h1>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-ink-100 rounded-3xl bg-white shadow-card">
          {items.map((i) => (
            <li key={i.productId} className="flex gap-4 p-5">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-ink-100">
                <Image src={i.imageUrl} alt={i.title} fill sizes="96px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <Link
                  href={`/products/${i.slug}`}
                  className="font-semibold text-ink-900 hover:text-brand-600"
                >
                  {i.title}
                </Link>
                <span className="text-sm text-ink-500">
                  {formatPrice(i.priceCents, { currency: i.currency })} each
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="inline-flex items-center rounded-lg border border-ink-200">
                    <button
                      onClick={() => updateQty(i.productId, i.quantity - 1)}
                      aria-label="Decrease"
                      className="inline-flex h-9 w-9 items-center justify-center text-ink-600 hover:bg-ink-50"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="min-w-9 text-center text-sm font-semibold">{i.quantity}</span>
                    <button
                      onClick={() => updateQty(i.productId, i.quantity + 1)}
                      aria-label="Increase"
                      className="inline-flex h-9 w-9 items-center justify-center text-ink-600 hover:bg-ink-50"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(i.productId)}
                    aria-label="Remove"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <div className="text-right text-lg font-bold text-ink-900">
                {formatPrice(i.priceCents * i.quantity, { currency: i.currency })}
              </div>
            </li>
          ))}
        </ul>

        <aside className="sticky top-24 h-fit rounded-3xl bg-white p-6 shadow-card">
          <h2 className="text-lg font-bold text-ink-900">Order summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <Row label="Subtotal" value={formatPrice(subtotal, { currency })} />
            <Row
              label="Shipping"
              value={shipping === 0 ? 'Free' : formatPrice(shipping, { currency })}
            />
            <Row label="Tax (est.)" value={formatPrice(tax, { currency })} />
            <div className="border-t border-ink-100 pt-3">
              <Row
                label={<span className="font-bold">Total</span>}
                value={<span className="text-lg font-bold">{formatPrice(total, { currency })}</span>}
              />
            </div>
          </dl>
          <div className="mt-6">
            <CheckoutButton />
          </div>
          <Link
            href="/products"
            className="mt-4 inline-flex w-full items-center justify-center gap-1 text-sm font-semibold text-ink-700 hover:text-brand-600"
          >
            Continue shopping <ArrowRight size={14} />
          </Link>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between text-ink-700">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
