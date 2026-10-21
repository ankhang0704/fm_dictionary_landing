"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Github, Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-hairline bg-black relative z-10 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-hairline">
          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-blue to-spotlight-violet flex items-center justify-center text-white">
                <BookOpen size={16} />
              </div>
              <span className="font-semibold text-base tracking-tight text-ink">
                FM Dictionary
              </span>
            </Link>
            <p className="text-xs text-ink-muted leading-relaxed">
              {t(
                "Nền tảng từ điển & luyện phản xạ thuật ngữ tiếng Anh chuyên ngành Quản lý Cơ sở Vật chất (Facility Management) đầu tiên tại Việt Nam.",
                "The premier specialized English terminology & spaced retrieval platform for Facility Management professionals."
              )}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/ankhang0704"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface-1 border border-hairline flex items-center justify-center text-ink-muted hover:text-ink hover:border-neutral-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="mailto:ankhang0704@gmail.com"
                className="w-8 h-8 rounded-full bg-surface-1 border border-hairline flex items-center justify-center text-ink-muted hover:text-ink hover:border-neutral-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t("Sản Phẩm", "Product")}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-ink-muted">
              <li>
                <Link href="/features" className="hover:text-ink transition-colors">
                  {t("Tính Năng Chi Tiết", "All Features")}
                </Link>
              </li>
              <li>
                <Link href="/#download" className="hover:text-ink transition-colors">
                  {t("Tải Cho iOS & Android", "Download Mobile App")}
                </Link>
              </li>
              <li>
                <Link href="/#topics" className="hover:text-ink transition-colors">
                  {t("53 Chuyên Đề Kỹ Thuật", "53 Technical Specialties")}
                </Link>
              </li>
              <li>
                <Link href="/#smart-review" className="hover:text-ink transition-colors">
                  {t("Thuật Toán Ôn Tập SRS", "SRS Spaced Algorithm")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t("Tài Nguyên", "Resources")}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-ink-muted">
              <li>
                <Link href="/about" className="hover:text-ink transition-colors">
                  {t("Về Tác Giả & Dự Án", "About Developer & Project")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-ink transition-colors">
                  {t("Câu Hỏi Thường Gặp (FAQ)", "Frequently Asked Questions")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink transition-colors">
                  {t("Liên Hệ & Góp Ý", "Contact & Feedback")}
                </Link>
              </li>
              <li>
                <Link href="/not-found" className="hover:text-ink transition-colors">
                  {t("Trang 404 Mẫu", "Sample 404 Preview")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t("Pháp Lý & Bảo Mật", "Legal & Privacy")}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-ink-muted">
              <li>
                <Link href="/privacy" className="hover:text-ink transition-colors">
                  {t("Chính Sách Quyền Riêng Tư", "Privacy Policy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink transition-colors">
                  {t("Điều Khoản Sử Dụng", "Terms of Service")}
                </Link>
              </li>
              <li className="pt-2 flex items-center gap-1.5 text-semantic-success text-[11px] font-medium">
                <ShieldCheck size={14} />
                <span>{t("Bảo mật cục bộ Offline-First", "Offline-First Privacy")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} FM Dictionary. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Designed with Framer Dark System</span>
            <span>•</span>
            <span>Created by An Khang</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
