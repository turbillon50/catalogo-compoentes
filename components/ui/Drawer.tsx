"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconX } from "@/components/brand/VFIcons";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  side?: "right" | "left";
  children: ReactNode;
  className?: string;
}

/** Panel lateral — misma lógica de foco/Escape que Modal, pero entra desde el borde. */
export function Drawer({ open, onClose, title, side = "right", children, className }: DrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            initial={{ x: side === "right" ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: side === "right" ? "100%" : "-100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className={cn(
              "relative z-10 flex h-full w-full max-w-sm flex-col border-[var(--vfc-border)] bg-[var(--vfc-surface)] shadow-vfc-lg outline-none",
              side === "right" ? "ml-auto border-l" : "mr-auto border-r",
              className
            )}
          >
            <div className="flex items-center justify-between border-b border-[var(--vfc-border)] px-5 py-4">
              {title && <h2 className="text-base font-medium text-[var(--vfc-fg)]">{title}</h2>}
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="ml-auto rounded-vfc p-1 text-[var(--vfc-fg-muted)] hover:bg-[var(--vfc-surface-2)] hover:text-[var(--vfc-fg)]"
              >
                <IconX size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
