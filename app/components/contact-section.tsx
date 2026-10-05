import { contactContent, getContactHref } from "../lib/contact";
import BotanicalDetail from "./botanical-detail";

export default function ContactSection() {
  const href = getContactHref();
  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <BotanicalDetail className="contact-botanical"/>
    <div className="contact-inner shell">
      <div><p className="eyebrow">{contactContent.eyebrow}</p><h2 id="contact-title">{contactContent.title.map((line, index) => <span key={line}>{index > 0 && <br/>}{line}</span>)}</h2></div>
      <div className="contact-copy"><p>{contactContent.description}</p><a className="button button-primary" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{contactContent.button}<span aria-hidden="true">→</span></a></div>
    </div>
  </section>;
}
