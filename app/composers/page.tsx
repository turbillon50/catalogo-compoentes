"use client";

import { GrafitoComposer } from "@/components/composers/GrafitoComposer";
import { ObsidianaComposer } from "@/components/composers/ObsidianaComposer";
import { PorcelanaComposer } from "@/components/composers/PorcelanaComposer";
import { CrystalComposer } from "@/components/composers/CrystalComposer";
import { EditorialComposer } from "@/components/composers/EditorialComposer";
import { TerminalComposer } from "@/components/composers/TerminalComposer";
import { AuroraComposer } from "@/components/composers/AuroraComposer";

const DISCLAIMER = "La IA puede cometer errores. Verifica la información importante.";

function noop(text: string) {
  // eslint-disable-next-line no-console
  console.log("send:", text);
}

function Stage({
  name,
  tag,
  bg,
  children,
}: {
  name: string;
  tag: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#73767b]">
        {name} · {tag}
      </p>
      <div className="flex items-center justify-center rounded-2xl p-10" style={{ background: bg }}>
        {children}
      </div>
    </section>
  );
}

export default function ComposersShowcase() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#73767b]">
          Muestrario · Composers IA
        </p>
        <h1 className="text-3xl font-medium text-[#090909]">7 recetas, un solo comportamiento</h1>
        <p className="mt-2 max-w-xl text-[#73767b]">
          Enter envía, Shift+Enter salto de línea, el textarea crece hasta 6 filas, el botón de
          enviar está muerto hasta que hay texto. Solo cambia el ADN visual de cada una.
        </p>
      </header>

      <Stage name="Grafito" tag="sobrio oscuro" bg="#0c0c0e">
        <GrafitoComposer onSend={noop} disclaimer={DISCLAIMER} />
      </Stage>

      <Stage name="Obsidiana" tag="anillo degradado" bg="#0a0a0d">
        <ObsidianaComposer onSend={noop} disclaimer={DISCLAIMER} />
      </Stage>

      <Stage name="Porcelana" tag="claro quirúrgico" bg="#f4f4f5">
        <PorcelanaComposer onSend={noop} disclaimer={DISCLAIMER} />
      </Stage>

      <Stage name="Crystal" tag="vidrio, tier expresivo" bg="#000000">
        <CrystalComposer onSend={noop} disclaimer={DISCLAIMER} />
      </Stage>

      <Stage name="Editorial" tag="marfil, lujo silencioso" bg="#e9e2d3">
        <EditorialComposer onSend={noop} disclaimer={DISCLAIMER} />
      </Stage>

      <Stage name="Terminal" tag="brutal CRT" bg="#020402">
        <TerminalComposer onSend={noop} disclaimer={DISCLAIMER} />
      </Stage>

      <Stage name="Aurora" tag="cálido humano" bg="#f8fafc">
        <AuroraComposer onSend={noop} disclaimer={DISCLAIMER} />
      </Stage>
    </div>
  );
}
