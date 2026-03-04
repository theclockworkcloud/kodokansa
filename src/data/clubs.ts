export interface Club {
  id: string;
  name: string;
  address: string;
  suburb: string;
  description: string;
  schedule: { day: string; session: string; time: string }[];
  established?: number;
  contact?: string;
  contactPhone?: string;
  contactEmail?: string;
  website?: string;
  facebook?: string;
  image?: string;
}

export const clubs: Club[] = [
  {
    id: "goshin-judo-kan",
    name: "Goshin Judo Kan",
    address: "917A South Rd",
    suburb: "Clarence Gardens",
    description:
      "One of South Australia's most established judo clubs, Goshin Judo Kan has been nurturing judoka of all levels for decades. With a strong emphasis on traditional Kodokan technique and competitive development, the club welcomes beginners and experienced practitioners alike.",
    schedule: [
      { day: "Tuesday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Tuesday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
      { day: "Thursday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Thursday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
    ],
    contactPhone: "0416 115 195",
  },
  {
    id: "seacliff-judo-club",
    name: "Seacliff Judo Club",
    address: "43 Yacca Rd",
    suburb: "Seacliff",
    description:
      "Seacliff Judo Club offers the \"gentle way\" of Judo focusing on the art of self defence for male and female players from the age of 4 years. Our aim is to teach self confidence, discipline, etiquette and coordination in a safe and friendly atmosphere. Judo is an Olympic sport that is practised worldwide with our members and Sensei training and competing nationally and internationally.",
    schedule: [
      { day: "Monday", session: "Young Juniors (4–5 yrs)", time: "5:15 PM – 5:45 PM" },
      { day: "Monday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Monday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
      { day: "Wednesday", session: "Juniors", time: "6:00 PM – 7:00 PM" },
      { day: "Wednesday", session: "Seniors", time: "7:00 PM – 8:30 PM" },
    ],
    contact: "Jason Kari",
    contactPhone: "0432 760 834",
    contactEmail: "judo@seacliffrec.org.au",
  },
  {
    id: "tatakai-martial-arts-academy",
    name: "Tatakai Martial Arts Academy",
    address: "U2/61 O'Sullivan Beach Rd",
    suburb: "Lonsdale",
    description:
      "Tatakai Martial Arts Academy provides judo training in a dedicated martial arts facility in Adelaide's southern suburbs. Training sessions focus on developing technique, fitness, and competitive skills in a supportive environment.",
    schedule: [
      { day: "Monday", session: "All Levels", time: "7:00 PM – 8:30 PM" },
      { day: "Thursday", session: "All Levels", time: "7:00 PM – 8:30 PM" },
    ],
    contactPhone: "0408 311 772",
  },
  {
    id: "tiger-judo-club",
    name: "Tiger Judo Club",
    address: "Turramurra Recreation Centre, 1000 Lower North East Rd",
    suburb: "Highbury",
    description:
      "Tiger Judo Club operates from the Turramurra Recreation Centre in Adelaide's north-east. With three training sessions per week including a Saturday morning class, the club offers flexibility for members of all ages to develop their judo skills.",
    schedule: [
      { day: "Monday", session: "All Levels", time: "6:30 PM – 8:00 PM" },
      { day: "Wednesday", session: "All Levels", time: "7:00 PM – 8:30 PM" },
      { day: "Saturday", session: "All Levels", time: "9:30 AM – 11:00 AM" },
    ],
    contactPhone: "0412 864 804",
  },
  {
    id: "willunga-judo-club",
    name: "Willunga Judo Club",
    address: "Willunga",
    suburb: "Willunga",
    description:
      "Willunga Judo Club offers judo training in the southern Fleurieu region. With dedicated beginner and advanced classes running every Wednesday evening, the club caters to newcomers and experienced judoka alike.",
    schedule: [
      { day: "Wednesday", session: "Beginners", time: "6:15 PM – 7:30 PM" },
      { day: "Wednesday", session: "Advanced", time: "7:30 PM – 8:30 PM" },
    ],
    contactPhone: "0407 798 803",
  },
];
