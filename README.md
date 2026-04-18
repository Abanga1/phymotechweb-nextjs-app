# Phymotech Solutions — Amazon-Style Commerce (Next.js + Supabase + Stripe)

A production-ready scaffold for an Amazon / Lazada-style storefront built with:

- **Next.js 14** (App Router, React Server Components, TypeScript)
- **Tailwind CSS** with a custom brand palette and hero gradients
- **Supabase** (Postgres + Auth + Storage) with Row-Level Security
- **Drizzle ORM** for typed queries + SQL migrations you can read
- **Stripe Checkout** with a webhook-driven order state machine
- **Zustand** for a persistent, lightning-fast cart

The app boots in "demo mode" out of the box with built-in sample products, so you can see the UI immediately before wiring up Supabase or Stripe.

---

## Quick start on Windows

> Tested in PowerShell 5.1 / 7+ and Windows Terminal. All scripts are cross-platform — no bash required.

**1. Install Node.js 18.17+ (20 LTS recommended).**
Download the Windows installer from [nodejs.org](https://nodejs.org/) or use winget:

```powershell
winget install OpenJS.NodeJS.LTS
```

Verify:

```powershell
node --version
npm --version
```

**2. Install dependencies.**

```powershell
cd my-ecom-site
npm install
```

**3. Copy the env template.**

```powershell
Copy-Item .env.local.example .env.local
```

Open `.env.local` in VS Code / Notepad and fill in your Supabase + Stripe keys. The app will still boot with placeholder values — checkout + auth just won't function until real keys are set.

**4. Run the dev server.**

```powershell
npm run dev
```

Open <http://localhost:3000>. You should see the storefront with sample products.

---

## Connecting Supabase

1. Create a project at <https://supabase.com>.
2. Copy the URL, anon key, and service role key into `.env.local`.
3. Copy the Postgres connection string into `DATABASE_URL`.
4. Apply migrations by running the SQL files in `supabase/migrations/` (in order) in the Supabase SQL editor, or:

   ```powershell
   npm run db:push
   ```

5. Load sample data: paste `supabase/seed.sql` into the SQL editor and run it.

## Connecting Stripe

1. Grab keys from <https://dashboard.stripe.com/test/apikeys>. Use **test mode** keys.
2. Forward webhooks in one terminal while `npm run dev` runs in another:

   ```powershell
   # install the Stripe CLI once: https://stripe.com/docs/stripe-cli
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

   The CLI prints a `whsec_...` secret — put it in `.env.local` as `STRIPE_WEBHOOK_SECRET`.

3. Trigger a test event:

   ```powershell
   stripe trigger checkout.session.completed
   ```

## Useful scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint + Next.js rules |
| `npm run typecheck` | Strict TypeScript pass (no emit) |
| `npm run db:generate` | Generate a Drizzle migration from schema changes |
| `npm run db:push` | Push schema to Supabase (dev convenience) |
| `npm run db:studio` | Open Drizzle Studio to browse data |
| `npm run clean` | Remove `.next/` and `out/` (uses `rimraf`, works on Windows) |

## Project layout

```
app/                 Next.js App Router (marketing, shop, account, api)
components/          UI primitives, nav, product, cart, checkout
lib/
  supabase/          Browser / server / admin clients
  db/                Drizzle schema, query helpers, client
  stripe/            Stripe SDK init + webhook event handlers
  cart/              Zustand store (persisted to localStorage)
  utils/             cn, formatPrice, slugify, etc.
supabase/
  migrations/        Plain-SQL migrations you can read & audit
  seed.sql           10 sample products
types/               Generated & shared TypeScript types
middleware.ts        Auth + route protection
```

## Deploying

Point Vercel at this repo and set all `.env.local` keys as project env vars. Update `NEXT_PUBLIC_APP_URL` to your production URL. In the Stripe dashboard, add your production webhook endpoint (`https://your-site.com/api/webhooks/stripe`) and copy the new signing secret.

---

MIT licensed. Have fun.
