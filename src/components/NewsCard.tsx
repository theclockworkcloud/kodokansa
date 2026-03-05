import Link from "next/link";
import type { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="kodo-card group block"
    >
      {/* Atmospheric image placeholder */}
      <div className="relative mb-0 flex h-44 items-center justify-center overflow-hidden bg-kodo-black">
        {/* Gradient + wave + kanji */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(139,0,0,0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 kodo-wave opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center font-serif text-[6rem] leading-none text-kodo-white/[0.06] select-none">
          記
        </div>

        {/* Date overlay pill */}
        <div className="absolute left-3 top-3 rounded bg-kodo-black/70 px-2.5 py-1 text-xs font-medium text-kodo-gold backdrop-blur-sm">
          {formatDate(article.date)}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-lg font-semibold text-kodo-black transition-colors group-hover:text-kodo-red">
          {article.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-kodo-gray-600">
          {article.excerpt}
        </p>

        {/* Animated arrow */}
        <span className="mt-4 inline-flex items-center text-sm font-medium text-kodo-red transition-colors group-hover:text-kodo-red-light">
          Read more
          <svg
            className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
