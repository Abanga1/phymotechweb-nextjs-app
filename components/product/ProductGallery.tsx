'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ProductImageCarousel } from '@/components/product/ProductImageCarousel';
import { cn } from '@/lib/utils';

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <ProductImageCarousel
        images={images}
        alt={alt}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        className="rounded-3xl"
        alwaysShowControls
        hideDots
        value={index}
        onValueChange={setIndex}
      />

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((src, i) => {
            const active = i === index;
            return (
              <button
                key={`${src}-${i}`}
                type="button"
                aria-label={`View image ${i + 1}`}
                aria-current={active ? 'true' : undefined}
                onClick={() => setIndex(i)}
                className={cn(
                  'relative aspect-square overflow-hidden rounded-xl border-2 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                  active
                    ? 'border-brand-500 ring-2 ring-brand-500/20'
                    : 'border-ink-100 hover:border-ink-300',
                )}
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
