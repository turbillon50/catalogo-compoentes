"use client";

import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconCheck, IconWarn, IconInfo } from "@/components/brand/VFIcons";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  > {
  variant?: AlertVariant;
  title?: string;
}

const variantStyle: Record<AlertVariant, { border: string; icon: string; Icon: typeof IconInfo }> = {
  info: { border: "border-l-[var(--vfc-fg-muted)]", icon: "text-[var(--vfc-fg-muted)]", Icon: IconInfo },
  success: { border: "border-l-[var(--vfc-success)]", icon: "text-[var(--vfc-success)]", Icon: IconCheck },
  warning: { border: "border-l-[var(--vfc-warning)]", icon: "text-[var(--vfc-warning)]", Icon: IconWarn },
  danger: { border: "border-l-[var(--vfc-danger)]", icon: "text-[var(--vfc-danger)]", Icon: IconWarn },
};

/** Mensaje inline persistente — entra con motion real. Para notificaciones flotantes ver Toast. */
export function Alert({ variant = "info", title, className, children, ...rest }: AlertProps) {
  const s = variantStyle[variant];
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn(
        "flex gap-3 rounded-vfc border border-[var(--vfc-border)] border-l-4 bg-[var(--vfc-surface)] p-4",
        s.border,
        className
      )}
      role="alert"
      {...rest}
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
        className={cn("mt-0.5 shrink-0", s.icon)}
      >
        <s.Icon size={18} />
      </motion.span>
      <div className="text-sm">
        {title && <p className="mb-0.5 font-medium text-[var(--vfc-fg)]">{title}</p>}
        <div className="text-[var(--vfc-fg-muted)]">{children}</div>
      </div>
    </motion.div>
  );
}
