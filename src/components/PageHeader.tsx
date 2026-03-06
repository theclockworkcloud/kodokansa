interface PageHeaderProps {
  title: string;
  subtitle: string;
  kanji: string;
}

export default function PageHeader({ title, subtitle, kanji }: PageHeaderProps) {
  return (
    <div className="kodo-page-header py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 kodo-wave opacity-20" />
      <div className="absolute inset-0 kodo-grain" />

      {/* Kanji watermark */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-serif text-[clamp(10rem,22vw,16rem)] leading-none text-white/[0.03] select-none sm:right-[10%]">
        {kanji}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="hero-enter hero-enter-1 font-display text-xs tracking-[0.3em] text-kodo-gold/60 uppercase">
          Kodokan Judo SA
        </p>
        <h1 className="hero-enter hero-enter-2 mt-3 font-serif text-4xl text-kodo-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="hero-enter hero-enter-3 mt-4 max-w-xl text-base text-kodo-gray-400 sm:text-lg">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-kodo-white" />
    </div>
  );
}
