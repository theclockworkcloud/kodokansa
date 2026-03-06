import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { newsArticles } from "@/data/news";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="kodo-page-header py-24 sm:py-28">
        <div className="absolute inset-0 kodo-wave opacity-20" />
        <div className="absolute inset-0 kodo-grain" />
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-serif text-[clamp(8rem,20vw,14rem)] leading-none text-white/[0.03] select-none sm:right-[10%]">
          報
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="hero-enter hero-enter-1 mb-6 inline-flex items-center gap-1.5 text-sm text-kodo-gray-500 transition-colors hover:text-kodo-gold"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to News
          </Link>
          <h1 className="hero-enter hero-enter-2 font-serif text-3xl text-kodo-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <div className="hero-enter hero-enter-3 mt-4 flex items-center gap-4 text-sm text-kodo-gray-500">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.author && (
              <>
                <span className="h-1 w-1 rounded-full bg-kodo-gray-600" />
                <span>{article.author}</span>
              </>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-kodo-white" />
      </div>

      <SectionWrapper>
        <article className="mx-auto max-w-3xl">
          <div className="prose-kodo space-y-5">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="leading-relaxed text-kodo-gray-500"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 border-t border-kodo-gray-200 pt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-kodo-red transition-colors hover:text-kodo-red-light"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to all news
            </Link>
          </div>
        </article>
      </SectionWrapper>
    </>
  );
}
