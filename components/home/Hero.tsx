import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, ShieldCheck, Undo2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-hero-gradient opacity-100" />
      <div className="absolute -left-20 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-20 top-0 h-[22rem] w-[22rem] rounded-full bg-pink-500/20 blur-3xl" />

      <div className="container relative grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Earth Month — up to 40% off eco picks
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Smarter gear.
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
              Lighter footprint.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-200">
            Phymotech Solutions curates thoughtful, longer-lasting tech and lifestyle goods — shipped fast, returned effortlessly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-ink-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Shop all products
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/categories/electronics"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              Browse electronics
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-xs">
            <Feature icon={<Truck size={16} />} label="Free shipping $50+" />
            <Feature icon={<ShieldCheck size={16} />} label="Secure checkout" />
            <Feature icon={<Undo2 size={16} />} label="30-day returns" />
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md animate-fade-in">
          <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-br from-brand-500/30 to-pink-500/30 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&h=900&q=80"
              alt="Featured product"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 backdrop-blur sm:block">
            <div className="text-xs text-ink-300">Today’s drop</div>
            <div className="text-sm font-bold">Aurora Headphones — $199</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-ink-100 backdrop-blur">
      <span className="text-brand-300">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
