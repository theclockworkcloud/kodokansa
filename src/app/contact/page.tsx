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
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <p className="font-display text-xs tracking-[0.3em] text-kodo-gold uppercase">
              Reach Out
            </p>
            <h2 className="mt-3 font-serif text-2xl text-kodo-black">
              Get in Touch
            </h2>
            <div className="kodo-section-line mt-5" />

            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="font-medium text-kodo-black">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-kodo-gray-500 transition-colors hover:text-kodo-red"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <p className="font-medium text-kodo-black">Phone</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-kodo-gray-500 transition-colors hover:text-kodo-red"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <p className="font-medium text-kodo-black">Location</p>
                <p className="text-kodo-gray-500">{siteConfig.contact.address}</p>
              </div>
              <div>
                <p className="font-medium text-kodo-black">Social</p>
                <div className="flex gap-3 text-kodo-gray-500">
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
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
        </div>
      </SectionWrapper>
    </>
  );
}
