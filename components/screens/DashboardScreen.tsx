"use client";

import { cn } from "@/lib/cn";

export interface DashboardMov {
  t: string;
  s: string;
  m: string;
  neg?: boolean;
}

export interface DashboardScreenProps {
  saldo: string;
  cambio: string;
  acciones: string[];
  movs: DashboardMov[];
  onAccion?: (index: number) => void;
  className?: string;
}

/** tipo: "dashboard" — saldo/métrica principal + acciones rápidas + lista de movimientos. */
export function DashboardScreen({ saldo, cambio, acciones, movs, onAccion, className }: DashboardScreenProps) {
  return (
    <div className={cn("p-4", className)}>
      <div className="mb-4 rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-surface)] p-5 text-center shadow-vfc">
        <p className="text-3xl font-medium text-[var(--vfc-fg)]">{saldo}</p>
        <p className="mt-1 text-sm text-[var(--vfc-fg-muted)]">{cambio}</p>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2">
        {acciones.map((a, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onAccion?.(i)}
            className="rounded-vfc border border-[var(--vfc-border)] py-2.5 text-xs font-medium text-[var(--vfc-fg)] hover:border-[var(--vfc-border-strong)] hover:bg-[var(--vfc-surface-2)]"
          >
            {a}
          </button>
        ))}
      </div>

      <div className="divide-y divide-[var(--vfc-border)] rounded-vfc-lg border border-[var(--vfc-border)]">
        {movs.map((mv, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-medium text-[var(--vfc-fg)]">{mv.t}</p>
              <p className="text-xs text-[var(--vfc-fg-muted)]">{mv.s}</p>
            </div>
            <span
              className={cn(
                "text-sm font-medium",
                mv.neg ? "text-[var(--vfc-danger)]" : "text-[var(--vfc-fg)]"
              )}
            >
              {mv.m}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
