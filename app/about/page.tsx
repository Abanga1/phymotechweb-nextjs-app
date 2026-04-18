import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Recycle,
  HeartHandshake,
  Compass,
  Award,
  Globe2,
  HardDrive,
  ArrowRight,
  Users,
  Factory,
  Building2,
  Quote,
} from 'lucide-react';
import { PhymotechMark } from '@/components/brand/Logo';

export const metadata: Metadata = {
  title: 'About Phymotech Solutions',
  description:
    'Phymotech Solutions is an eco-forward technology company pairing thoughtfully curated gear with NIST-grade data destruction. Meet the team, the mission, and the numbers.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />

        <div className="container relative grid gap-12 py-24 md:grid-cols-[1.2fr_1fr] md:items-center md:py-32">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles size={14} className="text-brand-300" />
              Our story
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Technology that works.
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                Earth that breathes.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-200">
              Phymotech Solutions was founded on a simple premise: the best
              tech should leave a lighter footprint than what it replaces. We
              curate gear that lasts, and when it reaches end-of-life we
              destroy the data and recover the materials — responsibly,
              verifiably, on the record.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-ink-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Shop the catalog
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/data-destruction"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Destroy data, responsibly
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-fade-in">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-br from-brand-500/40 to-pink-500/40 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <PhymotechMark className="h-28 w-28 mx-auto" />
              <div className="mt-6 text-center">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-300">
                  Est. 2024
                </div>
                <div className="mt-2 text-2xl font-extrabold">
                  Phymotech<span className="text-brand-400">.</span>
                </div>
                <div className="text-sm text-ink-300">Wilmington, DE · global reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
          <Stat big="1.2M+" label="Drives sanitized to NIST 800-88" />
          <Stat big="100%" label="Assets chain-of-custody tracked" />
          <Stat big="83t" label="e-waste diverted from landfill, 2025" />
          <Stat big="14k+" label="Customers in healthcare, legal, & enterprise" />
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="container py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <Compass size={14} />
              Mission
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
              Make the most responsible choice also the easiest one.
            </h2>
            <p className="mt-5 text-ink-700">
              We believe technology&rsquo;s second life matters as much as its
              first. Every product we sell is selected for durability,
              repairability, and a documented end-of-life path. Every data
              destruction job we run is engineered so the customer walks away
              with an audit-ready artifact — not a vague promise.
            </p>
            <p className="mt-4 text-ink-700">
              It&rsquo;s the same philosophy on both sides of the house:
              <span className="font-semibold text-ink-900">
                {' '}
                nothing disappears, everything is accounted for.
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rotate-2 rounded-3xl bg-gradient-to-br from-brand-200 to-pink-200 blur-lg" />
            <blockquote className="relative rounded-3xl border border-ink-100 bg-white p-10 shadow-card">
              <Quote size={28} className="text-brand-500" />
              <p className="mt-4 text-xl leading-relaxed text-ink-800">
                &ldquo;The bar isn&rsquo;t &lsquo;environmentally conscious&rsquo;
                or &lsquo;securely handled.&rsquo; It&rsquo;s
                <span className="font-extrabold text-ink-900"> both, proven, on paper.</span>
                &rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 text-sm">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-pink-500" />
                <div>
                  <div className="font-semibold text-ink-900">Founder&rsquo;s note</div>
                  <div className="text-ink-500">Phymotech Solutions</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-ink-50/60 py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-card">
              <HeartHandshake size={14} />
              What we stand for
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
              Four values, no asterisks.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<Leaf size={22} />}
              title="Eco-first"
              body="Products are screened for repairability, modularity, and end-of-life pathway. We publish our material recovery rates, not just our intentions."
            />
            <ValueCard
              icon={<ShieldCheck size={22} />}
              title="Security on the record"
              body="Every sanitization job produces a tamper-evident audit trail. If it isn't documented, it didn't happen."
            />
            <ValueCard
              icon={<Recycle size={22} />}
              title="Circular by design"
              body="We operate R2v3-aligned downstream flows. Materials come back into the supply chain instead of leaving it."
            />
            <ValueCard
              icon={<Users size={22} />}
              title="People over process"
              body="Our technicians are vetted, trained quarterly, and empowered to halt any job that deviates from the playbook."
            />
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-ink-100 bg-white p-10 shadow-card">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Factory size={22} />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-ink-900">
              The storefront
            </h3>
            <p className="mt-3 text-ink-700">
              A curated catalog of electronics, audio, fashion, and outdoors
              gear from brands with verified sustainability commitments and
              real repair documentation. Every SKU tells you where it was made,
              what it&rsquo;s made of, and how to keep it alive longer.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Browse the catalog <ArrowRight size={14} />
            </Link>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-ink-950 p-10 text-white shadow-card">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-300">
              <HardDrive size={22} />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold">
              The destruction service
            </h3>
            <p className="mt-3 text-ink-200">
              Electronic data destruction engineered to NIST SP 800-88 Rev. 1
              and aligned to HIPAA. Drives, SSDs, phones, backup tape, entire
              server fleets — sanitized or physically destroyed, with a signed
              Certificate of Destruction for every asset.
            </p>
            <Link
              href="/data-destruction"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              Explore the service <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="bg-white py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <Award size={14} />
              Credentials
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
              Standards we operate to.
            </h2>
            <p className="mt-3 text-ink-600">
              We choose certifications that are independently audited — not
              logos you can buy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Cred name="NIST SP 800-88 R1" />
            <Cred name="HIPAA / HITECH" />
            <Cred name="SOC 2 Type II aligned" />
            <Cred name="ISO 27001 aligned" />
            <Cred name="R2v3 / SERI downstream" />
            <Cred name="NAID AAA criteria" />
            <Cred name="GDPR / UK DPA" />
            <Cred name="GLBA Safeguards Rule" />
          </div>
        </div>
      </section>

      {/* ===== GLOBAL FOOTPRINT ===== */}
      <section className="container py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <Globe2 size={14} />
              Reach
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
              One company. Every inbox that asks for a certificate.
            </h2>
            <p className="mt-4 text-ink-700">
              Headquartered in Wilmington, Delaware, with secure processing
              facilities in the Mid-Atlantic, Pacific Northwest, and Texas.
              We service all fifty U.S. states and accept cross-border
              decommissioning engagements for Canada, the United Kingdom, and
              the European Union.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/data-destruction#request"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-5 text-sm font-semibold text-white shadow-glow hover:from-brand-400 hover:to-brand-500"
              >
                Request a quote <ArrowRight size={14} />
              </Link>
              <Link
                href="/terms"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-ink-200 px-5 text-sm font-semibold text-ink-700 hover:bg-ink-50"
              >
                Read the Terms
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <LocationCard city="Wilmington" role="HQ & legal" />
            <LocationCard city="Richmond" role="Secure processing" />
            <LocationCard city="Austin" role="Mobile shred fleet" />
            <LocationCard city="Portland" role="West-coast intake" />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container relative text-center">
          <Building2 size={28} className="mx-auto text-brand-300" />
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Build with a partner that leaves a paper trail, not a footprint.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Whether you&rsquo;re outfitting a new office or retiring a data
            center, we&rsquo;re built for it. Start wherever you are.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-ink-900 shadow-glow hover:-translate-y-0.5"
            >
              Shop the catalog <ArrowRight size={16} />
            </Link>
            <Link
              href="/data-destruction#request"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              Get a destruction quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============ helpers ============ */

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-extrabold text-ink-900 md:text-5xl">
        <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
          {big}
        </span>
      </div>
      <div className="mt-1 text-sm text-ink-500">{label}</div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="group rounded-3xl border border-ink-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-extrabold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm text-ink-700">{body}</p>
    </div>
  );
}

function Cred({ name }: { name: string }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-ink-50/40 p-5 text-center shadow-card">
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
        {name}
      </div>
    </div>
  );
}

function LocationCard({ city, role }: { city: string; role: string }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
      <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
        {role}
      </div>
      <div className="mt-1 text-xl font-extrabold text-ink-900">{city}</div>
    </div>
  );
}
