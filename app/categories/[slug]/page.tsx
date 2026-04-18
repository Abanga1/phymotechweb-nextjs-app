import { notFound } from 'next/navigation';
import { ProductGrid } from '@/components/product/ProductGrid';
import {
  productsByCategory,
  sampleCategories,
} from '@/lib/data/sample-products';

export function generateStaticParams() {
  return sampleCategories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Path params come from a trusted allowlist (generateStaticParams) but
  // we still verify to avoid unexpected values in dynamic rendering.
  if (!/^[a-z0-9-]+$/.test(params.slug)) notFound();

  const category = sampleCategories.find((c) => c.slug === params.slug);
  if (!category) notFound();
  const items = productsByCategory(params.slug);

  return (
    <div className="container py-10">
      <header className="mb-8 rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-pink-500 p-10 text-white shadow-glow">
        <div className="text-5xl">{category.emoji}</div>
        <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">{category.name}</h1>
        <p className="mt-2 text-sm text-white/80">{items.length} products</p>
      </header>
      <ProductGrid products={items} />
    </div>
  );
}
