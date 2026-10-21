"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { AppleIcon } from "@/components/AppleIcon";

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("Trang chủ", "Home") },
    { href: "/features", label: t("Tính năng", "Features") },
    { href: "/about", label: t("Về dự án", "About") },
    { href: "/faq", label: t("Hỏi đáp", "FAQ") },
    { href: "/contact", label: t("Liên hệ", "Contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 2-State Dynamic Width & Margin Container */}
      <div
        className={`mx-auto transition-all duration-300 ease-out ${
          isScrolled
            ? "max-w-5xl px-4 sm:px-6 pt-3"
            : "max-w-7xl px-5 sm:px-8 pt-5 sm:pt-6"
        }`}
      >
        <nav
          data-ui="true"
          className={`flex items-center justify-between flex-nowrap transition-all duration-300 ease-out ${
            isScrolled
              ? "bg-surface-1/90 backdrop-blur-md border border-hairline rounded-full px-5 py-2.5 shadow-lg shadow-black/10 dark:shadow-black/40"
              : "bg-surface-1/50 backdrop-blur-sm sm:bg-transparent border border-hairline/60 sm:border-transparent rounded-2xl sm:rounded-none px-4 sm:px-0 py-3"
          }`}
        >
          {/* Logo with Real App Icon */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-hairline bg-surface-2 flex items-center justify-center">
              <Image
                src="/icons/app_icon.png"
                alt="FM Dictionary Logo"
                width={32}
                height={32}
                className="object-cover"
                priority
              />
            </div>
            <span className="font-semibold text-sm tracking-tight text-ink group-hover:text-accent-blue transition-colors">
              FM Dictionary
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className={`hidden lg:flex items-center gap-1 rounded-full px-3 py-1 border transition-colors duration-300 ${
              isScrolled
                ? "bg-canvas border-hairline"
                : "bg-surface-1/80 border-hairline/80"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-surface-2 text-ink"
                      : "text-ink-muted hover:text-ink hover:bg-surface-1"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-hairline hover:border-ink-muted/50 transition-colors bg-surface-1 text-ink-muted hover:text-ink shrink-0"
              title={
                theme === "dark"
                  ? t("Chuyển sang Giao diện Sáng", "Switch to Light Mode")
                  : t("Chuyển sang Giao diện Tối", "Switch to Dark Mode")
              }
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun size={14} className="stroke-[2.2] text-amber-400" />
              ) : (
                <Moon size={14} className="stroke-[2.2] text-accent-blue" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-[13px] font-medium text-ink-muted hover:text-ink px-2.5 py-1.5 rounded-full border border-hairline hover:border-ink-muted/50 transition-colors bg-surface-1"
              title={t("Chuyển sang Tiếng Anh", "Switch to Vietnamese")}
              aria-label="Toggle language"
            >
              <Globe size={13} />
              <span className="text-[13px] font-semibold">
                {lang.toUpperCase()}
              </span>
            </button>

            {/* iOS App Store Button */}
            <MagneticButton strength={0.22}>
              <a
                href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 bg-ink text-white dark:text-black text-[13px] font-semibold px-4 py-1.5 rounded-full hover:opacity-90 active:scale-95 transition-transform"
                title={t("Tải trên Apple App Store", "Get on Apple App Store")}
              >
                <AppleIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>App Store</span>
              </a>
            </MagneticButton>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ink-muted hover:text-ink rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          data-ui="true"
          className="lg:hidden mx-4 mt-2 p-5 bg-surface-1 border border-hairline rounded-2xl animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm px-4 py-2.5 rounded-xl transition-colors ${
                  pathname === link.href
                    ? "bg-surface-2 text-ink font-semibold"
                    : "text-ink-muted hover:text-ink hover:bg-surface-2"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Appearance & Language Switcher Bar */}
            <div data-ui="true" className="flex items-center justify-between pt-3 pb-1 border-t border-hairline text-xs text-ink-muted">
              <span>{t("Giao diện & Ngôn ngữ", "Theme & Language")}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-hairline bg-surface-2 text-ink font-semibold text-xs"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={12} className="text-amber-400" />
                      <span>{t("Chế độ Tối", "Dark")}</span>
                    </>
                  ) : (
                    <>
                      <Moon size={12} className="text-accent-blue" />
                      <span>{t("Chế độ Sáng", "Light")}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-hairline bg-surface-2 text-ink font-semibold text-xs"
                >
                  <Globe size={12} />
                  <span>{lang.toUpperCase()}</span>
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 bg-ink text-white dark:text-black text-sm font-semibold py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-transform"
              >
                <AppleIcon className="w-4 h-4 fill-current shrink-0" />
                <span>{t("Tải trên Apple App Store", "Get on Apple App Store")}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
