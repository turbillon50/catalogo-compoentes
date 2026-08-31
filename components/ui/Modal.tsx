"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconX } from "@/components/brand/VFIcons";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    panelRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
            className={cn(
              "relative z-10 w-full max-w-md rounded-vfc-lg border border-t-[var(--vfc-border-top)] border-[var(--vfc-border)] bg-[var(--vfc-surface)] p-6 shadow-vfc-lg outline-none",
              className
            )}
          >
            <div className="mb-4 flex items-center justify-between">
              {title && <h2 className="text-[var(--vfc-fg)] text-lg font-medium">{title}</h2>}
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="ml-auto rounded-vfc p-1 text-[var(--vfc-fg-muted)] transition-colors duration-150 ease-casa hover:bg-[var(--vfc-surface-2)] hover:text-[var(--vfc-fg)] active:scale-90"
              >
                <IconX size={18} />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
