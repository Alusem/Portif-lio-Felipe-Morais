import Image from "next/image";
import { siteData } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  const { about } = siteData;

  return (
    <section id="sobre" className="border-t border-cream/10">
      <div className="grid min-h-[70vh] grid-cols-1 lg:grid-cols-2">
        <ScrollReveal className="flex flex-col items-center justify-center bg-surface/60 px-8 py-20 text-center md:px-16 lg:py-28">
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-cream/60">
            {about.label}
          </p>
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            {about.name}
          </h2>
          <div className="mt-10 max-w-lg space-y-6 text-sm leading-relaxed text-cream/75 md:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src={about.profileImage}
            alt={`Retrato de ${about.name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
