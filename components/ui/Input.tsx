"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
}

/**
 * Regla 8 — mb-1.5(6px)->mb-2(8px), py-2.5(10px)->py-3(12px): ritmo de 4px.
 * Regla 4 — easing de la casa en vez de la transición genérica.
 * Foco visible lo da el anillo global (:focus-visible en globals.css).
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...rest }, ref) => {
    const inputId = id ?? rest.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-xs font-medium text-[var(--vfc-fg-muted)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-vfc border bg-[var(--vfc-surface)] px-3 py-3 text-sm text-[var(--vfc-fg)] outline-none transition-colors duration-150 ease-casa disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-[var(--vfc-danger)]"
              : "border-[var(--vfc-border)] focus:border-[var(--vfc-border-strong)]",
            className
          )}
          aria-invalid={!!error}
          {...rest}
        />
        {error && <p className="mt-1 text-xs text-[var(--vfc-danger)]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
