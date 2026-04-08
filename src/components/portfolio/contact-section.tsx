"use client";

import { siteConfig } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Container } from "./container";
import { Reveal, RevealGroup } from "./reveal";
import { SectionIntro } from "./section-intro";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <RevealGroup className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="Contact"
              title="Let&apos;s create something that feels as strong as it performs."
              description="I&apos;m open to full-time roles, freelance collaborations, and product work where thoughtful frontend execution matters."
            />
            <div className="space-y-4 rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/75 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--border-strong)]/70 bg-[var(--surface-strong)] px-4 py-4 transition-transform hover:-translate-y-0.5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--accent-strong)]">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Email</span>
                  <span className="text-sm font-medium text-[var(--foreground)]">{siteConfig.email}</span>
                </span>
              </a>
              <div className="flex gap-3">
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border-strong)]/80 bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border-strong)]/80 bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/78 p-6 shadow-[var(--shadow-strong)] backdrop-blur">
            <ContactForm email={siteConfig.email} />
          </Reveal>
        </RevealGroup>
      </Container>
    </section>
  );
}
