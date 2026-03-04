"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static form — integrate with Formspree or similar later
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-emerald-600"
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
        <h3 className="mt-3 font-serif text-lg font-bold text-emerald-800">
          Message Sent
        </h3>
        <p className="mt-1 text-sm text-emerald-700">
          Thank you for your enquiry. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-medium text-emerald-700 underline hover:text-emerald-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-kodo-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded border border-kodo-gray-200 px-4 py-2.5 text-sm text-kodo-black placeholder:text-kodo-gray-400 focus:border-kodo-gold focus:ring-1 focus:ring-kodo-gold focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-kodo-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded border border-kodo-gray-200 px-4 py-2.5 text-sm text-kodo-black placeholder:text-kodo-gray-400 focus:border-kodo-gold focus:ring-1 focus:ring-kodo-gold focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1 block text-sm font-medium text-kodo-black"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full rounded border border-kodo-gray-200 px-4 py-2.5 text-sm text-kodo-black placeholder:text-kodo-gray-400 focus:border-kodo-gold focus:ring-1 focus:ring-kodo-gold focus:outline-none"
          placeholder="Enquiry about..."
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-kodo-black"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded border border-kodo-gray-200 px-4 py-2.5 text-sm text-kodo-black placeholder:text-kodo-gray-400 focus:border-kodo-gold focus:ring-1 focus:ring-kodo-gold focus:outline-none resize-y"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded bg-kodo-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-kodo-red-light"
      >
        Send Message
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
      </button>
    </form>
  );
}
