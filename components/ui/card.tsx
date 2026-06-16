import * as React from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  as: As = "div",
  lift = false,
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "article" | "section";
  lift?: boolean;
}) {
  return (
    <As
      className={cn(
        "rounded-card bg-paper dark:bg-[var(--paper)] border border-ink/8 dark:border-white/8 shadow-warm p-7",
        lift && "lift",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function CardEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-muted">
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("font-display text-2xl font-bold text-ink dark:text-cream", className)}>
      {children}
    </h3>
  );
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[15px] leading-relaxed text-ink-soft dark:text-white/70", className)}>
      {children}
    </p>
  );
}
