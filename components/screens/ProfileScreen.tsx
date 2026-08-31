"use client";

import { cn } from "@/lib/cn";
import { IconUser, IconChevR } from "@/components/brand/VFIcons";

export interface ProfileMenuItem {
  t: string;
}

export interface ProfileScreenProps {
  nombre: string;
  correo: string;
  menu: ProfileMenuItem[];
  onSelect?: (index: number) => void;
  className?: string;
}

/** tipo: "profile" — cabecera con avatar + nombre/correo, menú de opciones debajo. */
export function ProfileScreen({ nombre, correo, menu, onSelect, className }: ProfileScreenProps) {
  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-3 p-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--vfc-surface-2)] text-[var(--vfc-fg-muted)]">
          <IconUser size={24} />
        </div>
        <div>
          <p className="font-medium text-[var(--vfc-fg)]">{nombre}</p>
          <p className="text-sm text-[var(--vfc-fg-muted)]">{correo}</p>
        </div>
      </div>
      <div className="divide-y divide-[var(--vfc-border)] border-t border-[var(--vfc-border)]">
        {menu.map((mi, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-[var(--vfc-fg)] hover:bg-[var(--vfc-surface-2)]"
          >
            {mi.t}
            <IconChevR size={16} className="text-[var(--vfc-fg-muted)]" />
          </button>
        ))}
      </div>
    </div>
  );
}
