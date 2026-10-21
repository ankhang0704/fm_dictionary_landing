"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Menu, X, Globe, Download } from "lucide-react";

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("Trang chủ", "Home") },
    { href: "/features", label: t("Tính năng", "Features") },
    { href: "/about", label: t("Về chúng tôi", "About") },
    { href: "/faq", label: t("Hỏi đáp", "FAQ") },
    { href: "/contact", label: t("Liên hệ", "Contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="glass-panel rounded-full px-5 py-3 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent-blue to-spotlight-violet flex items-center justify-center text-white shadow-lg shadow-accent-blue/20 transition-transform group-hover:scale-105">
              <BookOpen size={18} className="stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-ink group-hover:text-accent-blue transition-colors">
                FM Dictionary
              </span>
              <span className="text-[10px] text-ink-muted -mt-0.5 tracking-wider uppercase">
                {t("Từ Điển Kỹ Thuật FM", "Facility Terminology")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-surface-1/60 rounded-full px-3 py-1 border border-hairline">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                    isActive
                      ? "bg-surface-2 text-ink shadow-sm"
                      : "text-ink-muted hover:text-ink hover:bg-surface-2/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink px-2.5 py-1.5 rounded-full border border-hairline hover:border-neutral-700 transition-colors bg-surface-1/40"
              title={t("Chuyển sang Tiếng Anh", "Switch to Vietnamese")}
            >
              <Globe size={13} />
              <span className="uppercase text-[11px] font-semibold tracking-wider">
                {lang}
              </span>
            </button>

            {/* Primary Action Button (Framer White Pill) */}
            <Link
              href="#download"
              className="hidden sm:inline-flex items-center gap-2 bg-ink text-black text-xs font-semibold px-5 py-2 rounded-full hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              <Download size={14} className="stroke-[2.5]" />
              <span>{t("Tải Ứng Dụng", "Get App")}</span>
            </Link>

            {/* Mobile Burger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink-muted hover:text-ink rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 p-5 glass-panel rounded-2xl border border-hairline animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm px-4 py-2.5 rounded-xl transition-colors ${
                  pathname === link.href
                    ? "bg-surface-2 text-ink font-semibold"
                    : "text-ink-muted hover:text-ink hover:bg-surface-1"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-hairline mt-2 flex flex-col gap-3">
              <Link
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-ink text-black text-sm font-semibold py-2.5 rounded-full hover:bg-neutral-200 transition-all"
              >
                {t("Tải Ứng Dụng Ngay", "Download Now")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
