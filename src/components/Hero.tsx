import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-kodo-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 kodo-pattern" />

      {/* Decorative circle — inspired by the enso */}
      <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-kodo-red/20" />
      <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-kodo-gold/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          {/* Kanji accent */}
          <div className="mb-6 font-serif text-6xl text-kodo-red/30 select-none sm:text-8xl">
            柔道
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-kodo-white sm:text-5xl lg:text-6xl">
            Kodokan Judo
            <span className="block text-kodo-gold">South Australia</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-kodo-gray-300">
            Promoting judo as intended by founder Prof. Jigoro Kano — at both
            grassroots and elite level. A not-for-profit association serving the
            South Australian judo community.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/clubs"
              className="inline-flex items-center rounded bg-kodo-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-kodo-red-light"
            >
              Find a Club
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center rounded border border-kodo-gold/50 px-6 py-3 text-sm font-semibold text-kodo-gold transition-colors hover:border-kodo-gold hover:bg-kodo-gold/10"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="kodo-line" />
    </section>
  );
}
