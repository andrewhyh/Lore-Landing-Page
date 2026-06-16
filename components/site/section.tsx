import * as React from "react";
import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  bleed = false,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  bleed?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        bleed ? "" : "mx-auto max-w-6xl px-5 sm:px-8",
        "py-16 sm:py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sage">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft dark:text-white/70">
          {sub}
        </p>
      )}
    </div>
  );
}
