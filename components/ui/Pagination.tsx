import { cn } from "@/lib/cn";
import { IconChevL, IconChevR } from "@/components/brand/VFIcons";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
}

function pageList(page: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  if (page > 3) pages.push("...");
  for (let p = Math.max(2, page - 1); p <= Math.min(total - 1, page + 1); p++) pages.push(p);
  if (page < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

export function Pagination({ page, totalPages, onChange, className }: PaginationProps) {
  return (
    <nav className={cn("flex items-center gap-1", className)} aria-label="Paginación">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        className="grid h-8 w-8 place-items-center rounded-vfc border border-[var(--vfc-border)] text-[var(--vfc-fg)] disabled:cursor-not-allowed disabled:opacity-40 hover:border-[var(--vfc-border-strong)]"
        aria-label="Página anterior"
      >
        <IconChevL size={14} />
      </button>
      {pageList(page, totalPages).map((p, i) =>
        p === "..." ? (
          <span key={`e${i}`} className="px-1 text-sm text-[var(--vfc-fg-muted)]">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "h-8 min-w-8 rounded-vfc border px-2 text-sm font-medium transition-colors",
              p === page
                ? "border-[var(--vfc-accent)] bg-[var(--vfc-accent)] text-[var(--vfc-fg-on-accent)]"
                : "border-[var(--vfc-border)] text-[var(--vfc-fg)] hover:border-[var(--vfc-border-strong)]"
            )}
          >
            {p}
          </button>
        )
      )}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        className="grid h-8 w-8 place-items-center rounded-vfc border border-[var(--vfc-border)] text-[var(--vfc-fg)] disabled:cursor-not-allowed disabled:opacity-40 hover:border-[var(--vfc-border-strong)]"
        aria-label="Página siguiente"
      >
        <IconChevR size={14} />
      </button>
    </nav>
  );
}
