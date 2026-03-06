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
    <Link href={`/news/${article.slug}`} className="kodo-card group block">
      {/* Image area */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-kodo-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(165,36,34,0.2)_0%,transparent_70%)]" />
        <div className="absolute inset-0 kodo-wave opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center font-serif text-[5rem] leading-none text-white/[0.04] select-none">
          記
        </div>
        <span className="absolute left-3 top-3 text-xs text-kodo-gold/70">
          {formatDate(article.date)}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg text-kodo-black transition-colors group-hover:text-kodo-red">
          {article.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-kodo-gray-500">
          {article.excerpt}
        </p>

        <span className="mt-4 inline-flex items-center text-sm text-kodo-red transition-colors group-hover:text-kodo-red-light">
          Read more
          <svg
            className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
