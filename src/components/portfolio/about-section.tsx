"use client";

import { aboutBlurb, getAssetUrl, stats } from "@/data/site";
import { Award, BrainCircuit, Rocket } from "lucide-react";
import Image from "next/image";
import { Container } from "./container";
import { Reveal, RevealGroup } from "./reveal";
import { SectionIntro } from "./section-intro";

const valueCards = [
  {
    title: "Design-sensitive engineering",
    description: "I treat visual polish, interaction quality, and implementation detail as one system.",
    icon: Award,
  },
  {
    title: "Strategic thinking",
    description: "Competitive chess shaped how I approach complexity, tradeoffs, and delivery discipline.",
    icon: BrainCircuit,
  },
  {
    title: "Product momentum",
    description: "I like shipping clean increments that improve UX, performance, and maintainability together.",
    icon: Rocket,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <RevealGroup className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/78 p-3 shadow-[var(--shadow-strong)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[var(--surface-strong)]">
                <Image
                  src={getAssetUrl("/profile.png")}
                  alt="Portrait of Mayank Sahu"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(5,8,17,0.72)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-[rgba(7,10,19,0.6)] p-4 text-white backdrop-blur-xl">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">Approach</p>
                  <p className="mt-2 text-sm leading-6">Building interfaces that feel premium without sacrificing clarity, speed, or accessibility.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="space-y-8">
            <SectionIntro
              eyebrow="About"
              title="A frontend-first developer with a strong eye for product quality."
              description="I enjoy turning rough ideas into interfaces that feel confident, modern, and easy to trust. The goal is always the same: a product that looks elevated and performs reliably."
            />

            <div className="space-y-5 text-sm leading-8 text-[var(--muted-foreground)] sm:text-base">
              {aboutBlurb.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 0.08}
                  className="rounded-[1.75rem] border border-[var(--border-strong)]/75 bg-[var(--surface)]/70 p-5 shadow-[var(--shadow-soft)]"
                >
                  <p className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{stat.label}</p>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {valueCards.map((card) => {
                const Icon = card.icon;

                return (
                  <Reveal
                    key={card.title}
                    className="rounded-[1.75rem] border border-[var(--border-strong)]/70 bg-[var(--surface)]/70 p-5 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
                  >
                    <Icon className="h-5 w-5 text-[var(--accent-strong)]" />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{card.description}</p>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </RevealGroup>
      </Container>
    </section>
  );
}
