"use client";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export interface CalendarSlot {
  h: string;
  t: string;
  dispo: boolean;
}

export interface CalendarScreenProps {
  titulo: string;
  slots: CalendarSlot[];
  cta: string;
  onSelect?: (index: number) => void;
  onCta?: () => void;
  className?: string;
}

/** tipo: "calendar" — agenda/reserva por horario, con CTA para confirmar el slot elegido. */
export function CalendarScreen({ titulo, slots, cta, onSelect, onCta, className }: CalendarScreenProps) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="p-4">
        <h2 className="text-base font-medium text-[var(--vfc-fg)]">{titulo}</h2>
      </div>
      <div className="flex-1 space-y-2 overflow-y-auto px-4">
        {slots.map((sl, i) => (
          <button
            key={i}
            type="button"
            disabled={!sl.dispo}
            onClick={() => onSelect?.(i)}
            className={cn(
              "flex w-full items-center justify-between rounded-vfc border px-4 py-3 text-left",
              sl.dispo
                ? "border-[var(--vfc-border)] transition-colors duration-150 ease-casa hover:border-[var(--vfc-border-strong)] hover:bg-[var(--vfc-surface-2)]"
                : "cursor-not-allowed border-[var(--vfc-border)] opacity-40"
            )}
          >
            <span className="text-sm font-medium tabular-nums text-[var(--vfc-fg)]">{sl.h}</span>
            <span className="text-sm text-[var(--vfc-fg-muted)]">{sl.t}</span>
          </button>
        ))}
      </div>
      <div className="border-t border-[var(--vfc-border)] p-3">
        <Button variant="primary" className="w-full" onClick={onCta}>
          {cta}
        </Button>
      </div>
    </div>
  );
}
