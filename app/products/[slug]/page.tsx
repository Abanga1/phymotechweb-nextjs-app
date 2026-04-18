import { notFound } from 'next/navigation';
import { Check, Truck, Undo2, ShieldCheck } from 'lucide-react';
import { findProduct, sampleProducts } from '@/lib/data/sample-products';
import { AddToCartButton } from '@/components/cart/AddToCartButton';
import { Badge } from '@/components/ui/Badge';
import { Stars } from '@/components/ui/Stars';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductGallery } from '@/components/product/ProductGallery';
import { formatPrice } from '@/lib/utils';

export function generateStaticParams() {
  return sampleProducts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = findProduct(params.slug);
  if (!p) return { title: 'Product not found' };
  return {
    title: p.title,
    description: p.description.slice(0, 160),
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = findProduct(params.slug);
  if (!p) notFound();

  const related = sampleProducts
    .filter((x) => x.id !== p.id && x.categorySlug === p.categorySlug)
    .slice(0, 4);

  const hasDiscount = !!p.compareAtCents && p.compareAtCents > p.priceCents;

  return (
    <div className="container py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Gallery */}
        <ProductGallery images={p.images} alt={p.title} />

        {/* Details */}
        <div className="animate-fade-in">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {p.brand} · {p.categoryName}
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
            {p.title}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={p.rating} />
            <span className="text-sm text-ink-500">
              {p.rating.toFixed(1)} · {p.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-extrabold text-ink-900">
              {formatPrice(p.priceCents, { currency: p.currency })}
            </span>
            {hasDiscount && (
              <>
                <span className="text-lg text-ink-400 line-through">
                  {formatPrice(p.compareAtCents!, { currency: p.currency })}
                </span>
                <Badge tone="sale">
                  Save {formatPrice(p.compareAtCents! - p.priceCents, { currency: p.currency })}
                </Badge>
              </>
            )}
          </div>

          <p className="mt-6 max-w-prose text-ink-700">{p.description}</p>

          <ul className="mt-6 space-y-2">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                <Check size={16} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AddToCartButton product={p} />
            {p.inventoryCount < 20 && (
              <span className="text-sm font-medium text-amber-700">
                Only {p.inventoryCount} left in stock
              </span>
            )}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-ink-100 bg-white p-4 text-xs">
            <TrustBadge icon={<Truck size={16} />} label="Ships in 24h" />
            <TrustBadge icon={<Undo2 size={16} />} label="30-day returns" />
            <TrustBadge icon={<ShieldCheck size={16} />} label="Secure checkout" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-ink-900">
            You might also like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-ink-700">
      <span className="text-brand-600">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}
