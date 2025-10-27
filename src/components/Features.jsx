import React from 'react';
import { Rocket, Brain, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Deploy in days',
    desc: 'Spin up voice agents fast with prebuilt flows and flexible APIs that fit your stack.'
  },
  {
    icon: Brain,
    title: 'Reasoning built‑in',
    desc: 'Grounded responses with retrieval, memory, and tool use for reliable outcomes.'
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    desc: 'SSO, audit logs, PII controls, and regional data residency to stay compliant.'
  },
  {
    icon: Sparkles,
    title: 'Natural & human',
    desc: 'Studio‑quality voices, emotion, and interruption handling for delightful calls.'
  }
];

function Features() {
  return (
    <section id="features" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for modern customer experiences
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to launch AI voice agents that your customers love—and your teams trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-tr from-purple-200/50 to-blue-200/50 blur-2xl" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-100 to-blue-100 text-purple-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
