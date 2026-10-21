"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";

export type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (viText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "vi",
  setLang: () => {},
  toggleLang: () => {},
  t: (viText) => viText,
});

let isClientMounted = false;

function subscribe(callback: () => void) {
  isClientMounted = true;
  window.addEventListener("storage", callback);
  window.addEventListener("fm_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("fm_lang_change", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined" || !isClientMounted) return "vi";
  try {
    const saved = localStorage.getItem("fm_lang");
    return saved === "en" ? "en" : "vi";
  } catch {
    return "vi";
  }
}

function getServerSnapshot(): Language {
  return "vi";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((newLang: Language) => {
    try {
      localStorage.setItem("fm_lang", newLang);
    } catch {
      // LocalStorage access restricted in private mode
    }
    window.dispatchEvent(new Event("fm_lang_change"));
  }, []);

  const toggleLang = useCallback(() => {
    const next = lang === "vi" ? "en" : "vi";
    setLang(next);
  }, [lang, setLang]);

  const t = useCallback(
    (viText: string, enText: string) => {
      return lang === "vi" ? viText : enText;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
