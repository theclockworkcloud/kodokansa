import type { Club } from "@/data/clubs";

interface ClubCardProps {
  club: Club;
  compact?: boolean;
}

export default function ClubCard({ club, compact = false }: ClubCardProps) {
  return (
    <div className="kodo-card group flex overflow-hidden">
      {/* Red accent strip on left */}
      <div className="w-1 shrink-0 bg-gradient-to-b from-kodo-red to-kodo-red-dark" />

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="font-serif text-xl font-semibold text-kodo-black">
              {club.name}
            </h3>
            <p className="mt-1 text-sm text-kodo-gray-500">
              {club.address}, {club.suburb}
            </p>
          </div>
          {club.established && (
            <span className="shrink-0 rounded bg-kodo-gray-100 px-2 py-1 text-xs font-medium text-kodo-gray-500">
              Est. {club.established}
            </span>
          )}
        </div>

        {/* Description */}
        {!compact && (
          <p className="mb-4 text-sm leading-relaxed text-kodo-gray-600">
            {club.description}
          </p>
        )}

        {/* Schedule */}
        <div className="mb-4">
          <h4 className="font-display mb-2 text-xs font-medium tracking-[0.15em] text-kodo-gold uppercase">
            Training Times
          </h4>
          <div className="space-y-0.5">
            {club.schedule.map((slot, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded px-2 py-1 text-sm ${
                  i % 2 === 0 ? "bg-kodo-gray-50" : ""
                }`}
              >
                <span className="w-24 font-medium text-kodo-black">
                  {slot.day}
                </span>
                <span className="text-kodo-gray-500">
                  {slot.session}: {slot.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        {(club.contact || club.contactPhone || club.contactEmail) && (
          <div className="border-t border-kodo-gray-100 pt-3 space-y-1">
            {club.contact && (
              <p className="text-sm text-kodo-gray-500">
                <span className="font-medium text-kodo-black">Contact:</span>{" "}
                {club.contact}
              </p>
            )}
            {club.contactPhone && (
              <p className="text-sm text-kodo-gray-500">
                <span className="font-medium text-kodo-black">Phone:</span>{" "}
                <a href={`tel:${club.contactPhone.replace(/\s/g, "")}`} className="kodo-link hover:text-kodo-red transition-colors">
                  {club.contactPhone}
                </a>
              </p>
            )}
            {club.contactEmail && (
              <p className="text-sm text-kodo-gray-500">
                <span className="font-medium text-kodo-black">Email:</span>{" "}
                <a href={`mailto:${club.contactEmail}`} className="kodo-link hover:text-kodo-red transition-colors">
                  {club.contactEmail}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
