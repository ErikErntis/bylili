import Image from "next/image";
import ContactSection from "./components/contact-section";
import SiteFooter from "./components/site-footer";
import TestimonialsSection from "./components/testimonials-section";
import { testimonials, testimonialPlaceholders } from "./lib/testimonials";
import ProcessSection from "./components/process-section";
import PortfolioSection from "./components/portfolio-section";
import { siteSettings } from "./lib/settings";
import { publishedPortfolioProjects } from "./lib/portfolio";
import StudioHeader from "./components/studio-header";
import ServicesSection from "./components/services-section";
import studioHero from "./_assets/studio-hero.png";

function BenefitIcon({ type }: { type: "design" | "mobile" | "business" }) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "design" && <><path d="m3 10 5-6h12l5 6-11 14L3 10Z" /><path d="M3 10h22M8 4l6 20L20 4M8 4l6 6 6-6" /></>}
    {type === "mobile" && <><rect x="8" y="2" width="12" height="24" rx="2"/><path d="M12 5h4M12 23h4" /></>}
    {type === "business" && <><path d="m3 21 6-8 6 3 9-11M18 5h6v6"/><path d="M5 6 3 9M22 19l2 3"/></>}
  </svg>;
}

export default function Home() {
  const showPortfolio = siteSettings.portfolio.enabled && publishedPortfolioProjects.length > 0;
  const feedback = siteSettings.testimonials.preview ? testimonialPlaceholders : testimonials.filter((item) => item.published);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <StudioHeader showPortfolio={showPortfolio} />
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Websites with purpose</p>
            <h1 id="hero-title">Beautiful websites<br className="wide-break" /> for brands that<br className="wide-break" /> want to <em>grow.</em></h1>
            <p className="hero-description">Thoughtful websites that tell your story, connect with your customers and help your business grow.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#project" data-project-trigger>Let’s talk about your website <span aria-hidden="true">→</span></a>
              {showPortfolio && <a className="button button-secondary" href="#work">View work</a>}
            </div>
            <div className="hero-photo"><Image src={studioHero} alt="A sunlit creative studio with a ByLili laptop, ceramics and leafy branches" fill priority sizes="(max-width: 800px) min(560px, calc(100vw - 48px)), 77vw" /></div>
            <ul className="benefits" aria-label="Design priorities">
              <li><BenefitIcon type="design"/><span>Thoughtful<br/>design</span></li>
              <li><BenefitIcon type="mobile"/><span>Mobile<br/>first</span></li>
              <li><BenefitIcon type="business"/><span>Built for<br/>business</span></li>
            </ul>
          </div>
        </div>
      </section>
      <ServicesSection />
      {showPortfolio && <PortfolioSection projects={publishedPortfolioProjects.slice(0, Math.max(1, siteSettings.portfolio.homepageLimit))} />}
      <ProcessSection />
      {siteSettings.testimonials.enabled && <TestimonialsSection items={feedback} preview={siteSettings.testimonials.preview} />}
      <ContactSection />
    </main>
    <SiteFooter showPortfolio={showPortfolio} />
  </>;
}
