import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";
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
        <ScrollReveal stagger>
          <div className="space-y-4">
            {clubs.map((club) => (
              <div key={club.id} className="reveal">
                <ClubCard club={club} />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="reveal mt-12 rounded-lg border border-kodo-gray-100 bg-kodo-gray-50 p-8 text-center sm:p-10">
            <div className="font-serif text-3xl text-kodo-red/60 select-none">初</div>
            <h3 className="mt-2 font-serif text-xl text-kodo-black">
              Interested in Starting Judo?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-kodo-gray-500">
              All our clubs offer beginner-friendly sessions. Simply show up to any
              training session, or get in touch and we&apos;ll help you find the right club.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="kodo-btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
