import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_SIGN_UP } from "@/lib/config";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20 pt-8">
      <div className="relative overflow-hidden rounded-[28px] bg-ink text-cream shadow-lift">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-sage/15 blur-3xl"
        />
        <div className="relative px-6 sm:px-12 py-16 sm:py-24 text-center">
          <h2 className="font-display text-[40px] sm:text-[56px] leading-[1.05] font-bold text-cream">
            Start one tonight.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-cream/70">
            Five minutes. One photo. One story. It begins there.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={APP_SIGN_UP} external variant="primary" size="lg">
              Make your Lore
              <ArrowRight size={16} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
