"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface GridProd {
  t: string;
  s: string;
  badge?: string;
}

export interface GridScreenProps {
  titulo?: string;
  prods: GridProd[];
  onSelect?: (index: number) => void;
  className?: string;
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

/** tipo: "grid" — catálogo de productos/artículos en 2 columnas. */
export function GridScreen({ titulo, prods, onSelect, className }: GridScreenProps) {
  return (
    <div className={cn("p-4", className)}>
      {titulo && <h2 className="mb-3 text-base font-medium text-[var(--vfc-fg)]">{titulo}</h2>}
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-3">
        {prods.map((p, i) => (
          <motion.button
            key={i}
            variants={item}
            type="button"
            onClick={() => onSelect?.(i)}
            className="relative rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-surface)] p-3 text-left transition-shadow hover:shadow-vfc-lg"
          >
            {p.badge && (
              <span className="absolute right-2 top-2 rounded-vfc bg-[var(--vfc-accent)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--vfc-fg-on-accent)]">
                {p.badge}
              </span>
            )}
            <div className="mb-8 aspect-square rounded-vfc bg-[var(--vfc-surface-2)]" />
            <p className="text-sm font-medium text-[var(--vfc-fg)]">{p.t}</p>
            <p className="text-xs text-[var(--vfc-fg-muted)]">{p.s}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
