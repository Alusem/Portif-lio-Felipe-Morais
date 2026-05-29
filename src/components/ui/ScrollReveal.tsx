"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  /** Margem do viewport para disparar a animação antes do elemento entrar totalmente */
  viewportMargin?: string;
}

/**
 * Wrapper reutilizável que aplica fade-up quando o elemento entra no viewport.
 * Respeita prefers-reduced-motion desativando transforms.
 */
export function ScrollReveal({
  children,
  viewportMargin = "-80px",
  className,
  ...props
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: viewportMargin }}
      variants={fadeUpVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
