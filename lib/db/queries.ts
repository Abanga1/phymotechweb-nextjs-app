import { and, desc, eq, ilike, or } from 'drizzle-orm';
import { getDb } from './index';
import { products, categories, productImages } from './schema';

export async function getFeaturedProducts(limit = 8) {
  const db = getDb();
  return db
    .select()
    .from(products)
    .where(and(eq(products.isActive, true), eq(products.isFeatured, true)))
    .orderBy(desc(products.createdAt))
    .limit(limit);
}

export async function getProductBySlug(slug: string) {
  const db = getDb();
  const [row] = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug))
    .limit(1);
  return row ?? null;
}

export async function getProductImages(productId: string) {
  const db = getDb();
  return db
    .select()
    .from(productImages)
    .where(eq(productImages.productId, productId))
    .orderBy(productImages.position);
}

export async function listCategories() {
  const db = getDb();
  return db.select().from(categories).orderBy(categories.sortOrder);
}

export async function searchProducts(q: string, limit = 20) {
  const db = getDb();
  const needle = `%${q}%`;
  return db
    .select()
    .from(products)
    .where(
      and(
        eq(products.isActive, true),
        or(ilike(products.title, needle), ilike(products.description, needle)),
      ),
    )
    .limit(limit);
}
