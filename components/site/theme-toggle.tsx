"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("lore-theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={
        "btn-press inline-flex h-9 w-9 items-center justify-center rounded-full text-ink dark:text-cream hover:bg-ink/5 dark:hover:bg-white/10 " +
        className
      }
    >
      {mounted ? (
        dark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  );
}
