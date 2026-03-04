import type { JudoEvent } from "@/data/events";

interface EventCardProps {
  event: JudoEvent;
}

const typeStyles: Record<JudoEvent["type"], { bg: string; text: string }> = {
  competition: { bg: "bg-kodo-red/10", text: "text-kodo-red" },
  training: { bg: "bg-kodo-gold/10", text: "text-kodo-gold" },
  social: { bg: "bg-blue-50", text: "text-blue-700" },
  grading: { bg: "bg-emerald-50", text: "text-emerald-700" },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventCard({ event }: EventCardProps) {
  const style = typeStyles[event.type];
  const dateObj = new Date(event.date + "T00:00:00");
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString("en-AU", { month: "short" });

  return (
    <div
      className={`group flex gap-4 rounded-lg border bg-white p-5 transition-all hover:shadow-lg ${
        event.isPast
          ? "border-kodo-gray-200 opacity-70"
          : "border-kodo-gray-200 hover:border-kodo-red/30"
      }`}
    >
      {/* Date badge */}
      <div className="flex shrink-0 flex-col items-center justify-center rounded bg-kodo-black px-3 py-2 text-center">
        <span className="text-2xl font-bold leading-tight text-kodo-white">
          {day}
        </span>
        <span className="text-xs font-medium tracking-wider text-kodo-gold uppercase">
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}
          >
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          {event.isPast && (
            <span className="rounded-full bg-kodo-gray-100 px-2 py-0.5 text-xs text-kodo-gray-500">
              Past
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg font-bold text-kodo-black">
          {event.title}
        </h3>

        <p className="mt-1 text-sm text-kodo-gray-500">
          <svg
            className="mr-1 inline-block h-4 w-4"
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
          {event.location}
        </p>

        <p className="mt-1 text-xs text-kodo-gray-400">
          {formatDate(event.date)}
          {event.endDate && ` — ${formatDate(event.endDate)}`}
        </p>

        <p className="mt-2 text-sm leading-relaxed text-kodo-gray-600">
          {event.description}
        </p>

        {event.registrationUrl && !event.isPast && (
          <a
            href={event.registrationUrl}
            className="mt-3 inline-block text-sm font-medium text-kodo-red hover:text-kodo-red-light transition-colors"
          >
            Register &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
