import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductGrid } from '@/components/product/ProductGrid';
import { sampleProducts } from '@/lib/data/sample-products';

export function FeaturedRow() {
  const featured = sampleProducts.filter((p) => p.isFeatured).slice(0, 8);
  return (
    <section className="container py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Trending now
          </span>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
            Featured picks
          </h2>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm font-semibold text-ink-700 hover:text-brand-600"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>
      <ProductGrid products={featured} />
    </section>
  );
}
