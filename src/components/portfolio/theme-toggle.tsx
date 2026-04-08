"use client";

import { motion } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setMounted(true);

    const current =
      (document.documentElement.dataset.theme as Theme | undefined) || "dark";

    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  // 🔥 Prevent SSR mismatch
  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-[var(--border-strong)]/80 bg-[var(--surface)]/85" />
    );
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)]/80 bg-[var(--surface)]/85 text-[var(--foreground)] shadow-[var(--shadow-soft)] backdrop-blur"
    >
      {theme === "dark" ? (
        <SunMedium className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </motion.button>
  );
}
