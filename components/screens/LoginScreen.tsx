"use client";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { IconLock } from "@/components/brand/VFIcons";

export interface LoginScreenProps {
  titulo: string;
  sub: string;
  onSubmit?: (data: { email: string; password: string }) => void;
  onCrearCuenta?: () => void;
  className?: string;
}

/** tipo: "login" — pantalla de entrada. Inputs decorativos; la validación/auth la conecta cada app. */
export function LoginScreen({ titulo, sub, onSubmit, onCrearCuenta, className }: LoginScreenProps) {
  return (
    <div className={cn("flex h-full flex-col items-center justify-center gap-6 p-6", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--vfc-surface-2)] text-[var(--vfc-fg-muted)]">
        <IconLock size={20} />
      </div>

      <div className="text-center">
        <h1 className="text-xl font-medium text-[var(--vfc-fg)]">{titulo}</h1>
        <p className="mt-1 text-sm text-[var(--vfc-fg-muted)]">{sub}</p>
      </div>

      <form
        className="w-full max-w-xs space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          onSubmit?.({
            email: String(fd.get("email") || ""),
            password: String(fd.get("password") || ""),
          });
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Correo"
          className="w-full rounded-vfc border border-[var(--vfc-border)] bg-[var(--vfc-surface)] px-3 py-2.5 text-sm text-[var(--vfc-fg)] outline-none focus:border-[var(--vfc-border-strong)]"
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          className="w-full rounded-vfc border border-[var(--vfc-border)] bg-[var(--vfc-surface)] px-3 py-2.5 text-sm text-[var(--vfc-fg)] outline-none focus:border-[var(--vfc-border-strong)]"
        />
        <Button type="submit" variant="primary" className="w-full">
          Continuar
        </Button>
        <Button type="button" variant="ghost" className="w-full" onClick={onCrearCuenta}>
          Crear cuenta
        </Button>
      </form>
    </div>
  );
}
