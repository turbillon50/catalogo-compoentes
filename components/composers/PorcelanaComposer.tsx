"use client";

import { useState } from "react";
import { useComposer } from "./useComposer";
import { IconSend } from "@/components/brand/VFIcons";
import type { ComposerProps } from "./GrafitoComposer";

const PILLS = ["Resumir", "Traducir", "Explicar"];

/** Porcelana — claro quirúrgico. */
export function PorcelanaComposer({ onSend, placeholder = "Escribe un mensaje…", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full max-w-lg">
      <div className="mb-2 flex flex-wrap gap-2">
        {PILLS.map((p) => (
          <button
            key={p}
            type="button"
            className="rounded-full border px-3 py-1 text-xs transition-colors duration-150 ease-casa hover:bg-[#f4f4f5]"
            style={{ borderColor: "#e4e4e7", color: "#52525b" }}
          >
            {p}
          </button>
        ))}
      </div>
      <div
        className="flex items-end gap-2 rounded-[26px] border p-2 pl-4 transition-all duration-150 ease-casa"
        style={{
          background: "#ffffff",
          borderColor: focused ? "#a1a1aa" : "#e4e4e7",
          boxShadow: focused
            ? "0 1px 2px rgba(0,0,0,.05), 0 2px 4px rgba(0,0,0,.05), 0 4px 8px rgba(0,0,0,.05), 0 8px 16px rgba(0,0,0,.05), 0 16px 32px rgba(0,0,0,.06)"
            : "0 1px 2px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.03), 0 4px 8px rgba(0,0,0,.03)",
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
          className="flex-1 resize-none bg-transparent py-2 text-[15px] leading-[1.6] text-[#18181b] outline-none placeholder:text-[rgba(24,24,27,.35)]"
          style={{ caretColor: "#18181b" }}
        />
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          aria-label="Enviar"
          className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-150 ease-casa active:scale-90"
          style={{
            background: canSend ? "#18181b" : "#d4d4d8",
            color: "#ffffff",
          }}
        >
          <IconSend size={16} />
        </button>
      </div>
      {disclaimer && (
        <p className="mt-2 text-center text-xs" style={{ color: "#d4d4d8" }}>
          {disclaimer}
        </p>
      )}
    </div>
  );
}
