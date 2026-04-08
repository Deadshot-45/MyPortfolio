"use client";

import { skillGroups } from "@/data/site";
import { Code2, Database, Wrench } from "lucide-react";
import { Container } from "./container";
import { Reveal, RevealGroup } from "./reveal";
import { SectionIntro } from "./section-intro";

const iconMap = {
  Frontend: Code2,
  Backend: Database,
  Tools: Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <RevealGroup className="space-y-10">
          <Reveal>
            <SectionIntro
              eyebrow="Skills"
              title="A modern stack shaped around speed, scalability, and interface quality."
              description="I use a practical toolset that supports both crisp visual delivery and maintainable engineering foundations."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, groupIndex) => {
              const Icon = iconMap[group.title as keyof typeof iconMap];

              return (
                <Reveal
                  key={group.title}
                  delay={groupIndex * 0.08}
                  className="rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/78 p-6 shadow-[var(--shadow-soft)] backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-strong)] text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">{group.title}</h3>
                      <p className="text-sm leading-6 text-[var(--muted-foreground)]">{group.description}</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    {group.items.map((item) => (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-[var(--foreground)]">{item.name}</span>
                          <span className="text-xs text-[var(--muted-foreground)]">{item.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-strong)]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-secondary))]"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
