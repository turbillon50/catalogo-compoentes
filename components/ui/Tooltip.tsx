"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface TooltipProps {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom";
  className?: string;
}

/** Etiqueta al hover/focus — entra con resorte real, no aparece de golpe. Con caret apuntando al trigger. */
export function Tooltip({ content, children, side = "top", className }: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, scale: 0.9, y: side === "top" ? 4 : -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: side === "top" ? 4 : -4 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={cn(
              "pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-vfc bg-[var(--vfc-border-strong)] px-2.5 py-1.5 text-xs font-medium text-[var(--vfc-bg)] shadow-vfc-lg",
              side === "top" ? "bottom-full mb-2.5" : "top-full mt-2.5"
            )}
          >
            {content}
            <span
              className={cn(
                "absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[var(--vfc-border-strong)]",
                side === "top" ? "-bottom-1" : "-top-1"
              )}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
