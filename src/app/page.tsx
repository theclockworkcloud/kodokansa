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
  const featuredClubs = clubs.slice(0, 3);

  return (
    <>
      <Hero />

      {/* About — centred, editorial */}
      <SectionWrapper>
        <ScrollReveal>
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
              Est. South Australia
            </p>
            <h2 className="mt-4 font-serif text-3xl text-kodo-black sm:text-4xl lg:text-5xl">
              The Way of Gentleness
            </h2>
            <div className="kodo-section-line mx-auto mt-6" />
            <p className="mt-6 text-base leading-relaxed text-kodo-gray-500">
              Kodokan Judo Association of South Australia is a not-for-profit
              organisation dedicated to promoting judo as it was intended by
              founder Prof. Jigoro Kano. We develop judoka at both grassroots and
              elite level, fostering skill, discipline, and respect through
              traditional Kodokan practice.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm text-kodo-red transition-colors hover:text-kodo-red-light"
            >
              Learn more about us &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Clubs — asymmetric layout */}
      <section className="relative bg-kodo-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <div className="reveal lg:sticky lg:top-32">
                <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                  Our Network
                </p>
                <h2 className="mt-3 font-serif text-3xl text-kodo-black sm:text-4xl">
                  Five Clubs<br />Across Adelaide
                </h2>
                <div className="kodo-section-line mt-6" />
                <p className="mt-6 text-sm leading-relaxed text-kodo-gray-500">
                  From the southern coast to the north-east hills, find a club
                  near you and come try a class.
                </p>
                <Link
                  href="/clubs"
                  className="mt-6 inline-block text-sm text-kodo-red transition-colors hover:text-kodo-red-light"
                >
                  View all clubs &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-8">
              <ScrollReveal stagger>
                <div className="space-y-4">
                  {featuredClubs.map((club) => (
                    <div key={club.id} className="reveal">
                      <ClubCard club={club} compact />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ScrollReveal stagger>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="reveal">
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="lg:col-span-4 lg:order-first">
            <div className="reveal lg:sticky lg:top-32">
              <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                Calendar
              </p>
              <h2 className="mt-3 font-serif text-3xl text-kodo-black sm:text-4xl">
                Upcoming<br />Events
              </h2>
              <div className="kodo-section-line mt-6" />
              <p className="mt-6 text-sm leading-relaxed text-kodo-gray-500">
                Competitions, training days, and gradings across the calendar.
              </p>
              <Link
                href="/events"
                className="mt-6 inline-block text-sm text-kodo-red transition-colors hover:text-kodo-red-light"
              >
                View all events &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* News */}
      <section className="relative bg-kodo-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="reveal mb-12 max-w-md">
              <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                Updates
              </p>
              <h2 className="mt-3 font-serif text-3xl text-kodo-black sm:text-4xl">
                Latest News
              </h2>
              <div className="kodo-section-line mt-6" />
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
          <div className="mt-8 text-center">
            <Link
              href="/news"
              className="text-sm text-kodo-red transition-colors hover:text-kodo-red-light"
            >
              View all news &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — atmospheric */}
      <section className="relative overflow-hidden bg-kodo-black py-28 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(165,36,34,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(184,148,95,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 kodo-wave opacity-20" />
        <div className="absolute inset-0 kodo-grain" />

        {/* Decorative kanji */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 font-serif text-[10rem] leading-none text-white/[0.02] select-none">
          始
        </div>

        <ScrollReveal>
          <div className="reveal relative mx-auto max-w-2xl px-4 text-center sm:px-6">
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold/70 uppercase">
              Start Your Journey
            </p>
            <h2 className="mt-4 font-serif text-3xl text-kodo-white sm:text-4xl lg:text-5xl">
              Begin Your Judo Journey
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-kodo-gray-400">
              Whether you&apos;re a complete beginner or an experienced judoka,
              our clubs welcome you.
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
