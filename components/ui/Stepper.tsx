"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconCheck } from "@/components/brand/VFIcons";

export interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <ol className={cn("flex items-center", className)}>
      {steps.map((label, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={{
                  scale: active ? 1.12 : 1,
                  borderColor: done || active ? "var(--vfc-accent)" : "var(--vfc-border)",
                  backgroundColor: done ? "var(--vfc-accent)" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 26 }}
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-medium",
                  done ? "text-[var(--vfc-fg-on-accent)]" : active ? "text-[var(--vfc-accent)]" : "text-[var(--vfc-fg-muted)]"
                )}
              >
                {done ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 600, damping: 20 }}
                  >
                    <IconCheck size={13} />
                  </motion.span>
                ) : (
                  i + 1
                )}
              </motion.div>
              <span
                className={cn(
                  "whitespace-nowrap text-xs",
                  active || done ? "text-[var(--vfc-fg)]" : "text-[var(--vfc-fg-muted)]"
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="relative mx-2 h-px flex-1 bg-[var(--vfc-border)]">
                <motion.div
                  initial={false}
                  animate={{ scaleX: done ? 1 : 0 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 bg-[var(--vfc-accent)]"
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
