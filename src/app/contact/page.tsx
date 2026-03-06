import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollReveal from "@/components/ScrollReveal";
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
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <div className="reveal">
                <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                  Reach Out
                </p>
                <h2 className="mt-3 font-serif text-2xl text-kodo-black">
                  Get in Touch
                </h2>
                <div className="kodo-section-line mt-5" />

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kodo-gray-50">
                      <svg className="h-4 w-4 text-kodo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-kodo-black">Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[15px] text-kodo-gray-500 transition-colors hover:text-kodo-red"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kodo-gray-50">
                      <svg className="h-4 w-4 text-kodo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-kodo-black">Phone</p>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-[15px] text-kodo-gray-500 transition-colors hover:text-kodo-red"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kodo-gray-50">
                      <svg className="h-4 w-4 text-kodo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-kodo-black">Location</p>
                      <p className="text-[15px] text-kodo-gray-500">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kodo-gray-50">
                      <svg className="h-4 w-4 text-kodo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-kodo-black">Social</p>
                      <div className="flex gap-3 text-[15px] text-kodo-gray-500">
                        {siteConfig.social.facebook && (
                          <a
                            href={siteConfig.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-kodo-red"
                          >
                            Facebook
                          </a>
                        )}
                        {siteConfig.social.instagram && (
                          <a
                            href={siteConfig.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-kodo-red"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="reveal">
                <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
                  Enquiry
                </p>
                <h2 className="mt-3 font-serif text-2xl text-kodo-black">
                  Send a Message
                </h2>
                <div className="kodo-section-line mt-5" />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
