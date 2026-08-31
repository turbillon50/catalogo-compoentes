"use client";

import { cn } from "@/lib/cn";
import { IconHeart, IconChat, IconUser } from "@/components/brand/VFIcons";

export interface FeedPost {
  a: string;
  h: string;
  t: string;
  likes: string;
  rep: string;
}

export interface FeedScreenProps {
  posts: FeedPost[];
  onSelect?: (index: number) => void;
  className?: string;
}

/** tipo: "feed" — timeline de posts/artículos con autor, texto y métricas de engagement. */
export function FeedScreen({ posts, onSelect, className }: FeedScreenProps) {
  return (
    <div className={cn("divide-y divide-[var(--vfc-border)]", className)}>
      {posts.map((p, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect?.(i)}
          className="flex w-full gap-3 px-4 py-4 text-left transition-colors duration-150 ease-casa hover:bg-[var(--vfc-surface-2)]"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--vfc-surface-2)] text-[var(--vfc-fg-muted)]">
            <IconUser size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm">
              <span className="font-medium text-[var(--vfc-fg)]">{p.a}</span>{" "}
              <span className="text-[var(--vfc-fg-muted)]">{p.h}</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--vfc-fg)]">{p.t}</p>
            <div className="mt-2 flex items-center gap-4 text-xs tabular-nums text-[var(--vfc-fg-muted)]">
              <span className="flex items-center gap-1">
                <IconHeart size={14} /> {p.likes}
              </span>
              <span className="flex items-center gap-1">
                <IconChat size={14} /> {p.rep}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
