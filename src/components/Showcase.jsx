import React from 'react';

function Showcase() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#F8FBFF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet your AI voice agent
            </h2>
            <p className="mt-4 text-gray-600">
              Aurnexa connects to your CRM, knowledge base, and internal tools to resolve issues end‑to‑end. It understands context, remembers details, and takes action—so your team can focus on what matters most.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-500" />
                Real‑time conversation with interruption handling
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
                Secure tool use: tickets, refunds, bookings, and more
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-500" />
                Analytics and QA for continuous improvement
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-5 text-white">
                  <div className="text-xs uppercase tracking-wider text-white/80">Live status</div>
                  <div className="mt-2 text-2xl font-bold">98.9% resolution</div>
                  <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/20">
                    <div className="h-2 w-[88%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5">
                  <div className="text-xs uppercase tracking-wider text-gray-500">CSAT</div>
                  <div className="mt-2 text-2xl font-bold text-gray-900">4.8/5</div>
                  <div className="mt-4 text-sm text-gray-600">Delightful, natural conversations at scale.</div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500">Weekly calls</div>
                      <div className="mt-1 text-2xl font-bold text-gray-900">12,487</div>
                    </div>
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-tr from-rose-100 to-amber-100" />
                  </div>
                  <div className="mt-4 h-24 w-full rounded-xl bg-gradient-to-r from-purple-50 via-blue-50 to-rose-50" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
