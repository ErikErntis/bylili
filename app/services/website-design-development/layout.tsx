import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Website Design & Development — ByLili",
  description: "Custom website design and development for independent brands and growing businesses. From a clear direction to responsive design, SEO foundations and launch.",
};

export default function WebsiteDesignLayout({ children }: { children: ReactNode }) {
  return children;
}
