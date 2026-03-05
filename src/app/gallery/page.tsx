import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Kodokan Judo SA competitions, training sessions, gradings, and events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Moments from competitions, training sessions, and community events."
        kanji="写"
      />

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
