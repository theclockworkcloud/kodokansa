import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-kodo-black">
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Warm red spotlight — lower left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(139,0,0,0.35)_0%,transparent_60%)]" />
        {/* Cool gold accent — upper right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(197,151,91,0.2)_0%,transparent_50%)]" />
        {/* Wave pattern */}
        <div className="absolute inset-0 kodo-wave opacity-40" />
        {/* Grain */}
        <div className="absolute inset-0 kodo-grain" />
      </div>

      {/* 3 animated enso circles */}
      <div
        className="absolute left-[65%] top-[45%] h-[28rem] w-[28rem] rounded-full border border-kodo-red/20"
        style={{ animation: "ensoRotate 60s linear infinite" }}
      />
      <div
        className="absolute left-[65%] top-[45%] h-[22rem] w-[22rem] rounded-full border border-kodo-gold/15"
        style={{ animation: "ensoCounterRotate 45s linear infinite" }}
      />
      <div
        className="absolute left-[65%] top-[45%] h-[16rem] w-[16rem] rounded-full border border-kodo-white/5"
        style={{ animation: "ensoPulse 8s ease-in-out infinite" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8 lg:py-48">
        <div className="max-w-2xl">
          {/* Kanji — large, floating, gradient fade */}
          <div
            className="hero-enter hero-enter-1 mb-4 font-serif text-[clamp(10rem,25vw,20rem)] leading-none text-kodo-red/20 select-none"
            style={{ animation: "heroFadeIn 0.8s var(--ease-out-expo) forwards, kanjiFloat 6s ease-in-out infinite 1s" }}
          >
            柔道
          </div>

          {/* Heading */}
          <h1 className="hero-enter hero-enter-2 font-serif text-5xl font-light tracking-tight text-kodo-white sm:text-6xl lg:text-7xl">
            Kodokan Judo
          </h1>

          {/* Subtitle — Zen Kaku, uppercase, wide tracking, gold */}
          <p className="hero-enter hero-enter-3 mt-3 font-display text-sm font-medium tracking-[0.3em] text-kodo-gold uppercase sm:text-base">
            South Australia
          </p>

          <p className="hero-enter hero-enter-4 mt-8 max-w-lg text-lg leading-relaxed text-kodo-gray-300">
            Promoting judo as intended by founder Prof. Jigoro Kano — at both
            grassroots and elite level. A not-for-profit association serving the
            South Australian judo community.
          </p>

          <div className="hero-enter hero-enter-5 mt-10 flex flex-wrap gap-4">
            <Link href="/clubs" className="kodo-btn-primary">
              Find a Club
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/events" className="kodo-btn-ghost">
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom — gradient fade from black to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-kodo-white" />
    </section>
  );
}
