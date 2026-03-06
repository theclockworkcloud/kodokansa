"use client";

import { useState } from "react";
import {
  galleryImages,
  galleryCategories,
  type GalleryImage,
} from "@/data/gallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 text-sm transition-colors ${
              activeCategory === cat.id
                ? "bg-kodo-black text-kodo-white"
                : "bg-kodo-gray-100 text-kodo-gray-500 hover:text-kodo-black"
            }`}
            style={{ borderRadius: "2px" }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setLightboxImage(image)}
            className="group relative aspect-square overflow-hidden bg-kodo-gray-100 transition-all duration-500 hover:shadow-lg"
          >
            <div className="flex h-full w-full items-center justify-center text-kodo-gray-300 transition-transform duration-500 ease-out group-hover:scale-105">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-kodo-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-xs text-white">{image.alt}</p>
              {image.event && (
                <p className="text-xs text-kodo-gold/70">{image.event}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <p className="py-12 text-center text-sm text-kodo-gray-400">
          No photos in this category yet.
        </p>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-kodo-black/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 text-kodo-gray-400 transition-colors hover:text-kodo-white"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-h-[80vh] max-w-4xl overflow-hidden bg-kodo-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex aspect-video w-full items-center justify-center text-kodo-gray-400">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-2 text-sm">{lightboxImage.alt}</p>
                {lightboxImage.event && (
                  <p className="text-sm text-kodo-gold/70">
                    {lightboxImage.event}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
