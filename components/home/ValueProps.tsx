import { Truck, ShieldCheck, Undo2, Headphones } from 'lucide-react';

const props = [
  { icon: Truck, title: 'Free shipping', desc: 'On every order $50+, no codes needed.' },
  { icon: Undo2, title: 'Easy returns', desc: '30 days, no questions asked.' },
  { icon: ShieldCheck, title: 'Secure payments', desc: 'Stripe-powered. PCI compliant.' },
  { icon: Headphones, title: '24/7 support', desc: 'Real humans, lightning-fast.' },
];

export function ValueProps() {
  return (
    <section className="container py-10">
      <div className="grid gap-4 rounded-3xl bg-gradient-to-br from-ink-50 to-white p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
        {props.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4">
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon size={20} />
            </span>
            <div>
              <div className="font-semibold text-ink-900">{title}</div>
              <p className="text-sm text-ink-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
