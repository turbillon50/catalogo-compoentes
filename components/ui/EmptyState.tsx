import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { IconInfo } from "@/components/brand/VFIcons";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center px-6 py-14 text-center", className)}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--vfc-surface-2)] text-[var(--vfc-fg-muted)]">
        {icon ?? <IconInfo size={22} />}
      </div>
      <h3 className="text-base font-medium text-[var(--vfc-fg)]">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-xs text-sm text-[var(--vfc-fg-muted)]">{description}</p>
      )}
      {actionLabel && (
        <Button variant="secondary" size="sm" className="mt-5" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
