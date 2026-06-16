import { Lock, Download, ShieldCheck } from "lucide-react";

const items = [
  { icon: Lock, text: "Encrypted in transit & at rest" },
  { icon: Download, text: "Your data belongs to you (export anytime)" },
  { icon: ShieldCheck, text: "No ads. No selling. Ever." },
];

export function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-14">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 rounded-full bg-paper/70 dark:bg-white/[0.03] border border-ink/8 dark:border-white/8 px-4 py-3"
          >
            <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sage/15 text-[#1f8f5d] dark:text-sage">
              <Icon size={14} strokeWidth={2.25} />
            </span>
            <span className="text-[13.5px] font-medium text-ink-soft dark:text-white/75">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
