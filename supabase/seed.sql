-- seed.sql
-- 10 sample products across 6 categories.
-- Run AFTER the migrations 0000..0003 have been applied.

begin;

insert into public.categories (id, slug, name, sort_order) values
  ('11111111-1111-4111-8111-000000000001', 'electronics', 'Electronics', 1),
  ('11111111-1111-4111-8111-000000000002', 'audio',       'Audio',       2),
  ('11111111-1111-4111-8111-000000000004', 'fashion',     'Fashion',     3),
  ('11111111-1111-4111-8111-000000000006', 'outdoors',    'Outdoors',    4)
on conflict (slug) do nothing;

insert into public.products
  (id, slug, title, description, price_cents, compare_at_cents, currency, category_id, brand, inventory_count, rating_x10, review_count, is_active, is_featured)
values
  ('1a0b8e3d-1111-4111-8111-000000000001', 'aurora-wireless-headphones',
   'Aurora Wireless Headphones',
   'Studio-grade 40mm drivers, 38-hour battery life, and adaptive noise cancelling.',
   19900, 24900, 'USD',
   '11111111-1111-4111-8111-000000000002', 'Aurora Audio', 128, 47, 2431, true, true),

  ('1a0b8e3d-1111-4111-8111-000000000002', 'nimbus-mechanical-keyboard',
   'Nimbus 75% Mechanical Keyboard',
   'Tactile, hot-swappable 75% keyboard with gasket-mounted PBT keycaps.',
   14900, null, 'USD',
   '11111111-1111-4111-8111-000000000001', 'Nimbus', 54, 46, 812, true, true),

  ('1a0b8e3d-1111-4111-8111-000000000003', 'meridian-smart-watch',
   'Meridian Smart Watch (44mm)',
   'Titanium-cased GPS watch with 14-day battery life, ECG, SpO2, and navigation.',
   34900, 39900, 'USD',
   '11111111-1111-4111-8111-000000000001', 'Meridian', 37, 48, 1842, true, true),

  ('1a0b8e3d-1111-4111-8111-000000000005', 'everyday-canvas-sneakers',
   'Everyday Canvas Sneakers',
   'Breathable 10oz cotton canvas, vulcanized rubber sole, cushioned insole.',
   5900, null, 'USD',
   '11111111-1111-4111-8111-000000000004', 'Northbank', 210, 44, 1120, true, false),

  ('1a0b8e3d-1111-4111-8111-000000000007', 'trailhead-35l-backpack',
   'Trailhead 35L Backpack',
   'Weatherproof ripstop nylon with a floating laptop sleeve and hip belt.',
   12900, null, 'USD',
   '11111111-1111-4111-8111-000000000006', 'Trailhead', 71, 46, 518, true, false),

  ('1a0b8e3d-1111-4111-8111-000000000008', 'cirrus-bluetooth-speaker',
   'Cirrus Bluetooth Speaker',
   'IP67 waterproof, 24-hour battery, stereo-link two units for wider sound.',
   7900, null, 'USD',
   '11111111-1111-4111-8111-000000000002', 'Aurora Audio', 144, 45, 980, true, true),

  ('1a0b8e3d-1111-4111-8111-000000000009', 'linen-button-down-shirt',
   'Linen Button-Down Shirt',
   'Pre-washed European linen, mother-of-pearl buttons, relaxed fit.',
   7900, 9900, 'USD',
   '11111111-1111-4111-8111-000000000004', 'Northbank', 88, 43, 214, true, false)
on conflict (slug) do nothing;

-- Primary images (one per product; add more as needed).
insert into public.product_images (product_id, url, alt, position) values
  ('1a0b8e3d-1111-4111-8111-000000000001', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80', 'Aurora Wireless Headphones', 0),
  ('1a0b8e3d-1111-4111-8111-000000000002', 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80', 'Nimbus Keyboard', 0),
  ('1a0b8e3d-1111-4111-8111-000000000003', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', 'Meridian Smart Watch', 0),
  ('1a0b8e3d-1111-4111-8111-000000000005', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', 'Canvas Sneakers', 0),
  ('1a0b8e3d-1111-4111-8111-000000000007', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80', 'Trailhead Backpack', 0),
  ('1a0b8e3d-1111-4111-8111-000000000008', 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80', 'Cirrus Speaker', 0),
  ('1a0b8e3d-1111-4111-8111-000000000009', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', 'Linen Shirt', 0);

commit;
