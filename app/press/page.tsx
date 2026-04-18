import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Download,
  Newspaper,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Quote,
  Award,
  Sparkles,
  ImageIcon,
  FileText,
  Palette,
  Mic,
  Building2,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { PhymotechMark } from '@/components/brand/Logo';

export const metadata: Metadata = {
  title: 'Press & Media — Newsroom and brand assets',
  description:
    'Phymotech Solutions press releases, media coverage, brand assets, and press contact. Everything journalists, analysts, and partners need.',
};

const factSheet = [
  { label: 'Founded', value: '2019' },
  { label: 'Headquarters', value: 'Wilmington, DE' },
  { label: 'Employees', value: '240+' },
  { label: 'Customers served', value: '14,000+' },
  { label: 'Devices sanitized to NIST 800-88', value: '1.2M+' },
  { label: 'E-waste diverted from landfill', value: '83 tons' },
  { label: 'Certifications', value: 'R2v3, NAID AAA, SOC 2, ISO 27001' },
  { label: 'Leadership', value: 'Isaac Abanga, Founder & CEO' },
];

const releases = [
  {
    date: '2026-04-02',
    tag: 'Product',
    title: 'Phymotech launches the Aurora Wireless Headphones with repairable battery modules',
    body:
      'The first consumer-grade ANC headphones to ship with a user-replaceable battery, 5-year repair parts commitment, and a full bill-of-materials disclosure.',
  },
  {
    date: '2026-03-11',
    tag: 'Company',
    title: 'Phymotech opens West Coast sanitization facility in Portland, OR',
    body:
      'The 24,000-square-foot facility adds 6,500 drives/day of NIST 800-88 Purge capacity and creates 34 local manufacturing and compliance jobs.',
  },
  {
    date: '2026-02-19',
    tag: 'Sustainability',
    title: 'Phymotech publishes 2025 Impact Report: 83 tons of e-waste diverted, 38% Scope 1+2 reduction',
    body:
      'The company\'s third annual report, audited by a third party, details measurable progress on its 2030 circular-economy roadmap.',
  },
  {
    date: '2026-01-28',
    tag: 'Partnership',
    title: 'Phymotech partners with Mid-Atlantic Healthcare System on HIPAA-compliant device retirement',
    body:
      'A multi-year agreement to decommission and certify the destruction of 40,000+ legacy devices, replacing a patchwork of regional vendors.',
  },
  {
    date: '2025-11-14',
    tag: 'Recognition',
    title: 'Phymotech named to Fast Company\'s Next Big Things in Tech 2025',
    body:
      'Recognized in the sustainability category for its verified circular supply chain and consumer-facing impact transparency tools.',
  },
  {
    date: '2025-09-05',
    tag: 'Funding',
    title: 'Phymotech closes $42M Series B led by Meridian Impact Capital',
    body:
      'Funding will accelerate the roll-out of regional sanitization facilities and expand the circular-grade refurbishment program.',
  },
];

const coverage = [
  {
    outlet: 'The Verge',
    headline: '"Phymotech wants to make repairable electronics the default, not the exception."',
    date: '2026-03-22',
  },
  {
    outlet: 'Wired',
    headline: '"Inside the sanitization facility turning corporate e-waste into certified destruction."',
    date: '2026-02-07',
  },
  {
    outlet: 'Fast Company',
    headline: '"The circular-supply-chain playbook: how Phymotech proves its sustainability claims."',
    date: '2025-12-03',
  },
  {
    outlet: 'TechCrunch',
    headline: '"Phymotech raises $42M to industrialize responsible electronics retirement."',
    date: '2025-09-05',
  },
  {
    outlet: 'MIT Technology Review',
    headline: '"Five companies rewriting what it means to own a gadget."',
    date: '2025-07-18',
  },
  {
    outlet: 'The Wall Street Journal',
    headline: '"E-waste is the fastest-growing waste stream. Meet the companies trying to stop it."',
    date: '2025-05-29',
  },
];

const awards = [
  { year: '2025', name: 'Fast Company — Next Big Things in Tech' },
  { year: '2025', name: 'B Lab — Best for the Environment (top 5%)' },
  { year: '2025', name: 'Inc. Magazine — Best Workplaces' },
  { year: '2024', name: 'TIME — Best Inventions (Meridian Smart Watch)' },
  { year: '2024', name: 'Fortune — Change the World list' },
  { year: '2023', name: 'Forbes — America\'s Best Startup Employers' },
];

