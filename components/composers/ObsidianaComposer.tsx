"use client";

import { useComposer } from "./useComposer";
import { ComposerBar } from "./ComposerBar";
import type { ComposerProps } from "./GrafitoComposer";

/** Obsidiana — anillo degradado de 1px, solo aparece al enfocar (envuelto en .cmp-ring). */
export function ObsidianaComposer({ onSend, placeholder = "Pregunta lo que quieras", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="w-full max-w-lg">
      <div className="cmp-ring">
        <div className="cmp cmp--obsidiana">
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
      </div>
      {disclaimer && (
        <p className="mt-2 text-center text-xs" style={{ color: "rgba(255,255,255,.26)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
