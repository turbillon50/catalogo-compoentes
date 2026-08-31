import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Table({ className, ...rest }: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto rounded-vfc-lg border border-[var(--vfc-border)]">
      <table className={cn("w-full border-collapse text-sm", className)} {...rest} />
    </div>
  );
}

export function TableHeader({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("bg-[var(--vfc-surface-2)]", className)} {...rest} />;
}

export function TableBody({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("divide-y divide-[var(--vfc-border)]", className)} {...rest} />;
}

export function TableRow({ className, ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("hover:bg-[var(--vfc-surface-2)]", className)} {...rest} />;
}

export function TableHead({ className, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-[var(--vfc-fg-muted)]",
        className
      )}
      {...rest}
    />
  );
}

export function TableCell({ className, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("px-4 py-3 text-[var(--vfc-fg)]", className)} {...rest} />;
}
