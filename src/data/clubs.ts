export interface Club {
  id: string;
  name: string;
  address: string;
  suburb: string;
  description: string;
  schedule: { day: string; session: string; time: string }[];
  established?: number;
  contact?: string;
  contactEmail?: string;
  website?: string;
  image?: string;
}

export const clubs: Club[] = [
  {
    id: "goshin-judo-kan",
    name: "Goshin Judo Kan",
    address: "917a South Rd",
    suburb: "Clarence Gardens",
    description:
      "One of South Australia's most established judo clubs, Goshin Judo Kan has been nurturing judoka of all levels since 1988. With a strong emphasis on traditional Kodokan technique and competitive development, the club welcomes beginners and experienced practitioners alike.",
    schedule: [
      { day: "Tuesday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Tuesday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
      { day: "Thursday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Thursday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
    ],
    established: 1988,
  },
  {
    id: "seacliff-judo-club",
    name: "Seacliff Judo Club",
    address: "32 Yacca Rd",
    suburb: "Brighton",
    description:
      "Located in the southern suburbs, Seacliff Judo Club offers a welcoming training environment for juniors and seniors. Under the guidance of experienced instructors, members develop strong foundations in judo technique and competition skills.",
    schedule: [
      { day: "Monday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Monday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
      { day: "Wednesday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Wednesday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
    ],
    contact: "Jason Kari",
  },
  {
    id: "kazoku-judokan",
    name: "Kazoku Judokan",
    address: "Byards Gym, Reynella East College",
    suburb: "Reynella East",
    description:
      "Founded in 2015 by James Bradbury, Kazoku Judokan (meaning 'Family Judo Hall') emphasises a family-friendly atmosphere where judoka of all ages train together. The club focuses on building character, fitness, and self-defence skills through traditional judo practice.",
    schedule: [
      { day: "Tuesday", session: "All Ages", time: "6:00 PM – 7:30 PM" },
      { day: "Friday", session: "All Ages", time: "6:00 PM – 7:30 PM" },
    ],
    established: 2015,
    contact: "James Bradbury",
  },
];
