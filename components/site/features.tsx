import { CalendarHeart, GitBranch, UsersRound } from "lucide-react";

const features = [
  {
    icon: CalendarHeart,
    title: "Memories that won't get lost",
    body:
      "Photos, videos, and the stories behind them. Tagged by year, person, place. Surfaced gently with “On this day.”",
  },
  {
    icon: GitBranch,
    title: "A living family tree",
    body:
      "Drag, link, and grow it together. Birth years, death years, the people who made you.",
  },
  {
    icon: UsersRound,
    title: "Private spaces for each circle",
    body:
      "Communities for the cousins, grandparents, in-laws. Share what fits where.",
  },
];

export function Features() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
          What's inside
        </div>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream">
          Small enough for one. Big enough for everyone.
        </h2>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft dark:text-white/70">
          Three quiet ideas, woven together. Each one is meant to feel less
          like software and more like a shelf you can reach for.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 reveal">
        {features.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="lift rounded-card bg-paper dark:bg-[var(--paper)] border border-ink/8 dark:border-white/8 shadow-warm p-7"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-[#1f8f5d] dark:text-sage">
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-display text-[22px] font-bold text-ink dark:text-cream leading-tight">
              {title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft dark:text-white/70">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
