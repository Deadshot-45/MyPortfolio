import { cn } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-4", align === "center" ? "text-center" : "text-left")}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-strong)]">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p
        className={cn(
          "max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base",
          align === "center" && "mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
}
