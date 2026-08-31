import { cn } from "@/lib/cn";

export interface MeshBackgroundProps {
  className?: string;
}

/**
 * Fondo mesh vivo — 3 blobs radiales que respiran lento detrás del
 * contenido. Puro CSS (sin canvas, sin imagen): nítido a cualquier
 * resolución y sin costo de rasterizado. Pensado para data-theme="craft"
 * sobre negro absoluto, pero lee --vfc-accent así que sigue el acento de
 * cualquier tema que lo envuelva.
 */
export function MeshBackground({ className }: MeshBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="vfc-mesh-blob vfc-mesh-blob-1" />
      <div className="vfc-mesh-blob vfc-mesh-blob-2" />
      <div className="vfc-mesh-blob vfc-mesh-blob-3" />
    </div>
  );
}
