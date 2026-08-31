"use client";

import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface CardProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  > {
  interactive?: boolean;
}

/**
 * Regla 7 — bisel de dos tonos: borde normal + border-top más claro
 * (la luz viene de arriba) + el highlight interior ya viene en shadow-vfc.
 * Regla 8 — p-6 (24px), no el p-5 (20px) de antes, que no era del ritmo.
 */
export function Card({ interactive = false, className, children, ...rest }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: [0.19, 1, 0.22, 1] }}
      whileHover={interactive ? { y: -3 } : undefined}
      className={cn(
        "rounded-vfc-lg border border-t-[var(--vfc-border-top)] border-[var(--vfc-border)] bg-[var(--vfc-surface)] p-6 shadow-vfc",
        interactive && "cursor-pointer transition-shadow duration-150 ease-casa hover:shadow-vfc-lg",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function CardTitle({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-[var(--vfc-fg)] font-medium text-base mb-1", className)} {...rest} />;
}

// Regla 6 — cuerpo mínimo 15px/1.6: text-body en vez de text-sm, esto SÍ es
// copy que se lee (a diferencia de labels/badges, que se quedan chicos).
export function CardDescription({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-[var(--vfc-fg-secondary)] text-body", className)} {...rest} />;
}
