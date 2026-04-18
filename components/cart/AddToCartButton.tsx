'use client';

import { useState } from 'react';
import { Check, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/lib/cart/store';
import type { SampleProduct } from '@/lib/data/sample-products';

export function AddToCartButton({ product, qty = 1 }: { product: SampleProduct; qty?: number }) {
  const addItem = useCart((s) => s.addItem);
  const [justAdded, setJustAdded] = useState(false);

  return (
    <Button
      size="lg"
      className="w-full sm:w-auto"
      onClick={() => {
        addItem(
          {
            productId: product.id,
            slug: product.slug,
            title: product.title,
            priceCents: product.priceCents,
            currency: product.currency,
            imageUrl: product.images[0],
          },
          qty,
        );
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1500);
      }}
    >
      {justAdded ? <Check size={18} /> : <ShoppingBag size={18} />}
      {justAdded ? 'Added!' : `Add ${qty > 1 ? `${qty} ` : ''}to cart`}
    </Button>
  );
}
