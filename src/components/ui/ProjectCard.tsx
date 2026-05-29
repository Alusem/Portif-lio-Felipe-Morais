"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { cardHoverTransition } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-surface"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...cardHoverTransition, delay: index * 0.08 }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={reducedMotion ? undefined : { scale: 1.05 }}
        transition={cardHoverTransition}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent/80">
          Documentário
        </p>
        <h3 className="font-display text-2xl leading-tight text-cream md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {project.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Ver projeto
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </motion.article>
  );
}
