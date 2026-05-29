import type { Variants } from "framer-motion";

/** Duração padrão para transições suaves no scroll */
export const DEFAULT_TRANSITION = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

/** Fade-up acionado por viewport — usado em ScrollReveal */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
};

/** Container com stagger nos filhos — usado no Hero e grids */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Filho de container stagger — fade-up individual */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
};

/** Hover sutil em cards de projeto */
export const cardHoverTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};
