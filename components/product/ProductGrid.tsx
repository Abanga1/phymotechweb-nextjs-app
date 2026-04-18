import { ProductCard } from './ProductCard';
import type { SampleProduct } from '@/lib/data/sample-products';

export function ProductGrid({ products }: { products: SampleProduct[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-200 p-12 text-center text-ink-500">
        No products found.
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
