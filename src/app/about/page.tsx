"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Heart,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Compass,
  ArrowRight,
  Cpu,
  Layers,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "2024",
      title: t("Khởi nguồn từ thực địa", "Genesis on the Job Site"),
      desc: t(
        "Nhận thấy các kỹ sư MEP trẻ thường gặp lúng túng khi dịch tài liệu O&M của Carrier, Daikin, Trane và chuẩn NFPA, dự án FM Dictionary được phôi thai như một cuốn sổ tay thuật ngữ nội bộ.",
        "Observing junior MEP engineers stumbling over Carrier, Daikin, Trane O&M manuals and NFPA codes, FM Dictionary was born as an internal engineering cheat sheet."
      ),
    },
    {
      year: "2025",
      title: t("Chuẩn hóa kiến trúc Local-First", "Local-First Architecture Pivot"),
      desc: t(
        "Tái cấu trúc toàn bộ ứng dụng sang Clean Architecture và Hive database để đảm bảo tốc độ phản hồi 0.2s dưới các phòng máy tầng hầm không có sóng 4G/Wifi.",
        "Refactored to Clean Architecture and local Hive storage, ensuring 0.2s instant response inside reinforced concrete plant basements devoid of cellular signals."
      ),
    },
    {
      year: "2026",
      title: t("Cột mốc 38 màn hình & 1,800+ thuật ngữ", "38 Complete Screens & 1,800+ Terms Milestone"),
      desc: t(
        "Hoàn thiện hệ sinh thái học tập toàn diện: Từ điển chuyên ngành, thuật toán lặp lại ngắt quãng SRS, bài kiểm tra tình huống thực tế và luyện phát âm AI với 296 bài test tự động đạt 100%.",
        "Completed the full learning suite: Dictionary, Spaced Repetition (SRS), Scenario Quizzes, and Dual UK/US Audio, verified by 296 automated unit/widget tests passing at 100%."
      ),
    },
  ];

  const values = [
    {
      icon: Terminal,
      title: t("Tối giản & Trọng tâm", "Radical Simplicity & Zero Bloat"),
      desc: t(
        "Không quảng cáo gây phân tâm, không khảo sát phiền phức, không giữ chân người dùng bằng chiêu trò. Mở app là có ngay câu trả lời cho kỹ sư.",
        "Zero intrusive ads, zero user tracking, zero retention gimmicks. Open the app, get immediate technical clarity, and get back to work."
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Tôn trọng quyền riêng tư", "Local-First Privacy First"),
      desc: t(
        "Toàn bộ tiến độ học tập, lịch sử tra cứu và ghi chú cá nhân được lưu trữ trực tiếp trên thiết bị của bạn. Dữ liệu của bạn thuộc về bạn.",
        "All learning progress, query history, and custom notes reside securely on your device. Your operational knowledge belongs solely to you."
      ),
    },
    {
      icon: Compass,
      title: t("Chuẩn hóa quốc tế", "Strict International Standards"),
      desc: t(
        "Mọi thuật ngữ đều được đối chiếu chặt chẽ với các tổ chức kỹ thuật uy tín: ASHRAE, NFPA, IFMA, LEED, và ISO 41001.",
        "Every term is rigorously cross-referenced against global authority standards: ASHRAE, NFPA, IFMA, LEED, and ISO 41001."
      ),
    },
  ];

  return (
    <div className="pt-12 pb-24 text-ink">
      {/* Hero Origin Section */}
      <section className="px-6 max-w-4xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-6">
          <Heart className="w-3.5 h-3.5 text-rose-500" />
          <span>{t("Câu chuyện sáng lập & Sứ mệnh", "Origin Story & Mission")}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          {t(
            "Xóa bỏ rào cản thuật ngữ cho kỹ sư quản lý tòa nhà.",
            "Democratizing Technical English for Facility Engineers."
          )}
        </h1>

        <p className="text-lg md:text-xl text-ink-muted leading-relaxed">
          {t(
            "FM Dictionary sinh ra từ nỗi niềm thực tế: làm sao để kỹ sư Việt Nam tự tin đọc hiểu bản vẽ, vận hành hệ thống toà nhà thông minh chuẩn quốc tế mà không bị cản trở bởi rào cản tiếng Anh chuyên ngành.",
            "FM Dictionary was built out of a real-world conviction: ensuring property engineers and technicians can read complex engineering schematics and operate smart building assets without being held back by language barriers."
          )}
        </p>
      </section>

      {/* Origin Story Narrative */}
      <section className="px-6 max-w-3xl mx-auto mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-surface-1 border border-hairline space-y-6 text-sm md:text-base leading-relaxed text-ink-muted">
          <p className="text-ink font-medium text-lg leading-snug">
            {t(
              "Tại sao lại là Quản lý Cơ sở vật chất (Facility Management)?",
              "Why Facility Management in Particular?"
            )}
          </p>

          <p>
            {t(
              "Ngành Quản lý Tòa nhà & Cơ sở vật chất tại Việt Nam đang phát triển với tốc độ chóng mặt. Hàng loạt tòa tháp thương mại hạng A, trung tâm dữ liệu (Data Center), nhà máy bán dẫn và bệnh viện thông minh mọc lên. Đi kèm với đó là các hệ thống cơ điện (MEP), Chiller ly tâm, tháp giải nhiệt, PCCC địa chỉ và hệ thống tự động hóa toà nhà BMS vô cùng phức tạp.",
              "The Facility Management sector in Vietnam is expanding at breakneck speed. High-grade commercial towers, Tier-3 Data Centers, semiconductor fabrication cleanrooms, and smart hospitals are multiplying. With them come intricate MEP installations, centrifugal chillers, addressable fire alarm loops, and Building Management Systems (BMS)."
            )}
          </p>

          <p>
            {t(
              "Thế nhưng, hầu hết tài liệu kỹ thuật, cẩm nang vận hành & bảo trì (O&M Manuals), tiêu chuẩn ASHRAE 90.1, NFPA 13, và chứng chỉ LEED đều được viết bằng tiếng Anh học thuật nặng tính chuyên ngành. Rất nhiều kỹ sư tay nghề giỏi gặp khó khăn khi phát âm các từ viết tắt kỹ thuật, hoặc hiểu nhầm các thông số áp suất, lưu lượng, nhiệt độ, gây ra sự cố tốn kém hàng trăm triệu đồng.",
              "Yet, virtually all technical manuals, O&M blueprints, ASHRAE standards, and LEED certification criteria are written in dense, specialized English. Skilled engineers frequently stumble on pronunciations or misunderstand flow/pressure specifications, risking costly equipment downtime."
            )}
          </p>

          <p>
            {t(
              "FM Dictionary ra đời để giải quyết tận gốc rễ vấn đề này. Không chỉ là từ điển thông thường tra chữ thành chữ, ứng dụng cung cấp ngữ cảnh hiện trường, phát âm chuẩn studio kép UK/US, và phương pháp ôn tập ngắt quãng khoa học giúp kỹ sư ghi nhớ vĩnh viễn.",
              "FM Dictionary was engineered to solve this fundamentally. Rather than a superficial word translator, it delivers contextual operational definitions, dual UK/US studio pronunciations, and an SRS memory engine that permanently locks terms into operational memory."
            )}
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-ink mb-3">
            {t("Nguyên tắc triết lý sản phẩm", "Our Engineering Principles")}
          </h2>
          <p className="text-ink-muted text-sm max-w-lg mx-auto">
            {t(
              "Những tôn chỉ bất biến dẫn dắt từng dòng mã trong dự án FM Dictionary.",
              "The uncompromised tenets that guide every pull request in FM Dictionary."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-canvas border border-hairline flex items-center justify-center text-accent-blue mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{v.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-ink mb-3">
            {t("Hành trình phát triển", "The Evolution Timeline")}
          </h2>
          <p className="text-ink-muted text-sm">
            {t("Từ bản ghi chép cá nhân tới sản phẩm hoàn chỉnh 38 màn hình.", "From personal site notes to a 38-screen production system.")}
          </p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-hairline">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="w-8 h-8 rounded-full bg-surface-1 border-2 border-accent-blue flex items-center justify-center text-xs font-mono font-bold text-ink shrink-0 z-10 md:mx-auto">
                {idx + 1}
              </div>
              <div className="w-full md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-surface-1 border border-hairline">
                <span className="text-xs font-mono text-accent-blue font-semibold">{m.year}</span>
                <h3 className="text-base font-semibold text-ink mt-1 mb-2">{m.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Profile Section */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-surface-1 border border-hairline relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-3xl shrink-0 shadow-lg border border-hairline">
              AK
            </div>
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-canvas border border-hairline text-xs font-mono text-ink-muted">
                <Code2 className="w-3.5 h-3.5 text-accent-blue" />
                <span>{t("Tác giả & Kiến trúc sư phần mềm", "Author & Software Architect")}</span>
              </div>
              <h3 className="text-2xl font-bold text-ink">An Khang</h3>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xl">
                {t(
                  "Kỹ sư phần mềm đam mê công nghệ toà nhà và tối ưu hiệu năng. Tác giả của FM Dictionary, theo đuổi triết lý phần mềm tối giản, không rác (Clean Code, Zero-Bloat) và trải nghiệm xúc giác cao cấp.",
                  "Software engineer dedicated to building technologies and performance engineering. Creator of FM Dictionary, committed to zero-bloat clean code, local-first architectures, and refined tactile interactions."
                )}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <Link
                  href="https://github.com/ankhang0704"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/ankhang0704</span>
                </Link>
                <Link
                  href="mailto:ankhang0704@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors font-mono"
                >
                  <span>ankhang0704@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Verification Traction */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <div className="p-8 rounded-3xl bg-canvas border border-hairline">
          <h3 className="text-xl font-semibold text-ink mb-3">
            {t("Dự án hoàn toàn mã nguồn mở", "100% Free & Open-Source")}
          </h3>
          <p className="text-xs md:text-sm text-ink-muted max-w-lg mx-auto mb-6">
            {t(
              "Chúng tôi tin rằng kiến thức kỹ thuật cơ bản phục vụ an toàn vận hành tòa nhà phải được chia sẻ rộng rãi cho cộng đồng.",
              "We believe fundamental operational safety and engineering knowledge should be freely accessible to everyone."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://github.com/ankhang0704/fm_dictionary_app"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-black font-semibold text-xs hover:opacity-90 transition-opacity"
            >
              <Github className="w-4 h-4" />
              <span>{t("Xem mã nguồn trên GitHub", "Star Repository on GitHub")}</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline bg-surface-1 text-ink font-semibold text-xs hover:bg-surface-2 transition-colors"
            >
              <span>{t("Liên hệ hợp tác", "Get in Touch")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
