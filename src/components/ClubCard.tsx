import type { Club } from "@/data/clubs";

interface ClubCardProps {
  club: Club;
  compact?: boolean;
}

export default function ClubCard({ club, compact = false }: ClubCardProps) {
  return (
    <div className="group rounded-lg border border-kodo-gray-200 bg-white p-6 transition-all hover:border-kodo-red/30 hover:shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-kodo-black">
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
        <h4 className="mb-2 text-xs font-bold tracking-wider text-kodo-gold uppercase">
          Training Times
        </h4>
        <div className="space-y-1">
          {club.schedule.map((slot, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
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
      {club.contact && (
        <div className="border-t border-kodo-gray-100 pt-3">
          <p className="text-sm text-kodo-gray-500">
            <span className="font-medium text-kodo-black">Contact:</span>{" "}
            {club.contact}
          </p>
        </div>
      )}
    </div>
  );
}
