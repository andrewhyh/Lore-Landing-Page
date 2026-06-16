import { Hero } from "@/components/site/hero";
import { SocialProof } from "@/components/site/social-proof";
import { Features } from "@/components/site/features";
import { Difference } from "@/components/site/difference";
import { PricingCards } from "@/components/site/pricing-cards";
import { EarlySupporter } from "@/components/site/early-supporter";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";

const faqs = [
  {
    q: "What happens if Lore shuts down?",
    a: (
      <>
        Every account gets an annual JSON + ZIP export of everything you've put
        in. Forever-plan members also get a guaranteed 12-month migration window
        with a personal hand-off, so nothing disappears overnight.
      </>
    ),
  },
  {
    q: "Can I keep it private from extended family?",
    a: (
      <>
        Yes — each profile, memory, and community has{" "}
        <strong className="text-ink dark:text-cream">
          Just me / Family / Public
        </strong>{" "}
        scopes, enforced at the database with row-level security. Nothing leaks
        between circles by accident.
      </>
    ),
  },
  {
    q: "Who can edit our family tree?",
    a: (
      <>
        Only people you explicitly invite as collaborators. Everyone else can
        view what you choose to share with them — and nothing more.
      </>
    ),
  },
  {
    q: "Is this safe for sensitive photos?",
    a: (
      <>
        Encrypted in transit and at rest, row-level security on every record,
        and no admin can browse your archive. We don't even have a backdoor.
      </>
    ),
  },
  {
    q: "Does my grandma need an app?",
    a: (
      <>
        Nope. Lore works in any browser. We send a magic link to her email —
        no password to remember, no app store, no fuss.
      </>
    ),
  },
];

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <Difference />

      <section id="pricing" className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
            Pricing
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream">
            Honest pricing. Built for keeping.
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft dark:text-white/70">
            Free works forever for one person. The Family plan is for the
            whole tree. Forever is for the family that's keeping this for the
            grandkids.
          </p>
        </div>
        <div className="mt-10">
          <PricingCards />
        </div>
      </section>

      <EarlySupporter spotsLeft={9} />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
            Common questions
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream">
            The things people quietly wonder.
          </h2>
        </div>
        <div className="mt-10">
          <Faq items={faqs} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
