import type { Config } from "tailwindcss";

// Nota de arquitectura: esta libreria NO trae paleta de color propia.
// Los componentes leen colores, radios y sombras de variables CSS (--vfc-*)
// definidas en app/globals.css como default, y que cualquier app consumidora
// puede sobreescribir en su propio :root para heredar su marca.
// Por eso aqui no se extiende `colors` — los componentes usan clases
// arbitrarias de Tailwind tipo bg-[var(--vfc-surface)].

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        vfc: "var(--vfc-radius, 10px)",
      },
      boxShadow: {
        vfc: "var(--vfc-shadow, 0 1px 2px rgba(0,0,0,0.06))",
      },
      fontFamily: {
        sans: ["var(--vfc-font-sans, ui-sans-serif)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
