"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface LoupeProps {
  children: ReactNode;
  /** Factor de aumento. Default 2.5. */
  zoom?: number;
  /** Diámetro del lente en px. Default 160. */
  size?: number;
  className?: string;
}

/**
 * Lupa que sigue al cursor y magnifica el contenido de abajo. Clona el
 * children dentro de un lente circular escalado con CSS transform — sin
 * canvas, sin capturar pantalla, nítido a cualquier resolución (4K
 * incluido, porque es geometría vectorial/DOM, no un bitmap).
 */
export function Loupe({ children, zoom = 2.5, size = 160, className }: LoupeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
    >
      {children}

      {pos && (
        <div
          className="pointer-events-none absolute overflow-hidden rounded-full border-2 border-white/25 bg-[var(--vfc-surface)] shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
          style={{ width: size, height: size, left: pos.x - size / 2, top: pos.y - size / 2 }}
        >
          <div
            style={{
              transform: `scale(${zoom}) translate(${size / (2 * zoom) - pos.x}px, ${
                size / (2 * zoom) - pos.y
              }px)`,
              transformOrigin: "top left",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
