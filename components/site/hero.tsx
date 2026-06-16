import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_SIGN_UP } from "@/lib/config";

function todayChip(): string {
  const d = new Date();
  const day = d.toLocaleDateString("en-US", { weekday: "long" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  return `${day}, ${month} ${d.getDate()}`.toUpperCase();
}

export function Hero() {
  const date = todayChip();
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-6 sm:pt-10 pb-2">
      <div className="relative overflow-hidden rounded-[28px] bg-ink text-cream shadow-lift">
        {/* sage glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-sage/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-[-160px] h-[360px] w-[360px] rounded-full bg-[#2bb279]/10 blur-3xl"
        />

        <div className="relative grid items-center gap-10 px-6 py-14 sm:px-12 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-14 lg:py-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-cream/80">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
              {date}
            </span>

            <h1 className="mt-6 font-display text-[44px] leading-[1.04] sm:text-6xl lg:text-[64px] font-bold text-cream">
              The stories worth keeping{" "}
              <span className="block sm:inline">live here.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-cream/70">
              Photos, voices, and the small moments — kept close for the whole
              family. A quiet home for the memories that matter.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Button href={APP_SIGN_UP} external variant="primary" size="lg">
                Start your archive — free
                <ArrowRight size={16} strokeWidth={2.5} />
              </Button>
              <Link
                href="#how-it-works"
                className="btn-press inline-flex h-12 items-center justify-center rounded-full px-5 text-[15px] font-semibold text-cream/90 hover:bg-cream/5"
              >
                See how it works
              </Link>
            </div>

            <p className="mt-5 text-[13px] text-cream/55">
              Free forever for one person. No credit card.
            </p>
          </div>

          {/* Mascot stage */}
          <div className="relative mx-auto flex max-w-md items-end justify-center lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-x-8 bottom-2 h-4 rounded-full bg-black/30 blur-md opacity-40"
            />
            <div className="relative animate-[float_4s_ease-in-out_infinite] motion-reduce:animate-none">
              <div className="img-shimmer h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] rounded-[36px] bg-cream/[0.04] grid place-items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mascot/lore-mascot.svg"
                  alt="Lore — a friendly green dinosaur mascot"
                  width={320}
                  height={320}
                  className="h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
                  loading="eager"
                />
              </div>
              {/* Quiet notes around the mascot */}
              <span
                aria-hidden
                className="absolute -top-3 left-3 inline-flex items-center gap-2 rounded-full bg-cream/[0.06] backdrop-blur px-3 py-1 text-[11px] font-semibold text-cream/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sunshine" />
                On this day, 1998
              </span>
              <span
                aria-hidden
                className="absolute -bottom-2 right-2 inline-flex items-center gap-2 rounded-full bg-cream/[0.06] backdrop-blur px-3 py-1 text-[11px] font-semibold text-cream/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                3 voices · 12 photos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
