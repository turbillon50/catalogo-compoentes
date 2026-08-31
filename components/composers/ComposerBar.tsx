export interface ComposerBarProps {
  canSend: boolean;
  onSend: () => void;
  pillLabel?: string;
}

/**
 * La barra inferior compartida por Grafito/Obsidiana/Porcelana/Crystal/Aurora:
 * ＋ (adjuntar), pill de herramientas, spacer, send. Terminal y Editorial NO
 * la usan — tienen su propio patrón (fkey/exec y botón de tinta).
 */
export function ComposerBar({ canSend, onSend, pillLabel = "Herramientas" }: ComposerBarProps) {
  return (
    <div className="cmp-bar">
      <button type="button" className="cmp-icon" aria-label="Adjuntar">
        ＋
      </button>
      <button type="button" className="cmp-pill">
        ⚙ {pillLabel}
      </button>
      <div className="grow" />
      <button type="button" className="cmp-send" data-ready={canSend} onClick={onSend} aria-label="Enviar">
        ↑
      </button>
    </div>
  );
}
