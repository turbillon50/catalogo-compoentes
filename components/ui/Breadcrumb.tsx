import { cn } from "@/lib/cn";
import { IconChevR } from "@/components/brand/VFIcons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1 text-sm", className)}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {item.href && !last ? (
              <a href={item.href} className="text-[var(--vfc-fg-muted)] hover:text-[var(--vfc-fg)]">
                {item.label}
              </a>
            ) : (
              <span className={last ? "font-medium text-[var(--vfc-fg)]" : "text-[var(--vfc-fg-muted)]"}>
                {item.label}
              </span>
            )}
            {!last && <IconChevR size={12} className="text-[var(--vfc-fg-muted)]" />}
          </span>
        );
      })}
    </nav>
  );
}
