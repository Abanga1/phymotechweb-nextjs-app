import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Briefcase,
  HeartHandshake,
  Leaf,
  Globe2,
  Sparkles,
  Stethoscope,
  Home,
  GraduationCap,
  Plane,
  PiggyBank,
  Baby,
  Clock,
  MapPin,
  Users,
  Compass,
  Zap,
  Trophy,
  CheckCircle2,
  Coffee,
} from 'lucide-react';
import { PhymotechMark } from '@/components/brand/Logo';

export const metadata: Metadata = {
  title: 'Careers — Build smarter, greener things with us',
  description:
    'Join Phymotech Solutions and help build the most trusted circular electronics company in North America. Open roles in engineering, operations, sustainability, and design.',
};

const stats = [
  { label: 'Team members', value: '240+' },
  { label: 'Countries represented', value: '18' },
  { label: 'Glassdoor rating', value: '4.7' },
  { label: 'Promoted from within (2025)', value: '61%' },
];

const values = [
  {
    icon: Leaf,
    title: 'Do the planet a favor',
    body:
      'Every project starts with a material-and-energy budget. If we can\'t tread lighter than the incumbent, we don\'t ship.',
  },
  {
    icon: HeartHandshake,
    title: 'Customers are partners',
    body:
      'Our warranty is a relationship, not a disclaimer. We design for repair, write plain-English docs, and answer the phone.',
  },
  {
    icon: Compass,
    title: 'Evidence over ego',
    body:
      'Strong opinions, loosely held. We publish our sustainability data, our security audits, and our mistakes.',
  },
  {
    icon: Zap,
    title: 'Bias toward shipping',
    body:
      'Small teams, short loops, rapid iteration. We\'d rather ship a B+ today and learn than a theoretical A+ next quarter.',
  },
];

const benefits = [
  {
    icon: Stethoscope,
    title: 'Premium health, dental & vision',
    body: '100% employee premium, 80% for dependents. HSA match up to $2,000/year.',
  },
  {
    icon: PiggyBank,
    title: '401(k) with 6% match',
    body: 'Immediate vesting. Low-fee index funds + ESG option via Betterment at Work.',
  },
  {
    icon: Plane,
    title: 'Unlimited PTO + mandatory minimum',
    body: 'At least 3 weeks off per year is required — we actually mean it. Plus all federal holidays.',
  },
  {
    icon: Baby,
    title: '20 weeks paid parental leave',
    body: 'All parents, any path to parenthood. Ramp-back schedule and lactation rooms at every site.',
  },
  {
    icon: Home,
    title: 'Remote-friendly, office-optional',
    body: '$1,500 home office stipend + co-working allowance in 40+ cities. Travel to HQ twice a year.',
  },
  {
    icon: GraduationCap,
    title: '$3,000 learning budget',
    body: 'Conferences, books, courses, certifications — you pick, no approvals. 5 paid learning days a year.',
  },
  {
    icon: Leaf,
    title: 'Climate action leave',
    body: 'Two paid days per year to volunteer with climate-focused nonprofits, plus a company match for donations.',
  },
  {
    icon: Coffee,
    title: 'Sabbatical after 4 years',
    body: '4 weeks paid sabbatical at year 4, then every 4 years after. Fully unplugged — we cover your on-call too.',
  },
];

const openings = [
  {
    team: 'Engineering',
    roles: [
      { title: 'Senior Backend Engineer — Catalog', location: 'Remote (US/CA)', type: 'Full-time' },
      { title: 'Senior Platform Engineer — Kubernetes', location: 'Remote (US/CA)', type: 'Full-time' },
      { title: 'Staff Security Engineer — AppSec', location: 'Wilmington, DE or Remote', type: 'Full-time' },
      { title: 'Frontend Engineer II — Storefront', location: 'Remote (US/CA)', type: 'Full-time' },
    ],
  },
  {
    team: 'Data Destruction Operations',
    roles: [
      { title: 'Lead Sanitization Technician (R2v3)', location: 'Richmond, VA', type: 'Full-time' },
      { title: 'Operations Manager — West Coast Facility', location: 'Portland, OR', type: 'Full-time' },
      { title: 'Compliance Analyst (NIST / HIPAA)', location: 'Wilmington, DE', type: 'Full-time' },
    ],
  },
  {
    team: 'Sustainability & Supply Chain',
    roles: [
      { title: 'Supplier Sustainability Lead', location: 'Remote (US)', type: 'Full-time' },
      { title: 'Materials Circularity Researcher', location: 'Remote (US/CA)', type: 'Contract' },
    ],
  },
  {
    team: 'Design',
    roles: [
      { title: 'Senior Product Designer — Checkout', location: 'Remote (US/CA)', type: 'Full-time' },
      { title: 'Brand Designer (contract → FTE)', location: 'Remote (US/CA)', type: 'Contract' },
    ],
  },
  {
    team: 'Customer Experience',
    roles: [
      { title: 'Customer Experience Specialist', location: 'Austin, TX', type: 'Full-time' },
      { title: 'Enterprise Account Manager — Healthcare', location: 'Remote (US)', type: 'Full-time' },
    ],
  },
];

