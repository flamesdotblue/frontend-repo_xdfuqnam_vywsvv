import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600" />
            <span className="text-base font-semibold">Aurnexa</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a className="hover:text-gray-900" href="#features">Features</a>
            <a className="hover:text-gray-900" href="#">Solutions</a>
            <a className="hover:text-gray-900" href="#">Docs</a>
          </nav>
          <a
            href="#get-started"
            className="hidden rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white sm:inline-block"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Features />
      <Showcase />

      {/* CTA */}
      <section id="get-started" className="relative w-full py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-purple-200/60 bg-gradient-to-r from-purple-600 via-blue-600 to-rose-500 p-1">
          <div className="rounded-[22px] bg-white p-8 sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Bring Aurnexa to your team</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Start with a free pilot and see how AI voice can transform your customer operations in days, not months.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
                >
                  Start free pilot
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
