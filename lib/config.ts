// Single source of truth for the app URL the marketing site links to.
// Override at deploy time via NEXT_PUBLIC_APP_URL.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://lore.nextechelon.site";

// Convenience helpers — if the app later splits sign-in / sign-up routes,
// change here and every CTA across the site picks it up.
export const APP_SIGN_IN = APP_URL;
export const APP_SIGN_UP = APP_URL;