const hiringSteps = [
  {
    step: '01',
    title: 'Apply',
    body: 'Send a resume and a short note. No cover letters required. We read every application — no ATS keyword games.',
  },
  {
    step: '02',
    title: 'Recruiter chat',
    body: '30 minutes with a recruiter to confirm fit, comp expectations, and timeline. You\'ll leave with a clear picture of next steps.',
  },
  {
    step: '03',
    title: 'Hiring-manager deep dive',
    body: '60 minutes with the team lead. We talk about the actual work — not trick questions — and give you time to ask anything.',
  },
  {
    step: '04',
    title: 'Paid work sample',
    body: 'A 3–4 hour take-home that reflects real work. We pay for your time (up to $400) whether or not you advance.',
  },
  {
    step: '05',
    title: 'Team loop',
    body: '3 focused conversations with future teammates. Async debrief, decision within 48 hours of the loop.',
  },
  {
    step: '06',
    title: 'Offer + reference calls',
    body: 'Written offer, transparent comp bands, and two of your references. We aim to close the loop within two weeks end-to-end.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(700px 400px at 15% 0%, rgba(251,146,60,0.35), transparent), radial-gradient(600px 400px at 90% 20%, rgba(249,115,22,0.25), transparent)',
          }}
          aria-hidden
        />
        <div className="container relative grid gap-12 py-24 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Briefcase size={14} /> We&rsquo;re hiring
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Build smarter, greener things
              <span className="block bg-gradient-to-r from-brand-300 via-brand-400 to-pink-400 bg-clip-text text-transparent">
                with a team that sweats the details.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-200">
              Phymotech Solutions is a circular electronics company: we
              curate the gear, we repair it when it breaks, and we responsibly
              destroy what can&rsquo;t be saved. It takes engineers,
              technicians, scientists, designers, and customer-obsessed
              humans. Come help us build it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#openings"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-6 font-semibold text-white shadow-glow hover:from-brand-400 hover:to-brand-500"
              >
                See open roles <ArrowRight size={16} />
              </a>
              <a
                href="#benefits"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10"
              >
                How we take care of you
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-6 right-0 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
            <div className="relative flex h-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
              <PhymotechMark className="h-44 w-44" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="container py-24">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            How we work
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
            Four principles that shape every week here.
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            We don&rsquo;t post our values on the wall and forget about them.
            These are the litmus tests we actually use for promotion,
            roadmap prioritization, and tough trade-offs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <v.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{v.title}</h3>
              <p className="mt-2 text-ink-700">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="border-y border-ink-100 bg-ink-50 py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Benefits
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
              Meaningful coverage &mdash; not &ldquo;snacks and a ping-pong
              table.&rdquo;
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              We pay competitively (top 25% of market band for role + level
              + location) and back it with benefits designed for real life.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <b.icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{b.title}</h3>
                <p className="mt-1 text-sm text-ink-700">{b.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-500">
            Specifics vary by country and role. Full details provided with
            every offer.
          </p>
        </div>
      </section>

      {/* ===== OPENINGS ===== */}
      <section id="openings" className="container py-24">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Open roles
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
            Come build with us.
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Don&rsquo;t see an exact match? Send a note to{' '}
            <a
              href="mailto:careers@phymotech.example"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              careers@phymotech.example
            </a>
            . We keep a warm bench and genuinely read every message.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {openings.map((team) => (
            <div key={team.team}>
              <div className="flex items-baseline justify-between border-b border-ink-100 pb-3">
                <h3 className="text-2xl font-bold text-ink-900">{team.team}</h3>
                <span className="text-sm text-ink-500">
                  {team.roles.length} open role{team.roles.length === 1 ? '' : 's'}
                </span>
              </div>
              <div className="mt-4 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card">
                {team.roles.map((r) => (
                  <div
                    key={r.title}
                    className="flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="font-semibold text-ink-900">{r.title}</div>
                      <div className="mt-1 flex flex-wrap gap-4 text-xs text-ink-600">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} /> {r.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} /> {r.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="mailto:careers@phymotech.example?subject=Application"
                      className="inline-flex items-center gap-2 self-start rounded-xl border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-900 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 md:self-auto"
                    >
                      Apply <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HIRING PROCESS ===== */}
      <section className="border-t border-ink-100 bg-white py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Hiring process
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-ink-900 md:text-5xl">
              Fair, paid, and fast.
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              Our process is designed to respect your time and give you a
              real look at the work. Average time from application to offer:{' '}
              <strong>17 days</strong>.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringSteps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-ink-100 bg-ink-50 p-6"
              >
                <div className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.step}
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EEO / COMMITMENT ===== */}
      <section className="border-t border-ink-100 bg-ink-50 py-16">
        <div className="container grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Users size={22} />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-ink-900">
              We hire for talent, not for pedigree.
            </h2>
          </div>
          <div className="space-y-4 text-ink-700">
            <p>
              Phymotech Solutions is an equal-opportunity employer. We make
              hiring decisions based on qualifications, demonstrated skill,
              and character &mdash; never race, color, religion, sex, sexual
              orientation, gender identity, national origin, age, veteran
              status, disability, or any other protected class.
            </p>
            <p>
              If you need a reasonable accommodation for any part of the
              application or interview process, email{' '}
              <a
                href="mailto:accommodations@phymotech.example"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                accommodations@phymotech.example
              </a>
              . We&rsquo;ll confidentially work with you to make things fair.
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-ink-600">
              <CheckCircle2 size={16} className="text-emerald-600" />
              E-Verify participating employer (US).
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(700px 300px at 50% 100%, rgba(251,146,60,0.4), transparent)',
          }}
          aria-hidden
        />
        <div className="container relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Sparkles size={14} /> Referrals
            </div>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Know someone great?
            </h2>
            <p className="mt-4 max-w-xl text-ink-200">
              We pay a $3,000 referral bonus for any hire who stays 90 days,
              and $5,000 for senior and specialist roles. Send them our way.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/about"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10"
            >
              <Globe2 size={16} /> About Phymotech
            </Link>
            <a
              href="mailto:careers@phymotech.example?subject=Referral"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-6 font-semibold text-white shadow-glow hover:from-brand-400 hover:to-brand-500"
            >
              <Trophy size={16} /> Refer a friend
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
