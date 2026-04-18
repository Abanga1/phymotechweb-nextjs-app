-- 0001_products.sql
-- Catalog: categories, products, product_images.

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug varchar(120) not null unique,
  name varchar(120) not null,
  parent_id uuid references public.categories(id) on delete set null,
  image_url text,
  sort_order int not null default 0
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug varchar(160) not null unique,
  title varchar(200) not null,
  description text not null,
  price_cents int not null check (price_cents >= 0),
  compare_at_cents int check (compare_at_cents is null or compare_at_cents >= price_cents),
  currency char(3) not null default 'USD',
  category_id uuid references public.categories(id) on delete set null,
  brand varchar(120),
  inventory_count int not null default 0 check (inventory_count >= 0),
  rating_x10 int not null default 0, -- store rating * 10 to keep it integer
  review_count int not null default 0,
  is_active boolean not null default true,
  is_featured boolean not null default false,
  search_tsv tsvector generated always as (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '') || ' ' || coalesce(brand, ''))
  ) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products(category_id);
create index if not exists products_active_idx on public.products(is_active);
create index if not exists products_featured_idx on public.products(is_featured) where is_featured = true;
create index if not exists products_search_idx on public.products using gin(search_tsv);

create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  url text not null,
  alt text,
  position int not null default 0
);

create index if not exists product_images_product_idx on public.product_images(product_id);

-- Keep updated_at fresh.
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_touch_updated_at on public.products;
create trigger products_touch_updated_at
before update on public.products
for each row execute function public.touch_updated_at();
