import type { Metadata } from "next";
import { Heart, Sprout, Shield, Mailbox } from "lucide-react";
import { FinalCta } from "@/components/site/final-cta";

export const metadata: Metadata = {
  title: "About — Lore",
  description:
    "Lore is a warm, modern home for your family's memories. We're not a social network or cloud storage — we're the warm place between.",
};

const values = [
  {
    icon: Heart,
    title: "We are calm by default.",
    body:
      "No notifications nagging for attention, no streaks, no feeds. The point is the people you love, not the time you spend on us.",
  },
  {
    icon: Sprout,
    title: "We build slowly, on purpose.",
    body:
      "An archive is supposed to outlast a startup. We'd rather ship one careful feature a quarter than ten loud ones a week.",
  },
  {
    icon: Shield,
    title: "Privacy is a foundation, not a feature.",
    body:
      "Encryption, row-level security, no admin browsing, and full export. We never trade your memories for ad targeting — there are no ads to target.",
  },
  {
    icon: Mailbox,
    title: "We answer the email.",
    body:
      "Real humans, real replies, usually within a day. If something feels broken, we want to know — and we want you to know we heard.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1f8f5d] dark:text-sage">
            Why we're building this
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink dark:text-cream leading-[1.05]">
            A quiet home for the people we love.
          </h1>
          <p className="mt-6 text-[18px] leading-relaxed text-ink-soft dark:text-white/80 max-w-2xl">
            Most of our memories live somewhere unkind — buried in a phone roll,
            split across four group chats, locked behind a login someone
            forgot. Lore is the alternative: one warm room where the photos,
            the voices, and the small moments find each other again.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
        <div className="rounded-card bg-warm-bg dark:bg-white/[0.03] border border-ink/8 dark:border-white/8 px-6 sm:px-12 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-coral-warm">
                The story
              </div>
              <h2 className="mt-3 font-display text-[34px] sm:text-[44px] leading-[1.05] font-bold text-ink dark:text-cream">
                It started with a shoebox.
              </h2>
            </div>
            <div className="space-y-5 text-[16.5px] leading-relaxed text-ink-soft dark:text-white/80">
              <p>
                A grandmother had a shoebox of photos. A grandson had a phone
                full of voice memos. Between them was the question that gets
                asked too late: <span className="italic">who was that, again?</span>
              </p>
              <p>
                We wanted the answer to be easy to find. Not in a vault, not in
                a feed, not held hostage by a service that might disappear
                tomorrow. Somewhere warm, with context, that the whole family
                can reach.
              </p>
              <p>
                Lore is what we wished existed. We hope it's what you wished
                existed too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
            What we believe
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream">
            Four quiet promises.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 reveal">
          {values.map(({ icon: Icon, title, body }) => (
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

      {/* What we are not */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="rounded-card bg-ink text-cream px-6 sm:px-12 py-14 sm:py-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-sage/20 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
              What we are not
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-cream">
              We're not a feed. We're a shelf.
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3 text-[15.5px] leading-relaxed text-cream/80">
              <div>
                <div className="font-display font-semibold text-cream">
                  Not a social network
                </div>
                <p className="mt-2">
                  We're not chasing your attention. There's nothing to scroll
                  forever, no streaks, no engagement metrics on the dashboard.
                </p>
              </div>
              <div>
                <div className="font-display font-semibold text-cream">
                  Not cloud storage
                </div>
                <p className="mt-2">
                  Files alone aren't memories. We care about the story behind
                  the photo, not just the file size of the photo.
                </p>
              </div>
              <div>
                <div className="font-display font-semibold text-cream">
                  Not a single-use app
                </div>
                <p className="mt-2">
                  An archive that lasts a generation can't depend on a single
                  person opening it weekly. Lore works whether you visit daily
                  or once a year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