const assets = [
  {
    icon: Palette,
    title: 'Logos & wordmarks',
    body: 'PNG, SVG, and EPS in light + dark variants. Clearspace and minimum-size guidelines included.',
    size: '2.4 MB',
  },
  {
    icon: FileText,
    title: 'Brand guidelines',
    body: '28-page PDF covering typography, color, voice, and do/don\'t usage.',
    size: '4.1 MB',
  },
  {
    icon: ImageIcon,
    title: 'Product photography',
    body: 'High-resolution hero and lifestyle shots for all current products. Royalty-free for editorial use.',
    size: '180 MB',
  },
  {
    icon: Building2,
    title: 'Facility & team photos',
    body: 'Behind-the-scenes images of our sanitization facilities and team. Captioned and credited.',
    size: '62 MB',
  },
  {
    icon: Mic,
    title: 'Executive headshots & bios',
    body: 'Portrait and environmental headshots. Approved short and long biographies for each executive.',
    size: '38 MB',
  },
  {
    icon: TrendingUp,
    title: '2025 Impact Report',
    body: 'Our audited annual sustainability disclosure. Figures, methodology, and appendix included.',
    size: '8.2 MB',
  },
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function PressPage() {
  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(700px 400px at 80% 0%, rgba(251,146,60,0.35), transparent), radial-gradient(600px 400px at 10% 30%, rgba(236,72,153,0.2), transparent)',
          }}
          aria-hidden
        />
        <div className="container relative py-24 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
            <Newspaper size={14} /> Press &amp; Media
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl">
            News, numbers, and press-ready assets &mdash; in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-200">
            Working on a story about circular electronics, sustainable
            supply chains, or data destruction? Everything you need is
            below, and our press team replies in under 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#press-kit"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-6 font-semibold text-white shadow-glow hover:from-brand-400 hover:to-brand-500"
            >
              <Download size={16} /> Download press kit
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10"
            >
              <Mail size={16} /> Contact press team
            </a>
          </div>
        </div>
      </section>

      {/* ===== COMPANY AT A GLANCE ===== */}
      <section className="border-b border-ink-100 bg-ink-50 py-16">
        <div className="container grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Company at a glance
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900">
              The fact sheet.
            </h2>
            <p className="mt-4 text-ink-700">
              Use any of these figures without attribution beyond
              &ldquo;Phymotech Solutions.&rdquo; Updated quarterly.
            </p>
            <div className="mt-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-ink-200 bg-white">
              <PhymotechMark className="h-16 w-16" />
            </div>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {factSheet.map((f) => (
              <div key={f.label} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  {f.label}
                </dt>
                <dd className="mt-1 text-lg font-bold text-ink-900">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== PRESS RELEASES ===== */}
      <section className="container py-24">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Press releases
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
              Latest from the newsroom.
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 md:inline-flex"
          >
            RSS feed <ExternalLink size={14} />
          </a>
        </div>
        <div className="mt-10 grid gap-5">
          {releases.map((r) => (
            <article
              key={r.title}
              className="group rounded-3xl border border-ink-100 bg-white p-8 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                  {r.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-ink-500">
                  <Calendar size={12} /> {formatDate(r.date)}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-ink-900 group-hover:text-brand-700">
                {r.title}
              </h3>
              <p className="mt-3 text-ink-700">{r.body}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Read the full release <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ===== COVERAGE ===== */}
      <section className="border-y border-ink-100 bg-ink-950 py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              In the news
            </span>
            <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
              Selected coverage.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coverage.map((c) => (
              <article
                key={c.headline}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/40"
              >
                <div className="flex items-center justify-between text-xs text-ink-300">
                  <span className="font-bold uppercase tracking-wider text-brand-300">
                    {c.outlet}
                  </span>
                  <span>{formatDate(c.date)}</span>
                </div>
                <Quote size={20} className="mt-4 text-brand-300" />
                <p className="mt-2 text-lg font-medium leading-snug">{c.headline}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section className="container py-24">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Recognition
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
            Awards &amp; honors.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((a) => (
            <div
              key={`${a.year}-${a.name}`}
              className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-card"
            >
              <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Award size={18} />
              </div>
              <div>
                <div className="text-xs font-semibold text-ink-500">{a.year}</div>
                <div className="mt-0.5 font-semibold text-ink-900">{a.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRESS KIT ===== */}
      <section id="press-kit" className="border-y border-ink-100 bg-ink-50 py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Press kit
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
              Download approved brand assets.
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              Free for editorial use. Please do not crop the logo, change
              its colors, or use it to imply partnership without written
              approval.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assets.map((a) => (
              <a
                key={a.title}
                href="#"
                className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
                  <a.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900 group-hover:text-brand-700">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700">{a.body}</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                  <span className="text-xs text-ink-500">ZIP &middot; {a.size}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                    Download <Download size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-500">
            By downloading these assets you agree to use them in accordance
            with our brand guidelines. Questions? Email{' '}
            <a
              href="mailto:press@phymotech.example"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              press@phymotech.example
            </a>
            .
          </p>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="container py-24">
        <div className="grid gap-10 rounded-3xl border border-ink-100 bg-gradient-to-br from-white to-ink-50 p-10 shadow-card md:grid-cols-2 md:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <Sparkles size={14} /> On a deadline?
            </div>
            <h2 className="mt-4 text-4xl font-extrabold text-ink-900">
              Press inquiries &mdash; we reply within 24 hours.
            </h2>
            <p className="mt-4 text-ink-700">
              For interviews, story pitches, fact-checks, or expert
              commentary on circular electronics, sustainable supply chains,
              data destruction, or NIST/HIPAA compliance, our press team is
              available worldwide.
            </p>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Press team
              </div>
              <div className="mt-2 text-lg font-bold text-ink-900">
                Jordan Mensah &mdash; Head of Communications
              </div>
              <div className="mt-4 space-y-2 text-sm text-ink-700">
                <a
                  href="mailto:press@phymotech.example"
                  className="flex items-center gap-2 hover:text-brand-700"
                >
                  <Mail size={14} /> press@phymotech.example
                </a>
                <a
                  href="tel:+13025550142"
                  className="flex items-center gap-2 hover:text-brand-700"
                >
                  <Phone size={14} /> +1 (302) 555-0142
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={14} /> Wilmington, DE, USA
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 text-sm font-semibold text-ink-900 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                About the company
              </Link>
              <Link
                href="/sustainability"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 text-sm font-semibold text-ink-900 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                Sustainability
              </Link>
              <Link
                href="/data-destruction"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 text-sm font-semibold text-ink-900 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                Data destruction
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
