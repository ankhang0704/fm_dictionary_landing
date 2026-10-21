"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, Download } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("Trang chủ", "Home") },
    { href: "/features", label: t("Tính năng", "Features") },
    { href: "/about", label: t("Về dự án", "About") },
    { href: "/faq", label: t("Hỏi đáp", "FAQ") },
    { href: "/contact", label: t("Liên hệ", "Contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav
          data-ui="true"
          className="bg-surface-1/90 backdrop-blur-md border border-hairline rounded-full px-5 py-3 flex items-center justify-between flex-nowrap"
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
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-ink group-hover:text-accent-blue transition-colors">
                FM Dictionary
              </span>
              <span className="text-[13px] text-ink-muted -mt-0.5 tracking-normal">
                {t("Từ Điển Kỹ Thuật MEP", "Facility Terminology")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-canvas rounded-full px-3 py-1 border border-hairline">
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
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-[13px] font-medium text-ink-muted hover:text-ink px-2.5 py-1.5 rounded-full border border-hairline hover:border-neutral-700 transition-colors bg-surface-1"
              title={t("Chuyển sang Tiếng Anh", "Switch to Vietnamese")}
              aria-label="Toggle language"
            >
              <Globe size={13} />
              <span className="text-[13px] font-semibold">
                {lang.toUpperCase()}
              </span>
            </button>

            {/* iOS App Store Button */}
            <MagneticButton strength={0.18}>
              <a
                href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 bg-surface-1 border border-hairline hover:border-neutral-700 text-ink text-[13px] font-medium px-3.5 py-1.5 rounded-full hover:bg-surface-2 transition-colors"
                title={t("Tải trên Apple App Store", "Get on Apple App Store")}
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 170 170"
                  aria-hidden="true"
                >
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.6-7.85-11.75-14.42-6.52-10.22-11.45-21.75-14.78-34.58-3.33-12.83-5-24.81-5-35.94 0-14.78 3.73-27.13 11.2-37.06 7.46-9.93 16.92-14.98 28.38-15.15 4.89 0 10.26 1.34 16.12 4.02 5.86 2.68 9.53 4.02 11.01 4.02 1.25 0 5.16-1.45 11.75-4.35 6.59-2.9 12.27-4.14 17.06-3.73 12.59.88 22.84 5.92 30.76 15.12-10.96 6.69-16.32 15.86-16.08 27.52.24 9.17 3.78 16.97 10.63 23.41 6.85 6.44 14.88 10.25 24.08 11.42-2.13 6.69-4.87 13.52-8.23 20.49zM119.22 31.85c0-7.36 2.65-14.28 7.95-20.76 5.3-6.48 11.93-10.42 19.89-11.83.33 1.25.49 2.45.49 3.6 0 7.36-2.73 14.39-8.19 21.09-5.46 6.7-12.07 10.67-19.83 11.9-.06-1.33-.31-2.67-.31-4z" />
                </svg>
                <span>App Store</span>
              </a>
            </MagneticButton>

            {/* Android APK Button (Framer White Pill) */}
            <MagneticButton strength={0.22}>
              <a
                href="https://github.com/ankhang0704/fm_dictionary_app/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 bg-ink text-black text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors active:scale-95"
                title={t("Tải bản APK trực tiếp cho Android", "Download direct Android APK")}
              >
                <Download size={13} className="stroke-[2.5]" />
                <span>{t("Tải APK", "Get APK")}</span>
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
            <div className="pt-3 mt-2 flex flex-col gap-2.5">
              <a
                href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 bg-surface-2 border border-hairline text-ink text-sm font-semibold py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
              >
                <span>{t("Tải trên Apple App Store (iOS)", "Get on Apple App Store (iOS)")}</span>
              </a>

              <a
                href="https://github.com/ankhang0704/fm_dictionary_app/releases"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 bg-ink text-black text-sm font-semibold py-2.5 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <Download size={14} className="stroke-[2.5]" />
                <span>{t("Tải Bản Android APK Trực Tiếp", "Download Direct Android APK")}</span>
              </a>
              <span className="text-center text-[11px] text-ink-muted">
                {t("(Bản APK trực tiếp • Sắp có trên Google Play)", "(Direct APK build • Google Play coming soon)")}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
