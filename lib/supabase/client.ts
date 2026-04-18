import { createBrowserClient } from '@supabase/ssr';

/**
 * Browser-side Supabase client. Safe to import in client components.
 *
 * If env vars aren't set we still construct a client with placeholders so
 * the app boots in "demo mode" without throwing. Any call will fail gracefully.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'http://localhost:54321',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'public-anon-key-placeholder',
  );
}
