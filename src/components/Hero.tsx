"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-kodo-black">
      {/* Layered background — atmospheric depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(165,36,34,0.3)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(184,148,95,0.18)_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,0)_0%,rgba(20,20,20,0.4)_100%)]" />
        <div className="absolute inset-0 kodo-wave opacity-25" />
        <div className="absolute inset-0 kodo-grain" />
      </div>

      {/* Animated enso SVG */}
      <div className="absolute left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 sm:left-[60%]">
        <svg
          viewBox="0 0 400 400"
          className="h-[28rem] w-[28rem] sm:h-[36rem] sm:w-[36rem] lg:h-[44rem] lg:w-[44rem]"
          aria-hidden="true"
        >
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-white/[0.04]"
            style={{ animation: "ensoRotate 90s linear infinite" }}
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-kodo-gold/[0.08]"
            style={{ animation: "ensoCounterRotate 65s linear infinite" }}
          />
          {/* Enso brush stroke */}
          <path
            d="M200 40 C310 40, 360 130, 360 200 C360 300, 280 360, 200 360 C110 360, 40 290, 40 200 C40 110, 100 50, 180 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-white/[0.1]"
            strokeDasharray="600"
            style={{
              animation: "ensoStroke 3s var(--ease-out-expo) forwards",
              animationDelay: "0.5s",
              opacity: 0,
            }}
          />
        </svg>
      </div>

      {/* Floating enso rings */}
      <div
        className="absolute left-[55%] top-[45%] h-[32rem] w-[32rem] rounded-full border border-white/[0.02] sm:left-[60%]"
        style={{ animation: "ensoPulse 8s ease-in-out infinite" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="max-w-2xl">
          {/* Kanji — large, atmospheric */}
          <div
            className="hero-enter hero-enter-1 mb-2 font-serif text-[clamp(8rem,22vw,16rem)] leading-[0.8] text-kodo-red/60 select-none"
            style={{ animation: "heroFadeIn 1s var(--ease-out-expo) forwards, kanjiFloat 8s ease-in-out infinite 1.5s" }}
          >
            柔道
          </div>

          {/* Heading */}
          <h1 className="hero-enter hero-enter-2 font-serif text-5xl text-kodo-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Kodokan Judo
          </h1>

          {/* Subtitle */}
          <p className="hero-enter hero-enter-3 mt-4 font-display text-sm tracking-[0.3em] text-kodo-gold/80 uppercase sm:text-base">
            South Australia
          </p>

          <p className="hero-enter hero-enter-4 mt-8 max-w-lg text-base leading-relaxed text-kodo-gray-300 sm:text-lg">
            Promoting judo as intended by founder Prof. Jigoro Kano — at both
            grassroots and elite level.
          </p>

          <div className="hero-enter hero-enter-5 mt-12 flex flex-wrap gap-4">
            <Link href="/clubs" className="kodo-btn-primary">
              Find a Club
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/about" className="kodo-btn-ghost">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-kodo-white" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animation: "scrollBounce 2s ease-in-out infinite" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-[10px] tracking-[0.25em] text-kodo-gray-500 uppercase">
            Scroll
          </span>
          <svg className="h-5 w-5 text-kodo-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
