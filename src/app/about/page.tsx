import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kodokan Judo Association of South Australia, our history, philosophy, and commitment to traditional Kodokan judo.",
};

const principles = [
  {
    japanese: "精力善用",
    romaji: "Seiryoku Zen'yō",
    english: "Maximum Efficiency, Minimum Effort",
    description:
      "The principle of making the best use of one's energy — physical, mental, and moral — for a good purpose.",
  },
  {
    japanese: "自他共栄",
    romaji: "Jita Kyōei",
    english: "Mutual Welfare and Benefit",
    description:
      "The principle that through mutual aid and concession, we can all prosper together and contribute to the betterment of society.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Dedicated to preserving and promoting the art of judo as envisioned by its founder."
        kanji="道"
      />

      {/* Mission & History */}
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-kodo-black">
              Our Mission
            </h2>
            <div className="kodo-section-divider mt-3 max-w-[6rem]"><span className="diamond" /></div>
            <p className="mt-6 text-kodo-gray-600 leading-relaxed">
              The Kodokan Judo Association of South Australia is a not-for-profit
              organisation committed to promoting and developing judo as it was
              intended by founder Professor Jigoro Kano. We serve the South
              Australian judo community through our network of member clubs,
              providing quality instruction and competition opportunities at both
              grassroots and elite level.
            </p>
            <p className="mt-4 text-kodo-gray-600 leading-relaxed">
              Our association upholds the traditional values and techniques of
              Kodokan Judo while embracing modern coaching methods. We believe
              judo is more than a sport — it is a system of physical, mental,
              and moral development that enriches the lives of all who practise
              it.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-kodo-black">
              Our History
            </h2>
            <div className="kodo-section-divider mt-3 max-w-[6rem]"><span className="diamond" /></div>
            <p className="mt-6 text-kodo-gray-600 leading-relaxed">
              Kodokan Judo SA was established to bring together like-minded judo
              practitioners in South Australia who share a commitment to
              authentic Kodokan Judo. Our member clubs have deep roots in the
              Adelaide judo community, with some operating for over three
              decades.
            </p>
            <p className="mt-4 text-kodo-gray-600 leading-relaxed">
              Today, the association comprises five clubs across metropolitan
              Adelaide and beyond — Goshin Judo Kan, Seacliff Judo Club,
              Tatakai Martial Arts Academy, Tiger Judo Club, and Willunga Judo
              Club — serving hundreds of judoka from junior beginners to
              senior black belts.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Prof. Kano & Philosophy */}
      <SectionWrapper className="bg-kodo-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 font-serif text-5xl text-kodo-red/30 select-none">
            嘉納治五郎
          </div>
          <h2 className="font-serif text-3xl font-bold text-kodo-black">
            The Vision of Prof. Jigoro Kano
          </h2>
          <div className="kodo-section-divider mx-auto mt-4 max-w-xs"><span className="diamond" /></div>
          <p className="mt-6 text-kodo-gray-600 leading-relaxed">
            Professor Jigoro Kano (1860–1938) founded Kodokan Judo in 1882 in
            Tokyo, Japan. More than a martial art or sport, Kano envisioned judo
            as an educational system — a path to developing the complete person
            through physical training, intellectual growth, and moral
            cultivation.
          </p>
          <blockquote className="mt-8 border-l-4 border-kodo-gold pl-6 text-left">
            <p className="font-serif text-lg italic text-kodo-gray-700">
              &ldquo;Judo is the way to the most effective use of both physical
              and spiritual strength. By training you in attacks and defences it
              refines your body and your soul and helps you make the spiritual
              essence of Judo a part of your very being.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-kodo-gray-500">
              — Prof. Jigoro Kano
            </footer>
          </blockquote>
        </div>
      </SectionWrapper>

      {/* Principles */}
      <SectionWrapper>
        <h2 className="text-center font-serif text-3xl font-bold text-kodo-black">
          Guiding Principles
        </h2>
        <div className="kodo-section-divider mx-auto mt-4 max-w-xs"><span className="diamond" /></div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.romaji}
              className="kodo-card p-8 text-center"
            >
              <div className="mb-2 font-serif text-4xl text-kodo-red/40 select-none">
                {p.japanese}
              </div>
              <h3 className="font-serif text-xl font-bold text-kodo-black">
                {p.romaji}
              </h3>
              <p className="mt-1 text-sm font-medium text-kodo-gold">
                {p.english}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-kodo-gray-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* AKJA Affiliation */}
      <SectionWrapper className="bg-kodo-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-kodo-black">
            National Affiliation
          </h2>
          <div className="kodo-section-divider mx-auto mt-4 max-w-xs"><span className="diamond" /></div>
          <p className="mt-6 text-kodo-gray-600 leading-relaxed">
            Kodokan Judo SA is proudly affiliated with the{" "}
            <a
              href={siteConfig.affiliation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
            >
              {siteConfig.affiliation.name}
            </a>
            . The AKJA is the Australian representative body for traditional
            Kodokan Judo, connecting clubs and associations across the country
            that are dedicated to preserving the art of judo as established by
            Prof. Jigoro Kano.
          </p>
          <p className="mt-4 text-kodo-gray-600 leading-relaxed">
            Through our AKJA affiliation, our members have access to national
            competitions, inter-state training camps, and grading opportunities
            recognised across Australia.
          </p>
        </div>
      </SectionWrapper>

      {/* Committee Placeholder */}
      <SectionWrapper>
        <h2 className="text-center font-serif text-3xl font-bold text-kodo-black">
          Our Committee
        </h2>
        <div className="kodo-section-divider mx-auto mt-4 max-w-xs"><span className="diamond" /></div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-kodo-gray-600">
          Kodokan Judo SA is governed by a volunteer committee of dedicated judo
          practitioners who give their time to support the growth and development
          of judo in South Australia.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["President", "Vice President", "Secretary", "Treasurer", "Technical Director", "Events Coordinator"].map(
            (role) => (
              <div
                key={role}
                className="kodo-card p-6 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-kodo-gray-100 text-kodo-gray-400">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 font-serif font-bold text-kodo-black">
                  {role}
                </h3>
                <p className="mt-1 text-sm text-kodo-gray-400">
                  To be announced
                </p>
              </div>
            )
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
