"use client";

import { cn } from "@/lib/cn";
import { IconSend } from "@/components/brand/VFIcons";

export interface ChatMsg {
  de: "u" | "a";
  t: string;
}

export interface ChatScreenProps {
  msgs: ChatMsg[];
  sugerencias?: string[];
  /** Placeholder del input. No maneja estado — es la caja del catálogo, la lógica la pone la app. */
  placeholder?: string;
  onSend?: (text: string) => void;
  onSuggestion?: (text: string) => void;
  className?: string;
}

/**
 * tipo: "chat" — mismo shape de datos que plantillas.js (msgs[], sugerencias[]).
 * Burbujas: "u" a la derecha con acento, "a" a la izquierda en superficie-2.
 */
export function ChatScreen({
  msgs,
  sugerencias = [],
  placeholder = "Escribe un mensaje...",
  onSend,
  onSuggestion,
  className,
}: ChatScreenProps) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {msgs.map((m, i) => (
          <div key={i} className={cn("flex", m.de === "u" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[80%] rounded-vfc-lg px-4 py-3 text-sm leading-relaxed",
                m.de === "u"
                  ? "bg-[var(--vfc-accent)] text-[var(--vfc-fg-on-accent)]"
                  : "bg-[var(--vfc-surface-2)] text-[var(--vfc-fg)]"
              )}
            >
              {m.t}
            </div>
          </div>
        ))}
      </div>

      {sugerencias.length > 0 && (
        <div className="flex gap-2 overflow-x-auto px-4 pb-2">
          {sugerencias.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSuggestion?.(s)}
              className="shrink-0 rounded-vfc border border-[var(--vfc-border)] px-3 py-2 text-xs text-[var(--vfc-fg-muted)] transition-colors duration-150 ease-casa hover:border-[var(--vfc-border-strong)] hover:text-[var(--vfc-fg)]"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        className="flex items-center gap-2 border-t border-[var(--vfc-border)] p-3"
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.elements.namedItem("msg") as HTMLInputElement;
          if (input?.value) {
            onSend?.(input.value);
            input.value = "";
          }
        }}
      >
        <input
          name="msg"
          placeholder={placeholder}
          className="flex-1 rounded-vfc border border-[var(--vfc-border)] bg-[var(--vfc-surface)] px-3 py-2 text-sm text-[var(--vfc-fg)] outline-none focus:border-[var(--vfc-border-strong)]"
        />
        <button
          type="submit"
          aria-label="Enviar"
          className="flex h-9 w-9 items-center justify-center rounded-vfc bg-[var(--vfc-accent)] text-[var(--vfc-fg-on-accent)] transition-colors duration-150 ease-casa hover:bg-[var(--vfc-accent-hover)]"
        >
          <IconSend size={16} />
        </button>
      </form>
    </div>
  );
}
