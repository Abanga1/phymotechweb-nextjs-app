import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Leaf,
  Recycle,
  Factory,
  Zap,
  Droplets,
  Wind,
  PackageCheck,
  Wrench,
  Hammer,
  ScrollText,
  CheckCircle2,
  BadgeCheck,
  Sparkles,
  Download,
  Target,
  LineChart,
  Globe2,
  TreePine,
} from 'lucide-react';
import { PhymotechMark } from '@/components/brand/Logo';

export const metadata: Metadata = {
  title: 'Sustainability — Our 2030 circular-economy roadmap',
  description:
    'Phymotech Solutions\' audited environmental impact: 83 tons of e-waste diverted, 38% reduction in Scope 1+2 emissions, and a full plan to reach net-zero operations by 2030.',
};

const headlineMetrics = [
  { label: 'E-waste diverted from landfill (2025)', value: '83', unit: 'tons' },
  { label: 'Devices sanitized & refurbished', value: '1.2M+', unit: 'units' },
  { label: 'Scope 1+2 emissions vs. 2022 baseline', value: '-38%', unit: '' },
  { label: 'Product packaging that is plastic-free', value: '94%', unit: '' },
];

const pillars = [
  {
    icon: Recycle,
    title: 'Circular by design',
    body:
      'Every product we sell is scored on repairability, parts availability, and end-of-life pathway before it ever lists on the storefront. We publish the scorecards.',
    metrics: ['Min. repairability score: 7.5/10', '5-year parts commitment on all house brands', '100% of packaging recyclable or compostable'],
  },
  {
    icon: Factory,
    title: 'Supplier accountability',
    body:
      'Tier-1 suppliers submit audited carbon, water, and labor data annually. Tier-2 data is collected for 82% of spend and is our top roadmap target.',
    metrics: ['100% Tier-1 audit coverage', '82% Tier-2 carbon disclosure', 'SMETA 4-Pillar audits for all manufacturing partners'],
  },
  {
    icon: Wrench,
    title: 'Repair before replace',
    body:
      'Our customer experience team is incentivized on repair rates, not replacement rates. Free diagnostics, flat-rate repairs, and lifetime access to service manuals.',
    metrics: ['62% of failed units repaired vs. replaced', 'Avg. repair turnaround: 6 days', 'Free shipping both ways on warranty work'],
  },
  {
    icon: Hammer,
    title: 'Responsible destruction',
    body:
      'When a device can\'t be saved, we destroy it to NIST 800-88 standards at R2v3-certified facilities. Every gram of material is tracked to its downstream fate.',
    metrics: ['R2v3 & NAID AAA certified', '99.7% material recovery rate', 'Zero export to non-OECD countries'],
  },
];

const impactByNumbers = [
  {
    icon: Zap,
    title: 'Energy',
    body: '100% renewable electricity at all owned facilities since Q3 2024 (on-site solar + matched RECs from regional wind).',
    metric: '100%',
    metricLabel: 'renewable electricity',
  },
  {
    icon: Droplets,
    title: 'Water',
    body: 'Closed-loop cooling in our sanitization facilities recirculates 98% of process water.',
    metric: '-61%',
    metricLabel: 'water vs. industry avg.',
  },
  {
    icon: Wind,
    title: 'Emissions',
    body: 'Scope 1+2 down 38% since 2022. Scope 3 (supplier + logistics) is our focus for 2026.',
    metric: '-38%',
    metricLabel: 'Scope 1+2 emissions',
  },
  {
    icon: PackageCheck,
    title: 'Packaging',
    body: 'Molded pulp + FSC cardboard across the catalog. Zero virgin plastic on house brands.',
    metric: '94%',
    metricLabel: 'plastic-free shipments',
  },
  {
    icon: TreePine,
    title: 'Forests',
    body: 'All paper and cardboard is FSC-certified. We plant one tree per order with One Tree Planted.',
    metric: '42k',
    metricLabel: 'trees planted in 2025',
  },
  {
    icon: Globe2,
    title: 'Community',
    body: '1% of revenue to climate-focused nonprofits (Climate Neutral-certified via 1% for the Planet).',
    metric: '$1.2M',
    metricLabel: 'donated in 2025',
  },
];

