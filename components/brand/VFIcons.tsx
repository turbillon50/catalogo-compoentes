// components/brand/VFIcons.tsx
// Subset curado de iconos, sincronizado a mano con el patron de
// turbillon50/vforge/components/brand/VFIcons.tsx (la fuente de verdad).
// Regla del sistema de diseno: nunca Lucide React, siempre SVG inline
// con stroke=currentColor para heredar el color de texto del padre.
// Si necesitas un icono que no esta aqui, cópialo de ese archivo con el
// mismo patron `b()` en vez de traer una libreria de iconos nueva.

import type { SVGProps } from "react";

type IP = SVGProps<SVGSVGElement> & { size?: number };

const b = (sz: number, p: IP) => ({
  width: sz,
  height: sz,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const IconCheck = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconX = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconChevD = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconLoader = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>
);

export const IconWarn = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const IconInfo = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
