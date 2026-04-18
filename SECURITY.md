# Security Model

This document is the cheat-sheet for how the Phymotech Solutions storefront defends itself.
Treat it like production ops documentation — skim it before shipping changes.

## Threat model, at a glance

| Threat | Control |
|---|---|
| Price tampering on checkout | Server re-resolves every `productId` against the catalog; client-submitted prices are discarded |
| Stripe webhook forgery | `stripe.webhooks.constructEvent` verifies the `Stripe-Signature` against `STRIPE_WEBHOOK_SECRET` using the raw body |
| XSS | React auto-escaping + strict Content-Security-Policy (no `unsafe-inline` scripts in prod) |
| Clickjacking | `X-Frame-Options: DENY` + `frame-ancestors 'none'` in CSP |
| CSRF on state-changing routes | Same-site cookies (Supabase default: `Lax`) + POST-only routes with JSON body; no classic form auth |
| SQL injection | Drizzle ORM parameterization + Postgres RLS; no raw SQL with string interpolation |
| Authz bypass / data leaks | Postgres Row-Level Security policies; `anon` role has read-only on catalog, zero access to `orders` / `addresses` / `carts` |
| DoS / brute force | Per-IP token-bucket rate limiting on `POST /api/checkout` (10/burst, 1 every 5s) and `GET /api/products` (60/burst) |
| Open redirect | Stripe success/cancel URLs are computed from `NEXT_PUBLIC_APP_URL`, never from user input |
| Secret leakage | Server-only env vars never prefixed `NEXT_PUBLIC_`; `requireServerEnv()` throws loud at boot if misconfigured |
| MITM | HSTS preload in production; `upgrade-insecure-requests` in CSP |
| Supply-chain attacks | Pinned versions in `package.json`; `npm audit` in CI recommended |
| PII in logs | Error handlers log via `console.error` without dumping request bodies; Stripe events are the source of truth for payment PII |

## Security headers sent

Defined in `next.config.mjs` / `lib/security/headers.ts`:

- `Content-Security-Policy` (Stripe + Supabase origins allow-listed)
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (prod only)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
- `X-Powered-By` header **removed** (`poweredByHeader: false`)

## Payment integrity (the important one)

1. Client POSTs `{ items: [{ productId, quantity }] }` — never prices.
2. `/api/checkout` validates the payload with Zod.
3. It re-resolves every `productId` against the server-side catalog. Prices and titles from the client are discarded.
4. A `pending` order is inserted with `stripe_checkout_session_id`.
5. Stripe Checkout handles the actual card entry — your server never touches PAN.
6. `POST /api/webhooks/stripe` verifies the signature, then flips the order to `paid`. Only this path can mark an order paid.
7. The `/checkout/success` page is cosmetic; if the webhook never fires, the order stays `pending`.

## Authentication

- Supabase Auth: email/password plus OAuth. Sessions are HttpOnly cookies, `SameSite=Lax`, `Secure` in prod.
- Middleware (`middleware.ts`) refreshes the session on every request and blocks `/account` / `/orders` for anonymous users.
- Password min length enforced in `app/login/page.tsx` and re-enforced server-side by Supabase.

## Row-Level Security

See `supabase/migrations/0003_rls_policies.sql`. Every public table has RLS enabled. Highlights:

- `products`, `product_images`, `categories`: world-readable (only active products).
- `orders`, `order_items`, `addresses`, `carts`, `cart_items`: only visible to their owner (`auth.uid() = user_id`).
- Writes to `orders` are forbidden for end users and happen only via the service-role client used by the webhook and checkout route.
- Explicit `revoke all ... from anon` on sensitive tables as defense in depth.

## Input validation

Every API route validates incoming data with Zod schemas in `lib/security/schemas.ts`. Invalid input returns `400` with a generic message — we never echo user input back raw.

## Rate limiting

`lib/security/rate-limit.ts` is a simple in-process token bucket. For multi-region production deployments, swap in Upstash Ratelimit:

```ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
const rl = new Ratelimit({ redis: Redis.fromEnv(), limiter: Ratelimit.slidingWindow(10, '10 s') });
```

## Dependencies

Pinned in `package.json`. Run in CI:

```powershell
npm audit --omit=dev
npm outdated
```

Consider enabling GitHub Dependabot and Snyk for automated alerts.

## What to check before every deploy

- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm audit` shows no high/critical issues
- [ ] `.env.local` is not committed (`.gitignore` blocks it, but verify)
- [ ] Stripe webhook endpoint is configured in the Stripe Dashboard and `STRIPE_WEBHOOK_SECRET` matches
- [ ] Supabase project has RLS enabled on every public table (`select tablename, rowsecurity from pg_tables where schemaname = 'public'`)
- [ ] `NEXT_PUBLIC_APP_URL` is the real production URL
- [ ] DNS has HSTS preload + CAA records

## Reporting vulnerabilities

Email security@your-domain with reproduction steps. We aim to triage within 48 hours. Please do not open public GitHub issues for security reports.
