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

### Componentes base (`components/ui/`)
- `Button` — variantes `primary | secondary | ghost | danger`, tamaños
  `sm | md | lg`, estado `loading`.
- `Card` — con `CardTitle` / `CardDescription`, prop `interactive` para
  hover lift.
- `Modal` — cierre con Escape/click fuera, manejo básico de foco, entrada
  fade+translateY con Framer Motion.
- `Badge` — variantes `default | success | warning | danger`.
- `Input` — con `label` y estado `error`.
- `Select` — select nativo estilizado (accesible, sin dropdown propio).

### Kit de pantallas (`components/screens/`)
Los 11 patrones de layout que se repiten en las 16 plantillas de negocio del
**protocolo de hornadas** (`/home/vagent/hornada/plantillas.js`, el archivo
que usa el worker de cada hornada como brief de datos). Cada componente
recibe el mismo shape de `datos` que ya trae ese archivo — sin transformar
nada — así que las 16 plantillas (chat IA, e-commerce, delivery, red social,
servicios, finanzas, fitness, restaurante, reservas, educación, noticias,
viajes, música, streaming, movilidad) le entran directo:

| Componente | `tipo` | Qué renderiza |
|---|---|---|
| `ChatScreen` | `chat` | burbujas + sugerencias + input |
| `GridScreen` | `grid` | catálogo 2 columnas |
| `ListScreen` | `list` | filas título/subtítulo/meta + CTA |
| `DetailScreen` | `detail` | ficha con specs + CTA |
| `ProfileScreen` | `profile` | header + menú |
| `MapScreen` | `map` | placeholder de mapa + opciones de ruta |
| `DashboardScreen` | `dashboard` | saldo + acciones + movimientos |
| `PlayerScreen` | `player` | reproductor + cola |
| `CalendarScreen` | `calendar` | slots de horario + CTA |
| `FeedScreen` | `feed` | timeline de posts |
| `LoginScreen` | `login` | entrada con email/password |

### Preset Craft (`components/craft/` + `data-theme="craft"`)
Segunda piel — negro absoluto, acento violeta/cian/dorado — para pedidos de
calidad craft top (mesh vivo, cristal, microinteracciones). Se activa
envolviendo cualquier parte del árbol en `<div data-theme="craft">`; los
componentes base (`Button`, `Card`, `Badge`...) heredan la piel solo por leer
otras variables `--vfc-*`, sin que su código sepa que existe:

| Componente | Qué hace |
|---|---|
| `MeshBackground` | 3 blobs radiales que respiran lento, puro CSS (sin canvas/imagen) |
| `GlassPanel` | superficie de cristal — backdrop-blur + borde con brillo |
| `LiquidButton` | microinteracción cristal/agua — barrido de luz + glow al hover, onda líquida al click, todo en el color de `--vfc-accent` |
| `Loupe` | lupa que sigue el cursor y magnifica el contenido de abajo (clona el children escalado con CSS transform, sin canvas) |

Ver `app/craft/page.tsx` para el showcase completo.

`components/brand/VFIcons.tsx` — subset curado (17 íconos), sincronizado a
mano con el patrón real de `turbillon50/vforge/components/brand/VFIcons.tsx`
y con los mismos paths que `plantillas.js` (`IC`). Si necesitas un ícono que
no está aquí, cópialo de esa fuente con el mismo patrón — nunca Lucide React.

`app/page.tsx` — showcase de los componentes base.
`app/screens/page.tsx` — showcase del kit de pantallas con datos reales
copiados de `plantillas.js` (ver `lib/sample-data.ts`).
`app/craft/page.tsx` — showcase del preset craft (negro absoluto).

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

## Pendiente

- Tests visuales / Storybook si el catálogo crece.
- Conectar con el Brain para generar screenshots automáticos de cada
  componente (la integración que ya menciona V en el chat de VForge).
- Formalizar como paquete npm privado cuando 2+ apps reales lo consuman.
