interface PageHeaderProps {
  title: string;
  subtitle: string;
  kanji: string;
}

export default function PageHeader({ title, subtitle, kanji }: PageHeaderProps) {
  return (
    <div className="kodo-page-header py-20 sm:py-24">
      <div className="absolute inset-0 kodo-wave opacity-20" />
      <div className="absolute inset-0 kodo-grain" />

      {/* Kanji watermark */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-serif text-[clamp(8rem,20vw,14rem)] leading-none text-white/[0.03] select-none sm:right-[10%]">
        {kanji}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="hero-enter hero-enter-1 font-serif text-4xl text-kodo-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="hero-enter hero-enter-2 mt-4 max-w-xl text-base text-kodo-gray-400">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-kodo-white" />
    </div>
  );
}
