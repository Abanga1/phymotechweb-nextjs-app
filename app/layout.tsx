import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/nav/Header';
import { Footer } from '@/components/nav/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Phymotech Solutions — Smarter tech, lighter footprint',
    template: '%s | Phymotech Solutions',
  },
  description:
    'Phymotech Solutions curates smarter electronics, audio, and lifestyle goods designed to work harder and tread lighter. Free shipping on orders $50+.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  applicationName: 'Phymotech Solutions',
  authors: [{ name: 'Phymotech Solutions' }],
  keywords: [
    'Phymotech',
    'Phymotech Solutions',
    'eco tech',
    'sustainable electronics',
    'online store',
  ],
  openGraph: {
    title: 'Phymotech Solutions — Smarter tech, lighter footprint',
    description: 'Smarter gear. Greener living. Shop the Phymotech catalog.',
    siteName: 'Phymotech Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phymotech Solutions',
    description: 'Smarter gear. Greener living.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
