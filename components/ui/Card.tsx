"use client";

import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Si es true, agrega hover lift + sombra — usalo para tarjetas clicables. */
  interactive?: boolean;
}

/**
 * Contenedor base tematizable. `interactive` agrega el hover lift
 * (Framer Motion) para tarjetas que llevan a otro lugar; sin ese prop
 * es una superficie estatica sin animacion de hover.
 */
export function Card({ interactive = false, className, children, ...rest }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      whileHover={interactive ? { y: -3 } : undefined}
      className={cn(
        "rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-surface)] p-5 shadow-vfc",
        interactive && "cursor-pointer transition-shadow hover:shadow-vfc-lg",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function CardTitle({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-[var(--vfc-fg)] font-medium text-base mb-1", className)}
      {...rest}
    />
  );
}

export function CardDescription({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[var(--vfc-fg-muted)] text-sm leading-relaxed", className)}
      {...rest}
    />
  );
}
