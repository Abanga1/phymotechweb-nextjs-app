import { NextResponse, type NextRequest } from 'next/server';
import { SearchQuerySchema } from '@/lib/security/schemas';
import { rateLimit, clientKey } from '@/lib/security/rate-limit';
import { sampleProducts } from '@/lib/data/sample-products';

export const runtime = 'nodejs';

/**
 * GET /api/products?q=&category=&page=
 *
 * Public read-only endpoint. Rate-limited, query validated, results capped.
 */
export async function GET(req: NextRequest) {
  const rl = rateLimit(clientKey(req, 'products'), { capacity: 60, refillPerSec: 2 });
  if (!rl.ok) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const parsed = SearchQuerySchema.safeParse(
    Object.fromEntries(new URL(req.url).searchParams.entries()),
  );
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
  }

  const { q, category, page } = parsed.data;
  const perPage = 20;

  let items = sampleProducts;
  if (q) {
    const needle = q.toLowerCase();
    items = items.filter(
      (p) => p.title.toLowerCase().includes(needle) || p.description.toLowerCase().includes(needle),
    );
  }
  if (category) items = items.filter((p) => p.categorySlug === category);

  const total = items.length;
  const start = (page - 1) * perPage;
  const slice = items.slice(start, start + perPage).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    priceCents: p.priceCents,
    compareAtCents: p.compareAtCents,
    currency: p.currency,
    brand: p.brand,
    rating: p.rating,
    reviewCount: p.reviewCount,
    image: p.images[0],
  }));

  return NextResponse.json(
    { items: slice, page, perPage, total },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    },
  );
}
