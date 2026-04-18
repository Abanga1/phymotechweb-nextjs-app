import Link from 'next/link';
import type { Metadata } from 'next';
import { ScrollText, Scale, ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The legal terms that govern your use of Phymotech Solutions — storefront, data destruction services, accounts, payments, and disputes.',
};

const EFFECTIVE = 'April 1, 2026';
const LAST_UPDATED = 'April 17, 2026';

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of these terms',
    body: (
      <>
        <p>
          These Terms of Service (the &ldquo;Terms&rdquo;) are a legal agreement
          between you (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or
          &ldquo;your&rdquo;) and Phymotech Solutions, Inc.
          (&ldquo;Phymotech,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;)
          governing your access to and use of our website, storefront, and
          Electronic Data Destruction services (collectively, the
          &ldquo;Services&rdquo;).
        </p>
        <p>
          By creating an account, placing an order, requesting a quote, or
          otherwise using the Services, you represent that you have read,
          understood, and agree to be bound by these Terms and by our Privacy
          Policy. If you are accepting on behalf of an organization, you
          represent that you have authority to bind that organization.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: '2. Eligibility & accounts',
    body: (
      <>
        <p>
          You must be at least 18 years old and legally able to enter into
          contracts in your jurisdiction. You agree to provide accurate,
          current, and complete information during registration and to keep
          that information up to date.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your
          account. Notify us immediately at{' '}
          <a href="mailto:security@phymotech.com" className="text-brand-600 hover:underline">
            security@phymotech.com
          </a>{' '}
          if you suspect unauthorized access.
        </p>
      </>
    ),
  },
  {
    id: 'orders',
    title: '3. Orders, pricing & payment',
    body: (
      <>
        <p>
          All product listings are invitations to treat, not binding offers.
          Your order is an offer to buy; a contract is formed only when we
          confirm shipment (for goods) or countersign a statement of work (for
          services).
        </p>
        <p>
          Prices are displayed in U.S. dollars unless otherwise noted and are
          exclusive of taxes, duties, and shipping fees unless expressly
          stated. We reserve the right to correct pricing errors and to refuse
          or cancel orders at our discretion, including where fraud is
          suspected.
        </p>
        <p>
          Payment is processed by Stripe, Inc. We never store full payment card
          numbers on our servers. By submitting payment details you authorize
          the charge and agree to Stripe&rsquo;s terms as the processor of
          record.
        </p>
      </>
    ),
  },
  {
    id: 'shipping',
    title: '4. Shipping, risk of loss & delivery',
    body: (
      <>
        <p>
          We ship from fulfillment centers within the continental United States
          unless otherwise stated. Title and risk of loss pass to you upon
          delivery to the carrier, except where applicable law provides
          otherwise for consumer purchases.
        </p>
        <p>
          Estimated delivery windows are provided in good faith but are not
          guaranteed. We are not liable for carrier delays, weather events, or
          other circumstances outside our reasonable control.
        </p>
      </>
    ),
  },
  {
    id: 'returns',
    title: '5. Returns & refunds',
    body: (
      <>
        <p>
          Most in-stock products may be returned within thirty (30) days of
          delivery for a full refund, provided the item is unused, in original
          packaging, and accompanied by proof of purchase. Certain categories
          (custom-configured hardware, licensed software, hygiene-sensitive
          items, and previously-sanitized assets) are non-returnable and are
          marked as such at checkout.
        </p>
        <p>
          Once we receive and inspect a return, refunds are issued to the
          original payment method within ten (10) business days. Shipping fees
          are non-refundable unless the return is due to our error or a
          defective product.
        </p>
      </>
    ),
  },
  {
    id: 'data-destruction',
    title: '6. Data destruction services',
    body: (
      <>
        <p>
          Electronic Data Destruction services are provided pursuant to a
          separate Statement of Work (&ldquo;SOW&rdquo;) and, where applicable,
          a Business Associate Agreement (&ldquo;BAA&rdquo;) between the
          parties. In the event of any conflict between these Terms and an
          executed SOW or BAA, the SOW or BAA will control for that engagement.
        </p>
        <p>
          <span className="font-semibold text-ink-900">Standards.</span> We
          perform sanitization in accordance with NIST Special Publication
          800-88 Revision 1. Where the Customer is a HIPAA-covered entity or
          business associate, we align our controls to 45 CFR §§ 164.308,
          164.310, and 164.312.
        </p>
        <p>
          <span className="font-semibold text-ink-900">Customer obligations.</span>{' '}
          You represent that you have the lawful right to tender each asset
          for destruction and that you have removed or retained any records
          you are required to preserve. You agree to provide accurate asset
          inventories and, where required, advance written authorization for
          reuse.
        </p>
        <p>
          <span className="font-semibold text-ink-900">Deliverables.</span>{' '}
          Upon completion we provide a Certificate of Destruction identifying
          the assets destroyed, the sanitization method applied, the operator,
          and the date. Certificates and chain-of-custody logs are retained for
          six (6) years unless a longer retention is specified in the SOW.
        </p>
      </>
    ),
  },
  {
    id: 'ip',
    title: '7. Intellectual property',
    body: (
      <>
        <p>
          The Services, including all content, software, trademarks, logos, and
          underlying technology, are owned by Phymotech or its licensors and
          are protected by U.S. and international intellectual property laws.
        </p>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to access and use the Services for your personal or internal
          business purposes, subject to these Terms. You may not reproduce,
          modify, reverse-engineer, or create derivative works except to the
          extent such restrictions are prohibited by applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'user-content',
    title: '8. User content & conduct',
    body: (
      <>
        <p>
          You retain ownership of content you submit through the Services
          (&ldquo;User Content&rdquo;) and grant us a worldwide, royalty-free
          license to host, store, and display such User Content solely as
          necessary to provide the Services.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Use the Services in violation of any law or regulation;</li>
          <li>Upload malware, attempt to breach security, or probe infrastructure without written authorization;</li>
          <li>Harvest data about other users or use automated means to access the Services in ways that degrade availability;</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation;</li>
          <li>Infringe the intellectual property rights or privacy rights of others.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'privacy',
    title: '9. Privacy & data protection',
    body: (
      <>
        <p>
          Our handling of personal information is described in our{' '}
          <Link href="#" className="text-brand-600 hover:underline">Privacy Policy</Link>,
          incorporated by reference. Where Phymotech processes personal data on
          your behalf (including any protected health information), that
          processing is governed by a Data Processing Addendum and, where
          applicable, a BAA.
        </p>
      </>
    ),
  },
  {
    id: 'warranties',
    title: '10. Warranties & disclaimers',
    body: (
      <>
        <p>
          We warrant that the Services will be performed in a professional and
          workmanlike manner consistent with generally accepted industry
          standards.
        </p>
        <p className="uppercase text-ink-900">
          Except for the express warranties stated in these Terms or in an
          executed SOW, the Services are provided &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; without warranties of any kind, whether
          express, implied, or statutory, including without limitation implied
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: '11. Limitation of liability',
    body: (
      <>
        <p>
          To the maximum extent permitted by applicable law, neither party will
          be liable for any indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for lost profits, lost revenue,
          lost data, or business interruption, even if advised of the
          possibility of such damages.
        </p>
        <p>
          Each party&rsquo;s total aggregate liability for claims arising out
          of or relating to these Terms or the Services will not exceed the
          fees paid or payable by you to Phymotech in the twelve (12) months
          preceding the event giving rise to the claim. Nothing in these Terms
          limits liability for: (a) fraud or willful misconduct; (b) breach of
          confidentiality obligations; (c) indemnification obligations; or (d)
          liability that cannot be limited under applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: '12. Indemnification',
    body: (
      <>
        <p>
          You agree to defend, indemnify, and hold harmless Phymotech and its
          officers, directors, employees, and agents from and against any
          claim, loss, damage, liability, or expense (including reasonable
          attorneys&rsquo; fees) arising out of or related to: (a) your breach
          of these Terms; (b) your violation of applicable law; (c) your
          negligence or willful misconduct; or (d) any claim that assets
          tendered for destruction were not lawfully yours to tender.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: '13. Suspension & termination',
    body: (
      <>
        <p>
          We may suspend or terminate your access to the Services at any time,
          with or without cause, including for violations of these Terms or
          where continued access poses a security or legal risk. You may
          terminate your account at any time by contacting support.
        </p>
        <p>
          Provisions that by their nature should survive termination (including
          Sections 7, 10, 11, 12, 14, and 15) will survive.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: '14. Governing law & dispute resolution',
    body: (
      <>
        <p>
          These Terms are governed by the laws of the State of Delaware,
          without regard to its conflict-of-laws rules. The parties consent to
          the exclusive jurisdiction of the state and federal courts located in
          Delaware for any action not subject to arbitration.
        </p>
        <p>
          <span className="font-semibold text-ink-900">Arbitration.</span> Any
          dispute not resolved within sixty (60) days of written notice will be
          settled by binding arbitration administered by the American
          Arbitration Association under its Commercial Arbitration Rules, held
          in Wilmington, Delaware. The arbitrator&rsquo;s decision will be
          final and enforceable in any court of competent jurisdiction. Each
          party waives the right to participate in a class action.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: '15. Changes to the Terms',
    body: (
      <>
        <p>
          We may update these Terms from time to time. Material changes will be
          announced by email or in-product notice at least thirty (30) days
          before taking effect. Your continued use of the Services after the
          effective date constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: 'general',
    title: '16. General provisions',
    body: (
      <>
        <p>
          These Terms, together with any SOW, BAA, DPA, and our Privacy
          Policy, constitute the entire agreement between the parties and
          supersede all prior or contemporaneous communications. If any
          provision is held unenforceable, the remaining provisions remain in
          full effect. A waiver must be in writing and signed by an authorized
          representative to be effective. You may not assign these Terms
          without our prior written consent; we may assign to an affiliate or
          in connection with a merger or sale.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '17. Contact us',
    body: (
      <>
        <p>
          Phymotech Solutions, Inc.
          <br />
          Attn: Legal — 251 Little Falls Drive, Wilmington, DE 19808
          <br />
          Email:{' '}
          <a href="mailto:legal@phymotech.com" className="text-brand-600 hover:underline">
            legal@phymotech.com
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* ===== header band ===== */}
      <section className="border-b border-ink-100 bg-ink-50/50">
        <div className="container py-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
            <Scale size={14} />
            Legal
          </div>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink-900 md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 max-w-2xl text-ink-600">
            Read carefully — these Terms govern the storefront, the data
            destruction services, and every account in between. We try to keep
            the language plain where the law allows.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-500">
            <span className="inline-flex items-center gap-2">
              <ScrollText size={14} /> Effective: {EFFECTIVE}
            </span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} /> Last updated: {LAST_UPDATED}
            </span>
          </div>
        </div>
      </section>

      {/* ===== body ===== */}
      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink-100 bg-ink-50/40 p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                On this page
              </div>
              <nav className="mt-4 flex flex-col gap-2 text-sm">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-ink-700 transition hover:text-brand-600"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* sections */}
          <article className="max-w-3xl space-y-12 text-ink-700 [&_p]:leading-relaxed [&_p]:text-[15px]">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-2xl font-extrabold text-ink-900">{s.title}</h2>
                <div className="mt-4 space-y-4">{s.body}</div>
              </section>
            ))}

            <div className="mt-16 rounded-3xl border border-ink-100 bg-ink-50/60 p-6">
              <div className="flex items-center gap-2 text-brand-600">
                <Mail size={16} />
                <div className="text-xs font-semibold uppercase tracking-wider">
                  Questions?
                </div>
              </div>
              <p className="mt-2 text-sm text-ink-700">
                Email{' '}
                <a
                  href="mailto:legal@phymotech.com"
                  className="font-semibold text-brand-600 hover:underline"
                >
                  legal@phymotech.com
                </a>{' '}
                and we&rsquo;ll route your question to counsel or the
                appropriate service team.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
