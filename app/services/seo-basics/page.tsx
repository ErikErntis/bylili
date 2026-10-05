"use client";

import { useI18n } from "../../lib/i18n";
import Link from "next/link";
import StudioHeader from "../../components/studio-header";
import SiteFooter from "../../components/site-footer";
import ContactSection from "../../components/contact-section";
import { seoService as content } from "../../lib/seo";
import { siteSettings } from "../../lib/settings";
import { publishedPortfolioProjects } from "../../lib/portfolio";
import { getContactHref } from "../../lib/contact";

function WebsitePreview({ t }: { t: (text: string) => string }) {
  return <figure className="wd-preview seo-preview" aria-label={t("Illustrative SEO review checklist, not a real audit result")}>
    <div className="wd-browser"><div className="wd-browser-bar"><span>● ● ●</span><span>{t('A little clarity goes a long way')}</span><span aria-hidden="true">↗</span></div>
      <div className="seo-review"><p className="eyebrow">{t('Your website, considered')}</p><h2>{t('Small details.')}<br/><em>{t('A clearer picture.')}</em></h2><div className="seo-example"><span>{t('EXAMPLE PAGE TITLE')}</span><strong>{t("Handmade ceramics in Surabaya | Mora Studio")}</strong><p>{t('Small-batch ceramics for everyday rituals. Explore the collection and meet the maker.')}</p></div><ul>{["Page titles & descriptions", "Headings & internal links", "Sitemap & indexing", "Search Console"].map(item => <li key={item}><span aria-hidden="true">○</span>{t(item)}<small>{t('TO REVIEW')}</small></li>)}</ul></div>
    </div><figcaption>{t('ILLUSTRATIVE REVIEW · NOT A LIVE AUDIT')}</figcaption>
  </figure>;
}

export default function SeoServicePage() {
  const { t } = useI18n();
  const showPortfolio = siteSettings.portfolio.enabled && publishedPortfolioProjects.length > 0;
  const href = getContactHref();
  return <>
    <a className="skip-link" href="#main">{t('Skip to content')}</a>
    <StudioHeader showPortfolio={showPortfolio}/>
    <main id="main" className="website-service">
      <section className="wd-hero shell" aria-labelledby="wd-title">
        <nav className="wd-breadcrumb" aria-label="Breadcrumb"><Link href="/">{t('Home')}</Link><span aria-hidden="true">/</span><Link href="/#services">{t('Services')}</Link><span aria-hidden="true">/</span><span aria-current="page">{t('SEO Basics')}</span></nav>
        <div className="wd-hero-grid"><div className="wd-hero-copy"><p className="eyebrow">{t(content.eyebrow)}</p><h1 id="wd-title">{t(content.title)} <em>{t(content.accent)}</em></h1><p className="wd-intro">{t(content.intro)}</p><div className="wd-actions"><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t('Let’s review your website')} <span aria-hidden="true">→</span></a><a className="wd-text-link" href="#included">{t("Explore what’s included ↓")}</a></div></div><WebsitePreview t={t}/></div>
        <ul className="wd-benefits">{content.benefits.map(item => <li key={item}><span aria-hidden="true">✓</span>{t(item)}</li>)}</ul>
      </section>
      <section className="wd-section wd-solutions shell" aria-labelledby="solutions-title"><div className="wd-section-heading"><div><p className="eyebrow">{t(content.solutions.eyebrow)}</p><h2 id="solutions-title">{t(content.solutions.title)}</h2></div><p>{t(content.solutions.intro)}</p></div><div className="wd-solutions-grid">{content.solutions.items.map((item, index) => <article className="wd-inclusion" key={t(item.title)}><span className="wd-index">0{index + 1}</span><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></section>
      <section id="included" className="wd-section shell" aria-labelledby="included-title"><div className="wd-section-heading"><div><p className="eyebrow">{t('The whole picture')}</p><h2 id="included-title">{t('The essentials,')}<br/>{t('thoughtfully sorted.')}</h2></div><p>{t('A defined set of improvements, shaped around your website. The pages, access and implementation scope are agreed before we begin.')}</p></div><div className="wd-includes">{content.included.map((item, index) => <article className="wd-inclusion" key={t(item.title)}><span className="wd-index">0{index + 1}</span><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></section>
      <section className="wd-fit" aria-labelledby="fit-title"><div className="shell wd-fit-inner"><div><p className="eyebrow">{t('Made for your next step')}</p><h2 id="fit-title">{t('Already online?')}<br/><em>{t('Start here.')}</em></h2><p>{t('You don’t need a full redesign to start making your existing website clearer and better organised.')}</p></div><div className="wd-audiences">{content.audiences.map(item => <article key={t(item.title)}><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></div></section>
      <section className="wd-section shell" aria-labelledby="steps-title"><div className="wd-section-heading"><div><p className="eyebrow">{t('A clear path forward')}</p><h2 id="steps-title">{t('Together, step by step.')}</h2></div><p>{t('You’ll know what we’re working on, where your feedback fits and what comes next.')}</p></div><ol className="wd-steps">{content.steps.map((step, index) => <li key={t(step.title)}><span className="wd-step-number">0{index + 1}</span><h3>{t(step.title)}</h3><p>{t(step.text)}</p></li>)}</ol></section>
      <section className="seo-scope shell" aria-labelledby="scope-title"><div><p className="eyebrow">{t(content.scope.eyebrow)}</p><h2 id="scope-title">{t(content.scope.title)}</h2><p>{t(content.scope.text)}</p><p>{t(content.scope.note)}</p></div><aside><h3>{t(content.scope.includedTitle)}</h3><p>{t(content.scope.includedText)}</p><Link className="wd-text-link" href="/services/website-design-development">{t("Explore website design & development ↗")}</Link></aside></section>
      <section className="wd-faq shell" aria-labelledby="faq-title"><div><p className="eyebrow">{t('A few things to know')}</p><h2 id="faq-title">{t('Good questions.')}<br/><em>{t('Honest answers.')}</em></h2><p>{t('Have something else in mind?')}</p><a className="wd-text-link" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t("Let’s talk it through ↗")}</a></div><div className="wd-questions">{content.faqs.map(faq => <details key={t(faq.question)}><summary>{t(faq.question)}<span aria-hidden="true">+</span></summary><p>{t(faq.answer)}</p></details>)}</div></section>
      <ContactSection/>
    </main><SiteFooter showPortfolio={showPortfolio}/>
  </>;
}
