"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Tooltip } from "@/components/ui/Tooltip";
import { Avatar } from "@/components/ui/Avatar";
import { Skeleton } from "@/components/ui/Skeleton";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Pagination } from "@/components/ui/Pagination";
import { Progress } from "@/components/ui/Progress";
import { Switch } from "@/components/ui/Switch";
import { Checkbox } from "@/components/ui/Checkbox";
import { RadioGroup } from "@/components/ui/Radio";
import { Textarea } from "@/components/ui/Textarea";
import { EmptyState } from "@/components/ui/EmptyState";
import { Stepper } from "@/components/ui/Stepper";
import { Drawer } from "@/components/ui/Drawer";
import { Tag } from "@/components/ui/Tag";
import { Divider } from "@/components/ui/Divider";
import { Alert } from "@/components/ui/Alert";
import { StatCard } from "@/components/ui/StatCard";
import { DropdownMenu } from "@/components/ui/DropdownMenu";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ToastDemo() {
  const { show } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" onClick={() => show("Guardado correctamente", "success")}>
        Success
      </Button>
      <Button size="sm" variant="secondary" onClick={() => show("Revisa este campo", "warning")}>
        Warning
      </Button>
      <Button size="sm" variant="secondary" onClick={() => show("No se pudo conectar", "danger")}>
        Danger
      </Button>
    </div>
  );
}

