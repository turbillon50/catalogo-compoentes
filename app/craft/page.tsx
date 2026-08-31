"use client";

import { motion } from "framer-motion";
import { MeshBackground } from "@/components/craft/MeshBackground";
import { GlassPanel } from "@/components/craft/GlassPanel";
import { Loupe } from "@/components/craft/Loupe";
import { LiquidButton } from "@/components/craft/LiquidButton";
import { Badge } from "@/components/ui/Badge";

export default function CraftShowcase() {
  return (
    <div data-theme="craft" className="relative min-h-screen overflow-hidden">
      <MeshBackground />

      <main className="relative mx-auto max-w-4xl px-6 py-20">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-14 max-w-xl"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
            Preset Craft · Negro absoluto
          </p>
          <h1 className="text-3xl font-medium text-[var(--vfc-fg)]">
            Mismo catálogo, otra piel — solo cambiando --vfc-*
          </h1>
          <p className="mt-2 text-[var(--vfc-fg-muted)]">
            Mesh vivo, cristal, microinteracciones y lupa. Nada de esto tocó el código de
            Button, Card o Badge — solo lee otras variables dentro de este{" "}
            <code>data-theme=&quot;craft&quot;</code>.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <GlassPanel>
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="success">Live</Badge>
              <span className="text-xs text-[var(--vfc-fg-muted)]">mesh de fondo</span>
            </div>
            <h3 className="mb-1 font-medium text-[var(--vfc-fg)]">GlassPanel</h3>
            <p className="text-sm text-[var(--vfc-fg-muted)]">
              backdrop-blur + borde con brillo — flota sobre el mesh vivo de atrás.
            </p>
          </GlassPanel>
          <GlassPanel>
            <div className="mb-3 flex items-center gap-2">
              <Badge>Craft</Badge>
              <span className="text-xs text-[var(--vfc-fg-muted)]">--vfc-accent: violeta</span>
            </div>
            <h3 className="mb-1 font-medium text-[var(--vfc-fg)]">Mismos tokens</h3>
            <p className="text-sm text-[var(--vfc-fg-muted)]">
              El resto del catálogo (Button, Card, Modal) hereda esta piel automático.
            </p>
          </GlassPanel>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-14"
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
            Microinteracción — LiquidButton
          </h2>
          <div className="flex flex-wrap gap-3">
            <LiquidButton>Explorar</LiquidButton>
            <LiquidButton>Reservar ahora</LiquidButton>
          </div>
          <p className="mt-3 text-xs text-[var(--vfc-fg-muted)]">
            Hover para el barrido de luz · click para la onda líquida.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
            Lupa
          </h2>
          <Loupe
            zoom={2.2}
            size={170}
            className="inline-block overflow-hidden rounded-vfc-lg border border-white/10"
          >
            <div
              className="grid grid-cols-3 gap-1 bg-[var(--vfc-surface-2)] p-4"
              style={{ width: 420 }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded bg-white/5 text-[10px] text-[var(--vfc-fg-muted)]"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </Loupe>
          <p className="mt-3 text-xs text-[var(--vfc-fg-muted)]">
            Mueve el mouse sobre la cuadrícula.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
