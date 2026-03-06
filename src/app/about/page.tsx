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
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
              Our Purpose
            </p>
            <h2 className="mt-3 font-serif text-3xl text-kodo-black">
              Our Mission
            </h2>
            <div className="kodo-section-line mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-kodo-gray-500">
              The Kodokan Judo Association of South Australia is a not-for-profit
              organisation committed to promoting and developing judo as it was
              intended by founder Professor Jigoro Kano. We serve the South
              Australian judo community through our network of member clubs,
              providing quality instruction and competition opportunities at both
              grassroots and elite level.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-kodo-gray-500">
              Our association upholds the traditional values and techniques of
              Kodokan Judo while embracing modern coaching methods. We believe
              judo is more than a sport — it is a system of physical, mental,
              and moral development that enriches the lives of all who practise
              it.
            </p>
          </div>
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
              Our Story
            </p>
            <h2 className="mt-3 font-serif text-3xl text-kodo-black">
              Our History
            </h2>
            <div className="kodo-section-line mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-kodo-gray-500">
              Kodokan Judo SA was established to bring together like-minded judo
              practitioners in South Australia who share a commitment to
              authentic Kodokan Judo. Our member clubs have deep roots in the
              Adelaide judo community, with some operating for over three
              decades.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-kodo-gray-500">
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
      <section className="relative overflow-hidden bg-kodo-black py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(165,36,34,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 kodo-wave opacity-15" />
        <div className="absolute inset-0 kodo-grain" />
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 font-serif text-[12rem] leading-none text-white/[0.02] select-none">
          嘉納
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
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
          <blockquote className="mx-auto mt-10 max-w-xl border-l border-kodo-gold/40 pl-6 text-left">
            <p className="font-serif text-lg text-kodo-gray-300 italic">
              &ldquo;Judo is the way to the most effective use of both physical
              and spiritual strength. By training you in attacks and defences it
              refines your body and your soul and helps you make the spiritual
              essence of Judo a part of your very being.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-kodo-gray-500">
              — Prof. Jigoro Kano
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Principles */}
      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
            Foundations
          </p>
          <h2 className="mt-3 font-serif text-3xl text-kodo-black">
            Guiding Principles
          </h2>
          <div className="kodo-section-line mx-auto mt-5" />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.romaji} className="text-center">
              <div className="mb-3 font-serif text-4xl text-kodo-red/25 select-none">
                {p.japanese}
              </div>
              <h3 className="font-serif text-xl text-kodo-black">
                {p.romaji}
              </h3>
              <p className="mt-1 text-sm text-kodo-gold">
                {p.english}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-kodo-gray-500">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* AKJA Affiliation */}
      <section className="bg-kodo-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
            National Body
          </p>
          <h2 className="mt-3 font-serif text-3xl text-kodo-black">
            National Affiliation
          </h2>
          <div className="kodo-section-line mx-auto mt-5" />
          <p className="mt-6 text-sm leading-relaxed text-kodo-gray-500">
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
          <p className="mt-4 text-sm leading-relaxed text-kodo-gray-500">
            Through our AKJA affiliation, our members have access to national
            competitions, inter-state training camps, and grading opportunities
            recognised across Australia.
          </p>
        </div>
      </section>
    </>
  );
}
