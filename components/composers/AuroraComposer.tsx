"use client";

import { useComposer } from "./useComposer";
import { ComposerBar } from "./ComposerBar";
import type { ComposerProps } from "./GrafitoComposer";

/** Aurora — cálido humano. Fondo de página animado (aurora-bg) + tarjeta de cristal. */
export function AuroraComposer({ onSend, placeholder = "Pregunta lo que quieras", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="aurora-bg w-full max-w-lg rounded-[32px] p-6">
      <div className="cmp cmp--aurora">
        <textarea
          ref={textareaRef}
          rows={2}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <ComposerBar canSend={canSend} onSend={send} pillLabel="Ideas" />
      </div>
      {disclaimer && (
        <p className="mt-2 text-center text-xs" style={{ color: "rgba(55,48,163,.35)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
