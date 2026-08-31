"use client";

import { useComposer } from "./useComposer";
import { ComposerBar } from "./ComposerBar";
import type { ComposerProps } from "./GrafitoComposer";

const GRAIN_URL =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22140%22 height=%22140%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22140%22 height=%22140%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')";

/** Crystal — vidrio, tier expresivo. Requiere fondo oscuro; aquí con su propio mesh oklch + grano. */
export function CrystalComposer({ onSend, placeholder = "Pregunta lo que quieras", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] p-8" style={{ background: "#050508" }}>
      <div className="pointer-events-none absolute inset-0" style={{ filter: "blur(70px) saturate(220%)" }}>
        <div
          className="absolute -left-1/4 -top-1/4 h-3/4 w-3/4 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.19 250) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 h-3/4 w-3/4 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.24 320) 0%, transparent 70%)" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ opacity: 0.28, backgroundImage: GRAIN_URL }} />

      <div className="cmp cmp--crystal relative">
        <textarea
          ref={textareaRef}
          rows={2}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <ComposerBar canSend={canSend} onSend={send} />
      </div>
      {disclaimer && (
        <p className="relative mt-2 text-center text-xs" style={{ color: "rgba(255,255,255,.26)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
