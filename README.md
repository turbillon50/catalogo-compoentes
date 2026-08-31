# Catálogo de Componentes — VForge

Librería centralizada de componentes UI para que cualquier app del portafolio
la importe en vez de reinventar botones, modales o pantallas cada vez.

## Decisión de arquitectura: sin paleta fija

Esta librería **no trae ningún color propio**. Todo componente lee sus
colores, radios y sombras de variables CSS `--vfc-*` definidas en
`app/globals.css`. Los valores del `:root` son solo el *default* — hoy
calcado del look real de vforge.site en producción (blanco/negro, minimal)
— pero cualquier app consumidora los sobreescribe en su propio `:root` (o
en un `data-theme` propio) y los mismos componentes se ven con su marca,
sin tocar el código:

```css
/* globals.css de, por ejemplo, V&LIVING */
:root {
  --vfc-accent: #F75602;
  --vfc-accent-hover: #d94c02;
  --vfc-radius: 22px;
}
```

## Qué hay ahorita

### Componentes base (`components/ui/`) — 28
`Button`, `Card` (+ `CardTitle`/`CardDescription`), `Modal`, `Badge`, `Input`,
`Select`, `Table` (+ subcomponentes), `Tabs`, `Tooltip`, `Avatar`, `Skeleton`,
`Toast` (+ `ToastProvider`/`useToast`), `Accordion`, `Breadcrumb`,
`Pagination`, `Progress`, `Switch`, `Checkbox`, `Radio`, `Textarea`,
`EmptyState`, `Stepper`, `Drawer`, `Tag`, `Divider`, `Alert`, `StatCard`,
`DropdownMenu`.

Todos con microinteracciones reales (resorte de Framer Motion, no solo
transiciones CSS planas) — el Switch/Checkbox/Radio responden con física de
resorte, el Accordion anima altura real, el Tooltip entra con resorte y
caret, el Skeleton tiene shimmer, el Tag sale animado al quitarse.

### Kit de pantallas (`components/screens/`) — 11
Los 11 patrones de layout que se repiten en las 16 plantillas de negocio del
**protocolo de hornadas** (`/home/vagent/hornada/plantillas.js`). Cada
componente recibe el mismo shape de `datos` que ya trae ese archivo — sin
transformar nada:

`ChatScreen` (chat) · `GridScreen` (grid) · `ListScreen` (list) ·
`DetailScreen` (detail) · `ProfileScreen` (profile) · `MapScreen` (map) ·
`DashboardScreen` (dashboard) · `PlayerScreen` (player) ·
`CalendarScreen` (calendar) · `FeedScreen` (feed) · `LoginScreen` (login)

### Preset Craft (`components/craft/` + `data-theme="craft"`) — 4
Negro absoluto, acento violeta/cian/dorado, para pedidos de calidad craft
top: `MeshBackground` (mesh vivo puro CSS), `GlassPanel` (cristal/backdrop-blur),
`LiquidButton` (microinteracción agua/cristal: sweep+glow+ripple), `Loupe`
(lupa que sigue el cursor y magnifica).

### Sistemas de diseño — 4 presets vía `data-theme`
`default` (blanco/negro, look actual de vforge.site) · `craft` (negro
absoluto + violeta) · `warm` (cálido/redondeado tipo Airbnb, naranja —
mismo acento que V&LIVING) · `fintech` (serio, azul, cortante — Zuxen/finanzas)
· `playful` (vibrante, morado — social/consumo).

`components/brand/VFIcons.tsx` — subset curado (19 íconos), sincronizado a
mano con el patrón real de `turbillon50/vforge/components/brand/VFIcons.tsx`
y con los mismos paths que `plantillas.js` (`IC`). Nunca Lucide React.

## Showcases

- `app/page.tsx` — componentes base (Button/Card/Modal/Badge/Input/Select)
- `app/kit/page.tsx` — los 22 componentes extendidos
- `app/screens/page.tsx` — el kit de 11 pantallas con datos reales
- `app/craft/page.tsx` — el preset craft (negro absoluto)
- `app/presets/page.tsx` — comparación lado a lado de warm/fintech/playful

## Cómo consumirla desde otra app (hoy)

Todavía no hay registro npm privado, así que por ahora la forma directa es:

```bash
npm install github:turbillon50/catalogo-compoentes
```

e importar como paquete de workspace, o copiar las carpetas `components/ui`,
`components/screens`, `components/craft`, `components/brand` + los tokens de
`globals.css` al proyecto consumidor. Cuando el catálogo crezca y varias apps
lo usen de verdad, vale la pena formalizarlo como paquete privado en un
registro (o pnpm workspace si se mueve a monorepo).

## Reglas del catálogo (para no repetir errores ya corregidos)

- **Nunca** usar nombres de clientes/proyectos reales de Luis como datos de
  ejemplo en los showcases — solo nombres genéricos inventados.
- Todo componente interactivo lleva **microinteracción real** (Framer
  Motion con resorte/easing con propósito), no solo aparece/desaparece de
  golpe — ese fue el estándar que pidió Luis explícitamente.
- Cuando un componente extiende `HTMLAttributes` y se renderiza como
  `motion.*`, hay que hacer `Omit` de `onDrag*`/`onAnimation*` (conflicto de
  tipos real entre React y Framer Motion) — ver Button/Card/Alert como
  referencia.

## Pendiente / en curso

- **Market de componentes**: Luis va a complementar el catálogo con material
  adicional — el plan es construir una experiencia tipo marketplace
  (búsqueda/categorías/preview) dentro de VForge, no solo páginas de
  showcase sueltas. Se conecta con el plan ya acordado de la sala en vivo
  (`vforge-api`, recurso `cart` nuevo — ver `/areas/vforge-site.md` /
  contexto del Brain) y el nuevo item del sidebar debajo de "Administración".
- Tests visuales / Storybook si el catálogo sigue creciendo.
- Formalizar como paquete npm privado cuando 2+ apps reales lo consuman.
