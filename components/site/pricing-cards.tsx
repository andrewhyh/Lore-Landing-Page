import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_SIGN_UP } from "@/lib/config";
import { cn } from "@/lib/cn";

type Tier = {
  name: string;
  price: string;
  cadence?: string;
  yearly?: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    blurb: "For one person, forever.",
    features: [
      "2 GB storage",
      "1 family tree",
      "Photos & stories (50 MB per file)",
      "“On this day” recaps",
      "Full export anytime",
    ],
    cta: "Start free",
    href: APP_SIGN_UP,
  },
  {
    name: "Family",
    price: "$8",
    cadence: "/mo",
    yearly: "or $72/yr — save 25%",
    blurb: "Everything you need for the whole family.",
    features: [
      "100 GB shared storage",
      "Up to 20 family members",
      "Unlimited family trees & communities",
      "Anniversary & birthday reminders",
      "Voice notes on memories",
      "Priority email support",
    ],
    cta: "Start a family archive",
    href: APP_SIGN_UP,
    highlight: true,
  },
  {
    name: "Forever",
    price: "$299",
    cadence: "once",
    blurb: "For the family that's keeping this for the grandkids.",
    features: [
      "Everything in Family, paid once",
      "Lifetime access — no renewal, ever",
      "Annual printed memory book mailed to you",
      "Founders' badge on your profile",
      "12-month guaranteed migration window if Lore ever closes",
      "Concierge import of old photo libraries",
    ],
    cta: "Keep it forever",
    href: APP_SIGN_UP,
  },
];

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className={cn(
            "relative flex flex-col rounded-card bg-paper dark:bg-[var(--paper)] p-8 shadow-warm lift",
            tier.highlight
              ? "border-2 border-ink dark:border-cream"
              : "border border-ink/8 dark:border-white/8",
          )}
        >
          {tier.highlight && (
            <span
              className="absolute left-1/2 -top-3 -translate-x-1/2 inline-flex items-center rounded-full bg-coral px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-warm"
            >
              Most popular
            </span>
          )}

          <header>
            <h3 className="font-display text-[22px] font-bold text-ink dark:text-cream">
              {tier.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-bold text-ink dark:text-cream">
                {tier.price}
              </span>
              {tier.cadence && (
                <span className="text-sm text-ink-muted">{tier.cadence}</span>
              )}
            </div>
            {tier.yearly && (
              <div className="mt-1 text-[13px] text-ink-muted">{tier.yearly}</div>
            )}
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft dark:text-white/70">
              {tier.blurb}
            </p>
          </header>

          <ul className="mt-6 flex-1 space-y-3">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[14px] text-ink-soft dark:text-white/75">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sage/15 text-[#1f8f5d] dark:text-sage">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              href={tier.href}
              external
              variant={tier.highlight ? "primary" : "outline"}
              className="w-full"
            >
              {tier.cta}
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
