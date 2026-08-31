"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconLoader } from "@/components/brand/VFIcons";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  > {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--vfc-accent)] text-[var(--vfc-fg-on-accent)] border border-[var(--vfc-accent)] hover:bg-[var(--vfc-accent-hover)]",
  secondary:
    "bg-[var(--vfc-surface)] text-[var(--vfc-fg)] border border-[var(--vfc-border)] hover:border-[var(--vfc-border-strong)] hover:bg-[var(--vfc-surface-2)]",
  ghost:
    "bg-transparent text-[var(--vfc-fg)] border border-transparent hover:bg-[var(--vfc-surface-2)]",
  danger:
    "bg-[var(--vfc-danger)] text-[var(--vfc-danger-fg)] border border-[var(--vfc-danger)] hover:opacity-90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-5 text-base gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", loading = false, disabled, className, children, ...rest },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-vfc font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...rest}
      >
        {loading && <IconLoader size={16} className="animate-spin" />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
