"use client";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export interface ListItem {
  t: string;
  s: string;
  m?: string;
}

export interface ListScreenProps {
  items: ListItem[];
  cta?: string;
  onSelect?: (index: number) => void;
  onCta?: () => void;
  className?: string;
}

/** tipo: "list" — filas título/subtítulo/meta, con CTA opcional al fondo (carrito, cuenta, favoritos...). */
export function ListScreen({ items, cta, onSelect, onCta, className }: ListScreenProps) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="flex-1 divide-y divide-[var(--vfc-border)] overflow-y-auto">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-150 ease-casa hover:bg-[var(--vfc-surface-2)]"
          >
            <div>
              <p className="text-sm font-medium text-[var(--vfc-fg)]">{it.t}</p>
              <p className="text-xs text-[var(--vfc-fg-muted)]">{it.s}</p>
            </div>
            {it.m && <span className="shrink-0 pl-3 text-sm tabular-nums text-[var(--vfc-fg-muted)]">{it.m}</span>}
          </button>
        ))}
      </div>
      {cta && (
        <div className="border-t border-[var(--vfc-border)] p-3">
          <Button variant="primary" className="w-full" onClick={onCta}>
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
}
