import Link from "next/link";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import ClubCard from "@/components/ClubCard";
import EventCard from "@/components/EventCard";
import NewsCard from "@/components/NewsCard";
import { clubs } from "@/data/clubs";
import { events } from "@/data/events";
import { newsArticles } from "@/data/news";

export default function HomePage() {
  const upcomingEvents = events.filter((e) => !e.isPast).slice(0, 3);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      <Hero />

      {/* About snippet */}
      <SectionWrapper>
        <ScrollReveal>
          <div className="reveal mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-kodo-black sm:text-4xl">
              The Way of Gentleness
            </h2>
            <div className="kodo-section-divider mx-auto mt-4 max-w-xs">
              <span className="diamond" />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-kodo-gray-600">
              Kodokan Judo Association of South Australia is a not-for-profit
              organisation dedicated to promoting judo as it was intended by
              founder Prof. Jigoro Kano. We develop judoka at both grassroots and
              elite level, fostering skill, discipline, and respect through
              traditional Kodokan practice.
            </p>
            <Link
              href="/about"
              className="kodo-link mt-6 inline-block text-sm font-medium text-kodo-red"
            >
              Learn more about us &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Featured Clubs */}
      <SectionWrapper className="bg-kodo-gray-50">
        <ScrollReveal>
          <div className="reveal mb-8 flex items-end justify-between">
            <div>
              <p className="font-display text-xs font-medium tracking-[0.2em] text-kodo-gold uppercase">
                Our Network
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-kodo-black sm:text-4xl">
                Our Clubs
              </h2>
              <p className="mt-2 text-kodo-gray-500">
                Five clubs across Adelaide — find one near you.
              </p>
            </div>
            <Link
              href="/clubs"
              className="kodo-link hidden text-sm font-medium text-kodo-red sm:block"
            >
              View all clubs &rarr;
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="grid gap-6 md:grid-cols-3">
            {clubs.map((club) => (
              <div key={club.id} className="reveal">
                <ClubCard club={club} compact />
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/clubs"
            className="kodo-link text-sm font-medium text-kodo-red"
          >
            View all clubs &rarr;
          </Link>
        </div>
      </SectionWrapper>

      {/* Upcoming Events */}
      <SectionWrapper>
        <ScrollReveal>
          <div className="reveal mb-8 flex items-end justify-between">
            <div>
              <p className="font-display text-xs font-medium tracking-[0.2em] text-kodo-gold uppercase">
                Calendar
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-kodo-black sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-2 text-kodo-gray-500">
                Competitions, training days, and gradings.
              </p>
            </div>
            <Link
              href="/events"
              className="kodo-link hidden text-sm font-medium text-kodo-red sm:block"
            >
              View all events &rarr;
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="reveal">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/events"
            className="kodo-link text-sm font-medium text-kodo-red"
          >
            View all events &rarr;
          </Link>
        </div>
      </SectionWrapper>

      {/* Latest News */}
      <SectionWrapper className="bg-kodo-gray-50">
        <ScrollReveal>
          <div className="reveal mb-8 flex items-end justify-between">
            <div>
              <p className="font-display text-xs font-medium tracking-[0.2em] text-kodo-gold uppercase">
                Updates
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-kodo-black sm:text-4xl">
                Latest News
              </h2>
              <p className="mt-2 text-kodo-gray-500">
                Updates from the Kodokan Judo SA community.
              </p>
            </div>
            <Link
              href="/news"
              className="kodo-link hidden text-sm font-medium text-kodo-red sm:block"
            >
              View all news &rarr;
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="grid gap-6 md:grid-cols-3">
            {latestNews.map((article) => (
              <div key={article.slug} className="reveal">
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/news"
            className="kodo-link text-sm font-medium text-kodo-red"
          >
            View all news &rarr;
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Banner — atmospheric dark */}
      <section className="relative overflow-hidden bg-kodo-black py-24 lg:py-32">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(139,0,0,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(197,151,91,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 kodo-wave opacity-30" />
        <div className="absolute inset-0 kodo-grain" />

        {/* Decorative enso */}
        <div
          className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] rounded-full border border-kodo-gold/10"
          style={{ animation: "ensoRotate 50s linear infinite" }}
        />

        {/* Decorative kanji */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 font-serif text-[12rem] leading-none text-kodo-white/[0.03] select-none">
          始
        </div>

        <ScrollReveal>
          <div className="reveal relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <p className="font-display text-xs font-medium tracking-[0.3em] text-kodo-gold uppercase">
              Start Your Journey
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-kodo-white sm:text-4xl lg:text-5xl">
              Begin Your Judo Journey
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-kodo-gray-300">
              Whether you&apos;re a complete beginner or an experienced judoka,
              our clubs welcome you. Come try a class and experience the art of
              judo.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/clubs" className="kodo-btn-primary">
                Find a Club
              </Link>
              <Link href="/contact" className="kodo-btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
