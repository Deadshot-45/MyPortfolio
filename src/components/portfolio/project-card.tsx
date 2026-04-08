"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  techStack: readonly string[];
  featured?: boolean;
};

export function ProjectCard({
  title,
  category,
  description,
  image,
  slug,
  techStack,
  featured,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/75 p-3 shadow-[var(--shadow-soft)] backdrop-blur"
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border-strong)]/70 bg-[var(--surface-strong)]">
          <Image
            src={image}
            alt={title}
            width={1400}
            height={960}
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(5,8,17,0.82)_100%)]" />
          <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          {featured ? (
            <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[rgba(7,10,19,0.72)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur">
              Featured
            </span>
          ) : null}
        </div>
        <div className="space-y-4 px-2 pb-3 pt-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
                {category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                {title}
              </h3>
            </div>
          </div>
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-strong)]/80 bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
