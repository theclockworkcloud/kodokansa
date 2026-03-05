import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kodokan Judo Association of South Australia. Enquiries about membership, events, and more.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question about judo, our clubs, or upcoming events? We'd love to hear from you."
        kanji="縁"
      />

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold text-kodo-black">
              Get in Touch
            </h2>
            <div className="kodo-section-divider mt-3 max-w-[6rem]"><span className="diamond" /></div>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-kodo-red/10 text-kodo-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-kodo-black">Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-kodo-gray-600 hover:text-kodo-red transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-kodo-red/10 text-kodo-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-kodo-black">Phone</h3>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-kodo-gray-600 hover:text-kodo-red transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-kodo-red/10 text-kodo-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-kodo-black">
                    Location
                  </h3>
                  <p className="text-sm text-kodo-gray-600">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-kodo-red/10 text-kodo-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-kodo-black">
                    Follow Us
                  </h3>
                  <div className="flex gap-3 text-sm">
                    {siteConfig.social.facebook && (
                      <a
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-kodo-gray-600 hover:text-kodo-red transition-colors"
                      >
                        Facebook
                      </a>
                    )}
                    {siteConfig.social.instagram && (
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-kodo-gray-600 hover:text-kodo-red transition-colors"
                      >
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-kodo-black">
              Send a Message
            </h2>
            <div className="kodo-section-divider mt-3 max-w-[6rem]"><span className="diamond" /></div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map placeholder */}
      <SectionWrapper className="bg-kodo-gray-50">
        <h2 className="text-center font-serif text-2xl font-bold text-kodo-black">
          Our Clubs
        </h2>
        <div className="kodo-section-divider mx-auto mt-3 max-w-xs"><span className="diamond" /></div>
        <div className="mt-8 flex h-64 items-center justify-center rounded-lg border border-kodo-gray-200 bg-kodo-gray-100 text-kodo-gray-400">
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
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <p className="mt-2 text-sm">
              Map embed — integrate Google Maps or similar
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
