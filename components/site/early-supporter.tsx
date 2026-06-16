import { Sparkle } from "lucide-react";

export function EarlySupporter({ spotsLeft = 9 }: { spotsLeft?: number }) {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-8">
      <div className="relative overflow-hidden rounded-card border border-sage/40 bg-soft-bg/80 dark:bg-[#13362f]/50 dark:border-sage/30 px-6 sm:px-10 py-8 sm:py-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-sunshine/20 blur-2xl"
        />
        <div className="relative grid items-center gap-6 sm:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sunshine/25 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#8a6915] dark:text-sunshine">
              <Sparkle size={11} strokeWidth={2.5} />
              Heirloom pricing
            </span>
            <p className="mt-3 max-w-3xl text-[16px] sm:text-[17px] leading-relaxed text-ink-soft dark:text-white/80">
              You're early. The first 15 people to start a Lore archive get{" "}
              <span className="font-semibold text-ink dark:text-cream">
                50% off the Family plan, forever
              </span>{" "}
              — $4/mo for life — plus a founders' badge and first dibs on
              handles. Use code{" "}
              <code className="rounded-md bg-ink/8 dark:bg-white/10 px-1.5 py-0.5 font-mono text-[13px] text-ink dark:text-cream">
                LORE15
              </code>{" "}
              at signup.
            </p>
          </div>

          <div className="flex items-center gap-3 sm:flex-col sm:items-end">
            <div className="font-display text-3xl font-bold text-ink dark:text-cream">
              {spotsLeft}
              <span className="text-base font-medium text-ink-muted"> / 15</span>
            </div>
            <div className="text-[12px] uppercase tracking-[0.16em] font-semibold text-ink-muted">
              spots left
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
