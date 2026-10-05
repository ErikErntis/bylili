"use client";

import { useI18n } from "../../lib/i18n";
import Link from "next/link";
import StudioHeader from "../../components/studio-header";
import SiteFooter from "../../components/site-footer";
import ContactSection from "../../components/contact-section";
import BotanicalDetail from "../../components/botanical-detail";
import { websiteService as content } from "../../lib/services";
import { siteSettings } from "../../lib/settings";
import { publishedPortfolioProjects } from "../../lib/portfolio";
import { getContactHref } from "../../lib/contact";

function WebsitePreview({ t }: { t: (text: string) => string }) {
  return <figure className="wd-preview" aria-label={t("Illustrative website design concept for a fictional botanical studio")}>
    <div className="wd-browser"><div className="wd-browser-bar"><span>● ● ●</span><span>{t('A little room to grow')}</span><span>↗</span></div>
      <div className="wd-concept-nav"><strong>{t('the quiet kind.')}</strong><span>{t('OUR STORY · THE STUDIO')}</span></div>
      <div className="wd-concept-body"><p>{t('BOTANICAL OBJECTS & EVERYDAY RITUALS')}</p><h2>{t('Good things.')}<br/><em>{t('Grown slowly.')}</em></h2><span className="wd-concept-pill">{t("Meet the studio ↗")}</span><div className="wd-concept-art"><BotanicalDetail className="wd-plant"/><div className="wd-vase"/></div></div>
      <div className="wd-concept-bottom"><span>{t('Thoughtfully made.')}</span><span>{t('Naturally yours.')}</span></div>
    </div>
    <div className="wd-mobile" aria-hidden="true"><span className="wd-mobile-speaker"/><strong>{t('the quiet kind.')}</strong><p>{t('Good things.')}<br/><em>{t('Grown slowly.')}</em></p><BotanicalDetail className="wd-mobile-plant"/><span className="wd-mobile-line"/><span className="wd-mobile-line"/></div>
    <figcaption>{t('DESIGN CONCEPT · DESKTOP & MOBILE')}</figcaption>
  </figure>;
}

export default function WebsiteServicePage() {
  const { t } = useI18n();
  const showPortfolio = siteSettings.portfolio.enabled && publishedPortfolioProjects.length > 0;
  const href = getContactHref();
  return <>
    <a className="skip-link" href="#main">{t('Skip to content')}</a>
    <StudioHeader showPortfolio={showPortfolio}/>
    <main id="main" className="website-service">
      <section className="wd-hero shell" aria-labelledby="wd-title">
        <nav className="wd-breadcrumb" aria-label="Breadcrumb"><Link href="/">{t('Home')}</Link><span aria-hidden="true">/</span><Link href="/#services">{t('Services')}</Link><span aria-hidden="true">/</span><span aria-current="page">{t('Websites')}</span></nav>
        <div className="wd-hero-grid"><div className="wd-hero-copy"><p className="eyebrow">{t(content.eyebrow)}</p><h1 id="wd-title">{t(content.title)} <em>{t(content.accent)}</em></h1><p className="wd-intro">{t(content.intro)}</p><div className="wd-actions"><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t('Let’s talk about your website')} <span aria-hidden="true">→</span></a><a className="wd-text-link" href="#included">{t("Explore what’s included ↓")}</a></div></div><WebsitePreview t={t}/></div>
        <ul className="wd-benefits">{content.benefits.map(item => <li key={item}><span aria-hidden="true">✓</span>{t(item)}</li>)}</ul>
      </section>
      <section className="wd-section wd-solutions shell" aria-labelledby="solutions-title"><div className="wd-section-heading"><div><p className="eyebrow">{t(content.solutions.eyebrow)}</p><h2 id="solutions-title">{t(content.solutions.title)}</h2></div><p>{t(content.solutions.intro)}</p></div><div className="wd-solutions-grid">{content.solutions.items.map((item, index) => <article className="wd-inclusion" key={t(item.title)}><span className="wd-index">0{index + 1}</span><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></section>
      <section id="included" className="wd-section shell" aria-labelledby="included-title"><div className="wd-section-heading"><div><p className="eyebrow">{t('The whole picture')}</p><h2 id="included-title">{t('From first idea')}<br/>{t('to a finished website.')}</h2></div><p>{t('One considered process, with design and development working together. We agree on the details around your business.')}</p></div><div className="wd-includes">{content.included.map((item, index) => <article className="wd-inclusion" key={t(item.title)}><span className="wd-index">0{index + 1}</span><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></section>
      <section className="wd-fit" aria-labelledby="fit-title"><div className="shell wd-fit-inner"><div><p className="eyebrow">{t('Made for your next step')}</p><h2 id="fit-title">{t('Small business.')}<br/><em>{t('Big possibilities.')}</em></h2><p>{t('You don’t need to have everything figured out. Just a business you believe in and a place to start.')}</p></div><div className="wd-audiences">{content.audiences.map(item => <article key={t(item.title)}><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></div></section>
      <section className="wd-section shell" aria-labelledby="steps-title"><div className="wd-section-heading"><div><p className="eyebrow">{t('A clear path forward')}</p><h2 id="steps-title">{t('Together, step by step.')}</h2></div><p>{t('You’ll know what we’re working on, where your feedback fits and what comes next.')}</p></div><ol className="wd-steps">{content.steps.map((step, index) => <li key={t(step.title)}><span className="wd-step-number">0{index + 1}</span><h3>{t(step.title)}</h3><p>{t(step.text)}</p></li>)}</ol></section>
      <section className="wd-faq shell" aria-labelledby="faq-title"><div><p className="eyebrow">{t('A few things to know')}</p><h2 id="faq-title">{t('Good questions.')}<br/><em>{t('Honest answers.')}</em></h2><p>{t('Have something else in mind?')}</p><a className="wd-text-link" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t("Let’s talk it through ↗")}</a></div><div className="wd-questions">{content.faqs.map(faq => <details key={t(faq.question)}><summary>{t(faq.question)}<span aria-hidden="true">+</span></summary><p>{t(faq.answer)}</p></details>)}</div></section>
      <ContactSection/>
    </main><SiteFooter showPortfolio={showPortfolio}/>
  </>;
}
