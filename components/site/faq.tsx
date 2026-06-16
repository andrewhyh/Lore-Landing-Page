import { ChevronDown } from "lucide-react";

export type FaqItem = {
  q: string;
  a: React.ReactNode;
};

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="rounded-card bg-paper dark:bg-[var(--paper)] border border-ink/8 dark:border-white/8 shadow-warm overflow-hidden">
      {items.map((item, i) => (
        <details
          key={i}
          className="group border-b border-ink/8 dark:border-white/8 last:border-b-0 open:bg-soft-bg/40 dark:open:bg-white/[0.02]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-soft-bg/40 dark:hover:bg-white/[0.02]">
            <span className="font-display text-[18px] sm:text-[19px] font-semibold text-ink dark:text-cream pr-4">
              {item.q}
            </span>
            <span
              aria-hidden
              className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink/5 dark:bg-white/10 text-ink dark:text-cream transition-transform group-open:rotate-180"
            >
              <ChevronDown size={15} strokeWidth={2.25} />
            </span>
          </summary>
          <div className="px-6 pb-6 pt-1 text-[15px] leading-relaxed text-ink-soft dark:text-white/70">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
