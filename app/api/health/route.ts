import { NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * Liveness probe. Intentionally minimal: no DB touches, no secrets exposed.
 */
export function GET() {
  return NextResponse.json(
    { ok: true, ts: new Date().toISOString() },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
