import type { ServicePackage } from "@/types";
import { ScrollReveal } from "./ScrollReveal";

interface PackageCardProps {
  pkg: ServicePackage;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <ScrollReveal
      className={`relative flex flex-col border p-8 md:p-10 ${
        pkg.highlighted
          ? "border-accent/40 bg-surface/80"
          : "border-cream/10 bg-surface/40"
      }`}
    >
      {pkg.highlighted && (
        <span className="absolute right-6 top-6 rounded-full border border-accent/40 px-3 py-1 text-xs uppercase tracking-wider text-accent">
          Recomendado
        </span>
      )}

      <span className="font-display text-5xl text-cream/20 md:text-6xl">
        {pkg.number}
      </span>

      <div className="mt-6">
        <h3 className="font-display text-3xl text-cream md:text-4xl">
          {pkg.name}
        </h3>
        <p className="mt-1 text-lg italic text-accent">{pkg.subtitle}</p>
      </div>

      <p className="mt-6 font-display text-2xl text-cream/90">{pkg.priceRange}</p>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-relaxed text-cream/70 md:text-base"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
