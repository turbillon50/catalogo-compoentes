"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface DropdownMenuItem {
  label: string;
  onSelect: () => void;
  danger?: boolean;
}

export interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownMenuItem[];
  align?: "left" | "right";
  className?: string;
}

export function DropdownMenu({ trigger, items, align = "left", className }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative inline-block", className)}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-haspopup="menu" aria-expanded={open}>
        {trigger}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ type: "spring", stiffness: 500, damping: 32 }}
            style={{ transformOrigin: align === "right" ? "top right" : "top left" }}
            className={cn(
              "absolute z-50 mt-1.5 min-w-[160px] rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-surface)] p-1 shadow-vfc-lg",
              align === "right" ? "right-0" : "left-0"
            )}
          >
            {items.map((item, i) => (
              <motion.button
                key={i}
                type="button"
                role="menuitem"
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => {
                  item.onSelect();
                  setOpen(false);
                }}
                className={cn(
                  "block w-full rounded-vfc px-3 py-2 text-left text-sm hover:bg-[var(--vfc-surface-2)]",
                  item.danger ? "text-[var(--vfc-danger)]" : "text-[var(--vfc-fg)]"
                )}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
