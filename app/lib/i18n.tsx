"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import en from "../messages/en.json";
import et from "../messages/et.json";

export type Locale = "en" | "et";
type Dictionary = Record<string, string>;
type I18nValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (text: string) => string };
const dictionaries: Record<Locale, Dictionary> = { en, et };
const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("bylili-locale");
    if (saved === "et" || saved === "en") setLocaleState(saved);
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  const setLocale = (next: Locale) => {
    window.localStorage.setItem("bylili-locale", next);
    setLocaleState(next);
    document.documentElement.lang = next;
  };
  const value = useMemo<I18nValue>(() => ({
    locale,
    setLocale,
    // English source strings are stable translation keys; unknown copy safely falls back to English.
    t: (text) => dictionaries[locale][text] ?? text,
  }), [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
