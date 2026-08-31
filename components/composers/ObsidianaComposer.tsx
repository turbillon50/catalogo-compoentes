"use client";

import { useState } from "react";
import { useComposer } from "./useComposer";
import { IconSend } from "@/components/brand/VFIcons";
import type { ComposerProps } from "./GrafitoComposer";

/** Obsidiana — delineado degradado de 1px, solo aparece al enfocar. */
export function ObsidianaComposer({ onSend, placeholder = "Escribe un mensaje…", disclaimer }: ComposerProps) {
  const { value, canSend, textareaRef, handleChange, handleKeyDown, send } = useComposer({ onSend });
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full max-w-lg">
      <div
        className="rounded-[25px] p-px transition-all duration-[350ms] ease-casa"
        style={{
          background: focused
            ? "linear-gradient(100deg,#60a5fa,#a78bfa 40%,#f472b6 80%,#60a5fa)"
            : "rgba(255,255,255,.14)",
        }}
      >
        <div
          className="flex items-end gap-2 rounded-[24px] p-2 pl-4"
          style={{
            background: "#101014",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,.05), 0 2px 4px rgba(0,0,0,.3), 0 4px 12px rgba(0,0,0,.3), 0 12px 32px rgba(0,0,0,.35)",
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
            style={{ caretColor: "#a78bfa" }}
          />
          <button
            type="button"
            onClick={send}
            disabled={!canSend}
            aria-label="Enviar"
            className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-150 ease-casa active:scale-90"
            style={{
              background: canSend ? "linear-gradient(135deg,#60a5fa,#a78bfa)" : "rgba(255,255,255,.08)",
              color: canSend ? "#101014" : "rgba(255,255,255,.3)",
            }}
          >
            <IconSend size={16} />
          </button>
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
