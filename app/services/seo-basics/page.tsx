import type { Metadata } from "next";
import Link from "next/link";
import StudioHeader from "../../components/studio-header";
import SiteFooter from "../../components/site-footer";
import ContactSection from "../../components/contact-section";
import { seoService as content } from "../../lib/seo";
import { siteSettings } from "../../lib/settings";
import { publishedPortfolioProjects } from "../../lib/portfolio";
import { getContactHref } from "../../lib/contact";

export const metadata: Metadata = {
  title: "SEO Basics — ByLili",
  description: "Practical SEO essentials for existing websites: page structure, titles, descriptions, indexing checks and Search Console setup.",
};

function WebsitePreview() {
  return <figure className="wd-preview seo-preview" aria-label="Illustrative SEO review checklist, not a real audit result">
    <div className="wd-browser"><div className="wd-browser-bar"><span>● ● ●</span><span>A little clarity goes a long way</span><span aria-hidden="true">↗</span></div>
      <div className="seo-review"><p className="eyebrow">Your website, considered</p><h2>Small details.<br/><em>A clearer picture.</em></h2><div className="seo-example"><span>EXAMPLE PAGE TITLE</span><strong>Handmade ceramics in Surabaya | Mora Studio</strong><p>Small-batch ceramics for everyday rituals. Explore the collection and meet the maker.</p></div><ul>{["Page titles & descriptions", "Headings & internal links", "Sitemap & indexing", "Search Console"].map(item => <li key={item}><span aria-hidden="true">○</span>{item}<small>TO REVIEW</small></li>)}</ul></div>
    </div><figcaption>ILLUSTRATIVE REVIEW · NOT A LIVE AUDIT</figcaption>
  </figure>;
}

export default function SeoServicePage() {
  const showPortfolio = siteSettings.portfolio.enabled && publishedPortfolioProjects.length > 0;
  const href = getContactHref();
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <StudioHeader showPortfolio={showPortfolio}/>
    <main id="main" className="website-service">
      <section className="wd-hero shell" aria-labelledby="wd-title">
        <nav className="wd-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">SEO Basics</span></nav>
        <div className="wd-hero-grid"><div className="wd-hero-copy"><p className="eyebrow">{content.eyebrow}</p><h1 id="wd-title">{content.title} <em>{content.accent}</em></h1><p className="wd-intro">{content.intro}</p><div className="wd-actions"><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>Let’s review your website <span aria-hidden="true">→</span></a><a className="wd-text-link" href="#included">Explore what’s included ↓</a></div></div><WebsitePreview/></div>
        <ul className="wd-benefits">{content.benefits.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
      </section>
      <section className="wd-section wd-solutions shell" aria-labelledby="solutions-title"><div className="wd-section-heading"><div><p className="eyebrow">{content.solutions.eyebrow}</p><h2 id="solutions-title">{content.solutions.title}</h2></div><p>{content.solutions.intro}</p></div><div className="wd-solutions-grid">{content.solutions.items.map((item, index) => <article className="wd-inclusion" key={item.title}><span className="wd-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section id="included" className="wd-section shell" aria-labelledby="included-title"><div className="wd-section-heading"><div><p className="eyebrow">The whole picture</p><h2 id="included-title">The essentials,<br/>thoughtfully sorted.</h2></div><p>A defined set of improvements, shaped around your website. The pages, access and implementation scope are agreed before we begin.</p></div><div className="wd-includes">{content.included.map((item, index) => <article className="wd-inclusion" key={item.title}><span className="wd-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="wd-fit" aria-labelledby="fit-title"><div className="shell wd-fit-inner"><div><p className="eyebrow">Made for your next step</p><h2 id="fit-title">Already online?<br/><em>Start here.</em></h2><p>You don’t need a full redesign to start making your existing website clearer and better organised.</p></div><div className="wd-audiences">{content.audiences.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="wd-section shell" aria-labelledby="steps-title"><div className="wd-section-heading"><div><p className="eyebrow">A clear path forward</p><h2 id="steps-title">Together, step by step.</h2></div><p>You’ll know what we’re working on, where your feedback fits and what comes next.</p></div><ol className="wd-steps">{content.steps.map((step, index) => <li key={step.title}><span className="wd-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
      <section className="seo-scope shell" aria-labelledby="scope-title"><div><p className="eyebrow">{content.scope.eyebrow}</p><h2 id="scope-title">{content.scope.title}</h2><p>{content.scope.text}</p><p>{content.scope.note}</p></div><aside><h3>{content.scope.includedTitle}</h3><p>{content.scope.includedText}</p><Link className="wd-text-link" href="/services/website-design-development">Explore website design & development ↗</Link></aside></section>
      <section className="wd-faq shell" aria-labelledby="faq-title"><div><p className="eyebrow">A few things to know</p><h2 id="faq-title">Good questions.<br/><em>Honest answers.</em></h2><p>Have something else in mind?</p><a className="wd-text-link" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>Let’s talk it through ↗</a></div><div className="wd-questions">{content.faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      <ContactSection/>
    </main><SiteFooter showPortfolio={showPortfolio}/>
  </>;
}
