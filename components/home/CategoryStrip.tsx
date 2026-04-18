import Link from 'next/link';
import { sampleCategories } from '@/lib/data/sample-products';

export function CategoryStrip() {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {sampleCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-white p-4 text-center transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
          >
            <span className="text-3xl transition group-hover:scale-110" aria-hidden>
              {c.emoji}
            </span>
            <span className="text-xs font-semibold text-ink-700 group-hover:text-brand-600">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
