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
 * Input base tematizable. `error` pone el borde en --vfc-danger y muestra
 * el mensaje debajo — es el mismo patrón que ya usan LoginScreen y ChatScreen
 * a mano, aquí formalizado como componente reusable.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...rest }, ref) => {
    const inputId = id ?? rest.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-xs font-medium text-[var(--vfc-fg-muted)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-vfc border bg-[var(--vfc-surface)] px-3 py-2.5 text-sm text-[var(--vfc-fg)] outline-none transition-colors",
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
