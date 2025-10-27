import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-[#F7F3FF] to-white">
      {/* Decorative radial glow background */}
      <div className="pointer-events-none absolute inset-0">        
        <div className="absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),rgba(59,130,246,0.15)_45%,rgba(255,115,179,0.08)_70%,transparent_75%)] blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-28">
        {/* Copy side */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-xs font-medium text-purple-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500" />
            Introducing Aurnexa
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Your Next <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">Gen‑AI</span> Solution
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Aurnexa empowers teams with an AI voice agent that understands, reasons, and acts. Elevate customer experiences, automate workflows, and scale securely—without the complexity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-900 backdrop-blur transition hover:bg-white"
            >
              Book a Demo
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-gray-500">
            <div>Enterprise‑grade security</div>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <div>Fast to implement</div>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <div>24/7 AI voice agent</div>
          </div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[420px] w-full md:h-[560px]">
          <div className="absolute inset-0 rounded-3xl border border-white/40 bg-white/20 shadow-[0_0_1px_#fff] backdrop-blur-xl" />
          <div className="relative h-full w-full">
            <Spline 
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlay to blend edges without blocking interaction */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
