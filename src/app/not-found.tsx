"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  Home,
  Search,
  MessageSquare,
  BookOpen,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      router.push(`/faq?q=${encodeURIComponent(searchVal.trim())}`);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 text-ink">
      <div className="max-w-xl w-full text-center">
        {/* Visual Symbol Beacon */}
        <div className="relative w-28 h-28 mx-auto mb-8">
          <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl animate-pulse" />
          <div className="relative w-full h-full rounded-3xl bg-surface-1 border border-hairline flex items-center justify-center shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-canvas border border-hairline flex items-center justify-center text-accent-blue font-mono font-bold text-xl">
              404
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-4">
          <Compass className="w-3.5 h-3.5 text-accent-blue" />
          <span>{t("Tín hiệu điều hướng bị mất", "Navigation Signal Lost")}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mb-4">
          {t("Không tìm thấy trang yêu cầu", "Page Not Found")}
        </h1>

        <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-8 max-w-md mx-auto">
          {t(
            "Địa chỉ bạn đang truy cập có thể đã được chuyển đổi hoặc đường dẫn kỹ thuật bị gõ nhầm. Hãy sử dụng các lối tắt bên dưới để tiếp tục công việc.",
            "The technical blueprint or URL you requested does not exist or has been relocated. Use the verified pathways below to resume navigation."
          )}
        </p>

        {/* Search Bar Pathway */}
        <form onSubmit={handleSearch} className="relative max-w-md mx-auto mb-8">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder={t(
              "Tìm kiếm chủ đề hoặc câu hỏi trong FAQ...",
              "Search knowledge base or topics..."
            )}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-1 border border-hairline text-ink text-xs placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors shadow-lg"
          />
        </form>

        {/* Pathway Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all flex flex-col items-center justify-center text-center group"
          >
            <Home className="w-5 h-5 text-accent-blue mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-ink">{t("Trang chủ", "Homepage")}</span>
            <span className="text-[10px] text-ink-muted mt-0.5">{t("Về tổng quan", "Return Home")}</span>
          </Link>

          <Link
            href="/features"
            className="p-4 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all flex flex-col items-center justify-center text-center group"
          >
            <BookOpen className="w-5 h-5 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-ink">{t("Tính năng", "Features")}</span>
            <span className="text-[10px] text-ink-muted mt-0.5">{t("Bộ công cụ FM", "Full Suite")}</span>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all flex flex-col items-center justify-center text-center group"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-ink">{t("Liên hệ", "Contact Us")}</span>
            <span className="text-[10px] text-ink-muted mt-0.5">{t("Hỗ trợ kỹ thuật", "Get Support")}</span>
          </Link>
        </div>

        {/* Primary Return Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-ink text-black font-semibold text-sm hover:opacity-90 transition-opacity shadow-xl"
        >
          <Home className="w-4 h-4" />
          <span>{t("Quay về Trang chủ", "Return to Homepage")}</span>
        </Link>
      </div>
    </div>
  );
}