const roadmap = [
  {
    year: '2024',
    status: 'complete',
    title: '100% renewable electricity',
    body: 'Owned facilities on-site solar + matched RECs for regional wind.',
  },
  {
    year: '2025',
    status: 'complete',
    title: 'Tier-1 supplier carbon disclosure',
    body: 'All Tier-1 partners submit audited Scope 1+2 data annually.',
  },
  {
    year: '2026',
    status: 'in-progress',
    title: 'Full Tier-2 disclosure',
    body: 'Extending our audit program to cover 100% of Tier-2 component suppliers.',
  },
  {
    year: '2027',
    status: 'in-progress',
    title: 'Zero-landfill operations',
    body: 'Every kg of material entering our facilities tracked to recycling or reuse fate.',
  },
  {
    year: '2028',
    status: 'planned',
    title: 'Net-zero Scope 1+2',
    body: 'Eliminate (not just offset) remaining combustion and fugitive emissions.',
  },
  {
    year: '2030',
    status: 'planned',
    title: 'Net-zero Scope 3 (logistics)',
    body: 'Fully electrified or SAF-powered last-mile and LTL freight across North America.',
  },
];

const certifications = [
  { name: 'B Corp Certified', detail: 'Score: 118.3 (as of 2025 recertification)' },
  { name: 'Climate Neutral Certified', detail: 'Scope 1+2+3 measured, reduced, and offset annually' },
  { name: '1% for the Planet', detail: 'Member since 2020' },
  { name: 'R2v3 Responsible Recycling', detail: 'All sanitization and recovery facilities' },
  { name: 'FSC-certified packaging', detail: 'Chain of custody audited by SCS Global' },
  { name: 'SBTi-aligned targets', detail: 'Science Based Targets validated in 2024' },
];

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  complete: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Complete' },
  'in-progress': { bg: 'bg-brand-100', text: 'text-brand-700', label: 'In progress' },
  planned: { bg: 'bg-ink-200', text: 'text-ink-700', label: 'Planned' },
};

