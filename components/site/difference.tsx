export function Difference() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
      <div className="rounded-card bg-warm-bg dark:bg-white/[0.03] border border-ink/8 dark:border-white/8 px-6 sm:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-coral-warm">
              The Lore difference
            </div>
            <h2 className="mt-3 font-display text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-bold text-ink dark:text-cream">
              Built for keeping,
              <br />
              not scrolling.
            </h2>
          </div>

          <div className="space-y-6 text-[16.5px] leading-relaxed text-ink-soft dark:text-white/75">
            <p>
              <span className="font-semibold text-ink dark:text-cream">
                We're not a social network.
              </span>{" "}
              There's no feed designed to hold you.
            </p>
            <p>
              <span className="font-semibold text-ink dark:text-cream">
                We're not cloud storage.
              </span>{" "}
              Files alone aren't memories — context is.
            </p>
            <p>
              <span className="font-semibold text-ink dark:text-cream">
                We're the warm place between
              </span>{" "}
              — where the photos meet the stories that make them mean something.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
