import Link from "next/link";
import { Wordmark } from "./wordmark";
import { APP_SIGN_UP } from "@/lib/config";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/", label: "Home" },
      { href: "/pricing", label: "Pricing" },
      { href: "/faq", label: "FAQ" },
      { href: APP_SIGN_UP, label: "Open the app", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "mailto:hello@lore.app", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/8 dark:border-white/8 bg-cream dark:bg-[#0c1a18]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark size="md" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              A warm, modern home for your family's memories.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-muted">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        className="text-[14.5px] text-ink-soft hover:text-ink dark:text-white/70 dark:hover:text-cream link-underline"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[14.5px] text-ink-soft hover:text-ink dark:text-white/70 dark:hover:text-cream link-underline"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/8 dark:border-white/8 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Lore. Made with care for the people we love.</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
            All systems quiet.
          </span>
        </div>
      </div>
    </footer>
  );
}
