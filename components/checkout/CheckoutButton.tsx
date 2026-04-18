'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/lib/cart/store';
import { Loader2, Lock } from 'lucide-react';

export function CheckoutButton() {
  const items = useCart((s) => s.items);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Checkout failed');
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Button onClick={onClick} size="lg" className="w-full" disabled={loading || items.length === 0}>
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Lock size={16} />}
        {loading ? 'Redirecting…' : 'Checkout securely'}
      </Button>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
}
