"use client";

import { getAssetUrl, heroHighlights, siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { Container } from "./container";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-10 sm:pb-28 lg:pb-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(83,126,255,0.28),transparent_64%)] blur-3xl" />
        <div className="absolute right-[-10%] top-28 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(99,209,182,0.22),transparent_62%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)]/80 bg-[var(--surface)]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--accent-strong)] shadow-[var(--shadow-soft)] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Available for product-focused frontend work
            </div>

            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--muted-foreground)]">
                {siteConfig.role} based in {siteConfig.location}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Designing premium interfaces with the precision of an engineer.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                I&apos;m {siteConfig.name}, a developer building polished
                portfolio, product, and dashboard experiences with Next.js,
                TypeScript, Tailwind CSS, and motion that feels intentional.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/75 px-6 py-3 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-soft)] backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                Contact Me
                <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index + 0.3, duration: 0.6 }}
                  className="rounded-3xl border border-[var(--border-strong)]/70 bg-[var(--surface)]/70 px-4 py-4 text-sm text-[var(--foreground)] shadow-[var(--shadow-soft)] backdrop-blur"
                >
                  {highlight}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-x-10 bottom-0 top-10 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(83,126,255,0.24),rgba(99,209,182,0.18))] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/75 p-3 shadow-[var(--shadow-strong)] backdrop-blur-xl">
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border-strong)]/70 bg-[var(--surface-strong)] pt-10">
                <Image
                  src={getAssetUrl("/hero-developer.png")}
                  alt="Preview of Mayank Sahu portfolio visuals"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,8,17,0.52)_100%)]" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 left-6 rounded-3xl border border-white/10 bg-[rgba(7,10,19,0.72)] px-4 py-3 text-sm text-white shadow-[0_20px_60px_rgba(5,8,17,0.32)] backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/65">
                  Currently focused on
                </p>
                <p className="mt-1 font-medium">
                  Next.js apps, motion systems, and frontend architecture
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
