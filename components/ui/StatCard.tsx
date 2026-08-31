"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconTrend } from "@/components/brand/VFIcons";

export interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({ label, value, delta, trend = "neutral", className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-surface)] p-5 shadow-vfc transition-shadow hover:shadow-vfc-lg",
        className
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--vfc-fg-muted)]">{label}</p>
      <p className="mt-1.5 text-2xl font-medium text-[var(--vfc-fg)]">{value}</p>
      {delta && (
        <p
          className={cn(
            "mt-1.5 flex items-center gap-1 text-xs font-medium",
            trend === "up" && "text-[var(--vfc-success)]",
            trend === "down" && "text-[var(--vfc-danger)]",
            trend === "neutral" && "text-[var(--vfc-fg-muted)]"
          )}
        >
          {trend !== "neutral" && (
            <IconTrend size={12} className={trend === "down" ? "rotate-180" : undefined} />
          )}
          {delta}
        </p>
      )}
    </motion.div>
  );
}
