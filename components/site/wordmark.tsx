import Link from "next/link";

export function Wordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeCls =
    size === "lg"
      ? "text-3xl"
      : size === "sm"
        ? "text-lg"
        : "text-2xl";
  return (
    <Link
      href="/"
      aria-label="Lore — home"
      className="group inline-flex items-baseline gap-1.5"
    >
      <span
        className={`font-display font-bold tracking-[-0.04em] text-ink dark:text-cream ${sizeCls}`}
      >
        Lore
      </span>
      <span
        aria-hidden
        className="block h-1.5 w-1.5 rounded-full bg-sage transition-transform group-hover:scale-125"
      />
    </Link>
  );
}
