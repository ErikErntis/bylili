"use client";

import { contactContent, contactDetails, getContactHref } from "../lib/contact";
import BotanicalDetail from "./botanical-detail";
import { useI18n } from "../lib/i18n";

type SocialKind = "instagram" | "whatsapp" | "linkedin" | "email";
function SocialIcon({ kind }: { kind: SocialKind }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "instagram" && <><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r=".7" fill="currentColor" stroke="none"/></>}
    {kind === "email" && <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>}
    {kind === "linkedin" && <><path d="M5 10v10M10 20V10h4v2c2-4 6-2 6 1v7M14 12v8"/><circle cx="5" cy="5" r="1"/></>}
    {kind === "whatsapp" && <><path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.5-5A8 8 0 1 1 20 11.5Z"/><path d="m8 7 2 3-1 1c1 2 2 3 4 3l1-1 3 2c-1 4-9 1-10-5 0-2 1-3 1-3Z"/></>}
  </svg>;
}

export default function SiteFooter({ showPortfolio = false }: { showPortfolio?: boolean }) {
  const { t } = useI18n();
  const href = getContactHref();
  const phone = contactDetails.whatsapp.replace(/\D/g, "");
  const socials: { kind: SocialKind; label: string; href: string }[] = [
    { kind: "instagram", label: "Instagram", href: contactDetails.instagramUrl },
    { kind: "whatsapp", label: "WhatsApp", href: phone ? `https://wa.me/${phone}` : "" },
    { kind: "linkedin", label: "LinkedIn", href: contactDetails.linkedinUrl },
    { kind: "email", label: "Email Lili", href: contactDetails.email ? `mailto:${contactDetails.email}` : "" },
  ].filter((item) => item.href.trim()) as { kind: SocialKind; label: string; href: string }[];

  return <footer className="site-footer">
    <BotanicalDetail className="footer-botanical"/>
    <div className="shell footer-inner">
      <div className="footer-top">
        <div className="footer-brand-block"><a href="/#main" className="footer-brand" aria-label={t("ByLili home")}><svg viewBox="0 0 58 65" fill="none" aria-hidden="true"><path d="M15 52C25 34 49 8 43 4C35-2 14 34 18 51C22 67 47 45 43 34C39 22 15 43 7 55M18 43C30 31 42 24 46 27" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="47" cy="54" r="3" fill="#c98f82"/></svg><span>BYLILI</span><small>{t(contactContent.tagline)}</small></a><p className="footer-location">{t(contactContent.location)}</p></div>
        <nav className="footer-nav" aria-label={t("Footer navigation")}><a href="/#main">{t("Home")}</a><a href="/#services">{t("Services")}</a>{showPortfolio && <a href="/#work">{t("Work")}</a>}<a href="#about" data-about-trigger>{t("About")}</a><a href="/#contact">{t("Contact")}</a></nav>
        <div className="footer-connect"><p className="footer-connect-title">{t(socials.length ? contactContent.socialHeading : "Let’s connect")}</p>{socials.length > 0 ? <div className="footer-socials">{socials.map((social) => <a key={social.kind} href={social.href} aria-label={t(social.label)} title={t(social.label)}><SocialIcon kind={social.kind}/></a>)}</div> : <a className="footer-conversation" href={href ?? "#project"} data-project-trigger={href ? undefined : true}>{t("Start a conversation")} <span aria-hidden="true">↗</span></a>}</div>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} ByLili. {t("All rights reserved.")}</p><div>{contactDetails.privacyUrl && <a href={contactDetails.privacyUrl}>{t("Privacy Policy")}</a>}{contactDetails.termsUrl && <a href={contactDetails.termsUrl}>{t("Terms of Service")}</a>}</div></div>
    </div>
  </footer>;
}
