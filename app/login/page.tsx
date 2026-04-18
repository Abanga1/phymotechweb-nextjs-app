import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const metadata = { title: 'Sign in' };

/**
 * Placeholder sign-in page. Wire up Supabase Auth (server action) here.
 * Uses POST/PRG pattern to avoid credentials in URL params.
 */
export default function LoginPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-card">
        <h1 className="text-2xl font-extrabold text-ink-900">Welcome back</h1>
        <p className="mt-1 text-sm text-ink-500">Sign in to continue shopping.</p>
        <form className="mt-6 space-y-4" method="post" action="/api/auth/login">
          <label className="block">
            <span className="text-sm font-medium text-ink-700">Email</span>
            <Input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ink-700">Password</span>
            <Input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              minLength={8}
              className="mt-1"
            />
          </label>
          <Button type="submit" className="w-full" size="lg">
            Sign in
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-ink-500">
          Don’t have an account?{' '}
          <Link href="#" className="font-semibold text-brand-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
