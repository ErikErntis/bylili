import type { Metadata } from "next";
import Link from "next/link";
import StudioHeader from "../../components/studio-header";
import SiteFooter from "../../components/site-footer";
import ContactSection from "../../components/contact-section";
import BotanicalDetail from "../../components/botanical-detail";
import { websiteService as content } from "../../lib/services";
import { siteSettings } from "../../lib/settings";
import { publishedPortfolioProjects } from "../../lib/portfolio";
import { getContactHref } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Website Design & Development — ByLili",
  description: "Custom website design and development for independent brands and growing businesses. From a clear direction to responsive design, SEO foundations and launch.",
};

function WebsitePreview() {
  return <figure className="wd-preview" aria-label="Illustrative website design concept for a fictional botanical studio">
    <div className="wd-browser"><div className="wd-browser-bar"><span>● ● ●</span><span>A little room to grow</span><span>↗</span></div>
      <div className="wd-concept-nav"><strong>the quiet kind.</strong><span>OUR STORY · THE STUDIO</span></div>
      <div className="wd-concept-body"><p>BOTANICAL OBJECTS & EVERYDAY RITUALS</p><h2>Good things.<br/><em>Grown slowly.</em></h2><span className="wd-concept-pill">Meet the studio ↗</span><div className="wd-concept-art"><BotanicalDetail className="wd-plant"/><div className="wd-vase"/></div></div>
      <div className="wd-concept-bottom"><span>Thoughtfully made.</span><span>Naturally yours.</span></div>
    </div>
    <div className="wd-mobile" aria-hidden="true"><span className="wd-mobile-speaker"/><strong>the quiet kind.</strong><p>Good things.<br/><em>Grown slowly.</em></p><BotanicalDetail className="wd-mobile-plant"/><span className="wd-mobile-line"/><span className="wd-mobile-line"/></div>
    <figcaption>DESIGN CONCEPT · DESKTOP & MOBILE</figcaption>
  </figure>;
}

export default function WebsiteServicePage() {
  const showPortfolio = siteSettings.portfolio.enabled && publishedPortfolioProjects.length > 0;
  const href = getContactHref();
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <StudioHeader showPortfolio={showPortfolio}/>
    <main id="main" className="website-service">
      <section className="wd-hero shell" aria-labelledby="wd-title">
        <nav className="wd-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Websites</span></nav>
        <div className="wd-hero-grid"><div className="wd-hero-copy"><p className="eyebrow">{content.eyebrow}</p><h1 id="wd-title">{content.title} <em>{content.accent}</em></h1><p className="wd-intro">{content.intro}</p><div className="wd-actions"><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>Let’s talk about your website <span aria-hidden="true">→</span></a><a className="wd-text-link" href="#included">Explore what’s included ↓</a></div></div><WebsitePreview/></div>
        <ul className="wd-benefits">{content.benefits.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
      </section>
      <section className="wd-section wd-solutions shell" aria-labelledby="solutions-title"><div className="wd-section-heading"><div><p className="eyebrow">{content.solutions.eyebrow}</p><h2 id="solutions-title">{content.solutions.title}</h2></div><p>{content.solutions.intro}</p></div><div className="wd-solutions-grid">{content.solutions.items.map((item, index) => <article className="wd-inclusion" key={item.title}><span className="wd-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section id="included" className="wd-section shell" aria-labelledby="included-title"><div className="wd-section-heading"><div><p className="eyebrow">The whole picture</p><h2 id="included-title">From first idea<br/>to a finished website.</h2></div><p>One considered process, with design and development working together. We agree on the details around your business.</p></div><div className="wd-includes">{content.included.map((item, index) => <article className="wd-inclusion" key={item.title}><span className="wd-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="wd-fit" aria-labelledby="fit-title"><div className="shell wd-fit-inner"><div><p className="eyebrow">Made for your next step</p><h2 id="fit-title">Small business.<br/><em>Big possibilities.</em></h2><p>You don’t need to have everything figured out. Just a business you believe in and a place to start.</p></div><div className="wd-audiences">{content.audiences.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="wd-section shell" aria-labelledby="steps-title"><div className="wd-section-heading"><div><p className="eyebrow">A clear path forward</p><h2 id="steps-title">Together, step by step.</h2></div><p>You’ll know what we’re working on, where your feedback fits and what comes next.</p></div><ol className="wd-steps">{content.steps.map((step, index) => <li key={step.title}><span className="wd-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
      <section className="wd-faq shell" aria-labelledby="faq-title"><div><p className="eyebrow">A few things to know</p><h2 id="faq-title">Good questions.<br/><em>Honest answers.</em></h2><p>Have something else in mind?</p><a className="wd-text-link" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>Let’s talk it through ↗</a></div><div className="wd-questions">{content.faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      <ContactSection/>
    </main><SiteFooter showPortfolio={showPortfolio}/>
  </>;
}
