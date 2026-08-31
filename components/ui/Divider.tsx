import { cn } from "@/lib/cn";

export interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className }: DividerProps) {
  if (!label) {
    return <hr className={cn("border-t border-[var(--vfc-border)]", className)} />;
  }
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="h-px flex-1 bg-[var(--vfc-border)]" />
      <span className="text-xs text-[var(--vfc-fg-muted)]">{label}</span>
      <div className="h-px flex-1 bg-[var(--vfc-border)]" />
    </div>
  );
}
