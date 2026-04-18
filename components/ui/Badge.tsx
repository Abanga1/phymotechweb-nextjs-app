import * as React from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  className,
  tone = 'default',
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'default' | 'sale' | 'new' | 'low-stock';
}) {
  const tones: Record<string, string> = {
    default: 'bg-ink-100 text-ink-700',
    sale: 'bg-brand-500 text-white',
    new: 'bg-emerald-500 text-white',
    'low-stock': 'bg-amber-100 text-amber-800',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
