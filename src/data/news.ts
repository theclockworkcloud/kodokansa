export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  author?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "2026-season-kickoff",
    title: "2026 Season Kicks Off with Strong Interclub Turnout",
    date: "2026-02-16",
    excerpt:
      "The first interclub competition of 2026 saw excellent participation from all three member clubs, setting the tone for an exciting year ahead.",
    content: `The 2026 judo season got off to a flying start with Round 1 of the Interclub Competition, hosted by Kazoku Judokan at Reynella East.

Over 40 judoka from Goshin Judo Kan, Seacliff Judo Club, and Kazoku Judokan took to the mat in what was one of the best-attended interclub events in recent memory.

Highlights included some outstanding ippon throws from the junior divisions and closely contested senior bouts that had spectators on the edge of their seats.

"It's fantastic to see the depth of talent developing across all three clubs," said the event coordinator. "The level of judo on display today bodes well for the SA Open later this year."

Congratulations to all competitors for their excellent sportsmanship and fighting spirit. Round 2 will be held at Goshin Judo Kan on 12 April.`,
    author: "Kodokan Judo SA",
  },
  {
    slug: "summer-camp-wrap-up",
    title: "Summer Training Camp a Great Success",
    date: "2026-01-13",
    excerpt:
      "Over 30 judoka attended the two-day summer camp at Seacliff Judo Club, with intensive training sessions focused on throwing technique and competition preparation.",
    content: `The annual Summer Training Camp was held over the weekend of 11–12 January at Seacliff Judo Club in Brighton, with over 30 judoka from across Kodokan Judo SA's member clubs attending.

Saturday's sessions focused on ashi-waza (foot techniques), with participants working through a progressive series of drills designed to develop timing and kuzushi. Sunday shifted to competition preparation, including randori sessions and tactical workshops.

The camp was open to all ages and grades, and it was particularly encouraging to see so many junior members participating alongside the seniors.

Thank you to Seacliff Judo Club for hosting and to all the instructors who gave their time. A great way to prepare for the 2026 competition season!`,
    author: "Kodokan Judo SA",
  },
  {
    slug: "new-committee-members-2026",
    title: "Kodokan Judo SA Welcomes New Committee Members",
    date: "2025-12-08",
    excerpt:
      "The annual general meeting saw the election of new committee members, bringing fresh energy and ideas to the association's leadership team.",
    content: `At the 2025 Annual General Meeting, Kodokan Judo SA elected several new members to its committee, strengthening the association's governance and bringing new perspectives to its leadership.

The new committee is committed to growing judo participation in South Australia, improving competition opportunities, and strengthening connections with the Australian Kodokan Judo Association (AKJA).

Key priorities for 2026 include:
- Expanding junior development programmes across all clubs
- Hosting additional interclub events and training days
- Improving communication with members through the new website
- Sending a strong team to the AKJA National Championships

We welcome all new committee members and thank the outgoing members for their dedicated service to judo in South Australia.`,
    author: "Kodokan Judo SA",
  },
  {
    slug: "akja-nationals-2025-results",
    title: "SA Judoka Shine at AKJA Nationals",
    date: "2025-09-22",
    excerpt:
      "Kodokan Judo SA representatives brought home multiple medals from the 2025 AKJA National Championships in Sydney.",
    content: `Kodokan Judo SA's representatives delivered outstanding performances at the 2025 AKJA National Championships held in Sydney over the weekend.

The SA team, comprising judoka from all three member clubs, competed across multiple weight categories in both junior and senior divisions. The team returned with several medals and, importantly, gained invaluable experience competing against judoka from across Australia.

The standard of judo across the nation continues to rise, and our SA judoka more than held their own. Several junior members showed significant improvement from previous years, demonstrating the effectiveness of the training programmes running across our clubs.

Congratulations to all who competed and represented Kodokan Judo SA with pride. Planning for the 2026 Nationals in Melbourne is already underway.`,
    author: "Kodokan Judo SA",
  },
];
