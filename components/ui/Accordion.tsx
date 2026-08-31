"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconChevD } from "@/components/brand/VFIcons";

const AccordionContext = createContext<{
  openId: string | null;
  toggle: (id: string) => void;
} | null>(null);

export function Accordion({ children, className }: { children: ReactNode; className?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));
  return (
    <AccordionContext.Provider value={{ openId, toggle }}>
      <div className={cn("divide-y divide-[var(--vfc-border)] rounded-vfc-lg border border-[var(--vfc-border)]", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem debe ir dentro de <Accordion>");
  const open = ctx.openId === id;
  return (
    <div>
      <button
        type="button"
        onClick={() => ctx.toggle(id)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-[var(--vfc-fg)] hover:bg-[var(--vfc-surface-2)]"
      >
        {title}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="text-[var(--vfc-fg-muted)]"
        >
          <IconChevD size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.25, ease: "easeInOut" }, opacity: { duration: 0.18 } }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-sm text-[var(--vfc-fg-muted)]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
