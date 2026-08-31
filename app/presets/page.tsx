"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { StatCard } from "@/components/ui/StatCard";

const PRESETS = [
  { id: "warm", label: "Warm", tag: "tipo Airbnb — V&LIVING" },
  { id: "fintech", label: "Fintech", tag: "serio, azul — Zuxen/finanzas" },
  { id: "playful", label: "Playful", tag: "vibrante — social/consumo" },
] as const;

export default function PresetsShowcase() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 max-w-xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#73767b]">
          Sistemas de diseño
        </p>
        <h1 className="text-3xl font-medium text-[#090909]">
          3 presets nuevos, mismos componentes
        </h1>
        <p className="mt-2 text-[#73767b]">
          Cada bloque de abajo es exactamente el mismo código — Button, Card, Badge, Progress,
          StatCard — solo cambia el <code>data-theme</code> que lo envuelve.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PRESETS.map((preset) => (
          <div
            key={preset.id}
            data-theme={preset.id}
            className="rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-bg)] p-6"
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
              {preset.tag}
            </p>
            <h2 className="mb-5 text-xl font-medium text-[var(--vfc-fg)]">{preset.label}</h2>

            <div className="mb-5 flex flex-wrap gap-2">
              <Button variant="primary" size="sm">Continuar</Button>
              <Button variant="secondary" size="sm">Cancelar</Button>
            </div>

            <Card interactive className="mb-5">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="success">Activo</Badge>
                <Badge>Nuevo</Badge>
              </div>
              <CardTitle>Tarjeta de ejemplo</CardTitle>
              <CardDescription>Así se ve un Card en este preset.</CardDescription>
            </Card>

            <div className="mb-5">
              <Progress value={68} label="Progreso" />
            </div>

            <StatCard label="Métrica" value="1,204" delta="+8%" trend="up" />
          </div>
        ))}
      </div>
    </div>
  );
}