export default function KitShowcase() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("b");
  const [page, setPage] = useState(3);
  const [tags, setTags] = useState(["React", "Next.js", "Tailwind"]);

  return (
    <ToastProvider>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
            Kit extendido · Catálogo de Componentes
          </p>
          <h1 className="text-3xl font-medium text-[var(--vfc-fg)]">22 componentes más</h1>
          <p className="mt-2 max-w-xl text-[var(--vfc-fg-muted)]">
            Table, Tabs, Tooltip, Avatar, Skeleton, Toast, Accordion, Breadcrumb, Pagination,
            Progress, Switch, Checkbox, Radio, Textarea, EmptyState, Stepper, Drawer, Tag,
            Divider, Alert, StatCard, DropdownMenu — mismos tokens --vfc-*.
          </p>
        </header>

        <Section title="Breadcrumb">
          <Breadcrumb
            items={[
              { label: "Proyectos", href: "#" },
              { label: "Catálogo", href: "#" },
              { label: "Kit extendido" },
            ]}
          />
        </Section>

        <Section title="StatCard">
          <div className="grid grid-cols-3 gap-3">
            <StatCard label="Ingresos" value="$48,200" delta="+12%" trend="up" />
            <StatCard label="Churn" value="2.1%" delta="-0.4%" trend="up" />
            <StatCard label="Tickets" value="14" delta="+3" trend="down" />
          </div>
        </Section>

        <Section title="Table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Proyecto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Avance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Proyecto demo A</TableCell>
                <TableCell><Badge variant="success">Producción</Badge></TableCell>
                <TableCell>80%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Proyecto demo B</TableCell>
                <TableCell><Badge variant="warning">Revisión</Badge></TableCell>
                <TableCell>65%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        <Section title="Tabs">
          <Tabs defaultValue="a">
            <TabsList>
              <TabsTrigger value="a">General</TabsTrigger>
              <TabsTrigger value="b">Miembros</TabsTrigger>
              <TabsTrigger value="c">Facturación</TabsTrigger>
            </TabsList>
            <TabsContent value="a">
              <p className="text-sm text-[var(--vfc-fg-muted)]">Contenido de General.</p>
            </TabsContent>
            <TabsContent value="b">
              <p className="text-sm text-[var(--vfc-fg-muted)]">Contenido de Miembros.</p>
            </TabsContent>
            <TabsContent value="c">
              <p className="text-sm text-[var(--vfc-fg-muted)]">Contenido de Facturación.</p>
            </TabsContent>
          </Tabs>
        </Section>

        <Section title="Tooltip, Avatar, DropdownMenu">
          <div className="flex flex-wrap items-center gap-6">
            <Tooltip content="Esto es un tooltip">
              <Button variant="secondary" size="sm">Hover aquí</Button>
            </Tooltip>
            <div className="flex items-center gap-2">
              <Avatar name="Ana Ruiz" size="sm" />
              <Avatar name="Marco Vega" size="md" />
              <Avatar name="Sofía León" size="lg" />
            </div>
            <DropdownMenu
              trigger={<span className="rounded-vfc border border-[var(--vfc-border)] px-3 py-2 text-sm">Acciones ▾</span>}
              items={[
                { label: "Editar", onSelect: () => {} },
                { label: "Duplicar", onSelect: () => {} },
                { label: "Eliminar", onSelect: () => {}, danger: true },
              ]}
            />
          </div>
        </Section>

        <Section title="Skeleton (loading state)">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-1/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </Section>

        <Section title="Toast">
          <ToastDemo />
        </Section>

        <Section title="Accordion">
          <Accordion>
            <AccordionItem id="1" title="¿Cómo se tematiza?">
              Con variables CSS --vfc-* — sobreescribe el data-theme y ya.
            </AccordionItem>
            <AccordionItem id="2" title="¿Necesita shadcn?">
              No, cero dependencias de UI además de Framer Motion.
            </AccordionItem>
          </Accordion>
        </Section>

        <Section title="Pagination">
          <Pagination page={page} totalPages={12} onChange={setPage} />
        </Section>

        <Section title="Progress">
          <div className="max-w-sm space-y-4">
            <Progress value={72} label="Avance del proyecto" />
            <Progress value={30} label="Almacenamiento usado" />
          </div>
        </Section>

        <Section title="Switch, Checkbox, Radio">
          <div className="flex flex-wrap items-start gap-8">
            <Switch checked={switchOn} onChange={setSwitchOn} label="Notificaciones" />
            <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} label="Acepto los términos" />
            <RadioGroup
              name="plan"
              value={radio}
              onChange={setRadio}
              options={[
                { value: "a", label: "Mensual" },
                { value: "b", label: "Anual" },
              ]}
            />
          </div>
        </Section>

        <Section title="Textarea">
          <Textarea label="Notas del proyecto" placeholder="Escribe aquí..." className="max-w-sm" />
        </Section>

        <Section title="Tag">
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.map((t) => (
                <Tag key={t} onRemove={() => setTags((cur) => cur.filter((x) => x !== t))}>
                  {t}
                </Tag>
              ))}
            </AnimatePresence>
          </div>
        </Section>

        <Section title="Divider">
          <div className="max-w-sm space-y-4">
            <Divider />
            <Divider label="o continúa con" />
          </div>
        </Section>

        <Section title="Alert">
          <div className="max-w-lg space-y-3">
            <Alert variant="info" title="Info">Este proyecto usa el preset default.</Alert>
            <Alert variant="success" title="Listo">Cambios guardados.</Alert>
            <Alert variant="warning" title="Ojo">Quedan 2 días de prueba.</Alert>
            <Alert variant="danger" title="Error">No se pudo conectar con Vercel.</Alert>
          </div>
        </Section>

        <Section title="Stepper">
          <Stepper steps={["Cuenta", "Proyecto", "Equipo", "Listo"]} currentStep={1} />
        </Section>

        <Section title="EmptyState">
          <EmptyState
            title="Sin componentes en el carrito"
            description="Explora el catálogo y agrega los que necesites para este proyecto."
            actionLabel="Ver catálogo"
          />
        </Section>

        <Section title="Drawer">
          <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
            Abrir drawer
          </Button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Panel lateral">
            <p className="text-sm text-[var(--vfc-fg-muted)]">
              Mismo patrón de foco/Escape que Modal, pero entra desde el borde.
            </p>
          </Drawer>
        </Section>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-[var(--vfc-fg-muted)]"
        >
          22 componentes · misma arquitectura sin paleta fija que el resto del catálogo.
        </motion.p>
      </div>
    </ToastProvider>
  );
}
