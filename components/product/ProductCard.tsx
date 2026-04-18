'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Stars } from '@/components/ui/Stars';
import { ProductImageCarousel } from '@/components/product/ProductImageCarousel';
import { useCart } from '@/lib/cart/store';
import { cn, formatPrice } from '@/lib/utils';
import type { SampleProduct } from '@/lib/data/sample-products';

export function ProductCard({ product, className }: { product: SampleProduct; className?: string }) {
  const addItem = useCart((s) => s.addItem);
  const hasDiscount = !!product.compareAtCents && product.compareAtCents > product.priceCents;
  const discountPct = hasDiscount
    ? Math.round(
        ((product.compareAtCents! - product.priceCents) / product.compareAtCents!) * 100,
      )
    : 0;

  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover',
        className,
      )}
    >
      <div className="relative">
        <ProductImageCarousel
          images={product.images}
          alt={product.title}
          href={`/products/${product.slug}`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {hasDiscount && (
          <Badge tone="sale" className="pointer-events-none absolute left-3 top-3 z-[3]">
            -{discountPct}%
          </Badge>
        )}
        {product.inventoryCount > 0 && product.inventoryCount < 20 && (
          <Badge tone="low-stock" className="pointer-events-none absolute right-3 top-3 z-[3]">
            Only {product.inventoryCount} left
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="text-xs font-medium uppercase tracking-wider text-ink-400">
          {product.brand}
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="line-clamp-2 text-sm font-semibold text-ink-900 hover:text-brand-600"
        >
          {product.title}
        </Link>
        <div className="flex items-center gap-2">
          <Stars rating={product.rating} size={14} />
          <span className="text-xs text-ink-500">({product.reviewCount.toLocaleString()})</span>
        </div>
        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-ink-900">
              {formatPrice(product.priceCents, { currency: product.currency })}
            </span>
            {hasDiscount && (
              <span className="text-sm text-ink-400 line-through">
                {formatPrice(product.compareAtCents!, { currency: product.currency })}
              </span>
            )}
          </div>
          <button
            onClick={() =>
              addItem({
                productId: product.id,
                slug: product.slug,
                title: product.title,
                priceCents: product.priceCents,
                currency: product.currency,
                imageUrl: product.images[0],
              })
            }
            aria-label="Add to cart"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-white transition hover:bg-brand-600 active:translate-y-px"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
