"use client";

import { useState } from "react";
import { useComposer } from "./useComposer";
import { IconSend } from "@/components/brand/VFIcons";
import type { ComposerProps } from "./GrafitoComposer";

const GRAIN_URL =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22140%22 height=%22140%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22140%22 height=%22140%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')";

/** Crystal — vidrio negro absoluto, tier expresivo. Necesita el mesh de atrás para tener algo que refractar. */
export function CrystalComposer({ onSend, placeholder = "Escribe un mensaje…", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative w-full max-w-lg overflow-hidden rounded-[32px] p-8"
      style={{ background: "#050508" }}
    >
      {/* mesh de blobs oklch + grano — solo el fondo de esta tarjeta, no global */}
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
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{ opacity: 0.28, backgroundImage: GRAIN_URL }}
      />

      <div
        className="relative flex items-end gap-2 rounded-[26px] border p-2 pl-4 transition-all duration-150 ease-casa"
        style={{
          background: "rgba(14,14,18,.72)",
          borderColor: focused ? "rgba(155,231,255,.5)" : "rgba(255,255,255,.2)",
          backdropFilter: "blur(36px) saturate(200%)",
          WebkitBackdropFilter: "blur(36px) saturate(200%)",
          boxShadow: focused
            ? "0 0 0 1px rgba(255,255,255,.05), 0 24px 80px rgba(0,0,0,.75), inset 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.4), 0 0 0 3px rgba(155,231,255,.12), 0 0 60px rgba(155,231,255,.1)"
            : "0 0 0 1px rgba(255,255,255,.05), 0 24px 80px rgba(0,0,0,.75), inset 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.4)",
        }}
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="flex-1 resize-none bg-transparent py-2 text-[15px] leading-[1.6] text-[rgba(255,255,255,.92)] outline-none placeholder:text-[rgba(255,255,255,.35)]"
          style={{ caretColor: "#9be7ff" }}
        />
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          aria-label="Enviar"
          className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-150 ease-casa active:scale-90"
          style={{
            background: canSend ? "rgba(155,231,255,.9)" : "rgba(255,255,255,.08)",
            color: canSend ? "#0a0a0c" : "rgba(255,255,255,.3)",
          }}
        >
          <IconSend size={16} />
        </button>
      </div>
      {disclaimer && (
        <p className="relative mt-2 text-center text-xs" style={{ color: "rgba(255,255,255,.26)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
