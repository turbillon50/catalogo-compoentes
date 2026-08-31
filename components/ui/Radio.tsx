"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  className?: string;
}

export function RadioGroup({ name, value, onChange, options, className }: RadioGroupProps) {
  return (
    <div className={cn("space-y-2", className)} role="radiogroup">
      {options.map((opt) => {
        const isChecked = value === opt.value;
        return (
          <label key={opt.value} className="flex cursor-pointer items-center gap-2.5">
            <span className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[var(--vfc-border)] transition-colors has-[:checked]:border-[var(--vfc-accent)]">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={isChecked}
                onChange={() => onChange(opt.value)}
                className="absolute h-full w-full cursor-pointer appearance-none rounded-full"
              />
              <motion.span
                initial={false}
                animate={{ scale: isChecked ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 600, damping: 24 }}
                className="pointer-events-none h-2.5 w-2.5 rounded-full bg-[var(--vfc-accent)]"
              />
            </span>
            <span className="text-sm text-[var(--vfc-fg)]">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}
