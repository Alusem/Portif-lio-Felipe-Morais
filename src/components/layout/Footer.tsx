import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { InstagramButton } from "@/components/ui/InstagramButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  const { contact, name, ctaFooter } = siteData;

  return (
    <footer id="contato" className="border-t border-cream/10 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <ScrollReveal className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            Contato
          </p>
          <h2 className="font-display text-4xl leading-tight text-accent md:text-6xl lg:text-7xl">
            {ctaFooter}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-cream/70 md:text-lg">
            Entre em contato para conversarmos sobre seu próximo projeto
            audiovisual.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button href={`mailto:${contact.email}`} variant="primary">
              {contact.email}
            </Button>
            <Button href={contact.whatsappUrl} variant="secondary" external>
              WhatsApp
            </Button>
            <InstagramButton href={contact.instagram.url} />
          </div>

          <div className="mt-16 flex flex-col items-center gap-2 border-t border-cream/10 pt-8 text-sm text-cream/50">
            <p>{contact.phone}</p>
            <p>
              © {new Date().getFullYear()} {name}. Todos os direitos reservados.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
