import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "E-commerce Design & Development — ByLili",
  description: "Custom headless e-commerce with Next.js, Shopify or a tailored backend. Storefront design, payments, shipping, product setup and ongoing management.",
};

export default function EcommerceDesignLayout({ children }: { children: ReactNode }) {
  return children;
}
