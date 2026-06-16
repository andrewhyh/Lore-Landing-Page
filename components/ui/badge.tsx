import * as React from "react";
import { cn } from "@/lib/cn";

type Tone = "sage" | "sunshine" | "coral" | "ink" | "paper";

const tones: Record<Tone, string> = {
  sage: "bg-sage/15 text-[#1f8f5d] dark:text-sage",
  sunshine: "bg-sunshine/20 text-[#8a6915] dark:text-sunshine",
  coral: "bg-coral/15 text-coral-warm",
  ink: "bg-ink text-cream",
  paper: "bg-paper/95 text-ink border border-ink/10",
};

export function Badge({
  tone = "sage",
  children,
  className,
}: {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold tracking-tight",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
