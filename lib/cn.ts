/**
 * Concatena clases condicionalmente. Version minima sin dependencias
 * (no clsx, no tailwind-merge) — suficiente para esta libreria porque
 * los componentes no generan combinaciones de clases conflictivas.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
