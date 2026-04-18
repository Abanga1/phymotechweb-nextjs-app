import { ProductGrid } from '@/components/product/ProductGrid';
import { sampleProducts, sampleCategories } from '@/lib/data/sample-products';
import Link from 'next/link';
import { SearchQuerySchema } from '@/lib/security/schemas';

export const metadata = {
  title: 'All products',
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string };
}) {
  // Validate query params defensively even though they're URL-scoped.
  const parsed = SearchQuerySchema.safeParse(searchParams);
  const q = parsed.success ? parsed.data.q : undefined;
  const category = parsed.success ? parsed.data.category : undefined;

  let items = sampleProducts;
  if (q) {
    const needle = q.toLowerCase();
    items = items.filter(
      (p) => p.title.toLowerCase().includes(needle) || p.description.toLowerCase().includes(needle),
    );
  }
  if (category) items = items.filter((p) => p.categorySlug === category);

  return (
    <div className="container py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
          {q ? `Results for "${q}"` : category ? capitalize(category) : 'All products'}
        </h1>
        <p className="mt-2 text-sm text-ink-500">{items.length} products</p>
      </header>

      <div className="mb-6 flex gap-2 overflow-x-auto no-scrollbar">
        <FilterChip href="/products" label="All" active={!category && !q} />
        {sampleCategories.map((c) => (
          <FilterChip
            key={c.slug}
            href={`/products?category=${c.slug}`}
            label={c.name}
            active={category === c.slug}
          />
        ))}
      </div>

      <ProductGrid products={items} />
    </div>
  );
}

function FilterChip({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-9 shrink-0 items-center rounded-full border px-4 text-xs font-semibold transition ${
        active
          ? 'border-brand-500 bg-brand-500 text-white'
          : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
      }`}
    >
      {label}
    </Link>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
