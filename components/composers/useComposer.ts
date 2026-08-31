"use client";

import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export interface UseComposerOptions {
  onSend: (text: string) => void;
  maxRows?: number;
}

/**
 * Lógica compartida por los 7 composers — "Reglas comunes a todo composer"
 * del manifiesto: Enter envía, Shift+Enter salto de línea, textarea crece
 * hasta maxRows filas, canSend solo con texto no vacío (trim().length > 0).
 */
export function useComposer({ onSend, maxRows = 6 }: UseComposerOptions) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSend = value.trim().length > 0;

  const resize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "20");
    const maxHeight = lineHeight * maxRows;
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [maxRows]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      requestAnimationFrame(resize);
    },
    [resize]
  );

  const send = useCallback(() => {
    if (!canSend) return;
    onSend(value.trim());
    setValue("");
    requestAnimationFrame(resize);
  }, [canSend, onSend, value, resize]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    [send]
  );

  return { value, canSend, textareaRef, handleChange, handleKeyDown, send };
}
