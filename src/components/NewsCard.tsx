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
      className="group block rounded-lg border border-kodo-gray-200 bg-white p-6 transition-all hover:border-kodo-red/30 hover:shadow-lg"
    >
      {/* Image placeholder */}
      <div className="mb-4 flex h-40 items-center justify-center rounded bg-kodo-gray-100 text-kodo-gray-300">
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      <p className="mb-2 text-xs font-medium text-kodo-gold">
        {formatDate(article.date)}
      </p>

      <h3 className="font-serif text-lg font-bold text-kodo-black transition-colors group-hover:text-kodo-red">
        {article.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-kodo-gray-600">
        {article.excerpt}
      </p>

      <span className="mt-4 inline-block text-sm font-medium text-kodo-red transition-colors group-hover:text-kodo-red-light">
        Read more &rarr;
      </span>
    </Link>
  );
}
