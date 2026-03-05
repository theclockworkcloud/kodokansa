import type { JudoEvent } from "@/data/events";

interface EventCardProps {
  event: JudoEvent;
}

const typeStyles: Record<JudoEvent["type"], { bar: string; text: string }> = {
  competition: { bar: "bg-kodo-red", text: "text-kodo-red" },
  training: { bar: "bg-kodo-gold", text: "text-kodo-gold" },
  social: { bar: "bg-blue-500", text: "text-blue-600" },
  grading: { bar: "bg-emerald-500", text: "text-emerald-600" },
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
      className={`kodo-card group flex overflow-hidden ${
        event.isPast ? "opacity-70" : ""
      }`}
    >
      {/* Vertical type indicator bar */}
      <div className={`w-1 shrink-0 ${style.bar}`} />

      {/* Date badge — editorial Cormorant */}
      <div className="flex shrink-0 flex-col items-center justify-center bg-kodo-black px-5 py-4 text-center">
        <span className="font-serif text-3xl font-light leading-tight text-kodo-white">
          {day}
        </span>
        <span className="font-display text-[10px] font-medium tracking-[0.2em] text-kodo-gold uppercase">
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 p-5">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className={`text-xs font-medium uppercase tracking-wider ${style.text}`}>
            {event.type}
          </span>
          {event.isPast && (
            <span className="rounded-full bg-kodo-gray-100 px-2 py-0.5 text-xs text-kodo-gray-500">
              Past
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg font-semibold text-kodo-black">
          {event.title}
        </h3>

        <p className="mt-1 flex items-center text-sm text-kodo-gray-500">
          {/* Gold map pin */}
          <svg
            className="mr-1.5 inline-block h-4 w-4 text-kodo-gold"
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
            className="kodo-link mt-3 inline-block text-sm font-medium text-kodo-red"
          >
            Register &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
