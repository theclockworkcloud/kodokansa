import Image from "next/image";
import type { Club } from "@/data/clubs";

interface ClubCardProps {
  club: Club;
  compact?: boolean;
}

export default function ClubCard({ club, compact = false }: ClubCardProps) {
  return (
    <div className="kodo-card group p-6 sm:p-8">
      {/* Header with logo */}
      <div className="mb-4 flex items-start gap-4 sm:gap-5">
        {club.image && (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-kodo-gray-50 p-1.5 sm:h-20 sm:w-20 sm:p-2">
            <Image
              src={club.image}
              alt={`${club.name} logo`}
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-xl text-kodo-black sm:text-2xl">
              {club.name}
            </h3>
            {club.established && (
              <span className="shrink-0 rounded bg-kodo-gray-50 px-2.5 py-1 text-xs text-kodo-gray-400">
                Est. {club.established}
              </span>
            )}
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-kodo-gray-400">
            <svg className="h-3.5 w-3.5 shrink-0 text-kodo-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {club.address}, {club.suburb}
          </p>
        </div>
      </div>

      {/* Description */}
      {!compact && (
        <p className="mb-5 text-[15px] leading-relaxed text-kodo-gray-500">
          {club.description}
        </p>
      )}

      {/* Schedule */}
      <div className="mb-4">
        <h4 className="mb-2.5 text-xs tracking-[0.15em] text-kodo-gold uppercase">
          Training Times
        </h4>
        <div className="rounded-md bg-kodo-gray-50 p-3">
          <div className="space-y-px">
            {club.schedule.map((slot, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded px-2 py-1.5 text-sm odd:bg-white"
              >
                <span className="w-24 shrink-0 font-medium text-kodo-black">
                  {slot.day}
                </span>
                <span className="text-kodo-gray-500">
                  {slot.session}: {slot.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      {(club.contact || club.contactPhone || club.contactEmail) && (
        <div className="border-t border-kodo-gray-100 pt-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {club.contact && (
              <p className="text-sm text-kodo-gray-400">
                <span className="text-kodo-black">{club.contact}</span>
              </p>
            )}
            {club.contactPhone && (
              <a
                href={`tel:${club.contactPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1 text-sm text-kodo-gray-400 transition-colors hover:text-kodo-red"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {club.contactPhone}
              </a>
            )}
            {club.contactEmail && (
              <a
                href={`mailto:${club.contactEmail}`}
                className="inline-flex items-center gap-1 text-sm text-kodo-gray-400 transition-colors hover:text-kodo-red"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {club.contactEmail}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
