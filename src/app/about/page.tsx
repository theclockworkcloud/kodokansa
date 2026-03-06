import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";
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
    romaji: "Seiryoku Zen'yo",
    english: "Maximum Efficiency, Minimum Effort",
    description:
      "The principle of making the best use of one's energy — physical, mental, and moral — for a good purpose.",
  },
  {
    japanese: "自他共栄",
    romaji: "Jita Kyoei",
    english: "Mutual Welfare and Benefit",
    description:
      "The principle that through mutual aid and concession, we can all prosper together and contribute to the betterment of society.",
  },
];

const beltPath = [
  { colour: "bg-white border border-kodo-gray-200", label: "White", rank: "6th Kyu" },
  { colour: "bg-yellow-400", label: "Yellow", rank: "5th Kyu" },
  { colour: "bg-orange-500", label: "Orange", rank: "4th Kyu" },
  { colour: "bg-green-600", label: "Green", rank: "3rd Kyu" },
  { colour: "bg-blue-600", label: "Blue", rank: "2nd Kyu" },
  { colour: "bg-amber-900", label: "Brown", rank: "1st Kyu" },
  { colour: "bg-kodo-black", label: "Black", rank: "Dan grades" },
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
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div className="reveal">
              <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                Our Purpose
              </p>
              <h2 className="mt-3 font-serif text-3xl text-kodo-black">
                Our Mission
              </h2>
              <div className="kodo-section-line mt-5" />
              <p className="mt-6 text-[15px] leading-relaxed text-kodo-gray-500">
                The Kodokan Judo Association of South Australia is a not-for-profit
                organisation committed to promoting and developing judo as it was
                intended by founder Professor Jigoro Kano. We serve the South
                Australian judo community through our network of member clubs,
                providing quality instruction and competition opportunities at both
                grassroots and elite level.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-kodo-gray-500">
                Our association upholds the traditional values and techniques of
                Kodokan Judo while embracing modern coaching methods. We believe
                judo is more than a sport — it is a system of physical, mental,
                and moral development that enriches the lives of all who practise
                it.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="reveal">
              <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                Our Story
              </p>
              <h2 className="mt-3 font-serif text-3xl text-kodo-black">
                Our History
              </h2>
              <div className="kodo-section-line mt-5" />
              <p className="mt-6 text-[15px] leading-relaxed text-kodo-gray-500">
                Kodokan Judo SA was established to bring together like-minded judo
                practitioners in South Australia who share a commitment to
                authentic Kodokan Judo. Our member clubs have deep roots in the
                Adelaide judo community, with some operating for over three
                decades.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-kodo-gray-500">
                Today, the association comprises five clubs across metropolitan
                Adelaide and beyond — Goshin Judo Kan, Seacliff Judo Club,
                Tatakai Martial Arts Academy, Tiger Judo Club, and Willunga Judo
                Club — serving hundreds of judoka from junior beginners to
                senior black belts.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Prof. Kano & Philosophy */}
      <section className="relative overflow-hidden bg-kodo-black py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(165,36,34,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 kodo-wave opacity-15" />
        <div className="absolute inset-0 kodo-grain" />
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 font-serif text-[12rem] leading-none text-white/[0.06] select-none">
          嘉納
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div className="reveal">
                <p className="font-display text-xs tracking-[0.3em] text-kodo-gold/70 uppercase">
                  Philosophy
                </p>
                <h2 className="mt-3 font-serif text-3xl text-kodo-white sm:text-4xl">
                  The Vision of Prof. Jigoro Kano
                </h2>
                <p className="mt-6 text-base leading-relaxed text-kodo-gray-400">
                  Professor Jigoro Kano (1860–1938) founded Kodokan Judo in 1882 in
                  Tokyo, Japan. More than a martial art or sport, Kano envisioned judo
                  as an educational system — a path to developing the complete person
                  through physical training, intellectual growth, and moral
                  cultivation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <blockquote className="reveal rounded-lg border border-white/[0.06] bg-white/[0.02] p-8">
                <div className="mb-4 font-serif text-4xl text-kodo-gold/30">&ldquo;</div>
                <p className="font-serif text-lg leading-relaxed text-kodo-gray-300 italic">
                  Judo is the way to the most effective use of both physical
                  and spiritual strength. By training you in attacks and defences it
                  refines your body and your soul and helps you make the spiritual
                  essence of Judo a part of your very being.
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-kodo-gold/20" />
                  <span className="text-sm text-kodo-gold/70">
                    Prof. Jigoro Kano
                  </span>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <SectionWrapper>
        <ScrollReveal>
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
              Foundations
            </p>
            <h2 className="mt-3 font-serif text-3xl text-kodo-black">
              Guiding Principles
            </h2>
            <div className="kodo-section-line mx-auto mt-5" />
          </div>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.romaji}
                className="reveal group rounded-lg border border-kodo-gray-100 bg-kodo-gray-50 p-8 text-center transition-all duration-300 hover:border-kodo-gold/30 hover:shadow-lg"
              >
                <div className="mb-3 font-serif text-5xl text-kodo-red/60 transition-colors group-hover:text-kodo-red/80 select-none">
                  {p.japanese}
                </div>
                <h3 className="font-serif text-xl text-kodo-black">
                  {p.romaji}
                </h3>
                <p className="mt-1 text-sm font-medium text-kodo-gold">
                  {p.english}
                </p>
                <div className="kodo-section-line mx-auto mt-4" />
                <p className="mt-4 text-[15px] leading-relaxed text-kodo-gray-500">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Belt Journey */}
      <section className="bg-kodo-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="reveal text-center">
              <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                Progression
              </p>
              <h2 className="mt-3 font-serif text-3xl text-kodo-black">
                The Belt Journey
              </h2>
              <div className="kodo-section-line mx-auto mt-5" />
              <p className="mt-6 mx-auto max-w-xl text-[15px] text-kodo-gray-500">
                In judo, coloured belts represent a student&apos;s progression from
                beginner to advanced. Each grade reflects not just technical skill,
                but growing understanding of judo&apos;s principles.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {beltPath.map((belt) => (
                <div key={belt.label} className="reveal flex flex-col items-center gap-2">
                  <div className={`h-3 w-20 rounded-full ${belt.colour}`} />
                  <span className="text-xs font-medium text-kodo-black">{belt.label}</span>
                  <span className="text-[10px] text-kodo-gray-400">{belt.rank}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AKJA Affiliation */}
      <SectionWrapper>
        <ScrollReveal>
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
              National Body
            </p>
            <h2 className="mt-3 font-serif text-3xl text-kodo-black">
              National Affiliation
            </h2>
            <div className="kodo-section-line mx-auto mt-5" />
            <p className="mt-6 text-[15px] leading-relaxed text-kodo-gray-500">
              Kodokan Judo SA is proudly affiliated with the{" "}
              <a
                href={siteConfig.affiliation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kodo-red transition-colors hover:text-kodo-red-light"
              >
                {siteConfig.affiliation.name}
              </a>
              . The AKJA is the Australian representative body for traditional
              Kodokan Judo, connecting clubs and associations across the country
              that are dedicated to preserving the art of judo as established by
              Prof. Jigoro Kano.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-kodo-gray-500">
              Through our AKJA affiliation, our members have access to national
              competitions, inter-state training camps, and grading opportunities
              recognised across Australia.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
