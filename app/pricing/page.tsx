import type { Metadata } from "next";
import { Check, Minus, Sparkle } from "lucide-react";
import { PricingCards } from "@/components/site/pricing-cards";
import { EarlySupporter } from "@/components/site/early-supporter";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";

export const metadata: Metadata = {
  title: "Pricing — Lore",
  description:
    "Free for one person, forever. Family for the whole tree. Forever for the family that's keeping this for the grandkids.",
};

type Row = {
  label: string;
  values: [React.ReactNode, React.ReactNode, React.ReactNode];
};

const yes = <Check size={14} strokeWidth={2.75} className="text-[#1f8f5d] dark:text-sage" />;
const no = <Minus size={14} strokeWidth={2.25} className="text-ink-muted" />;

const rows: Row[] = [
  { label: "Storage", values: ["2 GB", "100 GB shared", "100 GB shared"] },
  { label: "Family members", values: ["1", "Up to 20", "Up to 20"] },
  { label: "Family trees", values: ["1", "Unlimited", "Unlimited"] },
  { label: "Private communities", values: [no, "Unlimited", "Unlimited"] },
  { label: "Voice notes on memories", values: [no, yes, yes] },
  { label: "Anniversary & birthday reminders", values: [no, yes, yes] },
  { label: "“On this day” recaps", values: [yes, yes, yes] },
  { label: "Full export anytime", values: [yes, yes, yes] },
  { label: "Annual printed memory book", values: [no, no, yes] },
  { label: "Founders' badge", values: [no, no, yes] },
  { label: "12-month migration window", values: [no, no, yes] },
  { label: "Concierge import", values: [no, no, yes] },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1f8f5d] dark:text-sage">
            <Sparkle size={11} strokeWidth={2.5} />
            Honest pricing
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink dark:text-cream leading-[1.05]">
            Pay for keeping, not for features you'll never use.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft dark:text-white/75 max-w-2xl">
            Three plans. No hidden tiers, no upsell modals, no “contact sales.”
            If the free plan is what you need, the free plan is what you'll
            stay on.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-4 pb-10">
        <PricingCards />
      </section>

      <EarlySupporter spotsLeft={9} />

      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
            Compare
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream">
            Everything, side by side.
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-card border border-ink/8 dark:border-white/8 bg-paper dark:bg-[var(--paper)] shadow-warm">
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] text-[14px]">
            <div className="px-5 py-4 bg-warm-bg dark:bg-white/[0.02] font-semibold text-ink-muted text-[12px] uppercase tracking-[0.14em]">
              Feature
            </div>
            <div className="px-5 py-4 bg-warm-bg dark:bg-white/[0.02] font-display font-semibold text-ink dark:text-cream">
              Free
            </div>
            <div className="px-5 py-4 bg-warm-bg dark:bg-white/[0.02] font-display font-semibold text-ink dark:text-cream">
              Family
            </div>
            <div className="px-5 py-4 bg-warm-bg dark:bg-white/[0.02] font-display font-semibold text-ink dark:text-cream">
              Forever
            </div>

            {rows.map((row, i) => (
              <RowCells key={row.label} row={row} stripe={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
            Pricing FAQs
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream">
            Questions about the money parts.
          </h2>
        </div>
        <div className="mt-10">
          <Faq
            items={[
              {
                q: "Will the free plan stay free?",
                a: "Yes, forever — for one person, with 2 GB. We don't bait-and-switch. If we ever need to change the free plan, anyone already on it keeps the old terms.",
              },
              {
                q: "Can I switch between monthly and yearly?",
                a: "Yes. Yearly saves 25%, and you can switch at any time. Pro-rated refunds for downgrades within 30 days.",
              },
              {
                q: "What's included in Forever?",
                a: "Everything in Family, paid once. You also get a printed memory book each year, a founders' badge, concierge import help, and a guaranteed 12-month migration window if Lore ever closes.",
              },
              {
                q: "Do you offer non-profit / educational pricing?",
                a: (
                  <>
                    Yes. Email{" "}
                    <a href="mailto:hello@lore.app" className="link-underline text-ink dark:text-cream">
                      hello@lore.app
                    </a>{" "}
                    and we'll sort something kind.
                  </>
                ),
              },
              {
                q: "What payment methods do you accept?",
                a: "All major cards via Stripe. We don't store card details ourselves.",
              },
            ]}
          />
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function RowCells({ row, stripe }: { row: Row; stripe: boolean }) {
  const bg = stripe ? "bg-soft-bg/30 dark:bg-white/[0.015]" : "";
  return (
    <>
      <div className={`px-5 py-4 border-t border-ink/8 dark:border-white/8 text-ink-soft dark:text-white/80 ${bg}`}>
        {row.label}
      </div>
      {row.values.map((v, i) => (
        <div
          key={i}
          className={`px-5 py-4 border-t border-ink/8 dark:border-white/8 text-ink dark:text-cream ${bg}`}
        >
          {typeof v === "string" ? <span className="text-[14px]">{v}</span> : v}
        </div>
      ))}
    </>
  );
}
