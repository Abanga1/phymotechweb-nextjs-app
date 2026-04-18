'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export function QtyStepper({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value?: number;
  onChange?: (v: number) => void;
  min?: number;
  max?: number;
}) {
  const [internal, setInternal] = useState(value ?? min);
  const v = value ?? internal;
  const set = (n: number) => {
    const clamped = Math.min(max, Math.max(min, n));
    if (onChange) onChange(clamped);
    else setInternal(clamped);
  };
  return (
    <div className="inline-flex h-11 items-center rounded-xl border border-ink-200">
      <button
        type="button"
        onClick={() => set(v - 1)}
        aria-label="Decrease"
        className="inline-flex h-full w-10 items-center justify-center text-ink-600 hover:bg-ink-50"
      >
        <Minus size={14} />
      </button>
      <span className="min-w-10 text-center text-sm font-semibold">{v}</span>
      <button
        type="button"
        onClick={() => set(v + 1)}
        aria-label="Increase"
        className="inline-flex h-full w-10 items-center justify-center text-ink-600 hover:bg-ink-50"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
