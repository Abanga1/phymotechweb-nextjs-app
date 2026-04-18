'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart/store';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useEffect } from 'react';

export function CartDrawer() {
  const { items, isOpen, close, updateQty, removeItem, subtotalCents } = useCart();

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = subtotalCents();

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        aria-label="Close cart"
        onClick={close}
        className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm animate-fade-in"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-in-right">
        <header className="flex items-center justify-between border-b border-ink-100 p-5">
          <h2 className="text-lg font-bold text-ink-900">Your cart</h2>
          <button
            onClick={close}
            aria-label="Close"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-ink-500 hover:bg-ink-100"
          >
            <X size={18} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-ink-100 text-ink-500">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-ink-900">Your cart is empty</h3>
              <p className="mt-1 text-sm text-ink-500">Add a few things and check back.</p>
            </div>
            <Button onClick={close} variant="secondary">Continue shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5">
              <ul className="divide-y divide-ink-100">
                {items.map((i) => (
                  <li key={i.productId} className="flex gap-4 py-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-ink-100">
                      <Image src={i.imageUrl} alt={i.title} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <Link
                        href={`/products/${i.slug}`}
                        onClick={close}
                        className="line-clamp-2 text-sm font-semibold text-ink-900 hover:text-brand-600"
                      >
                        {i.title}
                      </Link>
                      <span className="text-sm font-bold text-ink-900">
                        {formatPrice(i.priceCents, { currency: i.currency })}
                      </span>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="inline-flex items-center rounded-lg border border-ink-200">
                          <button
                            onClick={() => updateQty(i.productId, i.quantity - 1)}
                            aria-label="Decrease"
                            className="inline-flex h-8 w-8 items-center justify-center text-ink-600 hover:bg-ink-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{i.quantity}</span>
                          <button
                            onClick={() => updateQty(i.productId, i.quantity + 1)}
                            aria-label="Increase"
                            className="inline-flex h-8 w-8 items-center justify-center text-ink-600 hover:bg-ink-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(i.productId)}
                          aria-label="Remove"
                          className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:bg-ink-100 hover:text-red-600"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="border-t border-ink-100 p-5">
              <div className="mb-3 flex items-center justify-between text-sm text-ink-600">
                <span>Subtotal</span>
                <span className="text-base font-bold text-ink-900">
                  {formatPrice(subtotal, { currency: items[0]?.currency ?? 'USD' })}
                </span>
              </div>
              <p className="mb-4 text-xs text-ink-500">
                Shipping & taxes calculated at checkout.
              </p>
              <Link href="/checkout" onClick={close} className="block">
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </Link>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
