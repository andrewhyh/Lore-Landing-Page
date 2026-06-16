import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "soft";
type Size = "sm" | "md" | "lg";

const base =
  "btn-press inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap select-none disabled:opacity-50 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
  // coral CTA — used sparingly, for main actions only
  primary:
    "bg-coral text-white hover:bg-coral-warm shadow-warm hover:shadow-lift",
  // deep ink-green — secondary actions on cream surfaces
  secondary:
    "bg-ink text-cream hover:bg-[#1d524a] dark:bg-[#1f4e47] dark:hover:bg-[#256058]",
  // outlined — neutral with hairline border
  outline:
    "border border-ink/15 dark:border-white/15 text-ink dark:text-cream hover:bg-ink/5 dark:hover:bg-white/5",
  // ghost — no surface; used on the dark hero panel
  ghost:
    "text-ink dark:text-cream hover:bg-ink/5 dark:hover:bg-white/10",
  // soft — sage-tinted, for low-emphasis affirmative actions
  soft:
    "bg-sage/15 text-ink hover:bg-sage/25 dark:bg-sage/15 dark:text-cream",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = Common &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export function Button(props: ButtonProps): React.ReactElement;
export function Button(props: AnchorProps): React.ReactElement;
export function Button(props: ButtonProps | AnchorProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    if (external || /^https?:\/\//.test(href)) {
      return (
        <a
          href={href}
          className={classes}
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
