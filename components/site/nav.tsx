"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./wordmark";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { APP_SIGN_IN, APP_SIGN_UP } from "@/lib/config";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[backdrop-filter,background-color,border-color] duration-300",
        scrolled
          ? "backdrop-blur-md bg-cream/80 dark:bg-[#0c1a18]/75 border-b border-ink/8 dark:border-white/8"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-8">
          <Wordmark />
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "link-underline text-[14.5px] font-medium transition-colors",
                    active
                      ? "text-ink dark:text-cream"
                      : "text-ink-soft hover:text-ink dark:text-white/70 dark:hover:text-cream",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a
            href={APP_SIGN_IN}
            className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-[14.5px] font-medium text-ink-soft hover:text-ink dark:text-white/70 dark:hover:text-cream btn-press"
          >
            Sign in
          </a>
          <Button href={APP_SIGN_UP} variant="primary" size="sm" external className="hidden sm:inline-flex">
            Start your archive
          </Button>

          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-ink dark:text-cream hover:bg-ink/5 dark:hover:bg-white/10 btn-press"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-ink/8 dark:border-white/8 bg-cream dark:bg-[#0c1a18]">
          <nav className="mx-auto max-w-6xl px-5 py-6 flex flex-col gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-input px-3 py-3 text-base font-medium",
                    active
                      ? "bg-ink/5 dark:bg-white/5 text-ink dark:text-cream"
                      : "text-ink-soft dark:text-white/70",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="h-px bg-ink/8 dark:bg-white/8 my-3" />
            <div className="flex items-center gap-3">
              <a
                href={APP_SIGN_IN}
                className="flex-1 inline-flex h-11 items-center justify-center rounded-full border border-ink/15 dark:border-white/15 font-medium text-ink dark:text-cream"
              >
                Sign in
              </a>
              <Button href={APP_SIGN_UP} variant="primary" external className="flex-1">
                Start your archive
              </Button>
            </div>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
