import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <div className="text-6xl">🔍</div>
      <h1 className="mt-4 text-3xl font-extrabold text-ink-900">Page not found</h1>
      <p className="mt-2 text-ink-500">The thing you’re looking for might’ve moved.</p>
      <Link href="/" className="mt-6 inline-block">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
