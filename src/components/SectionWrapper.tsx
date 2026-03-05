interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  pattern?: boolean;
  grain?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  pattern = false,
  grain = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 lg:py-24 ${
        dark ? "bg-kodo-black text-kodo-white" : ""
      } ${pattern ? "kodo-pattern" : ""} ${grain ? "kodo-grain" : ""} ${className}`}
    >
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
