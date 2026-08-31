"use client";

import { useState } from "react";
import { useComposer } from "./useComposer";
import { IconSend } from "@/components/brand/VFIcons";

export interface ComposerProps {
  onSend: (text: string) => void;
  placeholder?: string;
  disclaimer?: string;
}

/** Grafito — sobrio oscuro, tier labs grandes. */
export function GrafitoComposer({ onSend, placeholder = "Escribe un mensaje…", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full max-w-lg">
      <div
        className="flex items-end gap-2 rounded-[24px] border p-2 pl-4 transition-colors duration-150 ease-casa"
        style={{
          background: "#17171b",
          borderColor: focused ? "rgba(255,255,255,.28)" : "rgba(255,255,255,.10)",
          borderTopColor: focused ? "rgba(255,255,255,.28)" : "rgba(255,255,255,.18)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,.04), 0 1px 2px rgba(0,0,0,.35), 0 2px 4px rgba(0,0,0,.28), 0 4px 8px rgba(0,0,0,.22), 0 8px 16px rgba(0,0,0,.16), 0 16px 32px rgba(0,0,0,.12)",
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
          style={{ caretColor: "#ececf0" }}
        />
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          aria-label="Enviar"
          className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-150 ease-casa active:scale-90"
          style={{
            background: canSend ? "#ececf0" : "rgba(255,255,255,.08)",
            color: canSend ? "#0e0e11" : "rgba(255,255,255,.3)",
          }}
        >
          <IconSend size={16} />
        </button>
      </div>
      {disclaimer && (
        <p className="mt-2 text-center text-xs" style={{ color: "rgba(255,255,255,.26)" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
