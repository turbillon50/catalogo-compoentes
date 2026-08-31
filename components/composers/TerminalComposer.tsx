"use client";

import { useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { useComposer } from "./useComposer";
import type { ComposerProps } from "./GrafitoComposer";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

/** Terminal — brutal CRT. Todo JetBrains Mono, sin radio, glow fosforescente. */
export function TerminalComposer({ onSend, disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${mono.className} relative w-full max-w-lg overflow-hidden p-4`} style={{ background: "#050805" }}>
      <style>{`
        @keyframes cmp-terminal-sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(#4ade80 0 1px, transparent 1px 3px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-1/3"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(74,222,128,.06), transparent)",
          animation: "cmp-terminal-sweep 5s linear infinite",
        }}
      />

      <div className="relative mb-2 flex gap-2 text-xs" style={{ color: "rgba(74,222,128,.5)" }}>
        <span className="border px-1.5 py-0.5" style={{ borderColor: "rgba(74,222,128,.35)" }}>
          F1 AYUDA
        </span>
        <span className="border px-1.5 py-0.5" style={{ borderColor: "rgba(74,222,128,.35)" }}>
          F2 LIMPIAR
        </span>
      </div>

      <div
        className="relative flex items-start gap-2 border p-3 transition-colors duration-150 ease-casa"
        style={{ borderColor: focused ? "rgba(74,222,128,.7)" : "rgba(74,222,128,.35)", borderRadius: 0 }}
      >
        <span
          className="pt-0.5 text-sm font-bold"
          style={{ color: "#4ade80", textShadow: "0 0 8px rgba(74,222,128,.8)" }}
        >
          {">"}
        </span>
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="type your message_"
          className="flex-1 resize-none bg-transparent text-sm outline-none"
          style={{ color: "#c8ffd4", caretColor: "#4ade80" }}
        />
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          className="shrink-0 border px-2 py-1 text-xs font-bold transition-colors duration-150 ease-casa"
          style={
            canSend
              ? { background: "#4ade80", color: "#050805", borderColor: "#4ade80" }
              : { background: "transparent", color: "rgba(74,222,128,.4)", borderColor: "rgba(74,222,128,.35)" }
          }
        >
          EXEC ⏎
        </button>
      </div>
      {disclaimer && (
        <p className="relative mt-3 text-center text-[10px]" style={{ color: "rgba(74,222,128,.28)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
