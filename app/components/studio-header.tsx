"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getContactHref } from "../lib/contact";
import { useI18n } from "../lib/i18n";

type Preview = "project" | "services" | "about";
const previews: Record<Preview, { label: string; title: string; text: string }> = {
  project: { label: "LET’S MAKE SOMETHING MEANINGFUL", title: "Your next chapter starts here.", text: "This is a first look at ByLili. The project enquiry form and WhatsApp contact will live here once the studio is ready." },
  services: { label: "THOUGHTFUL DESIGN, CLEAR PURPOSE", title: "A home for your business.", text: "Web design, landing pages, business websites and thoughtful redesigns. A focused offering, shaped around what your business needs." },
  about: { label: "THE PERSON BEHIND BYLILI", title: "Hi, I’m Lili.", text: "I’m building a personal web design studio in Indonesia, bringing my background in product and business administration to thoughtful websites for real businesses." },
};

export default function StudioHeader({ showPortfolio = false }: { showPortfolio?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState<Preview>("project");
  const dialog = useRef<HTMLDialogElement>(null);

  function openPreview(value: Preview) {
    setMenuOpen(false);
    const contactHref = value === "project" ? getContactHref() : undefined;
    if (contactHref) { window.location.href = contactHref; return; }
    setPreview(value);
    dialog.current?.showModal();
  }

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest("[data-project-trigger]")) {
        event.preventDefault();
        const href = getContactHref();
        if (href) { window.location.href = href; return; }
        setPreview("project");
        dialog.current?.showModal();

      }
    }
    function handleAbout(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest("[data-about-trigger]")) {
        event.preventDefault();
        setPreview("about");
        dialog.current?.showModal();
      }
    }
    document.addEventListener("click", handleAbout);
    document.addEventListener("click", handleClick);
    return () => { document.removeEventListener("click", handleClick); document.removeEventListener("click", handleAbout); };
  }, []);

  return (
    <>
      <header className="site-header"><div className="header-inner shell">
        <a href="/#main" className="brand" aria-label="ByLili home">
          <svg className="brand-monogram" viewBox="0 0 58 65" fill="none" aria-hidden="true"><path d="M15 52C25 34 49 8 43 4C35-2 14 34 18 51C22 67 47 45 43 34C39 22 15 43 7 55M18 43C30 31 42 24 46 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="47" cy="54" r="3" fill="#C98F82"/></svg>
          <span className="brand-divider"/><span className="wordmark">BYLILI</span>
        </a>
        <button type="button" className="menu-toggle" aria-label={t(menuOpen ? "Close menu" : "Open menu")} aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true">{menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M5 7h14M5 12h14M5 17h14" />}</svg></button>
        <nav id="primary-nav" className={`navigation ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a className={pathname === "/" ? "active" : undefined} href="/#main" onClick={() => setMenuOpen(false)}>{t("Home")}</a>
          <a className={pathname.startsWith("/services/") ? "active" : undefined} href="/#services" onClick={() => setMenuOpen(false)}>{t("Services")}</a>
          {showPortfolio && <a href="/#work" onClick={() => setMenuOpen(false)}>{t("Work")}</a>}
          <button type="button" onClick={() => openPreview("about")}>{t("About")}</button>
          <button type="button" onClick={() => openPreview("project")}>{t("Contact")}</button>
          <div className="language-switch" aria-label={t("Change language")}>
            <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed={locale === "et"} onClick={() => setLocale("et")}>ET</button>
          </div>
          <button type="button" className="header-cta" onClick={() => openPreview("project")}>{t("Let’s work together")} <span aria-hidden="true">→</span></button>
        </nav>
      </div></header>
      <dialog ref={dialog} className="preview-dialog" aria-labelledby="preview-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="dialog-inner">
          <form method="dialog"><button className="dialog-close" aria-label={t("Close preview")}>×</button></form>
          <p className="eyebrow">{t(previews[preview].label)}</p>
          <h2 id="preview-title">{t(previews[preview].title)}</h2>
          <p>{t(previews[preview].text)}</p>
          <span className="preview-label">{t("FIRST EDITION · DESIGN PREVIEW")}</span>
        </div>
      </dialog>
    </>
  );
}
