import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-kodo-black">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(165,36,34,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(184,148,95,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 kodo-wave opacity-30" />
        <div className="absolute inset-0 kodo-grain" />
      </div>

      {/* Enso circles — subtle */}
      <div
        className="absolute left-[60%] top-[50%] h-[32rem] w-[32rem] rounded-full border border-white/[0.04]"
        style={{ animation: "ensoRotate 80s linear infinite" }}
      />
      <div
        className="absolute left-[60%] top-[50%] h-[22rem] w-[22rem] rounded-full border border-kodo-gold/[0.08]"
        style={{ animation: "ensoCounterRotate 55s linear infinite" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="max-w-2xl">
          {/* Kanji — large, atmospheric */}
          <div
            className="hero-enter hero-enter-1 mb-2 font-serif text-[clamp(8rem,22vw,16rem)] leading-[0.85] text-kodo-red/15 select-none"
            style={{ animation: "heroFadeIn 0.8s var(--ease-out-expo) forwards, kanjiFloat 8s ease-in-out infinite 1s" }}
          >
            柔道
          </div>

          {/* Heading */}
          <h1 className="hero-enter hero-enter-2 font-serif text-5xl text-kodo-white sm:text-6xl lg:text-7xl">
            Kodokan Judo
          </h1>

          {/* Subtitle */}
          <p className="hero-enter hero-enter-3 mt-3 font-display text-sm tracking-[0.25em] text-kodo-gold/80 uppercase sm:text-base">
            South Australia
          </p>

          <p className="hero-enter hero-enter-4 mt-8 max-w-md text-base leading-relaxed text-kodo-gray-300">
            Promoting judo as intended by founder Prof. Jigoro Kano — at both
            grassroots and elite level.
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-kodo-white" />
    </section>
  );
}
