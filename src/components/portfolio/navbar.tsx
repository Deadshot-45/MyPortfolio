"use client";

import { navigationItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function PortfolioNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () => navigationItems.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 z-50 px-3 pt-3"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-5",
            scrolled
              ? "border-[var(--border-strong)]/90 bg-[var(--surface)]/80 shadow-[var(--shadow-strong)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-strong)] text-[var(--foreground)] shadow-[var(--shadow-soft)]">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-[var(--foreground)] sm:block">{siteConfig.name}</span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-[var(--border-strong)]/70 bg-[var(--surface)]/65 p-1 lg:flex">
            {navigationItems.map((item) => {
              const itemId = item.href.replace("#", "");
              const active = itemId === activeSection;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    active
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)]/70 bg-[var(--surface)]/85 text-[var(--foreground)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)]/70 bg-[var(--surface)]/85 text-[var(--foreground)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)]/70 bg-[var(--surface)]/85 text-[var(--foreground)] shadow-[var(--shadow-soft)] lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--background)]/92 px-6 pb-8 pt-24 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              className="mx-auto flex max-w-md flex-col gap-3 rounded-[2rem] border border-[var(--border-strong)]/80 bg-[var(--surface)]/90 p-6 shadow-[var(--shadow-strong)]"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
