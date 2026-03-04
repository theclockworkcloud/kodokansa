import Link from "next/link";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-kodo-black">
            The Way of Gentleness
          </h2>
          <div className="mx-auto mt-4 w-16 kodo-line" />
          <p className="mt-6 text-lg leading-relaxed text-kodo-gray-600">
            Kodokan Judo Association of South Australia is a not-for-profit
            organisation dedicated to promoting judo as it was intended by
            founder Prof. Jigoro Kano. We develop judoka at both grassroots and
            elite level, fostering skill, discipline, and respect through
            traditional Kodokan practice.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </SectionWrapper>

      {/* Featured Clubs */}
      <SectionWrapper className="bg-kodo-gray-50">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-kodo-black">
              Our Clubs
            </h2>
            <p className="mt-2 text-kodo-gray-500">
              Five clubs across Adelaide — find one near you.
            </p>
          </div>
          <Link
            href="/clubs"
            className="hidden text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors sm:block"
          >
            View all clubs &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} compact />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/clubs"
            className="text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
          >
            View all clubs &rarr;
          </Link>
        </div>
      </SectionWrapper>

      {/* Upcoming Events */}
      <SectionWrapper>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-kodo-black">
              Upcoming Events
            </h2>
            <p className="mt-2 text-kodo-gray-500">
              Competitions, training days, and gradings.
            </p>
          </div>
          <Link
            href="/events"
            className="hidden text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors sm:block"
          >
            View all events &rarr;
          </Link>
        </div>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/events"
            className="text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
          >
            View all events &rarr;
          </Link>
        </div>
      </SectionWrapper>

      {/* Latest News */}
      <SectionWrapper className="bg-kodo-gray-50">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-kodo-black">
              Latest News
            </h2>
            <p className="mt-2 text-kodo-gray-500">
              Updates from the Kodokan Judo SA community.
            </p>
          </div>
          <Link
            href="/news"
            className="hidden text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors sm:block"
          >
            View all news &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestNews.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/news"
            className="text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
          >
            View all news &rarr;
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper dark>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-kodo-white">
            Begin Your Judo Journey
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-kodo-gray-300">
            Whether you&apos;re a complete beginner or an experienced judoka,
            our clubs welcome you. Come try a class and experience the art of
            judo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/clubs"
              className="inline-flex items-center rounded bg-kodo-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-kodo-red-light"
            >
              Find a Club
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded border border-kodo-gold/50 px-6 py-3 text-sm font-semibold text-kodo-gold transition-colors hover:border-kodo-gold hover:bg-kodo-gold/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
