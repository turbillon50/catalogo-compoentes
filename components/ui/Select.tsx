"use client";

import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { IconChevD } from "@/components/brand/VFIcons";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

/**
 * Select nativo estilizado (sin librería de dropdown propia — accesibilidad
 * gratis, consistente con "zero shadcn" del sistema de diseño).
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, id, className, ...rest }, ref) => {
    const selectId = id ?? rest.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="mb-1.5 block text-xs font-medium text-[var(--vfc-fg-muted)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full appearance-none rounded-vfc border border-[var(--vfc-border)] bg-[var(--vfc-surface)] px-3 py-2.5 pr-9 text-sm text-[var(--vfc-fg)] outline-none focus:border-[var(--vfc-border-strong)]",
              className
            )}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <IconChevD
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--vfc-fg-muted)]"
          />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
