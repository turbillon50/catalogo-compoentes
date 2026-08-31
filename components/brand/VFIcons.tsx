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

// --- Subset agregado para el kit de pantallas (components/screens/*) ---
// Mismos paths que /home/vagent/hornada/plantillas.js (IC), la fuente que
// usa el worker de hornadas — no reinventados.

export const IconChevR = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const IconSend = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
  </svg>
);

export const IconStar = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2 2 9.3l6.9-1z" />
  </svg>
);

export const IconUser = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const IconPin = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconCal = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconTrend = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />
  </svg>
);

export const IconPlay = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)} fill="currentColor" stroke="none">
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
);

export const IconHeart = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export const IconLock = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const IconChat = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
  </svg>
);
