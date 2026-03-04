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
      {/* Page header */}
      <div className="bg-kodo-black py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="mb-4 inline-flex items-center text-sm text-kodo-gray-400 hover:text-kodo-gold transition-colors"
          >
            <svg
              className="mr-1 h-4 w-4"
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
          <h1 className="font-serif text-3xl font-bold text-kodo-white sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-kodo-gray-400">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.author && <span>by {article.author}</span>}
          </div>
        </div>
        <div className="mt-8 kodo-line" />
      </div>

      <SectionWrapper>
        <article className="mx-auto max-w-3xl">
          {/* Article content — rendered from multiline string */}
          <div className="prose-kodo space-y-4">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-kodo-gray-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 border-t border-kodo-gray-200 pt-8">
            <Link
              href="/news"
              className="inline-flex items-center text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
            >
              <svg
                className="mr-1 h-4 w-4"
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
