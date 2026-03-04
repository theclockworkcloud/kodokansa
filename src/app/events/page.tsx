import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
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
      {/* Page header */}
      <div className="bg-kodo-black py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-kodo-white sm:text-5xl">
            Events
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-kodo-gray-300">
            Competitions, training days, gradings, and social events for the
            Kodokan Judo SA community.
          </p>
        </div>
        <div className="mt-8 kodo-line" />
      </div>

      {/* Upcoming Events */}
      <SectionWrapper>
        <h2 className="font-serif text-2xl font-bold text-kodo-black">
          Upcoming Events
        </h2>
        <div className="mt-2 w-16 kodo-line" />
        <div className="mt-8 space-y-4">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {upcoming.length === 0 && (
          <p className="mt-8 text-center text-kodo-gray-400">
            No upcoming events at the moment. Check back soon!
          </p>
        )}
      </SectionWrapper>

      {/* Past Events */}
      {past.length > 0 && (
        <SectionWrapper className="bg-kodo-gray-50">
          <h2 className="font-serif text-2xl font-bold text-kodo-black">
            Past Events
          </h2>
          <div className="mt-2 w-16 kodo-line" />
          <div className="mt-8 space-y-4">
            {past.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
