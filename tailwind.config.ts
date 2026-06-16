import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        cream: "#fbfaf7",
        "warm-bg": "#f3f5ee",
        "soft-bg": "#e7eee6",
        paper: "#ffffff",
        // Ink (text + primary)
        ink: {
          DEFAULT: "#153f38",
          soft: "#3f5f59",
          muted: "#7a918c",
        },
        // Accent (coral, CTAs only)
        coral: {
          DEFAULT: "#ff6b5e",
          warm: "#ed584e",
        },
        // Supporting
        sage: "#3ecf8e",
        sunshine: "#ffc857",
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.035em",
      },
      borderRadius: {
        card: "18px",
        input: "10px",
        panel: "24px",
      },
      boxShadow: {
        warm:
          "0 2px 8px rgba(21,63,56,0.05), 0 1px 2px rgba(21,63,56,0.04)",
        lift:
          "0 18px 50px rgba(21,63,56,0.12), 0 4px 14px rgba(21,63,56,0.06)",
        "lift-dark":
          "0 18px 50px rgba(0,0,0,0.45), 0 4px 14px rgba(0,0,0,0.3)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-6px) rotate(-1deg)" },
          "50%": { transform: "translateY(6px) rotate(1deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
