"use client";

import { useComposer } from "./useComposer";
import { ComposerBar } from "./ComposerBar";

export interface ComposerProps {
  onSend: (text: string) => void;
  placeholder?: string;
  disclaimer?: string;
}

/** Grafito — sobrio oscuro, tier labs grandes. */
export function GrafitoComposer({ onSend, placeholder = "Pregunta lo que quieras", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });

  return (
    <div className="w-full max-w-lg">
      <div className="cmp cmp--grafito">
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
        <p className="mt-2 text-center text-xs" style={{ color: "rgba(255,255,255,.26)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
