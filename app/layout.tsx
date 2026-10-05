import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SiteMotion from "./components/site-motion";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-dm-serif", display: "swap" });

export const metadata: Metadata = {
  title: "ByLili — Websites with purpose",
  description: "Thoughtful web design for independent brands and growing businesses. A personal design studio based in Indonesia.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}<SiteMotion /></body>
    </html>
  );
}
