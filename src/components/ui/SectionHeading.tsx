interface SectionHeadingProps {
  label?: string;
  title: string;
  emphasis?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  emphasis,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {label && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          {label}
        </p>
      )}
      <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
        {title}
        {emphasis && (
          <>
            {" "}
            <span className="italic text-accent">{emphasis}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-cream/70 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
