"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, ShieldCheck, Heart } from "lucide-react";
import { AppleIcon } from "@/components/AppleIcon";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-canvas-deep border-t border-hairline relative z-10 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-hairline bg-surface-2 flex items-center justify-center">
                <Image
                  src="/icons/app_icon.png"
                  alt="FM Dictionary Icon"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-base tracking-tight text-ink">
                FM Dictionary
              </span>
            </Link>
            <p className="text-[13px] text-ink-muted leading-relaxed">
              {t(
                "Nền tảng từ điển & luyện phản xạ thuật ngữ tiếng Anh chuyên ngành Quản lý Cơ sở Vật chất (Facility Management) phi lợi nhuận dành cho cộng đồng kỹ sư Việt Nam.",
                "Non-profit specialized English terminology & spaced retrieval platform for the Vietnamese Facility Management engineering community."
              )}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[13px] text-ink-muted">
              <span className="inline-flex items-center gap-1.5 text-accent-blue font-medium">
                <Heart size={14} className="fill-current text-rose-500 stroke-none" />
                <span>{t("100% Miễn phí vì cộng đồng", "100% Free Community Project")}</span>
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="mailto:ankhang.nguyen0704@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-1 border border-hairline text-ink-muted hover:text-ink hover:border-ink-muted/50 transition-colors text-xs"
                aria-label="Email Support"
              >
                <Mail size={13} />
                <span>ankhang.nguyen0704@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-ink">
              {t("Tải Ứng Dụng", "Downloads")}
            </span>
            <ul className="flex flex-col gap-2 text-[13px] text-ink-muted">
              <li>
                <a
                  href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors flex items-center gap-1.5 text-accent-blue font-medium"
                >
                  <AppleIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>{t("Apple App Store (iOS)", "Apple App Store (iOS)")}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-accent-blue/15 text-accent-blue font-medium">Live</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ankhang0704/fm_dictionary_app/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                >
                  {t("Bản Cài Đặt Android APK (Trực tiếp)", "Direct Android APK Build")}
                </a>
              </li>
              <li className="text-[11px] text-ink-muted/80">
                {t("* Sắp có trên Google Play Console", "* Google Play release coming soon")}
              </li>
              <li className="pt-2">
                <Link href="/features" className="hover:text-ink transition-colors">
                  {t("Khám Phá Tính Năng Chi Tiết", "Explore All Capabilities")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Project & Ownership */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-ink">
              {t("Về Dự Án", "About Project")}
            </span>
            <ul className="flex flex-col gap-2 text-[13px] text-ink-muted">
              <li>
                <Link href="/about" className="hover:text-ink transition-colors">
                  {t("Chủ Sở Hữu & Đội Ngũ Phát Triển", "Project Owner & Development Team")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-ink transition-colors">
                  {t("Câu Hỏi Thường Gặp (FAQ)", "Frequently Asked Questions")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink transition-colors">
                  {t("Liên Hệ & Góp Ý Thuật Ngữ", "Contact & Terminology Feedback")}
                </Link>
              </li>
              <li className="pt-1 text-[12px] text-ink-muted">
                <span>{t("Chủ sở hữu: Chị Thúy Tạ", "Project Owner: Thuy Ta")}</span>
                <br />
                <span>{t("Phát triển kỹ thuật: Nguyễn An Khang", "Developer: Nguyen An Khang")}</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-ink">
              {t("Pháp Lý & Bản Quyền", "Legal & Licensing")}
            </span>
            <ul className="flex flex-col gap-2 text-[13px] text-ink-muted">
              <li>
                <Link href="/privacy" className="hover:text-ink transition-colors">
                  {t("Chính Sách Quyền Riêng Tư", "Privacy Policy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink transition-colors">
                  {t("Điều Khoản Sử Dụng (Phi Lợi Nhuận)", "Terms of Service (Non-Profit)")}
                </Link>
              </li>
              <li className="pt-2 flex items-center gap-1.5 text-semantic-success text-[13px] font-medium">
                <ShieldCheck size={14} />
                <span>{t("Bảo mật cục bộ 100% Offline-First", "100% Offline-First Local Data")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-ink-muted">
          <p>© {new Date().getFullYear()} FM Dictionary. 100% Free Community Project.</p>
          <div className="flex items-center gap-3 text-[13px]">
            <span>{t("Dự án vì cộng đồng FM Việt Nam", "Dedicated to VN Facility Management")}</span>
            <span>•</span>
            <span>Thuy Ta & An Khang</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
