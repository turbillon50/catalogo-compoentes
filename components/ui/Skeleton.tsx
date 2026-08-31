import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Skeleton({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("vfc-skeleton rounded-vfc bg-[var(--vfc-surface-2)]", className)}
      {...rest}
    />
  );
}
