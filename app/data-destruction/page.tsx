import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  HardDrive,
  Smartphone,
  Server,
  Tablet,
  Database,
  Disc3,
  FileCheck,
  Truck,
  Eye,
  Flame,
  Hammer,
  Magnet,
  ClipboardCheck,
  ScrollText,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Building2,
  Stethoscope,
  Scale,
} from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Certified Data Destruction — NIST 800-88 & HIPAA Compliant',
  description:
    'Phymotech Solutions provides NIST 800-88 Rev. 1 compliant data sanitization and HIPAA-grade data destruction for HDDs, SSDs, phones, servers, and backup media. Chain-of-custody tracked, with certificates of destruction.',
};

export default function DataDestructionPage() {
  return (
    <div className="bg-ink-50/40">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

        <div className="container relative grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:py-28">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              <ShieldCheck size={14} className="text-emerald-300" />
              NIST SP 800-88 Rev. 1 · HIPAA · R2v3 ready
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Data destroyed.
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                Proof delivered.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-200">
              Certified electronic data destruction for regulated industries. Every
              drive is sanitized to NIST 800-88 standards, logged under documented
              chain-of-custody, and closed out with an auditable Certificate of
              Destruction — no exceptions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#request"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-ink-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Request secure pickup
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#methods"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Compare sanitization methods
              </Link>
            </div>

            {/* trust rail */}
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-xs sm:grid-cols-4">
              <TrustPill label="NIST 800-88 R1" />
              <TrustPill label="HIPAA §164.310(d)" />
              <TrustPill label="HITECH" />
              <TrustPill label="SOC 2 aligned" />
            </div>
          </div>

          {/* stat card stack */}
          <div className="relative mx-auto w-full max-w-md animate-fade-in">
            <div className="absolute inset-0 -rotate-2 rounded-3xl bg-gradient-to-br from-brand-500/30 to-pink-500/30 blur-2xl" />
            <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <StatRow
                icon={<HardDrive size={18} />}
                stat="100%"
                label="Drives accounted for, from pickup to destruction"
              />
              <StatRow
                icon={<FileCheck size={18} />}
                stat="24 hrs"
                label="Target turnaround on Certificate of Destruction"
              />
              <StatRow
                icon={<ShieldCheck size={18} />}
                stat="$5M"
                label="Environmental & cyber liability coverage"
              />
              <StatRow
                icon={<Eye size={18} />}
                stat="Optional"
                label="Customer-witnessed destruction, onsite or via secure video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHO IT'S FOR ============ */}
      <section className="container py-20">
        <SectionHeading
          eyebrow="Who we serve"
          title="Regulated industries that can't afford a leak."
          blurb="We engineer our process to the strictest use case in the room — then apply it to everyone."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <AudienceCard
            icon={<Stethoscope size={22} />}
            title="Healthcare & life sciences"
            points={[
              'HIPAA Privacy & Security Rule alignment',
              'Signed Business Associate Agreement (BAA)',
              'PHI sanitized before any asset leaves the chain',
            ]}
          />
          <AudienceCard
            icon={<Scale size={22} />}
            title="Legal, finance & government"
            points={[
              'Attorney-client privilege preserved end-to-end',
              'GLBA, SOX, and FINRA retention-aware workflows',
              'FedRAMP / CMMC-conscious handling on request',
            ]}
          />
          <AudienceCard
            icon={<Building2 size={22} />}
            title="Enterprise IT & SaaS"
            points={[
              'Fleet decommissioning at datacenter scale',
              'Drive serial numbers logged to your CMDB',
              'SOC 2, ISO 27001, and GDPR-friendly reporting',
            ]}
          />
        </div>
      </section>

      {/* ============ NIST METHODS ============ */}
      <section id="methods" className="bg-white py-20">
        <div className="container">
          <SectionHeading
            eyebrow="NIST SP 800-88 Rev. 1"
            title="Clear. Purge. Destroy."
            blurb="Three sanitization levels, chosen based on media type, data sensitivity, and whether the asset will be reused."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <MethodCard
              level="Clear"
              color="emerald"
              icon={<Eye size={22} />}
              summary="Logical overwrite of user-addressable storage, suitable for low-risk reuse within the same organization."
              techniques={[
                'Single or multi-pass overwrite (ATA / NVMe)',
                'Firmware-assisted block erase',
                'Vendor-specific Secure Erase commands',
              ]}
              verification="Post-wipe read-back sampling; 100% of sectors verified against zero/random pattern."
            />
            <MethodCard
              level="Purge"
              color="amber"
              featured
              icon={<Magnet size={22} />}
              summary="Cryptographic erase, degauss, or block-level sanitize that renders recovery infeasible even with lab-grade tools."
              techniques={[
                'Cryptographic Erase (self-encrypting drives)',
                'IEEE 2883 block erase & format unit',
                'Degaussing (NSA/CSS EPL-listed equipment) for magnetic media',
              ]}
              verification="Vendor sanitize log + post-operation entropy test; degausser field strength calibrated quarterly."
            />
            <MethodCard
              level="Destroy"
              color="rose"
              icon={<Hammer size={22} />}
              summary="Physical destruction of the storage substrate. Required whenever reuse is not permitted or media integrity is unknown."
              techniques={[
                'Shredding to ≤ 2 mm particle size for SSD/flash',
                'Platter crushing & deformation for HDD',
                'Incineration via R2v3-audited downstream partner',
              ]}
              verification="Video of destruction on request + weight/manifest reconciliation at the shredder."
            />
          </div>
          <p className="mt-8 max-w-3xl text-sm text-ink-500">
            <span className="font-semibold text-ink-700">Method selection</span> is
            driven by the NIST 800-88 decision flow: we assess media type, whether
            the device will be reused, and the security categorization of the data
            (FIPS 199 Low / Moderate / High) before any sanitization begins.
          </p>
        </div>
      </section>

      {/* ============ MEDIA COVERED ============ */}
      <section className="container py-20">
        <SectionHeading
          eyebrow="What we destroy"
          title="Every medium that ever held your data."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MediaCard icon={<HardDrive size={22} />} label="Hard disk drives (HDD)" sub="SATA · SAS · IDE · Fibre Channel" />
          <MediaCard icon={<Database size={22} />} label="Solid-state drives (SSD)" sub="NVMe · M.2 · U.2 · SATA SSD" />
          <MediaCard icon={<Server size={22} />} label="Servers & storage arrays" sub="Rack · blade · SAN · NAS" />
          <MediaCard icon={<Smartphone size={22} />} label="Phones & wearables" sub="iOS · Android · smartwatches" />
          <MediaCard icon={<Tablet size={22} />} label="Laptops & tablets" sub="Soldered flash included" />
          <MediaCard icon={<Disc3 size={22} />} label="Optical & tape" sub="LTO · DLT · DVD · Blu-ray" />
          <MediaCard icon={<Lock size={22} />} label="USB & flash media" sub="Thumb drives · SD · CF · microSD" />
          <MediaCard icon={<ScrollText size={22} />} label="Paper & microfilm" sub="AAA cross-cut on request" />
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-ink-950 py-20 text-white">
        <div className="absolute pointer-events-none" />
        <div className="container">
          <SectionHeading
            eyebrow="Chain of custody"
            title="A process you could audit on camera."
            blurb="Every step generates a tamper-evident artifact. When the final certificate hits your inbox, every gap in the chain is already documented."
            onDark
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StepCard
              n="01"
              icon={<ClipboardCheck size={22} />}
              title="Scope & BAA"
              body="We sign a Business Associate Agreement (if PHI is in scope) and document data categorization, media counts, and required sanitization level before touching a single drive."
            />
            <StepCard
              n="02"
              icon={<Truck size={22} />}
              title="Secured transport"
              body="GPS-tracked, sealed transit containers. Driver badges, dual custody handoff, and tamper-evident zip-ties logged against each asset."
            />
            <StepCard
              n="03"
              icon={<Eye size={22} />}
              title="Intake & serialization"
              body="Every asset is weighed, photographed, and scanned. Serial numbers are matched against your CMDB export and discrepancies flagged within 4 business hours."
            />
            <StepCard
              n="04"
              icon={<Flame size={22} />}
              title="Sanitize / destroy"
              body="Selected NIST 800-88 method applied in a camera-monitored secure area. Customer-witnessed destruction (onsite or via encrypted video) is available."
            />
            <StepCard
              n="05"
              icon={<BadgeCheck size={22} />}
              title="Verify"
              body="Logical wipes verified with read-back sampling. Physical destruction verified by particle-size measurement and weight reconciliation."
            />
            <StepCard
              n="06"
              icon={<FileCheck size={22} />}
              title="Certify & report"
              body="You receive a signed Certificate of Destruction with serial list, method, operator, and disposition — plus optional SOC-aligned audit evidence pack."
            />
          </ol>
        </div>
      </section>

      {/* ============ HIPAA DEEP DIVE ============ */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <Stethoscope size={14} />
              HIPAA alignment
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
              Built around the HIPAA Security Rule.
            </h2>
            <p className="mt-4 max-w-md text-ink-700">
              HIPAA does not prescribe a single destruction technique — it requires
              that PHI be rendered{' '}
              <span className="font-semibold text-ink-900">
                unreadable, indecipherable, and otherwise cannot be reconstructed.
              </span>{' '}
              We align to HHS guidance and NIST 800-88 so auditors see a
              one-to-one mapping.
            </p>
            <Link
              href="#request"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Request our HIPAA BAA <ArrowRight size={14} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-ink-50 text-ink-700">
                <tr>
                  <th className="px-5 py-3 font-semibold">HIPAA requirement</th>
                  <th className="px-5 py-3 font-semibold">Phymotech control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100 text-ink-700">
                <Row
                  req="§164.310(d)(2)(i) — Disposal"
                  control="NIST 800-88 Clear / Purge / Destroy selected per media; operator signs off on each asset."
                />
                <Row
                  req="§164.310(d)(2)(ii) — Media re-use"
                  control="ePHI sanitized to Purge (minimum) before any reuse. Reuse requires written customer authorization."
                />
                <Row
                  req="§164.308(b)(1) — Business Associate Contract"
                  control="Executed BAA prior to work. Subcontractor flow-down required for any downstream recycler."
                />
                <Row
                  req="§164.312(b) — Audit controls"
                  control="Tamper-evident log for every custody transfer; retained 6 years by default."
                />
                <Row
                  req="§164.314(a)(2) — Security incident reporting"
                  control="24-hour breach notification to your designated privacy officer if any deviation occurs."
                />
                <Row
                  req="HITECH §13402 — Breach notification"
                  control="Encrypted storage, encrypted transit, and secure-destroy defaults keep PHI outside the breach threshold."
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="bg-white py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Certifications & alignment"
            title="Standards you can hand to your auditor."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <CertCard name="NIST SP 800-88 R1" desc="Guidelines for Media Sanitization — the U.S. federal baseline." />
            <CertCard name="HIPAA / HITECH" desc="PHI destruction aligned to 45 CFR §164 with BAA on file." />
            <CertCard name="R2v3 / SERI" desc="Responsible Recycling standard for downstream material streams." />
            <CertCard name="NAID AAA ready" desc="Employee vetting, facility controls, and audit trail meet NAID AAA criteria." />
            <CertCard name="SOC 2 aligned" desc="Trust Service Criteria mapped for security, availability, and confidentiality." />
            <CertCard name="ISO 27001 aligned" desc="Information security management system practices mirror Annex A controls." />
            <CertCard name="GDPR Art. 17" desc="Right-to-erasure workflows for data subjects in the EU / UK." />
            <CertCard name="GLBA Safeguards" desc="Financial customer information protected through destruction." />
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="container py-20">
        <SectionHeading eyebrow="FAQ" title="Questions we get every week." />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-100 rounded-3xl border border-ink-100 bg-white shadow-card">
          <Faq
            q="What's the difference between wiping, degaussing, and shredding?"
            a="Wiping (Clear) overwrites user-accessible data. Degaussing (Purge) uses a powerful magnetic field to render magnetic media unrecoverable — it does NOT work on SSDs or flash. Shredding (Destroy) physically reduces media to particles. NIST 800-88 tells us which to use for which media and threat model."
          />
          <Faq
            q="Do you handle SSDs differently from spinning drives?"
            a="Yes. Degaussing is ineffective on flash memory. For SSDs we use NIST-approved Cryptographic Erase or block-level sanitize when the drive supports it, and shred to ≤ 2 mm particle size when it doesn't or when policy requires physical destruction."
          />
          <Faq
            q="Can I watch the destruction happen?"
            a="Absolutely. We offer onsite mobile shredding trucks, scheduled visits to our secure facility, and live encrypted video witnessing. The witness option is popular with HIPAA-covered entities and legal teams."
          />
          <Faq
            q="What does the Certificate of Destruction include?"
            a="Customer name, project reference, asset count, serial numbers, media types, sanitization method per NIST 800-88, operator ID, destruction date, final disposition, and a QR-linked verifiable record. Signed by an authorized Phymotech technician."
          />
          <Faq
            q="How long do you retain records?"
            a="Certificates and chain-of-custody logs are retained for 6 years by default (aligned to HIPAA's documentation requirement). Longer retention available on request for regulated customers."
          />
          <Faq
            q="Is anything recyclable, or does it all end up in a landfill?"
            a="We route sanitized or destroyed media to R2v3-certified downstream partners. Precious metals, rare earths, and plastics are recovered; material flow is documented end-to-end so you get an environmental footprint report alongside your destruction certificate."
          />
        </div>
      </section>

      {/* ============ COMPLIANCE CALLOUT ============ */}
      <section className="container pb-16">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">A note on what compliance means here.</p>
              <p className="mt-1 text-amber-900/90">
                Phymotech Solutions executes destruction to the technical
                controls defined in NIST SP 800-88 Rev. 1 and the HIPAA Security
                Rule. &ldquo;Compliant&rdquo; refers to our operational
                alignment with those frameworks; ultimate regulatory compliance
                for your organization (risk assessment, policy, workforce
                training, audit) remains your responsibility as the
                covered entity or controller. Our BAA, certificates, and audit
                logs are designed to plug directly into that program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="request" className="relative overflow-hidden bg-ink-950 py-20 text-white">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles size={14} />
              Typical response time &lt; 4 business hours
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to destroy data with receipts?
            </h2>
            <p className="mt-4 max-w-xl text-ink-200">
              Tell us the scope — media types, approximate quantity, required
              sanitization level, and any regulatory framework in play. We'll
              return a scoped quote, a draft BAA, and a destruction plan you can
              forward straight to your compliance team.
            </p>
          </div>

          <form
            className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            action="/api/contact"
            method="post"
          >
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-ink-100">
                Work email
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder-ink-400 outline-none focus:border-brand-400"
                placeholder="you@company.com"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-ink-100">
                Approximate asset count
              </span>
              <input
                required
                type="text"
                name="assets"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder-ink-400 outline-none focus:border-brand-400"
                placeholder="e.g. 120 drives, 40 laptops"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-ink-100">
                Regulatory framework
              </span>
              <select
                name="framework"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white outline-none focus:border-brand-400"
                defaultValue=""
              >
                <option value="" className="text-ink-900">Select one…</option>
                <option value="hipaa" className="text-ink-900">HIPAA / HITECH</option>
                <option value="glba" className="text-ink-900">GLBA</option>
                <option value="sox" className="text-ink-900">SOX</option>
                <option value="gdpr" className="text-ink-900">GDPR / UK DPA</option>
                <option value="cmmc" className="text-ink-900">CMMC / DFARS</option>
                <option value="other" className="text-ink-900">Other / multiple</option>
              </select>
            </label>
            <Button type="submit" size="lg" className="w-full">
              Request secure pickup
            </Button>
            <p className="text-xs text-ink-300">
              By submitting you agree to our <Link href="/terms" className="underline hover:text-white">Terms of Service</Link>. We never share RFQs.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

/* ================== helpers ================== */

function SectionHeading({
  eyebrow,
  title,
  blurb,
  onDark,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  onDark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <span
        className={
          onDark
            ? 'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur'
            : 'inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700'
        }
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight md:text-4xl ${
          onDark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {blurb && (
        <p className={`mt-3 text-lg ${onDark ? 'text-ink-200' : 'text-ink-600'}`}>
          {blurb}
        </p>
      )}
    </div>
  );
}

function TrustPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide backdrop-blur">
      <CheckCircle2 size={12} className="text-emerald-300" />
      {label}
    </span>
  );
}

function StatRow({
  icon,
  stat,
  label,
}: {
  icon: React.ReactNode;
  stat: string;
  label: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
        {icon}
      </span>
      <div>
        <div className="text-2xl font-extrabold">{stat}</div>
        <div className="text-sm text-ink-200">{label}</div>
      </div>
    </div>
  );
}

function AudienceCard({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <div className="group rounded-3xl border border-ink-100 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-extrabold text-ink-900">{title}</h3>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
            <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-brand-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MethodCard({
  level,
  color,
  icon,
  summary,
  techniques,
  verification,
  featured,
}: {
  level: string;
  color: 'emerald' | 'amber' | 'rose';
  icon: React.ReactNode;
  summary: string;
  techniques: string[];
  verification: string;
  featured?: boolean;
}) {
  const ring =
    color === 'emerald'
      ? 'from-emerald-400 to-teal-500'
      : color === 'amber'
      ? 'from-brand-400 to-pink-500'
      : 'from-rose-400 to-red-500';
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover ${
        featured ? 'border-brand-200 ring-2 ring-brand-500/20' : 'border-ink-100'
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          Most chosen
        </span>
      )}
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${ring} text-white`}
      >
        {icon}
      </div>
      <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">
        NIST 800-88
      </div>
      <h3 className="mt-1 text-2xl font-extrabold text-ink-900">{level}</h3>
      <p className="mt-3 text-sm text-ink-700">{summary}</p>
      <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">
        Techniques
      </div>
      <ul className="mt-2 space-y-1.5">
        {techniques.map((t) => (
          <li key={t} className="flex items-start gap-2 text-sm text-ink-700">
            <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-brand-500" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-2xl bg-ink-50 p-4 text-xs text-ink-700">
        <div className="font-semibold text-ink-900">Verification</div>
        <div className="mt-1">{verification}</div>
      </div>
    </div>
  );
}

function MediaCard({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </div>
      <div className="mt-3 font-semibold text-ink-900">{label}</div>
      <div className="text-xs text-ink-500">{sub}</div>
    </div>
  );
}

function StepCard({
  n,
  icon,
  title,
  body,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
          Step {n}
        </span>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-300">
          {icon}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-white">{title}</h3>
      <p className="mt-2 text-sm text-ink-200">{body}</p>
    </li>
  );
}

function Row({ req, control }: { req: string; control: string }) {
  return (
    <tr>
      <td className="px-5 py-3 align-top text-sm font-semibold text-ink-900">{req}</td>
      <td className="px-5 py-3 align-top text-sm">{control}</td>
    </tr>
  );
}

function CertCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-ink-50/40 p-5 shadow-card">
      <div className="flex items-center gap-2 text-brand-600">
        <BadgeCheck size={18} />
        <div className="text-xs font-semibold uppercase tracking-wider">{name}</div>
      </div>
      <p className="mt-3 text-sm text-ink-700">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900">
        <span>{q}</span>
        <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
          <span className="text-lg leading-none">+</span>
        </span>
      </summary>
      <p className="mt-3 text-sm text-ink-700">{a}</p>
    </details>
  );
}
