import * as React from "react";

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: React.ReactNode;
  sections: Section[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1f8f5d] dark:text-sage">
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-ink dark:text-cream leading-[1.05]">
          {title}
        </h1>
        <p className="mt-3 text-[13px] uppercase tracking-[0.16em] font-semibold text-ink-muted">
          Last updated · {updated}
        </p>
        <div className="mt-6 text-[16.5px] leading-relaxed text-ink-soft dark:text-white/80">
          {intro}
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-muted mb-3">
            On this page
          </div>
          <nav className="flex flex-col gap-1.5 text-[14px]">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="link-underline text-ink-soft hover:text-ink dark:text-white/70 dark:hover:text-cream"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="space-y-10">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-card border border-ink/8 dark:border-white/8 bg-paper dark:bg-[var(--paper)] p-7 sm:p-9 shadow-warm"
            >
              <h2 className="font-display text-[24px] font-bold text-ink dark:text-cream">
                {s.title}
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-ink-soft dark:text-white/80">
                {s.body}
              </div>
            </section>
          ))}

          <p className="text-[13.5px] text-ink-muted">
            This document is a plain-language summary intended for our early
            customers. It does not constitute legal advice. Have a lawyer's
            question?{" "}
            <a href="mailto:legal@lore.app" className="link-underline text-ink dark:text-cream">
              legal@lore.app
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
