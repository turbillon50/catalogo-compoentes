import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Superficie de cristal — backdrop-blur + bisel de dos tonos (regla 7: el
 * borde de arriba más claro, la luz viene de arriba) + brillo interior.
 * El brillo es blanco fijo (efecto óptico, no semántico) — funciona igual
 * sobre cualquier acento, pensada para flotar sobre MeshBackground.
 */
export function GlassPanel({ className, children, ...rest }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-vfc-lg border border-t-white/[0.18] border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
