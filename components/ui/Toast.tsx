"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconCheck, IconWarn, IconInfo, IconX } from "@/components/brand/VFIcons";

export type ToastVariant = "default" | "success" | "warning" | "danger";

interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  show: (message: string, variant?: ToastVariant) => void;
}
const ToastContext = createContext<ToastContextValue | null>(null);

const variantIcon: Record<ToastVariant, React.ComponentType<{ size?: number; className?: string }>> = {
  default: IconInfo,
  success: IconCheck,
  warning: IconWarn,
  danger: IconWarn,
};

const variantColor: Record<ToastVariant, string> = {
  default: "text-[var(--vfc-fg)]",
  success: "text-[var(--vfc-success)]",
  warning: "text-[var(--vfc-warning)]",
  danger: "text-[var(--vfc-danger)]",
};

/** Envuelve la app (o el showcase) una vez; `useToast()` da acceso a `show()` desde cualquier hijo. */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const show = useCallback((message: string, variant: ToastVariant = "default") => {
    const id = Date.now();
    setItems((cur) => [...cur, { id, message, variant }]);
    setTimeout(() => setItems((cur) => cur.filter((t) => t.id !== id)), 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
        <AnimatePresence>
          {items.map((t) => {
            const Icon = variantIcon[t.variant];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto flex items-center gap-2 rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-surface)] px-4 py-3 shadow-vfc-lg"
              >
                <Icon size={16} className={cn("shrink-0", variantColor[t.variant])} />
                <span className="text-sm text-[var(--vfc-fg)]">{t.message}</span>
                <button
                  type="button"
                  onClick={() => setItems((cur) => cur.filter((x) => x.id !== t.id))}
                  className="ml-1 text-[var(--vfc-fg-muted)] hover:text-[var(--vfc-fg)]"
                  aria-label="Cerrar"
                >
                  <IconX size={12} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de <ToastProvider>");
  return ctx;
}
