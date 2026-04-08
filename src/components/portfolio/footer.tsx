import { siteConfig } from "@/data/site";
import { Container } from "./container";

export function PortfolioFooter() {
  return (
    <footer className="border-t border-[var(--border-strong)]/70 py-8">
      <Container className="flex flex-col gap-3 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.name} portfolio, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        <p>Focused on fast rendering, thoughtful motion, and accessible structure.</p>
      </Container>
    </footer>
  );
}
