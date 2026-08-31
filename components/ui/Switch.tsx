"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Switch({ checked, onChange, label, disabled, className }: SwitchProps) {
  return (
    <label className={cn("inline-flex items-center gap-2.5", disabled && "opacity-50", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-6 w-10 shrink-0 rounded-full border transition-colors duration-200",
          checked
            ? "border-[var(--vfc-accent)] bg-[var(--vfc-accent)]"
            : "border-[var(--vfc-border)] bg-[var(--vfc-surface-2)]"
        )}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 700, damping: 32 }}
          className="absolute top-0.5 h-4 w-4 rounded-full bg-[var(--vfc-surface)] shadow-vfc"
          style={{ left: checked ? 19 : 2 }}
        />
      </button>
      {label && <span className="text-sm text-[var(--vfc-fg)]">{label}</span>}
    </label>
  );
}
