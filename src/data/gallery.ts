export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  event?: string;
  date?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: "all", name: "All" },
  { id: "competition", name: "Competitions" },
  { id: "training", name: "Training" },
  { id: "grading", name: "Gradings" },
  { id: "social", name: "Social" },
];

// Placeholder images — replace with real photos
// To add images: place them in /public/gallery/ and update this file
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/placeholder-1.jpg",
    alt: "Judo throw during competition",
    category: "competition",
    event: "SA Open 2025",
    date: "2025-05-17",
  },
  {
    id: "2",
    src: "/gallery/placeholder-2.jpg",
    alt: "Junior judoka training session",
    category: "training",
    event: "Summer Camp 2026",
    date: "2026-01-11",
  },
  {
    id: "3",
    src: "/gallery/placeholder-3.jpg",
    alt: "Grading ceremony",
    category: "grading",
    event: "End of Year Grading 2025",
    date: "2025-11-15",
  },
  {
    id: "4",
    src: "/gallery/placeholder-4.jpg",
    alt: "Interclub competition action",
    category: "competition",
    event: "Interclub Round 1 2026",
    date: "2026-02-15",
  },
  {
    id: "5",
    src: "/gallery/placeholder-5.jpg",
    alt: "Training session at Goshin Judo Kan",
    category: "training",
    date: "2025-10-20",
  },
  {
    id: "6",
    src: "/gallery/placeholder-6.jpg",
    alt: "Team photo at AKJA Nationals",
    category: "competition",
    event: "AKJA Nationals 2025",
    date: "2025-09-22",
  },
  {
    id: "7",
    src: "/gallery/placeholder-7.jpg",
    alt: "Club social event",
    category: "social",
    date: "2025-12-14",
  },
  {
    id: "8",
    src: "/gallery/placeholder-8.jpg",
    alt: "Ne-waza practice",
    category: "training",
    date: "2025-08-05",
  },
  {
    id: "9",
    src: "/gallery/placeholder-9.jpg",
    alt: "Medal presentation",
    category: "competition",
    event: "SA Open 2025",
    date: "2025-05-17",
  },
];
