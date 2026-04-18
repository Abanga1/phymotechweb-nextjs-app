import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes intelligently; later classes win over earlier ones.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format an integer number of cents as a locale-aware currency string.
 *
 * We store all money in cents (integers) to avoid floating-point errors.
 */
export function formatPrice(
  cents: number,
  opts: { currency?: string; locale?: string } = {},
) {
  const { currency = 'USD', locale = 'en-US' } = opts;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(cents / 100);
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Truncate with an ellipsis. */
export function truncate(str: string, max: number) {
  return str.length > max ? `${str.slice(0, max - 1).trimEnd()}…` : str;
}

/** Small helper for star-rating displays. */
export function starBuckets(rating: number): Array<'full' | 'half' | 'empty'> {
  const out: Array<'full' | 'half' | 'empty'> = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) out.push('full');
    else if (rating >= i - 0.5) out.push('half');
    else out.push('empty');
  }
  return out;
}
