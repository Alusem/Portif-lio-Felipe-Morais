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

function getWatchLabel(url: string): string {
  if (url.includes("instagram.com")) return "Ver no Instagram";
  if (url.includes("youtu")) return "Assistir no YouTube";
  return "Assistir";
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const watchUrl = project.watchUrl?.trim();
  const hasLink = Boolean(watchUrl);

  const className = `group relative block aspect-[4/5] overflow-hidden rounded-sm bg-surface ${
    hasLink ? "cursor-pointer" : "cursor-default"
  }`;

  const animationProps = {
    initial: { opacity: 0, y: 24 } as const,
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true, margin: "-60px" } as const,
    transition: { ...cardHoverTransition, delay: index * 0.08 },
  };

  const body = (
    <>
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
        {hasLink && (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {getWatchLabel(watchUrl!)}
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
        )}
      </div>
    </>
  );

  if (hasLink) {
    return (
      <motion.a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${getWatchLabel(watchUrl!)}: ${project.title}`}
        className={className}
        {...animationProps}
      >
        {body}
      </motion.a>
    );
  }

  return (
    <motion.article className={className} {...animationProps}>
      {body}
    </motion.article>
  );
}
