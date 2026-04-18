'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-ink-950 to-brand-900 p-10 text-center shadow-card md:p-16">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Get $10 off your first order
          </h2>
          <p className="mt-3 text-ink-200">
            Subscribe for drops, exclusive deals, and stories from the brands we carry.
          </p>
          {submitted ? (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
              Welcome aboard! Check your inbox.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="mt-6 flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-ink-900 transition hover:bg-ink-100"
              >
                Subscribe <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
