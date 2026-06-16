import type { Metadata } from "next";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";

export const metadata: Metadata = {
  title: "FAQ — Lore",
  description:
    "Answers to the things people quietly wonder — privacy, pricing, family invites, and what happens to your memories.",
};

const groups = [
  {
    title: "The basics",
    items: [
      {
        q: "What is Lore, in one sentence?",
        a: "A warm, modern home for your family's memories — photos, voices, family tree, and private group spaces.",
      },
      {
        q: "Who is Lore for?",
        a: "Anyone who wants the small everyday moments of their family to outlast the phone they're stored on. Easy enough for a grandparent. Trustworthy enough for your private photos.",
      },
      {
        q: "Do I need to download an app?",
        a: "No. Lore works in any browser. We send a magic link to your email — no password to remember, no app store, no fuss.",
      },
    ],
  },
  {
    title: "Privacy & safety",
    items: [
      {
        q: "Is this safe for sensitive photos?",
        a: "Encrypted in transit and at rest, row-level security on every record, and no admin can browse your archive. We don't have a backdoor.",
      },
      {
        q: "Can I keep things private from extended family?",
        a: (
          <>
            Yes. Every profile, memory, and community has{" "}
            <strong className="text-ink dark:text-cream">
              Just me / Family / Public
            </strong>{" "}
            scopes, enforced at the database. The cousins won't see what you
            keep for yourself.
          </>
        ),
      },
      {
        q: "Do you sell my data? Show ads? Train AI on it?",
        a: "No, no, and no. There are no ads on Lore. We don't sell data. Your memories are not training data — for us or anyone else.",
      },
      {
        q: "Who can edit the family tree?",
        a: "Only people you explicitly invite as collaborators. Everyone else views what you choose to share.",
      },
    ],
  },
  {
    title: "Family & invites",
    items: [
      {
        q: "How many people can I invite?",
        a: "Free is for one person. Family supports up to 20 members at the same shared storage tier. Forever matches Family — paid once.",
      },
      {
        q: "Does my grandma need to be technical?",
        a: "Not at all. She gets a magic-link email, clicks once, and she's in. Larger text, clear buttons, no settings maze.",
      },
      {
        q: "Can different sides of the family have separate spaces?",
        a: "Yes. Private communities let you create separate circles — cousins on one side, in-laws on another — and share each memory into the circle it belongs to.",
      },
    ],
  },
  {
    title: "Pricing & longevity",
    items: [
      {
        q: "Will the free plan stay free?",
        a: "Yes, forever, for one person. If we ever change the free plan, anyone already on it keeps the old terms.",
      },
      {
        q: "What's the early-supporter offer?",
        a: "The first 15 people to start a Lore archive get 50% off the Family plan, forever ($4/mo for life), a founders' badge, and first dibs on handles. Use LORE15 at signup while spots remain.",
      },
      {
        q: "What happens if Lore shuts down?",
        a: "Every account gets an annual JSON + ZIP export of everything. Forever-plan members get a guaranteed 12-month migration window with a hand-off — nothing disappears overnight.",
      },
      {
        q: "Can I export my archive whenever I want?",
        a: "Yes. Full export, any time, in plain formats. Your data belongs to you.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 sm:px-8 pt-16 sm:pt-24 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1f8f5d] dark:text-sage">
          Frequently asked
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-ink dark:text-cream leading-[1.05]">
          The things people quietly wonder.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft dark:text-white/75">
          Can't find what you're looking for?{" "}
          <a
            href="mailto:hello@lore.app"
            className="link-underline font-medium text-ink dark:text-cream"
          >
            hello@lore.app
          </a>{" "}
          — a person reads every one.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-16">
        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-[22px] font-bold text-ink dark:text-cream mb-4">
                {group.title}
              </h2>
              <Faq items={group.items} />
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
