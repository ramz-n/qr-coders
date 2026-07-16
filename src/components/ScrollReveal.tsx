import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28, filter: "blur(6px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  );
}