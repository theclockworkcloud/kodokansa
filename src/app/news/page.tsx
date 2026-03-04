import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from Kodokan Judo Association of South Australia.",
};

export default function NewsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-kodo-black py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-kodo-white sm:text-5xl">
            News
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-kodo-gray-300">
            Updates, results, and announcements from the Kodokan Judo SA
            community.
          </p>
        </div>
        <div className="mt-8 kodo-line" />
      </div>

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
