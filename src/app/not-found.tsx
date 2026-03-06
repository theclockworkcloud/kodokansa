import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-kodo-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(165,36,34,0.2)_0%,transparent_60%)]" />
      <div className="absolute inset-0 kodo-wave opacity-20" />
      <div className="absolute inset-0 kodo-grain" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(14rem,30vw,24rem)] leading-none text-white/[0.07] select-none">
        迷
      </div>

      <div className="relative text-center px-4">
        <p className="font-display text-xs tracking-[0.3em] text-kodo-gold/70 uppercase">
          Page Not Found
        </p>
        <h1 className="mt-4 font-serif text-6xl text-kodo-white sm:text-7xl lg:text-8xl">
          404
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-kodo-gray-400">
          The path you&apos;re looking for doesn&apos;t exist.
          Perhaps you&apos;d like to return to the dojo.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="kodo-btn-primary">
            Return Home
          </Link>
          <Link href="/clubs" className="kodo-btn-ghost">
            Find a Club
          </Link>
        </div>
      </div>
    </section>
  );
}
