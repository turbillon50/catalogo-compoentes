"use client";

import { useComposer } from "./useComposer";
import type { ComposerProps } from "./GrafitoComposer";

function wordCount(text: string): number {
  const trimmed = text.trim();
  return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
}

/** Editorial — marfil, lujo silencioso. Sin cmp-bar: dos hairlines y botón de tinta. */
export function EditorialComposer({ onSend, disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="w-full max-w-lg p-8" style={{ background: "#f4efe6" }}>
      <p
        style={{
          color: "#2a251c",
          fontSize: 20,
          fontStyle: "italic",
          fontFamily: "'Newsreader', serif",
          marginBottom: 20,
        }}
      >
        ¿En qué puedo ayudarte hoy?
      </p>

      <div className="cmp cmp--editorial">
        <textarea
          ref={textareaRef}
          rows={2}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Escribe aquí…"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs" style={{ color: "#a99c82" }}>
          {wordCount(value)} palabras
        </span>
        <button type="button" className="cmp-btn--tinta" data-ready={canSend} onClick={send}>
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
