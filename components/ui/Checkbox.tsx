"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconCheck } from "@/components/brand/VFIcons";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, checked, onChange, ...rest }, ref) => {
    const checkboxId = id ?? rest.name;
    return (
      <label htmlFor={checkboxId} className={cn("inline-flex cursor-pointer items-center gap-2.5", className)}>
        <span className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="peer absolute z-10 h-full w-full cursor-pointer appearance-none rounded-[5px] border border-[var(--vfc-border)] bg-[var(--vfc-surface)] transition-colors checked:border-[var(--vfc-accent)] checked:bg-[var(--vfc-accent)]"
            {...rest}
          />
          <AnimatePresence>
            {checked && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 600, damping: 22 }}
                className="pointer-events-none absolute z-20 text-[var(--vfc-fg-on-accent)]"
              >
                <IconCheck size={12} />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        {label && <span className="text-sm text-[var(--vfc-fg)]">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
