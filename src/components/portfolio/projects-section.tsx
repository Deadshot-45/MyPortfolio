"use client";

import { projects } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { ProjectCard } from "./project-card";
import { Reveal, RevealGroup } from "./reveal";
import { SectionIntro } from "./section-intro";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <RevealGroup className="space-y-10">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Projects"
              title="Selected work that pairs visual polish with practical product thinking."
              description="Each project is approached as a full experience: structure, storytelling, responsiveness, and the motion details that make the interface feel alive."
            />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-transform hover:translate-x-1"
            >
              Let&apos;s build something together
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
