-- 0003_rls_policies.sql
-- Row-Level Security policies. Defense in depth: even if a server route is
-- compromised, Postgres refuses to return other users' rows to an anon key.

-- Enable RLS on every public table.
alter table public.profiles       enable row level security;
alter table public.addresses      enable row level security;
alter table public.categories     enable row level security;
alter table public.products       enable row level security;
alter table public.product_images enable row level security;
alter table public.carts          enable row level security;
alter table public.cart_items     enable row level security;
alter table public.orders         enable row level security;
alter table public.order_items    enable row level security;

-- ---------- PROFILES ----------
drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles for select
using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id) with check (auth.uid() = id);

-- ---------- ADDRESSES ----------
drop policy if exists "Users can CRUD own addresses" on public.addresses;
create policy "Users can CRUD own addresses"
on public.addresses for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- ---------- CATEGORIES / PRODUCTS (public read) ----------
drop policy if exists "Anyone can read categories" on public.categories;
create policy "Anyone can read categories"
on public.categories for select using (true);

drop policy if exists "Anyone can read active products" on public.products;
create policy "Anyone can read active products"
on public.products for select using (is_active = true);

drop policy if exists "Anyone can read product images" on public.product_images;
create policy "Anyone can read product images"
on public.product_images for select using (true);

-- Product writes go through the service role (bypasses RLS) from admin tools,
-- so no INSERT/UPDATE/DELETE policy is needed for the public role.

-- ---------- CARTS ----------
drop policy if exists "Users can manage own cart" on public.carts;
create policy "Users can manage own cart"
on public.carts for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can manage own cart items" on public.cart_items;
create policy "Users can manage own cart items"
on public.cart_items for all
using (
  exists (
    select 1 from public.carts c
    where c.id = cart_items.cart_id and c.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.carts c
    where c.id = cart_items.cart_id and c.user_id = auth.uid()
  )
);

-- ---------- ORDERS ----------
drop policy if exists "Users can read own orders" on public.orders;
create policy "Users can read own orders"
on public.orders for select
using (auth.uid() = user_id);

-- Order inserts/updates happen through the service-role client only
-- (checkout route + Stripe webhook). We intentionally do NOT grant write
-- access to authenticated users here.

drop policy if exists "Users can read own order items" on public.order_items;
create policy "Users can read own order items"
on public.order_items for select
using (
  exists (
    select 1 from public.orders o
    where o.id = order_items.order_id and o.user_id = auth.uid()
  )
);

-- ---------- Revoke loose grants ----------
-- Supabase issues SELECT on new tables to the anon and authenticated roles
-- by default. Lock down the tables that must never be touched by anon.
revoke all on public.orders       from anon;
revoke all on public.order_items  from anon;
revoke all on public.addresses    from anon;
revoke all on public.carts        from anon;
revoke all on public.cart_items   from anon;

-- Grant least-privilege SELECT on catalog tables to anon (public browsing).
grant select on public.products       to anon, authenticated;
grant select on public.product_images to anon, authenticated;
grant select on public.categories     to anon, authenticated;
