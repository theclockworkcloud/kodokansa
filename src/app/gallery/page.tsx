import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Kodokan Judo SA competitions, training sessions, gradings, and events.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-kodo-black py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-kodo-white sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-kodo-gray-300">
            Moments from competitions, training sessions, and community events.
          </p>
        </div>
        <div className="mt-8 kodo-line" />
      </div>

      <SectionWrapper>
        <GalleryGrid />

        <div className="mt-12 rounded-lg border border-kodo-gray-200 bg-kodo-gray-50 p-6 text-center">
          <p className="text-sm text-kodo-gray-500">
            Photos are placeholders. To add real photos, place image files in{" "}
            <code className="rounded bg-kodo-gray-200 px-1.5 py-0.5 text-xs">
              public/gallery/
            </code>{" "}
            and update{" "}
            <code className="rounded bg-kodo-gray-200 px-1.5 py-0.5 text-xs">
              src/data/gallery.ts
            </code>
            .
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
