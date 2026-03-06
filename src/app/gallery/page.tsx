import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";
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

        <ScrollReveal>
          <div className="reveal mt-12 rounded-lg border border-dashed border-kodo-gray-200 bg-kodo-gray-50 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-kodo-gray-100">
              <svg className="h-5 w-5 text-kodo-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="mt-4 text-[15px] text-kodo-gray-500">
              Gallery photos coming soon. To contribute photos, please{" "}
              <a href="/contact" className="text-kodo-red transition-colors hover:text-kodo-red-light">
                contact us
              </a>.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
