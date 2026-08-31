"use client";

import { cn } from "@/lib/cn";
import { IconPin } from "@/components/brand/VFIcons";

export interface MapOpcion {
  t: string;
  s: string;
  p: string;
}

export interface MapScreenProps {
  origen: string;
  destino: string;
  eta: string;
  opciones: MapOpcion[];
  onSelect?: (index: number) => void;
  className?: string;
}

/**
 * tipo: "map" — sin proveedor de mapas real (eso lo conecta cada app);
 * aquí solo el placeholder visual + la lista de origen/destino/opciones.
 */
export function MapScreen({ origen, destino, eta, opciones, onSelect, className }: MapScreenProps) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="relative flex h-40 items-center justify-center bg-[var(--vfc-surface-2)]">
        <IconPin size={28} className="text-[var(--vfc-fg-muted)]" />
        <span className="absolute right-3 top-3 rounded-vfc bg-[var(--vfc-surface)] px-2 py-1 text-xs text-[var(--vfc-fg)] shadow-vfc">
          ETA {eta}
        </span>
      </div>

      <div className="border-b border-[var(--vfc-border)] px-4 py-3 text-sm">
        <p className="text-[var(--vfc-fg-muted)]">
          <span className="text-[var(--vfc-fg)]">{origen}</span> → {destino}
        </p>
      </div>

      <div className="flex-1 divide-y divide-[var(--vfc-border)] overflow-y-auto">
        {opciones.map((op, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-[var(--vfc-surface-2)]"
          >
            <div>
              <p className="text-sm font-medium text-[var(--vfc-fg)]">{op.t}</p>
              <p className="text-xs text-[var(--vfc-fg-muted)]">{op.s}</p>
            </div>
            <span className="text-sm font-medium text-[var(--vfc-fg)]">{op.p}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
