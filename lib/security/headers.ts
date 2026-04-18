/**
 * Shared HTTP security headers applied via next.config.mjs and middleware.
 *
 * Rationale:
 *  - CSP blocks XSS even if a stray vulnerability slips past React's escaping.
 *  - HSTS forces HTTPS for 2 years (submit to preload list separately).
 *  - Permissions-Policy disables APIs we don't use.
 *  - Referrer-Policy: 'strict-origin-when-cross-origin' leaks the minimum.
 */

const isProd = process.env.NODE_ENV === 'production';

// Stripe requires its JS + frames. Supabase requires its WS + REST endpoints.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  // Scripts: self + Stripe JS. 'unsafe-inline' only in dev for Next's HMR overlay.
  `script-src 'self' https://js.stripe.com ${isProd ? '' : "'unsafe-inline' 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'", // Tailwind injects inline styles at runtime in dev
  "img-src 'self' data: blob: https://images.unsplash.com https://picsum.photos https://*.supabase.co",
  "font-src 'self' data:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.stripe.com",
  "frame-src https://js.stripe.com https://hooks.stripe.com",
  "form-action 'self' https://checkout.stripe.com",
  isProd ? 'upgrade-insecure-requests' : '',
]
  .filter(Boolean)
  .join('; ');

export const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  ...(isProd
    ? [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }]
    : []),
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];
