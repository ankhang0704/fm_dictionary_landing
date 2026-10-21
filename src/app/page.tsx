"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Award,
  ChevronDown,
  CheckCircle2,
  Mic,
  Cpu,
  Brain,
} from "lucide-react";

// Dynamic import for Three.js 3D Canvas (SSR safe)
const ThreeHeroCanvas = dynamic(
  () =>
    import("@/components/ThreeHeroCanvas").then((mod) => mod.ThreeHeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[450px] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-accent-blue/30 border-t-accent-blue animate-spin" />
      </div>
    ),
  }
);

export default function Home() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    {
      value: "1,800+",
      label: t("Thuật ngữ FM chuyên sâu", "Specialized FM Terms"),
    },
    {
      value: "53",
      label: t("Chuyên đề kỹ thuật MEP & Smart Building", "MEP & Smart Building Topics"),
    },
    {
      value: "100%",
      label: t("Ngoại tuyến (Offline-First)", "Offline-First Capability"),
    },
    {
      value: "38 / 38",
      label: t("Màn hình đạt chứng chỉ Neo-Bento", "Complete Neo-Bento Screens"),
    },
  ];

  const benefits = [
    {
      icon: <Brain className="text-accent-blue" size={24} />,
      title: t("Phản Xạ Kỹ Thuật Tức Thì", "Instant Technical Fluency"),
      desc: t(
        "Không học từ vựng đơn lẻ. Học thông qua sơ đồ hệ thống MEP, báo cáo sự cố O&M và checklist bàn giao thực địa.",
        "Learn through MEP blueprints, O&M shift handovers, and statutory audit checklists rather than isolated word lists."
      ),
      badge: "Spaced Repetition",
    },
    {
      icon: <Mic className="text-spotlight-magenta" size={24} />,
      title: t("Chấm Âm Kép UK & US AI", "Dual UK & US Phonetic AI"),
      desc: t(
        "Luyện phát âm chuẩn xác với công nghệ nhận diện giọng nói AI và thước đo ngữ âm phân tích độ chính xác theo thời gian thực.",
        "Interactive dual-accent phonetics with live speech scoring and phoneme accuracy telemetry."
      ),
      badge: "AI Speech Scoring",
    },
    {
      icon: <ShieldCheck className="text-semantic-success" size={24} />,
      title: t("Bảo Mật Cục Bộ 100%", "Zero-Cloud Offline Privacy"),
      desc: t(
        "Toàn bộ kho từ điển và tiến độ ôn tập lưu trữ trên thiết bị thông qua Hive DB, hoạt động hoàn hảo dưới tầng hầm kỹ thuật không có sóng.",
        "Everything runs locally on-device. Zero dependency on connectivity inside electrical substations or plant rooms."
      ),
      badge: "Local-First Architecture",
    },
    {
      icon: <Cpu className="text-spotlight-orange" size={24} />,
      title: t("Tình Huống Vận Hành BMS & HVAC", "Real-World BMS & HVAC Scenarios"),
      desc: t(
        "Hơn 300 câu hỏi trắc nghiệm tình huống xử lý sự cố Chiller, AHU, PCCC, và điều phối nhà thầu theo chuẩn quốc tế.",
        "Over 300 real-world incident simulations for Chillers, AHUs, fire safety, and tenant SLA escalations."
      ),
      badge: "Scenario Simulation",
    },
  ];

  const faqs = [
    {
      q: t(
        "FM Dictionary có thu phí hoặc yêu cầu đăng ký tài khoản không?",
        "Is FM Dictionary free, and does it require an account?"
      ),
      a: t(
        "Hoàn toàn miễn phí 100%. Bạn có thể tra cứu và học toàn bộ 1.800+ từ vựng ngay lập tức với tư cách Khách (Guest) mà không cần tạo tài khoản hay kết nối mạng.",
        "100% free with no paywalls. You can explore and study all 1,800+ terms immediately in Guest mode without creating an account."
      ),
    },
    {
      q: t(
        "Ứng dụng có thể dùng được dưới tầng hầm không có internet không?",
        "Can I use the app offline inside basement plant rooms?"
      ),
      a: t(
        "Chắc chắn có. FM Dictionary được kiến trúc theo triết lý Offline-First với cơ sở dữ liệu Hive DB nhúng sẵn, cho phép tra cứu, phát âm TTS và làm Flashcard trơn tru không cần internet.",
        "Yes, absolutely. Built on an offline-first Hive DB foundation, all lookup, speech playback, and spaced flashcards work flawlessly offline."
      ),
    },
    {
      q: t(
        "Các chuyên đề bao gồm những lĩnh vực nào trong Facility Management?",
        "Which FM disciplines are covered?"
      ),
      a: t(
        "53 chuyên đề bao quát toàn diện: HVAC (Chillers, AHU, Tháp giải nhiệt), Hệ thống Điện & Máy biến áp, PCCC, Cấp thoát nước, BMS & IoT Sensors, Quản lý Hợp đồng SLA, Năng lượng & Net-Zero, Vận hành Tòa nhà và An toàn Lao động.",
        "53 technical topics covering HVAC, Electrical & Switchgear, Fire Life Safety, Plumbing, BMS Automation, Contract Management, Net-Zero ESG, and OSHA Health & Safety."
      ),
    },
    {
      q: t(
        "Làm thế nào để tải ứng dụng về máy?",
        "How can I install the app on my phone?"
      ),
      a: t(
        "Ứng dụng hiện có sẵn bản cài đặt Android APK (tải trực tiếp) và đang trong giai đoạn phát hành chính thức trên Apple App Store & Google Play Console.",
        "The application is available as a direct Android APK release, and is undergoing final review for publication on Apple App Store & Google Play."
      ),
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 border-b border-hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1/80 text-xs text-ink-muted mb-6">
                <span className="w-2 h-2 rounded-full bg-semantic-success animate-pulse" />
                <span className="text-ink font-medium">FM Dictionary v1.1.0</span>
                <span>•</span>
                <span>{t("Phiên bản chuẩn thương mại 100%", "Commercial Ready")}</span>
              </div>

              {/* Main Headline (Framer Aggressive Tight Tracking) */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-ink leading-[1.05] mb-6">
                {t(
                  "Chinh Phục Tiếng Anh Quản Lý Cơ Sở Vật Chất.",
                  "Master Facility Management English."
                )}
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
                {t(
                  "Nền tảng từ điển & luyện phản xạ thuật ngữ chuyên ngành đầu tiên dành riêng cho kỹ sư MEP, quản lý tòa nhà và chuyên viên vận hành cơ sở hạ tầng thông minh.",
                  "The premier specialized dictionary & spaced repetition platform purpose-built for MEP engineers, facility managers, and smart building operators."
                )}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="#download"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-ink text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 active:scale-95"
                >
                  <span>{t("Tải Ứng Dụng Miễn Phí", "Get Free App")}</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/features"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-surface-1 text-ink border border-hairline font-medium text-sm px-6 py-3.5 rounded-full hover:bg-surface-2 transition-all hover:border-neutral-700"
                >
                  <Sparkles size={16} className="text-spotlight-violet" />
                  <span>{t("Khám Phá Tính Năng", "Explore Features")}</span>
                </Link>
              </div>

              {/* Verified Trust Micro-Badges */}
              <div className="mt-10 pt-8 border-t border-hairline w-full flex flex-wrap items-center gap-6 text-xs text-ink-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-semantic-success" />
                  <span>{t("Hoạt động 100% Offline", "100% Offline Mode")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-semantic-success" />
                  <span>{t("Không quảng cáo rác", "Zero Clutter & Ads")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-semantic-success" />
                  <span>{t("Chuẩn hóa CEFR A1 — C2", "CEFR A1 — C2 Aligned")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Three.js Interactive 3D Canvas */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ThreeHeroCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & SOCIAL PROOF */}
      <section className="py-16 bg-surface-1/40 border-b border-hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-ink mb-1">
                  {s.value}
                </span>
                <span className="text-xs sm:text-sm text-ink-muted max-w-[180px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS (BENTO GRID) */}
      <section className="py-24 sm:py-32 border-b border-hairline relative" id="features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-accent-blue font-semibold mb-3 block">
              {t("Được Thiết Kế Cho Kỹ Sư", "Engineered For Practitioners")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-ink mb-4">
              {t(
                "Đập Tan Rào Cản Ngôn Ngữ Vận Hành Tòa Nhà.",
                "Built to Accelerate Technical Competence."
              )}
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              {t(
                "Mọi tính năng được tối ưu cho tốc độ và khả năng ứng dụng thực chiến trong ca trực kỹ thuật.",
                "Every workflow is tuned for rapid retrieval and high-stakes MEP field execution."
              )}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-surface-1 border border-hairline hover:border-neutral-700 transition-all hover:bg-surface-2/60 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-canvas border border-hairline flex items-center justify-center">
                    {b.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted px-3 py-1 rounded-full bg-canvas border border-hairline">
                    {b.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink tracking-tight mb-3 group-hover:text-accent-blue transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Deep-dive link */}
          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-blue hover:underline"
            >
              <span>{t("Xem Toàn Bộ 38 Tính Năng Chi Tiết", "Explore All 38 Screens & Features")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FAQ (OBJECTION HANDLING) */}
      <section className="py-24 sm:py-32 border-b border-hairline bg-surface-1/20" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-spotlight-violet font-semibold mb-3 block">
              {t("Giải Đáp Thắc Mắc", "Common Questions")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-ink mb-4">
              {t("Những Câu Hỏi Thường Gặp", "Frequently Asked Questions")}
            </h2>
            <p className="text-sm text-ink-muted">
              {t(
                "Mọi điều bạn cần biết trước khi bắt đầu hành trình nâng cao vốn từ vựng FM.",
                "Everything you need to know about our terminology engine and privacy."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface-1 border border-hairline overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-medium text-ink tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-ink-muted transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-ink" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-hairline pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="text-xs text-accent-blue font-semibold uppercase tracking-wider hover:underline"
            >
              {t("Xem Trung Tâm Trợ Giúp & FAQ Chi Tiết →", "Visit Full FAQ & Help Center →")}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HIGH-CONVERSION BOTTOM CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden" id="download">
        {/* Atmosphere Spotlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-accent-blue/20 via-spotlight-violet/15 to-transparent blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="glass-panel p-10 sm:p-16 rounded-3xl border border-hairline shadow-2xl">
            <span className="text-xs uppercase tracking-widest text-accent-blue font-semibold mb-3 block">
              {t("Sẵn Sàng Cho Ca Trực Mới", "Ready For The Field")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-ink mb-6 max-w-2xl mx-auto">
              {t(
                "Nâng Cấp Vốn Thuật Ngữ FM Của Bạn Ngay Hôm Nay.",
                "Elevate Your Facility Vocabulary Today."
              )}
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto mb-10 leading-relaxed">
              {t(
                "Gia nhập cùng hàng trăm kỹ sư MEP, kỹ thuật viên vận hành tòa nhà đang tự tin giao tiếp tiếng Anh mỗi ngày.",
                "Join building managers and MEP specialists mastering technical English with zero friction."
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/ankhang0704/fm_dictionary_app/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-all shadow-xl active:scale-95"
              >
                <BookOpen size={16} />
                <span>{t("Tải Bản Release APK", "Download Release APK")}</span>
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-surface-1 text-ink border border-hairline font-medium text-sm px-6 py-3.5 rounded-full hover:bg-surface-2 transition-all"
              >
                <span>{t("Đọc Câu Chuyện Dự Án", "Read Story")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
