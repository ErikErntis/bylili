import ContactSection from "../components/contact-section";
import SiteFooter from "../components/site-footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import StudioHeader from "../components/studio-header";
import PortfolioSection from "../components/portfolio-section";
import { siteSettings } from "../lib/settings";
import { publishedPortfolioProjects } from "../lib/portfolio";

export const metadata: Metadata = { title: "Selected Work — ByLili" };

export default function WorkPage() {
  if (!siteSettings.portfolio.enabled || publishedPortfolioProjects.length === 0) notFound();
  return <><StudioHeader showPortfolio/><main id="main"><PortfolioSection projects={publishedPortfolioProjects} allProjects/><ContactSection /></main><SiteFooter showPortfolio /></>;
}
