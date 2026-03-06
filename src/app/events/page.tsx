import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";
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
        <ScrollReveal>
          <div className="reveal">
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
              Coming Up
            </p>
            <h2 className="mt-3 font-serif text-2xl text-kodo-black sm:text-3xl">
              Upcoming Events
            </h2>
            <div className="kodo-section-line mt-5" />
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="mt-8 space-y-4">
            {upcoming.map((event) => (
              <div key={event.id} className="reveal">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {upcoming.length === 0 && (
          <p className="mt-8 text-center text-[15px] text-kodo-gray-400">
            No upcoming events at the moment. Check back soon.
          </p>
        )}
      </SectionWrapper>

      {past.length > 0 && (
        <section className="bg-kodo-gray-50 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="reveal">
                <h2 className="font-serif text-2xl text-kodo-black sm:text-3xl">
                  Past Events
                </h2>
                <div className="kodo-section-line mt-5" />
              </div>
            </ScrollReveal>
            <ScrollReveal stagger>
              <div className="mt-8 space-y-4">
                {past.map((event) => (
                  <div key={event.id} className="reveal">
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  );
}
