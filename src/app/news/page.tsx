import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        title="News"
        subtitle="Updates, results, and announcements from the Kodokan Judo SA community."
        kanji="報"
      />

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
