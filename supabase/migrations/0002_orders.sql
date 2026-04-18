-- 0002_orders.sql
-- Carts, cart items, orders, order items.

do $$ begin
  create type public.order_status as enum ('pending', 'paid', 'fulfilled', 'cancelled', 'refunded');
exception when duplicate_object then null;
end $$;

create table if not exists public.carts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  anonymous_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint carts_owner_present check (user_id is not null or anonymous_id is not null)
);

create unique index if not exists carts_user_id_unique on public.carts(user_id) where user_id is not null;

create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  cart_id uuid not null references public.carts(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  quantity int not null check (quantity > 0),
  unit_price_cents_snapshot int not null check (unit_price_cents_snapshot >= 0),
  created_at timestamptz not null default now(),
  unique (cart_id, product_id)
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  email text not null,
  status public.order_status not null default 'pending',
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text unique,
  subtotal_cents int not null,
  tax_cents int not null default 0,
  shipping_cents int not null default 0,
  total_cents int not null,
  currency char(3) not null default 'USD',
  shipping_address_snapshot jsonb,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create index if not exists orders_user_id_idx on public.orders(user_id);
create index if not exists orders_status_idx on public.orders(status);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  title_snapshot text not null,
  unit_price_cents_snapshot int not null,
  quantity int not null check (quantity > 0)
);

create index if not exists order_items_order_idx on public.order_items(order_id);
