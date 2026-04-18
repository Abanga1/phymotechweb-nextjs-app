/**
 * Built-in sample catalog used when DATABASE_URL isn't configured.
 * Keeps the UI fully functional in "demo mode" so reviewers can see the
 * storefront immediately after `npm install && npm run dev`.
 */

export type SampleProduct = {
  id: string;
  slug: string;
  title: string;
  description: string;
  priceCents: number;
  compareAtCents?: number;
  currency: 'USD';
  brand: string;
  categorySlug: string;
  categoryName: string;
  inventoryCount: number;
  rating: number; // 0..5
  reviewCount: number;
  isFeatured: boolean;
  images: string[];
  bullets: string[];
};

const u = (id: string, w = 900, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const sampleCategories = [
  { slug: 'electronics', name: 'Electronics', emoji: '🔌' },
  { slug: 'audio', name: 'Audio', emoji: '🎧' },
  { slug: 'fashion', name: 'Fashion', emoji: '👟' },
  { slug: 'outdoors', name: 'Outdoors', emoji: '🏕️' },
];

export const sampleProducts: SampleProduct[] = [
  {
    id: '1a0b8e3d-1111-4111-8111-000000000001',
    slug: 'aurora-wireless-headphones',
    title: 'Aurora Wireless Headphones',
    description:
      'Studio-grade 40mm drivers, 38-hour battery life, and adaptive noise cancelling that actually works on airplanes. Memory-foam ear cushions keep you comfortable through the longest flights.',
    priceCents: 19900,
    compareAtCents: 24900,
    currency: 'USD',
    brand: 'Aurora Audio',
    categorySlug: 'audio',
    categoryName: 'Audio',
    inventoryCount: 128,
    rating: 4.7,
    reviewCount: 2431,
    isFeatured: true,
    images: [
      u('1505740420928-5e560c06d30e'),
      u('1546435770-a3e426bf472b'),
    ],
    bullets: [
      'Active noise cancelling with transparency mode',
      '38-hour battery, 15-min quick charge = 6 hours playback',
      'Bluetooth 5.3 multipoint — pair two devices at once',
    ],
  },
  {
    id: '1a0b8e3d-1111-4111-8111-000000000002',
    slug: 'nimbus-mechanical-keyboard',
    title: 'Nimbus 75% Mechanical Keyboard',
    description:
      'A tactile, hot-swappable 75% keyboard with gasket-mounted PBT keycaps and a silky linear switch feel. USB-C, per-key RGB, and N-key rollover.',
    priceCents: 14900,
    currency: 'USD',
    brand: 'Nimbus',
    categorySlug: 'electronics',
    categoryName: 'Electronics',
    inventoryCount: 54,
    rating: 4.6,
    reviewCount: 812,
    isFeatured: true,
    images: [u('1587829741301-dc798b83add3'), u('1595225476474-87563907a212')],
    bullets: ['Hot-swappable south-facing switches', 'PBT double-shot keycaps', 'Per-key RGB'],
  },
  {
    id: '1a0b8e3d-1111-4111-8111-000000000003',
    slug: 'meridian-smart-watch',
    title: 'Meridian Smart Watch (44mm)',
    description:
      'A titanium-cased GPS watch with 14-day battery life, ECG, SpO2, and turn-by-turn navigation. Sapphire crystal, 100m water resistance.',
    priceCents: 34900,
    compareAtCents: 39900,
    currency: 'USD',
    brand: 'Meridian',
    categorySlug: 'electronics',
    categoryName: 'Electronics',
    inventoryCount: 37,
    rating: 4.8,
    reviewCount: 1842,
    isFeatured: true,
    images: [u('1523275335684-37898b6baf30'), u('1542496658-e33a6d0d50f6')],
    bullets: ['14-day battery life', 'ECG + SpO2', 'Sapphire crystal, 100m water resistant'],
  },
  {
    id: '1a0b8e3d-1111-4111-8111-000000000005',
    slug: 'everyday-canvas-sneakers',
    title: 'Everyday Canvas Sneakers',
    description:
      'Breathable 10oz cotton canvas, vulcanized rubber sole, and a cushioned insole your feet will actually thank you for.',
    priceCents: 5900,
    currency: 'USD',
    brand: 'Northbank',
    categorySlug: 'fashion',
    categoryName: 'Fashion',
    inventoryCount: 210,
    rating: 4.4,
    reviewCount: 1120,
    isFeatured: false,
    images: [u('1542291026-7eec264c27ff'), u('1460353581641-37baddab0fa2')],
    bullets: ['10oz cotton canvas', 'Vulcanized rubber sole', 'Removable cushioned insole'],
  },
  {
    id: '1a0b8e3d-1111-4111-8111-000000000007',
    slug: 'trailhead-35l-backpack',
    title: 'Trailhead 35L Backpack',
    description:
      'Weatherproof ripstop nylon with a floating laptop sleeve, hip belt, and enough compartments to keep you organized on a 3-day trip.',
    priceCents: 12900,
    currency: 'USD',
    brand: 'Trailhead',
    categorySlug: 'outdoors',
    categoryName: 'Outdoors',
    inventoryCount: 71,
    rating: 4.6,
    reviewCount: 518,
    isFeatured: false,
    images: [u('1553062407-98eeb64c6a62'), u('1491637639811-60e2756cc1c7')],
    bullets: ['Weatherproof ripstop nylon', 'Floating 16" laptop sleeve', 'Padded hip belt'],
  },
  {
    id: '1a0b8e3d-1111-4111-8111-000000000008',
    slug: 'cirrus-bluetooth-speaker',
    title: 'Cirrus Bluetooth Speaker',
    description:
      'IP67 waterproof, 24-hour battery, and a pair of them stereo-link for wall-of-sound in the backyard.',
    priceCents: 7900,
    currency: 'USD',
    brand: 'Aurora Audio',
    categorySlug: 'audio',
    categoryName: 'Audio',
    inventoryCount: 144,
    rating: 4.5,
    reviewCount: 980,
    isFeatured: true,
    images: [u('1608043152269-423dbba4e7e1'), u('1545454675-3531b543be5d')],
    bullets: ['IP67 waterproof', '24-hour battery', 'Stereo pair two units'],
  },
  {
    id: '1a0b8e3d-1111-4111-8111-000000000009',
    slug: 'linen-button-down-shirt',
    title: 'Linen Button-Down Shirt',
    description:
      'Pre-washed European linen, mother-of-pearl buttons, and a relaxed fit that breathes on hot days.',
    priceCents: 7900,
    compareAtCents: 9900,
    currency: 'USD',
    brand: 'Northbank',
    categorySlug: 'fashion',
    categoryName: 'Fashion',
    inventoryCount: 88,
    rating: 4.3,
    reviewCount: 214,
    isFeatured: false,
    images: [u('1521572163474-6864f9cf17ab'), u('1520975916090-3105956dac38')],
    bullets: ['100% European linen', 'Mother-of-pearl buttons', 'Machine washable'],
  },
];

export function findProduct(slug: string) {
  return sampleProducts.find((p) => p.slug === slug) ?? null;
}

export function productsByCategory(slug: string) {
  return sampleProducts.filter((p) => p.categorySlug === slug);
}
