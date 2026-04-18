import { useId } from 'react';
import { cn } from '@/lib/utils';

/**
 * The Phymotech mark: hexagon circuit frame + leaf with circuit-vein nodes.
 * Uses the site's brand palette (brand-400..600 + ink neutrals).
 *
 * Unique gradient IDs per instance (via React's useId) avoid SVG ID collisions
 * and hydration mismatches when multiple logos render on the same page.
 */
export function PhymotechMark({ className }: { className?: string }) {
  const rawId = useId();
  // useId returns values with ":" which are invalid in CSS selectors; sanitize.
  const uid = rawId.replace(/:/g, '');
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id={`leaf-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="55%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id={`hex-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <g transform="translate(16,13)">
        <path
          d="M84 6 L156 48 L156 132 L84 174 L12 132 L12 48 Z"
          fill="none"
          stroke={`url(#hex-${uid})`}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="84" cy="6" r="4.5" fill="#ea580c" />
        <circle cx="156" cy="48" r="4.5" fill="#f97316" />
        <circle cx="156" cy="132" r="4.5" fill="#f97316" />
        <circle cx="84" cy="174" r="4.5" fill="#f97316" />
        <circle cx="12" cy="132" r="4.5" fill="#ea580c" />
        <circle cx="12" cy="48" r="4.5" fill="#ea580c" />
        <path
          d="M84 32 C120 46, 140 78, 138 108 C136 138, 114 158, 84 158 C54 158, 32 138, 30 108 C28 78, 48 46, 84 32 Z"
          fill={`url(#leaf-${uid})`}
        />
        <path d="M84 34 L84 156" stroke="#fff7ed" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M84 62 L108 74" stroke="#fff7ed" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M84 62 L60 74" stroke="#fff7ed" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M84 88 L116 100" stroke="#fff7ed" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M84 88 L52 100" stroke="#fff7ed" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M84 114 L112 128" stroke="#fff7ed" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M84 114 L56 128" stroke="#fff7ed" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="108" cy="74" r="2.6" fill="#fff7ed" />
        <circle cx="60" cy="74" r="2.6" fill="#fff7ed" />
        <circle cx="116" cy="100" r="2.6" fill="#fff7ed" />
        <circle cx="52" cy="100" r="2.6" fill="#fff7ed" />
        <circle cx="112" cy="128" r="2.6" fill="#fff7ed" />
        <circle cx="56" cy="128" r="2.6" fill="#fff7ed" />
        <circle cx="84" cy="34" r="3.4" fill="#fff7ed" />
        <circle cx="84" cy="156" r="3.4" fill="#fff7ed" />
      </g>
    </svg>
  );
}

type LogoProps = {
  /** 'light' = dark text on light bg; 'dark' = light text on dark bg. */
  variant?: 'light' | 'dark';
  /** Render the "SOLUTIONS" tagline under the wordmark. */
  showTagline?: boolean;
  /** Extra classes on the outer wrapper. */
  className?: string;
  /** Override mark size (Tailwind height/width). Defaults to h-9 w-9. */
  markClassName?: string;
};

/**
 * Full Phymotech lockup: mark + "Phymotech" wordmark (+ optional "Solutions" tagline).
 *
 * Pass variant="dark" on dark backgrounds so the wordmark flips to white.
 */
export function Logo({
  variant = 'light',
  showTagline = false,
  className,
  markClassName = 'h-9 w-9',
}: LogoProps) {
  const name = variant === 'dark' ? 'text-white' : 'text-ink-900';
  const tag = variant === 'dark' ? 'text-ink-300' : 'text-ink-500';
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <PhymotechMark className={markClassName} />
      <div className="flex flex-col leading-none">
        <span className={cn('text-xl font-extrabold tracking-tight', name)}>
          Phymo<span className="text-brand-500">tech</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              'mt-1 text-[10px] font-semibold uppercase tracking-[0.22em]',
              tag,
            )}
          >
            Solutions
          </span>
        )}
      </div>
    </div>
  );
}
