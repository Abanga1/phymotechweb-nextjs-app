import Link from 'next/link';
import { User, Package, MapPin, CreditCard } from 'lucide-react';

export const metadata = { title: 'Your account' };

export default function AccountPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
        Your account
      </h1>
      <p className="mt-2 text-sm text-ink-500">Manage orders, addresses, and payment methods.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Tile href="/orders" icon={<Package size={20} />} label="Orders" desc="Track and review" />
        <Tile href="#" icon={<MapPin size={20} />} label="Addresses" desc="Shipping book" />
        <Tile href="#" icon={<CreditCard size={20} />} label="Payments" desc="Saved methods" />
        <Tile href="#" icon={<User size={20} />} label="Profile" desc="Name & email" />
      </div>
    </div>
  );
}

function Tile({
  href,
  icon,
  label,
  desc,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-ink-900">{label}</div>
        <div className="text-sm text-ink-500">{desc}</div>
      </div>
    </Link>
  );
}
