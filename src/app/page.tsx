"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Download,
  Zap,
} from "lucide-react";
import { AppScreenshotsShowcase } from "@/components/AppScreenshotsShowcase";
import { InteractiveTermExplorer } from "@/components/InteractiveTermExplorer";
import { DecryptedText } from "@/components/DecryptedText";
import { SpotlightCard } from "@/components/SpotlightCard";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AppleIcon } from "@/components/AppleIcon";

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
      label: t("Chuyên đề kỹ thuật MEP & Smart Building", "MEP & Building Topics"),
    },
    {
      value: "100%",
      label: t("Hoạt động ngoại tuyến (Offline-First)", "Offline-First Engine"),
    },
    {
      value: "< 0.2s",
      label: t("Tốc độ phản hồi tra cứu Hive DB", "Local Query Latency"),
    },
  ];

  const pillars = [
    {
      title: t("Phản Xạ Kỹ Thuật Tức Thì", "Instant Technical Fluency"),
      desc: t(
        "Không học từ vựng đơn lẻ. Học thông qua sơ đồ hệ thống MEP, báo cáo sự cố O&M và checklist nghiệm thu thực tế trên công trường.",
        "Learn through MEP schematics, O&M shift handovers, and statutory audit checklists rather than isolated word lists."
      ),
      standard: "ASHRAE / NFPA",
    },
    {
      title: t("Phát Âm Chuẩn Kép UK & US", "Dual UK & US Phonetic Audio"),
      desc: t(
        "Luyện phát âm chuẩn xác với ký hiệu ngữ âm quốc tế IPA và âm thanh phòng thu cho các thuật ngữ và từ viết tắt phức tạp.",
        "Interactive dual-accent phonetics with studio playback for tricky engineering acronyms and polysyllabic terms."
      ),
      standard: "IPA Standard",
    },
    {
      title: t("Bảo Mật Cục Bộ 100% (Offline-First)", "Zero-Cloud Offline Privacy"),
      desc: t(
        "Toàn bộ kho từ điển và tiến độ ôn tập lưu trữ trên thiết bị thông qua Hive DB, hoạt động hoàn hảo dưới tầng hầm kỹ thuật không có sóng.",
        "Everything runs locally on-device. Zero dependency on connectivity inside electrical substations or plant rooms."
      ),
      standard: "Hive DB Local",
    },
    {
      title: t("Tình Huống Vận Hành BMS & HVAC", "Real-World BMS & HVAC Scenarios"),
      desc: t(
        "Hơn 300 câu hỏi trắc nghiệm tình huống xử lý sự cố Chiller, AHU, PCCC, và điều phối nhà thầu theo chuẩn quốc tế.",
        "Over 300 real-world incident simulations for Chillers, AHUs, fire safety, and tenant SLA escalations."
      ),
      standard: "ISO 41001",
    },
  ];

  const faqs = [
    {
      q: t(
        "FM Dictionary có thu phí hoặc yêu cầu đăng ký tài khoản không?",
        "Is FM Dictionary free, and does it require an account?"
      ),
      a: t(
        "Hoàn toàn miễn phí 100% phi lợi nhuận vì cộng đồng kỹ sư. Bạn có thể tra cứu và học toàn bộ 1,800+ từ vựng ngay lập tức với tư cách Khách (Guest) mà không cần tạo tài khoản hay kết nối mạng.",
        "100% free non-profit community project with no paywalls. You can explore and study all 1,800+ terms immediately in Guest mode without creating an account."
      ),
    },
    {
      q: t(
        "Ứng dụng có thể dùng được dưới tầng hầm không có internet không?",
        "Can I use the app offline inside basement plant rooms?"
      ),
      a: t(
        "Chắc chắn có. FM Dictionary được kiến trúc theo triết lý Offline-First với cơ sở dữ liệu Hive DB nhúng sẵn, cho phép tra cứu, phát âm và làm Flashcard trơn tru không cần internet.",
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
        "Ứng dụng hiện đã có mặt chính thức trên Apple App Store cho thiết bị iOS. Đối với hệ điều hành Android, bạn có thể tải bản cài đặt trực tiếp qua file APK (bản chính thức trên Google Play đang trong quá trình chuẩn bị).",
        "The application is officially live on the Apple App Store for iOS devices. For Android users, a direct APK installer is available immediately (Google Play publication is in preparation)."
      ),
    },
  ];

  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 animate-enter">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Engineering Version Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-medium mb-5 animate-enter">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                <span>
                  {t(
                    "Phiên bản 1.1.3 • Sổ tay thuật ngữ MEP & Smart Building",
                    "Version 1.1.3 • Specialized MEP & Smart Building Lexicon"
                  )}
                </span>
              </div>

              {/* Main Headline (React Bits DecryptedText) */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-ink leading-[1.08] mb-4 animate-enter">
                <DecryptedText
                  text={t(
                    "Chinh Phục Tiếng Anh Quản Lý Tòa Nhà.",
                    "Master Facility Management English."
                  )}
                  speed={35}
                  maxIterations={8}
                />
              </h1>

              {/* Subheadline (Humble, Practical, Grounded) */}
              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-[65ch] mb-8 animate-enter animate-enter-delay-1">
                {t(
                  "Sổ tay từ điển chuyên sâu & công cụ luyện phản xạ thuật ngữ dành cho kỹ sư MEP, quản lý tòa nhà và chuyên viên vận hành cơ sở hạ tầng thông minh.",
                  "A focused technical dictionary & spaced repetition study tool purpose-built for MEP engineers, facility managers, and smart building operators."
                )}
              </p>

              {/* CTAs: App Store (iOS) & Android APK */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto animate-enter animate-enter-delay-2">
                {/* iOS App Store (Primary High-Contrast Pill with Magnetic Hover) */}
                <MagneticButton strength={0.2}>
                  <a
                    href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2.5 bg-ink text-white dark:text-black font-semibold text-base px-8 py-3.5 rounded-full hover:opacity-90 active:scale-95 transition-transform transition-opacity"
                  >
                    <AppleIcon className="w-4 h-4 fill-current shrink-0" />
                    <span>{t("Tải trên App Store", "Get on App Store")}</span>
                  </a>
                </MagneticButton>

                {/* Android APK Button */}
                <MagneticButton strength={0.16}>
                  <a
                    href="https://drive.google.com/drive/folders/1yiT3UqwH2SL6eF1pf84VaErP_o6UP_g8"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ui="true"
                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-surface-2 text-ink hover:text-accent-blue border border-hairline hover:border-accent-blue/40 font-medium text-base px-6 py-3.5 rounded-full hover:bg-surface-1 transition-colors" /* taste-skill-ignore */
                  >
                    <Download size={18} />
                    <span>{t("Tải Android APK", "Get Android APK")}</span>
                  </a>
                </MagneticButton>

                {/* Explore Features Link */}
                <Link
                  href="/features"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 text-ink-muted hover:text-ink font-medium text-base px-4 py-3.5 rounded-full transition-colors"
                >
                  <span>{t("Tính Năng Chi Tiết", "Explore Features")}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Verified Technical Trust Badges */}
              <div className="mt-8 pt-6 border-t border-hairline/60 flex flex-wrap items-center gap-3 text-xs text-ink-muted animate-enter animate-enter-delay-3" data-ui="true">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-1 border border-hairline">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{t("100% Ngoại tuyến (Hive DB)", "100% Offline (Hive DB)")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-1 border border-hairline">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span>{t("1,800+ Thuật ngữ CEFR", "1,800+ CEFR Terms")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-1 border border-hairline">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>{t("Chuẩn ASHRAE / NFPA / ISO", "ASHRAE / NFPA / ISO Standards")}</span>
                </div>
                <p className="w-full text-[11px] text-ink-muted/70 mt-1">
                  {t(
                    "* Android: Bản APK cài trực tiếp • Bản chính thức Google Play đang trong quá trình chuẩn bị",
                    "* Android: Direct APK build • Google Play Store version in preparation"
                  )}
                </p>
              </div>
            </div>

            {/* Right Column: Flagship Titanium Device Chassis */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end" data-ui="true">
              <div className="relative">
                {/* Floating Telemetry Badge 1: Query Latency */}
                <div data-ui="true" className="absolute -top-3 -left-4 sm:-left-8 z-30 bg-surface-1 border border-hairline rounded-2xl px-3.5 py-2 flex items-center gap-2.5 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                    <Zap size={14} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{t("Phản hồi < 0.2s", "< 0.2s Query")}</div>
                    <div className="text-[10px] text-ink-muted">Hive DB Local</div>
                  </div>
                </div>

                {/* Titanium Phone Chassis */}
                <div data-ui="true" className="relative mx-auto w-[250px] sm:w-[280px] lg:w-[300px] aspect-[9/18.8] rounded-[2.6rem] p-2.5 sm:p-3 bg-surface-2 border border-white/20">
                  {/* Phone Inner Bezel */}
                  <div className="relative w-full h-full rounded-[2.1rem] overflow-hidden bg-black border border-white/10">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-2 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                    </div>

                    {/* Real App Screenshot Image */}
                    <Image
                      src="/images/screenshots/home-overview.webp"
                      alt={t("Màn hình chính FM Dictionary phiên bản 1.1.3", "FM Dictionary version 1.1.3 home screen")}
                      fill
                      priority
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating Telemetry Badge 2: Dual IPA Phonetics */}
                <div data-ui="true" className="absolute -bottom-3 -right-4 sm:-right-8 z-30 bg-surface-1 border border-hairline rounded-2xl px-3.5 py-2 flex items-center gap-2.5 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-accent-blue/15 text-accent-blue flex items-center justify-center font-bold text-xs shrink-0">
                    IPA
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{t("Phát âm chuẩn kép", "Dual Phonetics")}</div>
                    <div className="text-[10px] text-ink-muted">UK (RP) & US (GA)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & SPECS BANNER */}
      <section className="py-12 bg-surface-1/80 border-y border-hairline/80" data-ui="true">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-surface-2/40 border border-hairline/60 hover:border-accent-blue/40 transition-colors animate-enter"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-1.5 tabular-nums">
                  <AnimatedCounter value={s.value} />
                </span>
                <span className="text-xs sm:text-[13px] text-ink-muted max-w-[200px] leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTHENTIC SCREENSHOTS SHOWCASE */}
      <section className="py-20 sm:py-28" id="showcase">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <AppScreenshotsShowcase />
        </div>
      </section>

      {/* 4. INTERACTIVE LIVE ELEMENT: FM TERM EXPLORER (SpotlightCard) */}
      <section className="py-16 sm:py-24 bg-canvas-deep" id="explorer">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <RevealOnScroll>
            <SpotlightCard className="rounded-3xl border border-hairline">
              <InteractiveTermExplorer />
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. NARRATIVE EDITORIAL SPLIT (ENGINEERING PILLARS) */}
      <section className="py-20 sm:py-28" id="pillars">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Big Editorial Statement + Cover Image */}
            <div className="lg:col-span-5">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-semibold text-accent-blue mb-4">
                  <span>{t("Nền tảng tri thức O&M", "O&M Knowledge Base")}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-ink mb-6">
                  {t(
                    "Bốn Trụ Cột Kỹ Thuật Cho Kỹ Sư Vận Hành.",
                    "Four Engineering Pillars For Practitioners."
                  )}
                </h2>
                <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-[65ch] mb-8">
                  {t(
                    "Được đúc kết từ kinh nghiệm thực chiến tại các trạm Chiller, phòng biến áp và trung tâm điều khiển BMS của các tòa nhà thương mại hạng A.",
                    "Distilled from active operational experience across Chiller plants, transformer vaults, and BMS control centres in commercial assets."
                  )}
                </p>

                {/* Real Project Editorial Cover */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-surface-1 border border-hairline">
                  <Image
                    src="/images/fm-dictionary-editorial-cover.webp"
                    alt="FM Dictionary Platform Engineering"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Editorial Architectural List with subtle Spotlight effect */}
            <div className="lg:col-span-7 space-y-4">
              {pillars.map((pillar, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100}>
                  <SpotlightCard
                    className="p-6 rounded-2xl bg-surface-1/80 hover:bg-surface-1 transition-colors border border-hairline hover:border-accent-blue/40"
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">
                        {pillar.title}
                      </h3>
                      <span className="text-[12px] font-semibold text-accent-blue px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                        {pillar.standard}
                      </span>
                    </div>
                    <p className="text-base text-ink-muted leading-relaxed max-w-[65ch]">
                      {pillar.desc}
                    </p>
                  </SpotlightCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ (OBJECTION HANDLING) */}
      <section className="py-20 sm:py-28" id="faq">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading, intro, and Help Desk Link */}
            <div className="lg:col-span-5">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-xs font-semibold text-accent-blue mb-4">
                  <span>{t("Giải đáp thắc mắc", "Clear Answers")}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-ink mb-6">
                  {t("Những Câu Hỏi Thường Gặp", "Frequently Asked Questions")}
                </h2>
                <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-[65ch] mb-8">
                  {t(
                    "Mọi điều bạn cần biết về dữ liệu từ điển, độ bảo mật và cách tải.",
                    "Everything you need to know about our terminology engine, privacy, and downloads."
                  )}
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:underline text-[14px]"
                >
                  <span>{t("Xem Trung Tâm Trợ Giúp Chi Tiết →", "Visit Complete FAQ & Help Center →")}</span>
                </Link>
              </RevealOnScroll>
            </div>

            {/* Right Column: FAQ Accordion items */}
            <div className="lg:col-span-7 rounded-3xl bg-surface-1 border border-hairline p-6 sm:p-8 space-y-3" data-ui="true">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-colors p-4 border ${
                      isOpen
                        ? "bg-surface-2/80 border-hairline"
                        : "bg-surface-2/30 hover:bg-surface-2/60 border-transparent hover:border-hairline"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left flex items-start justify-between gap-4"
                    >
                      <span className="text-base sm:text-lg font-semibold text-ink leading-snug">
                        {faq.q}
                      </span>
                      <span className={`text-base font-bold shrink-0 ml-2 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-accent-blue text-white" : "text-ink-muted bg-surface-1 border border-hairline"
                      }`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-base text-ink-muted leading-relaxed max-w-[65ch]">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERSION BOTTOM CTA */}
      <section className="py-24 sm:py-32 bg-canvas-deep text-center relative overflow-hidden" id="download">
        {/* Radial Technical Blue Atmosphere Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-accent-blue/10 blur-3xl rounded-full pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <RevealOnScroll>
            <SpotlightCard className="p-10 sm:p-16 rounded-3xl bg-surface-1 border border-hairline max-w-4xl mx-auto relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-semibold text-accent-blue mb-4">
                <span>{t("100% Miễn Phí • Phi Lợi Nhuận", "100% Free • Non-Profit")}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-ink mb-6 max-w-2xl mx-auto">
                {t(
                  "Tải Ứng Dụng FM Dictionary.",
                  "Get FM Dictionary Today."
                )}
              </h2>
              <p className="text-base sm:text-lg text-ink-muted max-w-[65ch] mx-auto mb-10 leading-relaxed">
                {t(
                  "Dự án phi lợi nhuận 100% miễn phí, đồng hành cùng kỹ sư MEP và ban quản lý tòa nhà tự tin đọc hiểu tài liệu kỹ thuật và bản vẽ quốc tế.",
                  "100% free non-profit tool helping building managers and MEP engineers master technical English with zero network dependency."
                )}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
                {/* App Store (iOS) */}
                <MagneticButton strength={0.2}>
                  <a
                    href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-ink text-white dark:text-black font-semibold text-base px-8 py-3.5 rounded-full hover:opacity-90 active:scale-95 transition-transform transition-opacity"
                  >
                    <AppleIcon className="w-4 h-4 fill-current shrink-0" />
                    <span>{t("Tải trên Apple App Store", "Download on App Store")}</span>
                  </a>
                </MagneticButton>

                {/* Android APK */}
                <MagneticButton strength={0.16}>
                  <a
                    href="https://drive.google.com/drive/folders/1yiT3UqwH2SL6eF1pf84VaErP_o6UP_g8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-surface-2 text-ink hover:text-accent-blue font-medium text-base px-6 py-3.5 rounded-full hover:bg-surface-1 border border-hairline hover:border-accent-blue/40 transition-colors"
                  >
                    <Download size={18} />
                    <span>{t("Tải Bản Android APK", "Download Android APK")}</span>
                  </a>
                </MagneticButton>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-surface-2 text-ink-muted hover:text-ink font-medium text-base px-6 py-3.5 rounded-full hover:bg-surface-1 transition-colors"
                >
                  <span>{t("Đọc Câu Chuyện Dự Án", "Read Project Story")}</span>
                </Link>
              </div>

              <p className="text-[12px] text-ink-muted">
                {t(
                  "Bản Android APK cài trực tiếp • Bản phát hành Google Play đang được hoàn thiện",
                  "Direct Android APK release • Google Play Store version in preparation"
                )}
              </p>
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
