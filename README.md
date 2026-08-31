# Catálogo de Componentes — VForge

Librería centralizada de componentes UI (`Button`, `Card`, `Modal`, más los
que se vayan agregando) para que cualquier app del portafolio la importe en
vez de reinventar botones y modales cada vez.

## Decisión de arquitectura: sin paleta fija

Esta librería **no trae ningún color propio**. Todo componente lee sus
colores, radios y sombras de variables CSS `--vfc-*` definidas en
`app/globals.css`. Los valores de ahí son solo el *default* — hoy calcado
del look real de vforge.site en producción (blanco/negro, minimal) — pero
cualquier app consumidora los sobreescribe en su propio `:root` y los
mismos componentes se ven con su marca, sin tocar el código:

```css
/* globals.css de, por ejemplo, V&LIVING */
:root {
  --vfc-accent: #F75602;
  --vfc-accent-hover: #d94c02;
  --vfc-radius: 22px;
}
```

## Qué hay ahorita (v1)

- `Button` — variantes `primary | secondary | ghost | danger`, tamaños
  `sm | md | lg`, estado `loading`.
- `Card` — con `CardTitle` / `CardDescription`, prop `interactive` para
  hover lift.
- `Modal` — cierre con Escape/click fuera, manejo básico de foco, entrada
  fade+translateY con Framer Motion.
- `components/brand/VFIcons.tsx` — subset curado (`IconCheck`, `IconX`,
  `IconChevD`, `IconLoader`, `IconWarn`, `IconInfo`), sincronizado a mano
  con el patrón real de `turbillon50/vforge/components/brand/VFIcons.tsx`.
  Si necesitas un ícono que no está aquí, cópialo de esa fuente con el
  mismo patrón — nunca Lucide React.

`app/page.tsx` es el showcase: corre `npm run dev` y ahí se ven todos los
componentes en vivo, sirve como referencia visual y como sitio para
capturar screenshots de documentación.

## Cómo consumirla desde otra app (hoy)

Todavía no hay registro npm privado, así que por ahora la forma directa es:

```bash
npm install github:turbillon50/catalogo-compoentes
```

e importar como paquete de workspace, o copiar la carpeta `components/ui`
+ `components/brand` + los tokens de `globals.css` al proyecto consumidor.
Cuando el catálogo crezca y varias apps lo usen de verdad, vale la pena
formalizarlo como paquete privado en un registro (o pnpm workspace si se
mueve a monorepo).

## Pendiente

- Agregar `Badge`, `Input`, `Select`.
- Tests visuales / Storybook si el catálogo crece.
- Conectar con el Brain para generar screenshots automáticos de cada
  componente (la integración que ya menciona V en el chat de VForge).
