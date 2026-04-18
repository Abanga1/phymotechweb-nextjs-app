import { Star } from 'lucide-react';
import { cn, starBuckets } from '@/lib/utils';

export function Stars({
  rating,
  size = 16,
  className,
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const buckets = starBuckets(rating);
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5`}>
      {buckets.map((b, i) => (
        <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
          <Star
            size={size}
            className="absolute inset-0 text-ink-200"
            fill="currentColor"
            strokeWidth={0}
          />
          {b !== 'empty' && (
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: b === 'full' ? size : size / 2 }}
            >
              <Star size={size} className="text-amber-400" fill="currentColor" strokeWidth={0} />
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
