import { siteData } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/ui/PackageCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PackagesSection() {
  return (
    <section id="pacotes" className="border-t border-cream/10 bg-surface/20 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Serviços"
            title="Pacotes de"
            emphasis="captação"
            description="Opções pensadas para diferentes necessidades — do conteúdo para redes sociais ao documentário de impacto completo."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {siteData.packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
