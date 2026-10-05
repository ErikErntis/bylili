import type { Metadata } from "next";
import Link from "next/link";
import StudioHeader from "../../components/studio-header";
import SiteFooter from "../../components/site-footer";
import ContactSection from "../../components/contact-section";
import BotanicalDetail from "../../components/botanical-detail";
import { ecommerceService as content } from "../../lib/ecommerce";
import { siteSettings } from "../../lib/settings";
import { publishedPortfolioProjects } from "../../lib/portfolio";
import { getContactHref } from "../../lib/contact";

export const metadata: Metadata = {
  title: "E-commerce Design & Development — ByLili",
  description: "Custom headless e-commerce with Next.js, Shopify or a tailored backend. Storefront design, payments, shipping, product setup and ongoing management.",
};

function WebsitePreview() {
  return <figure className="wd-preview" aria-label="Illustrative store design for a fictional ceramics brand">
    <div className="wd-browser"><div className="wd-browser-bar"><span>● ● ●</span><span>Objects for everyday rituals</span><span>↗</span></div>
      <div className="wd-concept-nav"><strong>mora studio.</strong><span>COLLECTIONS · BAG (0)</span></div>
      <div className="wd-concept-body"><p>SMALL-BATCH CERAMICS</p><h2>Everyday objects.<br/><em>Made to keep.</em></h2><span className="wd-concept-pill">Explore the collection ↗</span><div className="wd-concept-art"><BotanicalDetail className="wd-plant"/><div className="wd-vase"/></div></div>
      <div className="wd-concept-bottom"><span>The everyday vase</span><span>CERAMICS / 01</span></div>
    </div>
    <div className="wd-mobile" aria-hidden="true"><span className="wd-mobile-speaker"/><strong>mora studio.</strong><p>Everyday objects.<br/><em>Made to keep.</em></p><BotanicalDetail className="wd-mobile-plant"/><span className="wd-mobile-line"/><span className="wd-mobile-line"/></div>
    <figcaption>FICTIONAL STORE CONCEPT · DESKTOP & MOBILE</figcaption>
  </figure>;
}

export default function EcommerceServicePage() {
  const showPortfolio = siteSettings.portfolio.enabled && publishedPortfolioProjects.length > 0;
  const href = getContactHref();
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <StudioHeader showPortfolio={showPortfolio}/>
    <main id="main" className="website-service ecommerce-service">
      <section className="wd-hero shell" aria-labelledby="wd-title">
        <nav className="wd-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">E-commerce</span></nav>
        <div className="wd-hero-grid"><div className="wd-hero-copy"><p className="eyebrow">{content.eyebrow}</p><h1 id="wd-title">{content.title} <em>{content.accent}</em></h1><p className="wd-intro">{content.intro}</p><div className="wd-actions"><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>Let’s talk about your store <span aria-hidden="true">→</span></a><a className="wd-text-link" href="#included">Explore what’s included ↓</a></div></div><WebsitePreview/></div>
        <ul className="wd-benefits">{content.benefits.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
      </section>
      <section className="wd-section wd-solutions shell" aria-labelledby="solutions-title"><div className="wd-section-heading"><div><p className="eyebrow">{content.solutions.eyebrow}</p><h2 id="solutions-title">{content.solutions.title}</h2></div><p>{content.solutions.intro}</p></div><div className="wd-solutions-grid">{content.solutions.items.map((item, index) => <article className="wd-inclusion" key={item.title}><span className="wd-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section id="included" className="wd-section shell" aria-labelledby="included-title"><div className="wd-section-heading"><div><p className="eyebrow">The whole picture</p><h2 id="included-title">From first idea<br/>to a store ready to launch.</h2></div><p>One considered process, with design and development working together. We agree on the details around your business.</p></div><div className="wd-includes">{content.included.map((item, index) => <article className="wd-inclusion" key={item.title}><span className="wd-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="ec-headless shell" aria-labelledby="headless-title"><div className="wd-section-heading"><div><p className="eyebrow">{content.headless.eyebrow}</p><h2 id="headless-title">{content.headless.title}</h2></div><p>{content.headless.intro}</p></div><div className="ec-explainer"><article><span className="wd-index">01 / THE SHOPPING EXPERIENCE</span><h3>Your custom storefront</h3><p>The pages your customers browse, designed around your brand and built with Next.js.</p></article><div className="ec-api"><span aria-hidden="true">↔</span><strong>API connection</strong><small>Products, carts & store data</small></div><article><span className="wd-index">02 / BEHIND THE SCENES</span><h3>Your management tools</h3><p>Your commerce platform and content tools, where you manage the agreed store operations.</p></article></div><p className="ec-context">{content.headless.comparison}</p><div className="wd-includes">{content.headless.reasons.map(reason => <article className="wd-inclusion" key={reason.title}><h3>{reason.title}</h3><p>{reason.text}</p></article>)}</div><div className="ec-approach"><h3>Why I work this way</h3><p>{content.headless.approach}</p><p>{content.headless.stack}</p></div></section>
      <section className="wd-fit" aria-labelledby="fit-title"><div className="shell wd-fit-inner"><div><p className="eyebrow">Made for your next step</p><h2 id="fit-title">Small business.<br/><em>Big possibilities.</em></h2><p>You don’t need to have everything figured out. Just a business you believe in and a place to start.</p></div><div className="wd-audiences">{content.audiences.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="wd-section shell" aria-labelledby="steps-title"><div className="wd-section-heading"><div><p className="eyebrow">A clear path forward</p><h2 id="steps-title">Together, step by step.</h2></div><p>You’ll know what we’re working on, where your feedback fits and what comes next.</p></div><ol className="wd-steps">{content.steps.map((step, index) => <li key={step.title}><span className="wd-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
      <section className="wd-faq shell" aria-labelledby="faq-title"><div><p className="eyebrow">A few things to know</p><h2 id="faq-title">Good questions.<br/><em>Honest answers.</em></h2><p>Have something else in mind?</p><a className="wd-text-link" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>Let’s talk it through ↗</a></div><div className="wd-questions">{content.faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      <ContactSection/>
    </main><SiteFooter showPortfolio={showPortfolio}/>
  </>;
}
