"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconX } from "@/components/brand/VFIcons";

export interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}

/** Chip removible — sale con motion real al quitarse, no desaparece de golpe. */
export function Tag({ children, onRemove, className }: TagProps) {
  return (
    <motion.span
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--vfc-border)] bg-[var(--vfc-surface-2)] py-1 pl-3 text-xs font-medium text-[var(--vfc-fg)]",
        onRemove ? "pr-1.5" : "pr-3",
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Quitar"
          className="grid h-4 w-4 place-items-center rounded-full text-[var(--vfc-fg-muted)] transition-colors hover:bg-[var(--vfc-danger)] hover:text-[var(--vfc-danger-fg)]"
        >
          <IconX size={10} />
        </button>
      )}
    </motion.span>
  );
}
