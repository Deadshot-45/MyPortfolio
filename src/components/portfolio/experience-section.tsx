"use client";

import { experiences } from "@/data/site";
import { formatDateRange } from "@/lib/utils";
import { Container } from "./container";
import { Reveal, RevealGroup } from "./reveal";
import { SectionIntro } from "./section-intro";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <RevealGroup className="space-y-10">
          <Reveal>
            <SectionIntro
              eyebrow="Experience"
              title="A timeline of delivery, technical growth, and product-minded execution."
              description="My work has ranged from frontend implementation to operational reliability, with each step sharpening how I approach clarity, systems, and momentum."
            />
          </Reveal>

          <div className="relative space-y-6 pl-6 sm:pl-8">
            <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-[linear-gradient(180deg,var(--border-strong),transparent)] sm:left-3" />
            {experiences.map((experience, index) => (
              <Reveal
                key={`${experience.company}-${experience.role}`}
                delay={index * 0.08}
                className="relative rounded-4xl border border-[var(--border-strong)]/80 bg-[var(--surface)]/76 p-6 shadow-[var(--shadow-soft)] backdrop-blur"
              >
                <div className="absolute left-[-1.52rem] top-8 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] shadow-[0_0_24px_rgba(83,126,255,0.45)] sm:left-[-1.78rem]" />
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
                      {experience.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                      {experience.role}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
                      {experience.summary}
                    </p>
                  </div>
                  <div className="space-y-2 rounded-2xl border border-[var(--border-strong)]/70 bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--muted-foreground)]">
                    <p>{formatDateRange(experience.from, experience.to)}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-[var(--muted-foreground)]"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
