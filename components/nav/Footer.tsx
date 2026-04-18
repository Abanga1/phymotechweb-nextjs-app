import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 bg-ink-950 text-ink-200">
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Link href="/" aria-label="Phymotech Solutions — home">
            <Logo variant="dark" showTagline markClassName="h-10 w-10" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-ink-300">
            Thoughtfully engineered goods and eco-forward tech — shipped fast,
            returned effortlessly.
          </p>
        </div>
        <FooterCol title="Shop">
          <Link href="/products">All products</Link>
          <Link href="/categories/electronics">Electronics</Link>
          <Link href="/categories/audio">Audio</Link>
          <Link href="/categories/fashion">Fashion</Link>
          <Link href="/categories/outdoors">Outdoors</Link>
        </FooterCol>
        <FooterCol title="Services">
          <Link href="/data-destruction">Data destruction</Link>
          <Link href="/data-destruction#methods">NIST 800-88 methods</Link>
          <Link href="/data-destruction#request">Request a quote</Link>
          <Link href="#">Enterprise fleet decommission</Link>
        </FooterCol>
        <FooterCol title="Company">
          <Link href="/about">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/press">Press</Link>
          <Link href="/sustainability">Sustainability</Link>
        </FooterCol>
      </div>
      <div className="border-t border-ink-900">
        <div className="container flex flex-col gap-2 py-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} Phymotech Solutions. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">{title}</h4>
      <div className="flex flex-col gap-2 text-sm text-ink-200">{children}</div>
    </div>
  );
}
