import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PageHeader from "@/components/PageHeader";
import ClubCard from "@/components/ClubCard";
import { clubs } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Clubs",
  description:
    "Find a Kodokan Judo club in Adelaide, South Australia. Five clubs across the metropolitan area welcoming all ages and experience levels.",
};

export default function ClubsPage() {
  return (
    <>
      <PageHeader
        title="Our Clubs"
        subtitle="Five clubs across Adelaide, all welcoming beginners and experienced judoka alike."
        kanji="館"
      />

      <SectionWrapper>
        <div className="space-y-4">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-kodo-gray-50 p-8 text-center">
          <h3 className="font-serif text-lg text-kodo-black">
            Interested in Starting Judo?
          </h3>
          <p className="mt-2 text-sm text-kodo-gray-500">
            All our clubs offer beginner-friendly sessions. Simply show up to any
            training session, or{" "}
            <a
              href="/contact"
              className="text-kodo-red transition-colors hover:text-kodo-red-light"
            >
              contact us
            </a>{" "}
            for more information.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
