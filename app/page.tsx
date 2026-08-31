"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.24, ease: "easeOut" } },
};

export default function ShowcasePage() {
  const [open, setOpen] = useState(false);

  return (
    <motion.main
      variants={stagger}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <motion.header variants={item} className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
          Catálogo de Componentes · VForge
        </p>
        <h1 className="text-3xl font-medium text-[var(--vfc-fg)]">
          Librería centralizada, tematizable por variables CSS
        </h1>
        <p className="mt-2 max-w-xl text-[var(--vfc-fg-muted)]">
          Nada de esto trae color propio. Cada bloque de abajo hereda los
          tokens --vfc-* definidos en app/globals.css — sobreescríbelos en tu
          app y estos mismos componentes se ven con tu marca.
        </p>
      </motion.header>

      <motion.section variants={item} className="mb-12">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
          Button
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primario</Button>
          <Button variant="secondary">Secundario</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Peligro</Button>
          <Button variant="primary" loading>
            Cargando
          </Button>
          <Button variant="primary" disabled>
            Deshabilitado
          </Button>
        </div>
      </motion.section>

      <motion.section variants={item} className="mb-12">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
          Card
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card>
            <CardTitle>Tarjeta estática</CardTitle>
            <CardDescription>
              Sin hover, sin cursor de mano — para contenido informativo.
            </CardDescription>
          </Card>
          <Card interactive onClick={() => setOpen(true)}>
            <CardTitle>Tarjeta interactiva</CardTitle>
            <CardDescription>
              interactive → hover lift + sombra. Click para abrir el modal.
            </CardDescription>
          </Card>
        </div>
      </motion.section>

      <motion.section variants={item}>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
          Modal
        </h2>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Abrir modal
        </Button>
      </motion.section>

      <Modal open={open} onClose={() => setOpen(false)} title="Modal de ejemplo">
        <p className="text-sm text-[var(--vfc-fg-muted)]">
          Cierra con Escape, con click fuera, o con la X. El foco regresa al
          elemento que lo abrió.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Confirmar
          </Button>
        </div>
      </Modal>
    </motion.main>
  );
}
