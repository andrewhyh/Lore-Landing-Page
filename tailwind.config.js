/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                "deep-charcoal": "#1A1A2E",
                "muted-slate-blue": "#2A3B4C",
                "electric-teal": "#3ECF8E",
                "darker-teal": "#3ECF8E",
                "background-light": "#F0F3F7",
                "background-dark": "#1A1A2E",
                "text-dark": "#B0BACC",
                "slate-bg-light": "#E0E5ED",
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: '#3ECF8E',
                    foreground: '#1A1A2E',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            keyframes: {
                "shooting-star": {
                    "0%": { transform: "rotate(315deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": { transform: "rotate(315deg) translateX(-1000px)", opacity: "0" },
                },
            },
            animation: {
                "shooting-star": "shooting-star 3s linear infinite",
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}
