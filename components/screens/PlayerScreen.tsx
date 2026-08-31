"use client";

import { cn } from "@/lib/cn";
import { IconPlay } from "@/components/brand/VFIcons";

export interface PlayerColaItem {
  t: string;
  s: string;
  d: string;
}

export interface PlayerScreenProps {
  t: string;
  s: string;
  cola: PlayerColaItem[];
  onPlay?: () => void;
  onSelect?: (index: number) => void;
  className?: string;
}

/** tipo: "player" — reproductor (audio/video/lección) con lista de cola debajo. */
export function PlayerScreen({ t, s, cola, onPlay, onSelect, className }: PlayerScreenProps) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="flex flex-col items-center gap-4 border-b border-[var(--vfc-border)] p-6">
        <div className="h-40 w-40 rounded-vfc-lg bg-[var(--vfc-surface-2)]" />
        <div className="text-center">
          <p className="font-medium text-[var(--vfc-fg)]">{t}</p>
          <p className="text-sm text-[var(--vfc-fg-muted)]">{s}</p>
        </div>
        <button
          type="button"
          onClick={onPlay}
          aria-label="Reproducir"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--vfc-accent)] pl-0.5 text-[var(--vfc-fg-on-accent)] transition-colors duration-150 ease-casa hover:bg-[var(--vfc-accent-hover)]"
        >
          <IconPlay size={18} />
        </button>
      </div>

      <div className="flex-1 divide-y divide-[var(--vfc-border)] overflow-y-auto">
        {cola.map((c, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-150 ease-casa hover:bg-[var(--vfc-surface-2)]"
          >
            <div>
              <p className="text-sm font-medium text-[var(--vfc-fg)]">{c.t}</p>
              <p className="text-xs text-[var(--vfc-fg-muted)]">{c.s}</p>
            </div>
            <span className="text-xs tabular-nums text-[var(--vfc-fg-muted)]">{c.d}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
