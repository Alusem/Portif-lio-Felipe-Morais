"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Hero principal com stagger de entrada nos elementos de texto.
 * Background full-bleed com overlay escuro para legibilidade cinematográfica.
 */
export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const { headline, headlineEmphasis, tagline, manifesto, contact } = siteData;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src="/images/placeholders/hero.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-32 md:px-8 md:pb-36 md:pt-40"
        variants={staggerContainerVariants}
        initial={reducedMotion ? false : "hidden"}
        animate={reducedMotion ? undefined : "visible"}
      >
        <motion.p
          variants={staggerItemVariants}
          className="mb-6 text-xs uppercase tracking-[0.3em] text-accent"
        >
          {siteData.role}
        </motion.p>

        <motion.h1
          variants={staggerItemVariants}
          className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[1.05] text-cream"
        >
          {headline}
          <br />
          <span className="italic text-accent">{headlineEmphasis}</span>
        </motion.h1>

        <motion.p
          variants={staggerItemVariants}
          className="mt-6 max-w-2xl text-lg text-cream/80 md:text-xl"
        >
          {tagline}
        </motion.p>

        <motion.p
          variants={staggerItemVariants}
          className="mt-8 max-w-3xl text-base leading-relaxed text-cream/60 md:text-lg"
        >
          {manifesto}
        </motion.p>

        <motion.div
          variants={staggerItemVariants}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#contato" variant="primary">
            Vamos contar sua história
          </Button>
          <Button href={contact.instagram.url} variant="secondary" external>
            Instagram
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#trabalhos"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.25em] text-cream/50"
        animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Rolar para trabalhos"
      >
        Scroll Down
        <span className="block h-8 w-px bg-cream/30" />
      </motion.a>
    </section>
  );
}
