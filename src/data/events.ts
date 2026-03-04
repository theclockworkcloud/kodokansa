export interface JudoEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  description: string;
  type: "competition" | "training" | "social" | "grading";
  registrationUrl?: string;
  isPast?: boolean;
}

export const events: JudoEvent[] = [
  {
    id: "sa-open-2026",
    title: "SA Open Judo Championships",
    date: "2026-05-16",
    location: "SA Aquatic & Leisure Centre, Marion",
    description:
      "The premier judo competition in South Australia, attracting competitors from across the state and interstate. All grades welcome. Individual and team events across all weight divisions.",
    type: "competition",
    registrationUrl: "#",
  },
  {
    id: "interclub-apr-2026",
    title: "Interclub Competition — Round 2",
    date: "2026-04-12",
    location: "Goshin Judo Kan, Clarence Gardens",
    description:
      "Regular interclub competition bringing together judoka from all Kodokan Judo SA member clubs. A great opportunity for newer competitors to gain experience in a supportive environment.",
    type: "competition",
  },
  {
    id: "training-day-mar-2026",
    title: "Combined Training Day",
    date: "2026-03-22",
    location: "Seacliff Judo Club, Brighton",
    description:
      "An open training session for all Kodokan Judo SA members. Guest instructors will cover advanced ne-waza techniques and competition preparation. All levels welcome.",
    type: "training",
  },
  {
    id: "akja-nationals-2026",
    title: "AKJA National Championships",
    date: "2026-07-18",
    endDate: "2026-07-20",
    location: "Melbourne Convention Centre, VIC",
    description:
      "The annual Australian Kodokan Judo Association National Championships. Kodokan Judo SA will be sending a team — contact your club instructor for selection details.",
    type: "competition",
    registrationUrl: "#",
  },
  {
    id: "grading-jun-2026",
    title: "Mid-Year Grading",
    date: "2026-06-14",
    location: "Goshin Judo Kan, Clarence Gardens",
    description:
      "Kyu grade examinations for all member clubs. Candidates must be nominated by their club instructor. Please ensure all registration forms are submitted at least two weeks prior.",
    type: "grading",
  },
  {
    id: "interclub-feb-2026",
    title: "Interclub Competition — Round 1",
    date: "2026-02-15",
    location: "Goshin Judo Kan, Clarence Gardens",
    description:
      "The first interclub round of 2026, kicking off the competition season. Great turnout from all member clubs with some excellent judo on display.",
    type: "competition",
    isPast: true,
  },
  {
    id: "summer-camp-2026",
    title: "Summer Training Camp",
    date: "2026-01-11",
    endDate: "2026-01-12",
    location: "Seacliff Judo Club, Brighton",
    description:
      "An intensive two-day training camp to start the year. Focused on refining throwing techniques and building fitness ahead of the competition season.",
    type: "training",
    isPast: true,
  },
];
