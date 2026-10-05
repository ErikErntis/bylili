import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SEO Basics — ByLili",
  description: "Practical SEO essentials for existing websites: page structure, titles, descriptions, indexing checks and Search Console setup.",
};

export default function SeoBasicsLayout({ children }: { children: ReactNode }) {
  return children;
}
