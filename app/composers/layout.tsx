import "../composers.css";

// 5 familias, una por variante — Instrument Sans (Grafito/Obsidiana/Porcelana),
// Manrope (Crystal), Newsreader (Editorial), JetBrains Mono (Terminal), Sora (Aurora).
export default function ComposersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Manrope:wght@400;500&family=Newsreader:ital@1&family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@500;600&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
