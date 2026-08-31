import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        vfc: "var(--vfc-radius, 10px)",
        "vfc-lg": "var(--vfc-radius-lg, 16px)",
      },
      boxShadow: {
        vfc: "var(--vfc-shadow, 0 1px 2px rgba(0,0,0,0.06))",
        "vfc-lg": "var(--vfc-shadow-lg, 0 18px 50px rgba(0,0,0,0.12))",
      },
      fontFamily: {
        sans: ["var(--vfc-font-sans, ui-sans-serif)", "system-ui", "sans-serif"],
      },
      // Regla 6 — cuerpo mínimo 15px, interlineado 1.6 (usar text-body en
      // copy real; badges/labels/meta quedan en las escalas chicas normales).
      fontSize: {
        body: ["15px", { lineHeight: "1.6" }],
      },
      // Regla 4 — easing propietario de la casa. Prohibido ease/ease-in-out/
      // linear salvo shimmer/spin (esos siguen con su propio keyframe).
      transitionTimingFunction: {
        casa: "cubic-bezier(0.19, 1, 0.22, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      ringColor: {
        vfc: "var(--vfc-focus-ring)",
      },
    },
  },
  plugins: [],
};

export default config;
