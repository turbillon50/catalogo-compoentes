"use client";

import { useState } from "react";
import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { cn } from "@/lib/cn";

export interface LiquidButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  > {}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

/**
 * Botón con microinteracción "cristal/agua": barrido de luz al hover
 * (como refracción) + onda líquida que se expande desde el punto exacto
 * del click. Pensado para el preset craft sobre GlassPanel/MeshBackground,
 * pero solo usa blancos translúcidos así que funciona sobre cualquier fondo
 * oscuro.
 */
export function LiquidButton({ className, children, onClick, ...rest }: LiquidButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={cn(
        "group relative overflow-hidden rounded-vfc-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-[var(--vfc-fg)] backdrop-blur-md transition-all duration-300",
        "shadow-[0_0_0_0_var(--vfc-accent)] hover:border-white/25 hover:bg-white/[0.1] hover:shadow-[0_0_28px_-4px_var(--vfc-accent)]",
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      {/* barrido de luz + tinte del acento (efecto cristal/agua) */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--vfc-accent)]/50 to-transparent opacity-0 blur-sm transition-[transform,opacity] delay-75 duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />

      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--vfc-accent) 70%, white) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            animation: "vfc-ripple 700ms ease-out forwards",
          }}
        />
      ))}
      <span className="relative">{children}</span>
    </button>
  );
}
