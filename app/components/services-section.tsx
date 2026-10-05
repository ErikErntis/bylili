"use client";

import { useRef, useState } from "react";

import Link from "next/link";
import { services, type Service, type ServiceId } from "../lib/services";
import { useI18n } from "../lib/i18n";

function ServiceIcon({ type }: { type: ServiceId }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "design" && <><rect x="4" y="5" width="24" height="17" rx="1.5"/><path d="M4 18.5h24M13 22v5m6-5v5M10 27h12"/></>}
    {type === "development" && <><path d="m16 3 13 7-13 7L3 10l13-7Z"/><path d="m5 15-2 1 13 7 13-7-2-1M5 21l-2 1 13 7 13-7-2-1"/></>}
    {type === "seo" && <><path d="M4 28h24"/><rect x="5" y="18" width="5" height="10" rx="1"/><rect x="13" y="11" width="5" height="17" rx="1"/><rect x="21" y="4" width="5" height="24" rx="1"/></>}
    {type === "support" && <path d="M12 5h8a8 8 0 0 1 8 8v3a8 8 0 0 1-8 8h-6l-7 5 1-7a8 8 0 0 1-4-7v-2a8 8 0 0 1 8-8Z"/>}
  </svg>;
}

export default function ServicesSection() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<Service>(services[0]);
  const dialog = useRef<HTMLDialogElement>(null);

  function showService(service: Service) {
    setSelected(service);
    dialog.current?.showModal();
  }

  return <section className="services-section shell" id="services" aria-labelledby="services-title">
    <div className="services-heading">
      <div><p className="eyebrow">{t("Services")}</p><h2 id="services-title">{t("What I can help you with.")}</h2></div>
      <p className="services-intro">{t("From simple landing pages to complete business websites — I create designs that look great and actually work for your business.")}</p>
    </div>
    <div className="services-grid">
      {services.map((service) => <article className="service-card" key={service.id}>
        <span className="service-icon"><ServiceIcon type={service.id}/></span>
        <h3>{t(service.title)}</h3>
        <p>{t(service.description)}</p>
        {service.href ? <Link className="service-link" href={service.href}>{t("Explore service")} <span aria-hidden="true">→</span></Link> : <button className="service-link" type="button" aria-label={`${t("Learn more about")} ${t(service.title)}`} aria-haspopup="dialog" onClick={() => showService(service)}>{t("Learn more")} <span aria-hidden="true">→</span></button>}
      </article>)}
    </div>
    <dialog ref={dialog} className="preview-dialog service-dialog" aria-labelledby="service-dialog-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-inner">
        <form method="dialog"><button className="dialog-close" aria-label={t("Close service details")}>×</button></form>
        <p className="eyebrow">{t("Made for your business")}</p>
        <h2 id="service-dialog-title">{t(selected.title)}</h2>
        <p>{t(selected.detail)}</p>
        <ul className="service-includes">{selected.includes.map((item) => <li key={item}>{t(item)}</li>)}</ul>
        <a className="button button-primary service-enquiry" href="#project" data-project-trigger onClick={() => dialog.current?.close()}>{t("Let’s talk")} <span aria-hidden="true">→</span></a>
      </div>
    </dialog>
  </section>;
}
