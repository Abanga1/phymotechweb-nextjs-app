/**
 * Minimal in-memory token-bucket rate limiter.
 *
 * This is intentionally process-local — good enough for a single Vercel
 * instance or local dev. For production multi-region deployments swap in
 * Upstash (@upstash/ratelimit) with the same interface.
 */

type Bucket = { tokens: number; lastRefill: number };
const buckets = new Map<string, Bucket>();

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  retryAfterMs: number;
};

export function rateLimit(
  key: string,
  {
    capacity = 20,
    refillPerSec = 0.5, // 1 token every 2 seconds
  }: { capacity?: number; refillPerSec?: number } = {},
): RateLimitResult {
  const now = Date.now();
  let b = buckets.get(key);
  if (!b) {
    b = { tokens: capacity, lastRefill: now };
    buckets.set(key, b);
  }
  // Refill based on elapsed time.
  const elapsed = (now - b.lastRefill) / 1000;
  b.tokens = Math.min(capacity, b.tokens + elapsed * refillPerSec);
  b.lastRefill = now;

  if (b.tokens < 1) {
    const retryAfterMs = Math.ceil(((1 - b.tokens) / refillPerSec) * 1000);
    return { ok: false, remaining: 0, retryAfterMs };
  }
  b.tokens -= 1;
  return { ok: true, remaining: Math.floor(b.tokens), retryAfterMs: 0 };
}

/** Periodically prune cold entries to cap memory. Called opportunistically. */
export function pruneRateLimiter(maxAgeMs = 10 * 60 * 1000) {
  const cutoff = Date.now() - maxAgeMs;
  for (const [k, v] of buckets) {
    if (v.lastRefill < cutoff) buckets.delete(k);
  }
}

/**
 * Derive a stable key from a Next.js Request. Prefers the forwarded client IP
 * but falls back to a best-effort identifier. Never trust this for anything
 * security-critical other than rate limiting.
 */
export function clientKey(req: Request, prefix = 'rl'): string {
  const h = req.headers;
  const ip =
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    h.get('x-real-ip') ||
    h.get('cf-connecting-ip') ||
    'unknown';
  return `${prefix}:${ip}`;
}
