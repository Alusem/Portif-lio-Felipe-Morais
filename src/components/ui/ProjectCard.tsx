"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
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
        whileHover={reducedMotion ? undefined : { scale: 1.03 }}
        transition={cardHoverTransition}
      >
        <ProjectVideo
          src={project.videoUrl}
          poster={project.posterUrl}
          title={project.title}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent/80">
          Documentário
        </p>
        <h3 className="font-display text-2xl leading-tight text-cream md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
