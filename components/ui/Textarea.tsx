"use client";

import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className, rows = 4, ...rest }, ref) => {
    const textareaId = id ?? rest.name;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="mb-1.5 block text-xs font-medium text-[var(--vfc-fg-muted)]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            "w-full resize-y rounded-vfc border bg-[var(--vfc-surface)] px-3 py-2.5 text-sm text-[var(--vfc-fg)] outline-none transition-colors",
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

Textarea.displayName = "Textarea";
