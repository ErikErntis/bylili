"use client";

import { useI18n } from "../../lib/i18n";
import Link from "next/link";
import StudioHeader from "../../components/studio-header";
import SiteFooter from "../../components/site-footer";
import ContactSection from "../../components/contact-section";
import BotanicalDetail from "../../components/botanical-detail";
import { ecommerceService as content } from "../../lib/ecommerce";
import { siteSettings } from "../../lib/settings";
import { publishedPortfolioProjects } from "../../lib/portfolio";
import { getContactHref } from "../../lib/contact";

function WebsitePreview({ t }: { t: (text: string) => string }) {
  return <figure className="wd-preview" aria-label={t("Illustrative store design for a fictional ceramics brand")}>
    <div className="wd-browser"><div className="wd-browser-bar"><span>● ● ●</span><span>{t('Objects for everyday rituals')}</span><span>↗</span></div>
      <div className="wd-concept-nav"><strong>{t('mora studio.')}</strong><span>{t("COLLECTIONS · BAG (0)")}</span></div>
      <div className="wd-concept-body"><p>{t('SMALL-BATCH CERAMICS')}</p><h2>{t('Everyday objects.')}<br/><em>{t('Made to keep.')}</em></h2><span className="wd-concept-pill">{t("Explore the collection ↗")}</span><div className="wd-concept-art"><BotanicalDetail className="wd-plant"/><div className="wd-vase"/></div></div>
      <div className="wd-concept-bottom"><span>{t('The everyday vase')}</span><span>{t('CERAMICS / 01')}</span></div>
    </div>
    <div className="wd-mobile" aria-hidden="true"><span className="wd-mobile-speaker"/><strong>{t('mora studio.')}</strong><p>{t('Everyday objects.')}<br/><em>{t('Made to keep.')}</em></p><BotanicalDetail className="wd-mobile-plant"/><span className="wd-mobile-line"/><span className="wd-mobile-line"/></div>
    <figcaption>{t('FICTIONAL STORE CONCEPT · DESKTOP & MOBILE')}</figcaption>
  </figure>;
}

export default function EcommerceServicePage() {
  const { t } = useI18n();
  const showPortfolio = siteSettings.portfolio.enabled && publishedPortfolioProjects.length > 0;
  const href = getContactHref();
  return <>
    <a className="skip-link" href="#main">{t('Skip to content')}</a>
    <StudioHeader showPortfolio={showPortfolio}/>
    <main id="main" className="website-service ecommerce-service">
      <section className="wd-hero shell" aria-labelledby="wd-title">
        <nav className="wd-breadcrumb" aria-label="Breadcrumb"><Link href="/">{t('Home')}</Link><span aria-hidden="true">/</span><Link href="/#services">{t('Services')}</Link><span aria-hidden="true">/</span><span aria-current="page">{t('E-commerce')}</span></nav>
        <div className="wd-hero-grid"><div className="wd-hero-copy"><p className="eyebrow">{t(content.eyebrow)}</p><h1 id="wd-title">{t(content.title)} <em>{t(content.accent)}</em></h1><p className="wd-intro">{t(content.intro)}</p><div className="wd-actions"><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t('Let’s talk about your store')} <span aria-hidden="true">→</span></a><a className="wd-text-link" href="#included">{t("Explore what’s included ↓")}</a></div></div><WebsitePreview t={t}/></div>
        <ul className="wd-benefits">{content.benefits.map(item => <li key={item}><span aria-hidden="true">✓</span>{t(item)}</li>)}</ul>
      </section>
      <section className="wd-section wd-solutions shell" aria-labelledby="solutions-title"><div className="wd-section-heading"><div><p className="eyebrow">{t(content.solutions.eyebrow)}</p><h2 id="solutions-title">{t(content.solutions.title)}</h2></div><p>{t(content.solutions.intro)}</p></div><div className="wd-solutions-grid">{content.solutions.items.map((item, index) => <article className="wd-inclusion" key={t(item.title)}><span className="wd-index">0{index + 1}</span><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></section>
      <section id="included" className="wd-section shell" aria-labelledby="included-title"><div className="wd-section-heading"><div><p className="eyebrow">{t('The whole picture')}</p><h2 id="included-title">{t('From first idea')}<br/>{t('to a store ready to launch.')}</h2></div><p>{t('One considered process, with design and development working together. We agree on the details around your business.')}</p></div><div className="wd-includes">{content.included.map((item, index) => <article className="wd-inclusion" key={t(item.title)}><span className="wd-index">0{index + 1}</span><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></section>
      <section className="ec-headless shell" aria-labelledby="headless-title"><div className="wd-section-heading"><div><p className="eyebrow">{t(content.headless.eyebrow)}</p><h2 id="headless-title">{t(content.headless.title)}</h2></div><p>{t(content.headless.intro)}</p></div><div className="ec-explainer"><article><span className="wd-index">{t("01 / THE SHOPPING EXPERIENCE")}</span><h3>{t('Your custom storefront')}</h3><p>{t('The pages your customers browse, designed around your brand and built with Next.js.')}</p></article><div className="ec-api"><span aria-hidden="true">↔</span><strong>{t('API connection')}</strong><small>{t('Products, carts & store data')}</small></div><article><span className="wd-index">{t("02 / BEHIND THE SCENES")}</span><h3>{t('Your management tools')}</h3><p>{t('Your commerce platform and content tools, where you manage the agreed store operations.')}</p></article></div><p className="ec-context">{t(content.headless.comparison)}</p><div className="wd-includes">{content.headless.reasons.map(reason => <article className="wd-inclusion" key={t(reason.title)}><h3>{t(reason.title)}</h3><p>{t(reason.text)}</p></article>)}</div><div className="ec-approach"><h3>{t('Why I work this way')}</h3><p>{t(content.headless.approach)}</p><p>{t(content.headless.stack)}</p></div></section>
      <section className="wd-fit" aria-labelledby="fit-title"><div className="shell wd-fit-inner"><div><p className="eyebrow">{t('Made for your next step')}</p><h2 id="fit-title">{t('Small business.')}<br/><em>{t('Big possibilities.')}</em></h2><p>{t('You don’t need to have everything figured out. Just a business you believe in and a place to start.')}</p></div><div className="wd-audiences">{content.audiences.map(item => <article key={t(item.title)}><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></div></section>
      <section className="wd-section shell" aria-labelledby="steps-title"><div className="wd-section-heading"><div><p className="eyebrow">{t('A clear path forward')}</p><h2 id="steps-title">{t('Together, step by step.')}</h2></div><p>{t('You’ll know what we’re working on, where your feedback fits and what comes next.')}</p></div><ol className="wd-steps">{content.steps.map((step, index) => <li key={t(step.title)}><span className="wd-step-number">0{index + 1}</span><h3>{t(step.title)}</h3><p>{t(step.text)}</p></li>)}</ol></section>
      <section className="wd-faq shell" aria-labelledby="faq-title"><div><p className="eyebrow">{t('A few things to know')}</p><h2 id="faq-title">{t('Good questions.')}<br/><em>{t('Honest answers.')}</em></h2><p>{t('Have something else in mind?')}</p><a className="wd-text-link" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t("Let’s talk it through ↗")}</a></div><div className="wd-questions">{content.faqs.map(faq => <details key={t(faq.question)}><summary>{t(faq.question)}<span aria-hidden="true">+</span></summary><p>{t(faq.answer)}</p></details>)}</div></section>
      <ContactSection/>
    </main><SiteFooter showPortfolio={showPortfolio}/>
  </>;
}