export default function SustainabilityPage() {
  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-ink-950 to-ink-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(700px 400px at 10% 10%, rgba(16,185,129,0.35), transparent), radial-gradient(700px 400px at 90% 80%, rgba(251,146,60,0.25), transparent)',
          }}
          aria-hidden
        />
        <div className="container relative grid gap-12 py-24 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
              <Leaf size={14} /> Sustainability
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Less stuff.{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-brand-300 to-brand-400 bg-clip-text text-transparent">
                Better stuff. Longer.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-100">
              We don&rsquo;t sell you sustainability as a vibe. We measure
              it, audit it, and publish it. Here&rsquo;s where we are, and
              the specific things we&rsquo;re doing next to reach net-zero
              operations by 2030.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#roadmap"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-6 font-semibold text-white shadow-glow hover:from-emerald-400 hover:to-emerald-500"
              >
                See the 2030 roadmap <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10"
              >
                <Download size={16} /> 2025 Impact Report
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-brand-500/20 blur-3xl" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
              <div className="flex items-center gap-4">
                <PhymotechMark className="h-14 w-14" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-300">Headline</div>
                  <div className="text-lg font-bold">2025 at a glance</div>
                </div>
              </div>
              <div className="space-y-4">
                {headlineMetrics.slice(0, 3).map((m) => (
                  <div key={m.label} className="flex items-baseline justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-ink-200">{m.label}</span>
                    <span className="bg-gradient-to-r from-emerald-300 to-brand-300 bg-clip-text text-2xl font-extrabold text-transparent">
                      {m.value}
                      {m.unit && <span className="ml-1 text-base">{m.unit}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HEADLINE METRICS ===== */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {headlineMetrics.map((m) => (
            <div key={m.label}>
              <div className="bg-gradient-to-r from-emerald-500 to-brand-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                {m.value}
                {m.unit && <span className="ml-1 text-xl">{m.unit}</span>}
              </div>
              <div className="mt-2 text-sm text-ink-600">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOUR PILLARS ===== */}
      <section className="container py-24">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Our approach
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
            Four pillars. No greenwashing.
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            A sustainable electronics company has to work on all four at
            once. Anyone claiming otherwise is selling you a logo, not a
            system.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-ink-100 bg-white p-8 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <p.icon size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Pillar {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-ink-900">{p.title}</h3>
              <p className="mt-3 text-ink-700">{p.body}</p>
              <ul className="mt-5 space-y-2">
                {p.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-ink-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== IMPACT BY THE NUMBERS ===== */}
      <section className="border-y border-ink-100 bg-ink-50 py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Impact by the numbers
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
              Audited figures, updated quarterly.
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              All figures below are third-party verified by SCS Global
              Services for our 2025 calendar year. Methodology and
              assumptions are published in the full Impact Report.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {impactByNumbers.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <i.icon size={20} />
                </div>
                <div className="mt-5 bg-gradient-to-r from-emerald-500 to-brand-500 bg-clip-text text-3xl font-extrabold text-transparent">
                  {i.metric}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  {i.metricLabel}
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{i.title}</h3>
                <p className="mt-1 text-sm text-ink-700">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section id="roadmap" className="container py-24">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            2030 roadmap
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
            The path to net zero.
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Our targets are science-based (SBTi validated) and publicly
            tracked. We report against them in our annual Impact Report and
            a lightweight quarterly update.
          </p>
        </div>
        <div className="mt-14 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-300 via-brand-300 to-ink-200 md:left-1/2" aria-hidden />
          <div className="space-y-10">
            {roadmap.map((r, i) => {
              const status = statusStyles[r.status];
              const isLeft = i % 2 === 0;
              return (
                <div key={r.title} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <div className={`${isLeft ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'} pl-12 md:pl-0`}>
                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${status.bg} ${status.text}`}>
                      <Target size={12} /> {status.label}
                    </div>
                    <div className="mt-2 bg-gradient-to-r from-emerald-600 to-brand-600 bg-clip-text text-2xl font-extrabold text-transparent">
                      {r.year}
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-ink-900">{r.title}</h3>
                    <p className="mt-2 text-sm text-ink-700">{r.body}</p>
                  </div>
                  <span
                    className="absolute left-4 top-2 inline-flex h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-white md:left-1/2"
                    style={{
                      background:
                        r.status === 'complete'
                          ? '#10b981'
                          : r.status === 'in-progress'
                            ? '#f97316'
                            : '#cbd5e1',
                    }}
                    aria-hidden
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="border-y border-ink-100 bg-ink-950 py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Receipts
            </span>
            <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
              Third-party certified.
            </h2>
            <p className="mt-4 text-lg text-ink-200">
              We believe environmental claims deserve independent
              verification. These are the programs that audit us on a
              regular cadence.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <div className="font-bold">{c.name}</div>
                  <div className="mt-1 text-sm text-ink-300">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRANSPARENCY / CTA ===== */}
      <section className="container py-24">
        <div className="grid gap-10 rounded-3xl border border-ink-100 bg-gradient-to-br from-emerald-50 via-white to-brand-50 p-10 shadow-card md:grid-cols-[1.5fr_1fr] md:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 shadow-sm">
              <Sparkles size={14} /> Transparency
            </div>
            <h2 className="mt-4 text-4xl font-extrabold text-ink-900 md:text-5xl">
              Read the full Impact Report.
            </h2>
            <p className="mt-4 text-ink-700">
              62 pages of data, methodology, assumptions, and the stuff we
              got wrong. It&rsquo;s the honest version. We&rsquo;d rather
              publish an uncomfortable number than a marketing one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-6 font-semibold text-white shadow-glow hover:from-emerald-400 hover:to-emerald-500"
              >
                <Download size={16} /> 2025 Impact Report (PDF)
              </a>
              <Link
                href="/data-destruction"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-ink-200 bg-white px-6 font-semibold text-ink-900 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                Data destruction services
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <LineChart size={18} />
            </div>
            <h3 className="mt-4 font-bold text-ink-900">Quarterly sustainability dashboard</h3>
            <p className="mt-2 text-sm text-ink-700">
              Emissions, waste, repair rate, and supplier disclosure &mdash;
              updated on the 15th of every quarter.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View dashboard <ArrowRight size={14} />
            </a>
            <div className="mt-6 border-t border-ink-100 pt-4 text-xs text-ink-500">
              <span className="inline-flex items-center gap-1">
                <ScrollText size={12} /> Methodology: GHG Protocol, ISO 14064-3
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
