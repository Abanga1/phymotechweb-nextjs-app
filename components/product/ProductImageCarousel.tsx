'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductImageCarouselProps = {
  images: string[];
  alt: string;
  href?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  aspect?: 'square' | 'portrait' | 'video';
  alwaysShowControls?: boolean;
  hideDots?: boolean;
  hideCounter?: boolean;
  value?: number;
  onValueChange?: (index: number) => void;
};

const ASPECT_CLASS: Record<NonNullable<ProductImageCarouselProps['aspect']>, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  video: 'aspect-video',
};

export function ProductImageCarousel({
  images,
  alt,
  href,
  sizes = '(max-width: 768px) 50vw, 25vw',
  priority,
  className,
  aspect = 'square',
  alwaysShowControls = false,
  hideDots = false,
  hideCounter = false,
  value,
  onValueChange,
}: ProductImageCarouselProps) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;
  const multiple = count > 1;
  const isControlled = typeof value === 'number';
  const safeCount = count || 1;
  const index =
    count === 0
      ? 0
      : isControlled
        ? ((value % safeCount) + safeCount) % safeCount
        : uncontrolledIndex;

  const setIndex = useCallback(
    (next: number) => {
      if (count === 0) return;
      const normalized = ((next % count) + count) % count;
      if (!isControlled) setUncontrolledIndex(normalized);
      onValueChange?.(normalized);
    },
    [count, isControlled, onValueChange],
  );

  const go = useCallback((delta: number) => setIndex(index + delta), [index, setIndex]);
  const goTo = useCallback((i: number) => setIndex(i), [setIndex]);

  return (
    <div
      className={cn(
        'group/carousel relative overflow-hidden bg-ink-100',
        ASPECT_CLASS[aspect],
        className,
      )}
      onTouchStart={(e) => {
        if (!multiple) return;
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (!multiple || touchStartX.current === null) return;
        const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
        const delta = endX - touchStartX.current;
        if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
        touchStartX.current = null;
      }}
      tabIndex={multiple ? 0 : -1}
      onKeyDown={(e) => {
        if (!multiple) return;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          go(-1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          go(1);
        }
      }}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
      >
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="relative h-full w-full shrink-0">
            <Image
              src={src}
              alt={i === 0 ? alt : ''}
              fill
              sizes={sizes}
              className="object-cover"
              priority={!!priority && i === 0}
            />
          </div>
        ))}
      </div>

      {href && (
        <Link
          href={href}
          aria-label={alt}
          className="absolute inset-0 z-[1] rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        />
      )}

      {multiple && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className={cn(
              'absolute left-2 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink-900 shadow-lg ring-1 ring-ink-900/5 backdrop-blur transition hover:bg-white hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
              alwaysShowControls
                ? 'opacity-100'
                : 'opacity-0 group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100',
            )}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className={cn(
              'absolute right-2 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink-900 shadow-lg ring-1 ring-ink-900/5 backdrop-blur transition hover:bg-white hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
              alwaysShowControls
                ? 'opacity-100'
                : 'opacity-0 group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100',
            )}
          >
            <ChevronRight size={18} />
          </button>

          {!hideDots && (
            <div className="absolute bottom-2 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-white/80 px-2 py-1 shadow ring-1 ring-ink-900/5 backdrop-blur">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                    i === index ? 'w-5 bg-ink-900' : 'w-1.5 bg-ink-400 hover:bg-ink-600',
                  )}
                />
              ))}
            </div>
          )}

          {!hideCounter && (
            <div className="pointer-events-none absolute bottom-2 right-2 z-[2] rounded-full bg-ink-900/70 px-2 py-0.5 text-[11px] font-medium tabular-nums text-white backdrop-blur">
              {index + 1}/{count}
            </div>
          )}
        </>
      )}
    </div>
  );
}
