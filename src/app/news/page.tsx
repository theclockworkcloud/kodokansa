import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";
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
        <ScrollReveal stagger>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <div key={article.slug} className="reveal">
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
