export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDateRange(from: string, to?: string) {
  return to ? `${from} - ${to}` : `${from} - Present`;
}
