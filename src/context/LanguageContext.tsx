"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("fm_lang") as Language;
    if (saved === "vi" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("fm_lang", newLang);
  };

  const toggleLang = () => {
    const next = lang === "vi" ? "en" : "vi";
    setLang(next);
  };

  const t = (viText: string, enText: string) => {
    return lang === "vi" ? viText : enText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
