"use client";

import { Newsreader } from "next/font/google";
import { useComposer } from "./useComposer";
import type { ComposerProps } from "./GrafitoComposer";

const newsreader = Newsreader({ subsets: ["latin"], style: ["italic"], weight: ["400", "500"] });

function wordCount(text: string): number {
  const trimmed = text.trim();
  return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
}

/** Editorial — marfil, lujo silencioso. El campo NO es una caja: dos hairlines. */
export function EditorialComposer({ onSend, disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="w-full max-w-lg rounded-[2px] p-8" style={{ background: "#f4efe6" }}>
      <p className={newsreader.className} style={{ color: "#2a251c", fontSize: 20, marginBottom: 20 }}>
        ¿En qué puedo ayudarte hoy?
      </p>
      <div
        className="py-3"
        style={{ borderTop: "1px solid #c9bda4", borderBottom: "1px solid #c9bda4" }}
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Escribe aquí…"
          className="w-full resize-none bg-transparent text-[15px] leading-[1.6] outline-none"
          style={{ color: "#2a251c", caretColor: "#2a251c" }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs" style={{ color: "#a99c82" }}>
          {wordCount(value)} palabras
        </span>
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          className="px-5 py-2 text-xs font-medium uppercase transition-colors duration-150 ease-casa"
          style={{
            borderRadius: 2,
            letterSpacing: "0.12em",
            border: `1px solid ${canSend ? "#2a251c" : "#c9bda4"}`,
            color: canSend ? "#2a251c" : "#a99c82",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            if (!canSend) return;
            e.currentTarget.style.background = "#2a251c";
            e.currentTarget.style.color = "#f4efe6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = canSend ? "#2a251c" : "#a99c82";
          }}
        >
          Enviar
        </button>
      </div>
      {disclaimer && (
        <p className="mt-4 text-center text-xs" style={{ color: "rgba(42,37,28,.28)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
