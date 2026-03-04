import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ClubCard from "@/components/ClubCard";
import { clubs } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Clubs",
  description:
    "Find a Kodokan Judo club in Adelaide, South Australia. Three clubs across the metropolitan area welcoming all ages and experience levels.",
};

export default function ClubsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-kodo-black py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-kodo-white sm:text-5xl">
            Our Clubs
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-kodo-gray-300">
            Three clubs across Adelaide, all welcoming beginners and experienced
            judoka alike. Find the one closest to you and come try a class.
          </p>
        </div>
        <div className="mt-8 kodo-line" />
      </div>

      <SectionWrapper>
        <div className="space-y-6">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-kodo-gold/30 bg-kodo-gold/5 p-6 text-center">
          <h3 className="font-serif text-lg font-bold text-kodo-black">
            Interested in Starting Judo?
          </h3>
          <p className="mt-2 text-sm text-kodo-gray-600">
            All our clubs offer beginner-friendly sessions. Simply show up to any
            training session, or{" "}
            <a
              href="/contact"
              className="font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
            >
              contact us
            </a>{" "}
            for more information. No experience necessary — just wear
            comfortable clothes for your first session.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
