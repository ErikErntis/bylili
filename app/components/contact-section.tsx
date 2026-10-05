"use client";

import { contactContent, getContactHref } from "../lib/contact";
import BotanicalDetail from "./botanical-detail";
import { useI18n } from "../lib/i18n";

export default function ContactSection() {
  const { t } = useI18n();
  const href = getContactHref();
  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <BotanicalDetail className="contact-botanical"/>
    <div className="contact-inner shell">
      <div><p className="eyebrow">{t(contactContent.eyebrow)}</p><h2 id="contact-title">{contactContent.title.map((line, index) => <span key={line}>{index > 0 && <br/>}{t(line)}</span>)}</h2></div>
      <div className="contact-copy"><p>{t(contactContent.description)}</p><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t(contactContent.button)}<span aria-hidden="true">→</span></a></div>
    </div>
  </section>;
}
