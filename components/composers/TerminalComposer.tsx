"use client";

import { useComposer } from "./useComposer";
import type { ComposerProps } from "./GrafitoComposer";

/** Terminal — brutal CRT. Sin cmp-send: F1/F2 + EXEC. Scanlines y barrido son un extra sobre la receta base. */
export function TerminalComposer({ onSend, disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="relative w-full max-w-lg overflow-hidden">
      <style>{`
        @keyframes cmp-terminal-sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.06]"
        style={{ backgroundImage: "repeating-linear-gradient(#4ade80 0 1px, transparent 1px 3px)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-1/3"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(74,222,128,.06), transparent)",
          animation: "cmp-terminal-sweep 5s linear infinite",
        }}
      />

      <div className="cmp cmp--terminal relative">
        <textarea
          ref={textareaRef}
          rows={2}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="type your message_"
        />
        <div className="cmp-bar">
          <button type="button" className="cmp-btn--fkey">
            F1 AYUDA
          </button>
          <button type="button" className="cmp-btn--fkey">
            F2 LIMPIAR
          </button>
          <div className="grow" />
          <button type="button" className="cmp-btn--exec" data-ready={canSend} onClick={send}>
            EXEC ⏎
          </button>
        </div>
      </div>
      {disclaimer && (
        <p className="relative mt-3 text-center text-[10px]" style={{ color: "rgba(74,222,128,.28)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
