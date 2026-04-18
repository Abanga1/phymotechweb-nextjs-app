'use client';

import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart/store';
import { useEffect, useState } from 'react';

export function CartButton() {
  const open = useCart((s) => s.open);
  const totalItems = useCart((s) => s.totalItems());
  // Avoid a hydration mismatch: the cart is persisted in localStorage, so the
  // server render won't know the count. Render 0 until mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? totalItems : 0;

  return (
    <button
      onClick={open}
      className="relative inline-flex h-10 items-center gap-2 rounded-xl bg-ink-900 px-3 text-white hover:bg-ink-800"
      aria-label={`Cart (${count} items)`}
    >
      <ShoppingBag size={18} />
      <span className="hidden text-sm font-semibold md:inline">Cart</span>
      {count > 0 && (
        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1.5 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </button>
  );
}
