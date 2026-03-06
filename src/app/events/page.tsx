import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PageHeader from "@/components/PageHeader";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming judo competitions, training days, gradings, and events from Kodokan Judo SA.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => !e.isPast);
  const past = events.filter((e) => e.isPast);

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Competitions, training days, gradings, and social events for the Kodokan Judo SA community."
        kanji="試"
      />

      <SectionWrapper>
        <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
          Coming Up
        </p>
        <h2 className="mt-3 font-serif text-2xl text-kodo-black">
          Upcoming Events
        </h2>
        <div className="kodo-section-line mt-5" />
        <div className="mt-8 space-y-4">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {upcoming.length === 0 && (
          <p className="mt-8 text-center text-sm text-kodo-gray-400">
            No upcoming events at the moment. Check back soon.
          </p>
        )}
      </SectionWrapper>

      {past.length > 0 && (
        <section className="bg-kodo-gray-50 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-kodo-black">
              Past Events
            </h2>
            <div className="kodo-section-line mt-5" />
            <div className="mt-8 space-y-4">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
