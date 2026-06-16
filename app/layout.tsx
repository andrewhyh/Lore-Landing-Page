import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ThemeScript } from "@/components/site/theme-script";

const display = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://lore.nextechelon.site";

export const metadata: Metadata = {
  title: "Lore — Your family's stories, kept close.",
  description:
    "A warm, modern home for your family's memories — photos, voices, family tree, and private group spaces.",
  openGraph: {
    title: "Lore — Your family's stories, kept close.",
    description:
      "A warm, modern home for your family's memories — photos, voices, family tree, and private group spaces.",
    type: "website",
  },
  metadataBase: new URL(appUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
