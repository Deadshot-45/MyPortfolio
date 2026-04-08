import { siteConfig } from "@/data/site";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

type ProjectDetailProps = {
  project: {
    title: string;
    category: string;
    tagline: string;
    longDescription: string;
    image: string;
    techStack: readonly string[];
    metrics: readonly string[];
    liveUrl: string;
  };
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="pb-20 pt-10 sm:pb-28">
      <Container className="space-y-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
              {project.category}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg leading-8 text-[var(--muted-foreground)]">{project.tagline}</p>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-strong)]/80 bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-[1.5rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/70 px-4 py-4 text-sm text-[var(--foreground)] shadow-[var(--shadow-soft)]"
                >
                  {metric}
                </div>
              ))}
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)]"
              >
                View live project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <p className="text-sm text-[var(--muted-foreground)]">
                Live deployment is not linked for this concept project.
              </p>
            )}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/75 p-3 shadow-[var(--shadow-strong)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border-strong)]/70 bg-[var(--surface-strong)]">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/74 p-8 shadow-[var(--shadow-soft)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">What this project highlights</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            This case study page supports better indexing, clearer project storytelling, and a scalable structure for adding future portfolio work.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            For deployment, set <code>NEXT_PUBLIC_SITE_URL</code> to your production domain so sitemap, structured data, and social previews use the correct absolute URL.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            Reach out at <a href={`mailto:${siteConfig.email}`} className="text-[var(--foreground)] underline underline-offset-4">{siteConfig.email}</a> if you want to collaborate on something similar.
          </p>
        </section>
      </Container>
    </main>
  );
}
