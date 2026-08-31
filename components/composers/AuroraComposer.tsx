"use client";

import { useState } from "react";
import { useComposer } from "./useComposer";
import { IconSend } from "@/components/brand/VFIcons";
import type { ComposerProps } from "./GrafitoComposer";

const CHIPS: { label: string; bg: string; fg: string }[] = [
  { label: "Ideas", bg: "#fce7f3", fg: "#9d174d" },
  { label: "Código", bg: "#e0e7ff", fg: "#3730a3" },
  { label: "Escribir", bg: "#cffafe", fg: "#155e75" },
];

/** Aurora — cálido humano. Fondo animado, orbe como avatar, send que rota al hover. */
export function AuroraComposer({ onSend, placeholder = "Escribe un mensaje…", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="w-full max-w-lg overflow-hidden rounded-[28px] p-6"
      style={{
        background: "linear-gradient(120deg, #fdf2f8, #eef2ff, #ecfeff, #fdf2f8)",
        backgroundSize: "300% 300%",
        animation: "cmp-aurora-bg 12s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes cmp-aurora-bg { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      `}</style>

      <div className="mb-3 flex flex-wrap gap-2">
        {CHIPS.map((c) => (
          <span
            key={c.label}
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: c.bg, color: c.fg }}
          >
            {c.label}
          </span>
        ))}
      </div>

      <div
        className="flex items-end gap-3 rounded-[24px] border-[1.5px] p-3 pl-4 transition-all duration-150 ease-casa"
        style={{
          background: "rgba(255,255,255,.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: focused ? "#6366f1" : "#ffffff",
          transform: focused ? "scale(1.015)" : "scale(1)",
        }}
      >
        <div
          className="h-8 w-8 shrink-0 rounded-full"
          style={{ background: "conic-gradient(from 90deg, #f472b6, #818cf8, #22d3ee, #f472b6)" }}
        />
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="flex-1 resize-none bg-transparent py-1.5 text-[15px] leading-[1.6] text-[#3730a3] outline-none placeholder:text-[#a5b4fc]"
          style={{ caretColor: "#6366f1" }}
        />
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          aria-label="Enviar"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-150 ease-casa hover:-rotate-[8deg] active:scale-90"
          style={{
            background: canSend ? "linear-gradient(135deg,#f472b6,#818cf8)" : "#e0e7ff",
            color: canSend ? "#ffffff" : "#a5b4fc",
          }}
        >
          <IconSend size={16} />
        </button>
      </div>
      {disclaimer && (
        <p className="mt-3 text-center text-xs" style={{ color: "rgba(55,48,163,.35)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
