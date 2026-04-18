'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, User, Heart, Sparkles } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { CartButton } from '@/components/cart/CartButton';
import { Logo } from '@/components/brand/Logo';
import { cn } from '@/lib/utils';

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: '/products', label: 'Shop' },
  { href: '/categories/electronics', label: 'Electronics' },
  { href: '/categories/audio', label: 'Audio' },
  { href: '/data-destruction', label: 'Data destruction' },
  { href: '/about', label: 'About' },
];

/** Active when the pathname equals the href, or is a nested route under it. */
function isRouteActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function Header() {
  const pathname = usePathname() ?? '/';

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      {/* announcement bar */}
      <div className="bg-gradient-to-r from-brand-600 via-brand-500 to-pink-500 text-white">
        <div className="container flex h-9 items-center justify-center gap-2 text-xs font-medium">
          <Sparkles size={14} />
          <span>Free shipping on orders over $50 — today only</span>
        </div>
      </div>

      <div className="container flex h-16 items-center gap-4">
        <button className="-ml-2 p-2 md:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>

        <Link href="/" aria-label="Phymotech Solutions — home" className="shrink-0">
          <Logo variant="light" markClassName="h-9 w-9" />
        </Link>

        <nav className="ml-4 hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const active = isRouteActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors',
                  active
                    ? 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                    : 'text-ink-700 hover:bg-ink-50 hover:text-brand-600',
                )}
              >
                {item.label}
                {active && (
                  <span
                    className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-500"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex flex-1 items-center justify-end gap-2 md:ml-8 md:flex-none md:flex-1">
          <SearchBar />
          <Link
            href="/account"
            className="hidden h-10 w-10 items-center justify-center rounded-xl text-ink-700 hover:bg-ink-100 md:inline-flex"
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          <button
            className="hidden h-10 w-10 items-center justify-center rounded-xl text-ink-700 hover:bg-ink-100 md:inline-flex"
            aria-label="Wishlist"
          >
            <Heart size={20} />
          </button>
          <CartButton />
        </div>
      </div>
    </header>
  );
}

// Mobile search affordance reused below (kept for clarity)
export function MobileSearchIcon() {
  return (
    <button
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 hover:bg-ink-100 md:hidden"
      aria-label="Search"
    >
      <Search size={20} />
    </button>
  );
}
