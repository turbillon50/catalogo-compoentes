import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "default" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[var(--vfc-surface-2)] text-[var(--vfc-fg)]",
  success: "bg-[var(--vfc-success)] text-[var(--vfc-success-fg)]",
  warning: "bg-[var(--vfc-warning)] text-[var(--vfc-warning-fg)]",
  danger: "bg-[var(--vfc-danger)] text-[var(--vfc-danger-fg)]",
};

/** Etiqueta corta de estado (badge/pill). Mismo patrón que el badge inline de GridScreen. */
export function Badge({ variant = "default", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-vfc px-2 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
