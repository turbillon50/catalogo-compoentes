"use client";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/brand/VFIcons";

export interface DetailScreenProps {
  t: string;
  s: string;
  precio?: string;
  desc: string;
  cta: string;
  specs: string[];
  onCta?: () => void;
  className?: string;
}

/** tipo: "detail" — ficha de producto/servicio/artículo con specs y CTA principal. */
export function DetailScreen({ t, s, precio, desc, cta, specs, onCta, className }: DetailScreenProps) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="aspect-[4/3] bg-[var(--vfc-surface-2)]" />
      <div className="flex-1 space-y-4 p-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-medium text-[var(--vfc-fg)]">{t}</h2>
            {precio && <span className="shrink-0 text-lg font-medium text-[var(--vfc-fg)]">{precio}</span>}
          </div>
          <p className="text-sm text-[var(--vfc-fg-muted)]">{s}</p>
        </div>

        <p className="text-sm leading-relaxed text-[var(--vfc-fg-muted)]">{desc}</p>

        <ul className="space-y-1.5">
          {specs.map((sp, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-[var(--vfc-fg)]">
              <IconCheck size={14} className="shrink-0 text-[var(--vfc-fg-muted)]" />
              {sp}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[var(--vfc-border)] p-3">
        <Button variant="primary" className="w-full" onClick={onCta}>
          {cta}
        </Button>
      </div>
    </div>
  );
}
