"use client";

import { useComposer } from "./useComposer";
import { ComposerBar } from "./ComposerBar";
import type { ComposerProps } from "./GrafitoComposer";

/** Porcelana — claro quirúrgico. Vive mejor sobre fondo de página #f7f7f8. */
export function PorcelanaComposer({ onSend, placeholder = "Pregunta lo que quieras", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="w-full max-w-lg">
      <div className="cmp cmp--porcelana">
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
        <p className="mt-2 text-center text-xs" style={{ color: "#d4d4d8" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
