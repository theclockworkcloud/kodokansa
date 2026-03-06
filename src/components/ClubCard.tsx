import type { Club } from "@/data/clubs";

interface ClubCardProps {
  club: Club;
  compact?: boolean;
}

export default function ClubCard({ club, compact = false }: ClubCardProps) {
  return (
    <div className="kodo-card group p-6">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="font-serif text-xl text-kodo-black">
            {club.name}
          </h3>
          <p className="mt-1 text-sm text-kodo-gray-400">
            {club.address}, {club.suburb}
          </p>
        </div>
        {club.established && (
          <span className="shrink-0 text-xs text-kodo-gray-400">
            Est. {club.established}
          </span>
        )}
      </div>

      {/* Description */}
      {!compact && (
        <p className="mb-5 text-sm leading-relaxed text-kodo-gray-500">
          {club.description}
        </p>
      )}

      {/* Schedule */}
      <div className="mb-4">
        <h4 className="mb-2 text-xs tracking-[0.15em] text-kodo-gold uppercase">
          Training Times
        </h4>
        <div className="space-y-px">
          {club.schedule.map((slot, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-1.5 text-sm"
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
        <div className="border-t border-kodo-gray-100 pt-4 space-y-1">
          {club.contact && (
            <p className="text-sm text-kodo-gray-400">
              <span className="text-kodo-black">Contact:</span>{" "}
              {club.contact}
            </p>
          )}
          {club.contactPhone && (
            <p className="text-sm text-kodo-gray-400">
              <a href={`tel:${club.contactPhone.replace(/\s/g, "")}`} className="transition-colors hover:text-kodo-red">
                {club.contactPhone}
              </a>
            </p>
          )}
          {club.contactEmail && (
            <p className="text-sm text-kodo-gray-400">
              <a href={`mailto:${club.contactEmail}`} className="transition-colors hover:text-kodo-red">
                {club.contactEmail}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
