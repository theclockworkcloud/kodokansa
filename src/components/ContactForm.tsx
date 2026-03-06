"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full rounded bg-kodo-gray-50 border border-kodo-gray-200 px-4 py-2.5 text-sm text-kodo-black placeholder:text-kodo-gray-400 transition-colors focus:border-kodo-gold focus:outline-none focus:ring-1 focus:ring-kodo-gold/30 disabled:opacity-50";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error: insertError } = await supabase
      .from("kodokan_contacts")
      .insert([
        {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          subject: formData.get("subject") as string,
          message: formData.get("message") as string,
        },
      ]);

    setSubmitting(false);

    if (insertError) {
      setError("Something went wrong. Please try again or contact us directly.");
      console.error("Contact form error:", insertError);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-emerald-50 p-8 text-center">
        <svg
          className="mx-auto h-10 w-10 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="mt-3 font-serif text-lg text-emerald-800">
          Message Sent
        </h3>
        <p className="mt-1 text-sm text-emerald-700">
          Thank you for your enquiry. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-emerald-700 transition-colors hover:text-emerald-900"
        >
          Send another message &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-kodo-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={submitting}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-kodo-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={submitting}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm text-kodo-black">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          disabled={submitting}
          className={inputClass}
          placeholder="Enquiry about..."
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-kodo-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={submitting}
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="kodo-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
        {!submitting && (
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </button>
    </form>
  );
}
