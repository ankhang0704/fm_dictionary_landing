"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Heart,
  Terminal,
  ShieldCheck,
  Compass,
  ArrowRight,
  UserCheck,
  Code2,
  Mail,
  Download,
} from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AppleIcon } from "@/components/AppleIcon";

export default function AboutPage() {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "02/2026",
      title: t("Khởi động dự án & Chuẩn hóa dữ liệu", "Project Inception & MEP Data Structuring"),
      desc: t(
        "Bắt đầu nghiên cứu và phát triển dự án FM Dictionary từ nhu cầu thực tiễn của công tác quản lý vận hành tòa nhà. Xây dựng kiến trúc Offline-First (Hive DB) và số hóa 1,800+ thuật ngữ MEP chuyên ngành.",
        "Commenced research and development of FM Dictionary driven by practical facility operations needs. Established the Offline-First Hive DB architecture and digitized 1,800+ bilingual MEP terms."
      ),
    },
    {
      year: "06/2026",
      title: t("Phát hành chính thức trên App Store", "Official Apple App Store Release"),
      desc: t(
        "Chính thức phát hành trên Apple App Store (iOS) hoàn toàn miễn phí 100% phi lợi nhuận, mang công cụ tra cứu tức thì và flashcard Spaced Repetition đến cộng đồng kỹ sư O&M.",
        "Officially launched on the Apple App Store (iOS) as a 100% free non-profit initiative, delivering instant offline lookup and SM-2 flashcard review to O&M engineers."
      ),
    },
    {
      year: "11/2026",
      title: t("Cải thiện lớn & Nâng cấp toàn diện", "Major Feature & System Upgrade"),
      desc: t(
        "Đợt cập nhật cải thiện lớn toàn diện: hoàn thiện giao diện người dùng, mở rộng 300+ tình huống sự cố thực tế, tối ưu thuật toán ghi nhớ SM-2 và ra mắt website landing page song ngữ thế hệ mới.",
        "Comprehensive major upgrade: complete UI/UX refinement, 300+ expanded job-site incident scenarios, enhanced SM-2 retention engine, and dedicated bilingual landing platform."
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

  const team = [
    {
      initials: "TT",
      name: "Thúy Tạ (Thuy Ta)",
      role: t("Chủ Sở Hữu & Định Hướng Dự Án", "Project Owner & Lead Curator"),
      bio: t(
        "Người khởi xướng và sở hữu dự án FM Dictionary. Xuất phát từ tâm huyết nâng cao năng lực cho đội ngũ kỹ sư và kỹ thuật viên Quản lý Cơ sở Vật chất (Facility Management) tại Việt Nam, chị Thúy Tạ định hình nội dung và duy trì dự án hoạt động phi lợi nhuận, hoàn toàn miễn phí cho cộng đồng.",
        "Founder and owner of FM Dictionary. Driven by a dedicated mission to support Vietnamese Facility Management engineers and technicians, Thuy Ta directs project strategy and curates content, ensuring the platform remains 100% free for the community."
      ),
      contactLink: null,
      contactLabel: null,
      badgeIcon: UserCheck,
    },
    {
      initials: "AK",
      name: "Nguyễn An Khang",
      role: t("Kỹ Sư Phát Triển & Hỗ Trợ Kỹ Thuật", "Software Developer & Technical Support"),
      bio: t(
        "Kỹ sư phần mềm phụ trách kiến trúc Flutter Clean Architecture, cơ sở dữ liệu Hive DB ngoại tuyến và hệ thống landing page. Cam kết mã nguồn tối giản, không rác (Clean Code, Zero-Bloat) và trực tiếp tiếp nhận phản hồi, hỗ trợ kỹ thuật cho người dùng.",
        "Software engineer leading the Flutter Clean Architecture mobile app, offline Hive DB, and web platform. Committed to clean code, local-first performance, and providing direct technical support to users."
      ),
      contactLink: "mailto:ankhang.nguyen0704@gmail.com",
      contactLabel: "ankhang.nguyen0704@gmail.com",
      badgeIcon: Code2,
    },
  ];

  return (
    <div className="pt-12 pb-24 text-ink">
      {/* Hero Origin Section */}
      <section className="px-6 max-w-4xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-6">
          <Heart className="w-3.5 h-3.5 text-rose-500" />
          <span>{t("Câu chuyện sáng lập & Sứ mệnh cộng đồng", "Origin Story & Community Mission")}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          {t(
            "Xóa bỏ rào cản thuật ngữ cho kỹ sư quản lý tòa nhà.",
            "Democratizing Technical English for Facility Engineers."
          )}
        </h1>

        <p className="text-lg md:text-xl text-ink-muted leading-relaxed">
          {t(
            "FM Dictionary sinh ra từ nỗi niềm thực tế: làm sao để kỹ sư và kỹ thuật viên Việt Nam tự tin đọc hiểu bản vẽ, vận hành hệ thống toà nhà thông minh chuẩn quốc tế mà không bị cản trở bởi rào cản tiếng Anh chuyên ngành.",
            "FM Dictionary was built out of a real-world conviction: ensuring Vietnamese property engineers and technicians can read complex engineering schematics and operate smart building assets without being held back by language barriers."
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
              "Ngành Quản lý Tòa nhà & Cơ sở vật chất tại Việt Nam đang phát triển với tốc độ nhanh chóng. Các tòa tháp thương mại, trung tâm dữ liệu (Data Center), nhà xưởng công nghiệp và bệnh viện hiện đại ngày càng ứng dụng nhiều hệ thống cơ điện (MEP), Chiller ly tâm, tháp giải nhiệt, PCCC địa chỉ và hệ thống tự động hóa toà nhà BMS phức tạp.",
              "The Facility Management sector in Vietnam is expanding rapidly. Commercial towers, Tier-3 Data Centers, cleanrooms, and modern hospitals increasingly rely on intricate MEP installations, centrifugal chillers, addressable fire alarm loops, and Building Management Systems (BMS)."
            )}
          </p>

          <p>
            {t(
              "Thế nhưng, hầu hết cẩm nang vận hành & bảo trì (O&M Manuals), tiêu chuẩn ASHRAE 90.1, NFPA và chứng chỉ LEED đều được viết bằng tiếng Anh chuyên ngành sâu. Nhiều kỹ sư tay nghề giỏi gặp khó khăn khi phát âm các từ viết tắt kỹ thuật, hoặc chưa tự tin khi trao đổi với chuyên gia nước ngoài.",
              "Yet, virtually all technical manuals, O&M blueprints, ASHRAE standards, and LEED certification criteria are written in dense, specialized English. Many skilled engineers encounter difficulty with technical acronyms or lack confidence when communicating with international consultants."
            )}
          </p>

          <p>
            {t(
              "FM Dictionary ra đời như một món quà phi lợi nhuận cho cộng đồng. Ứng dụng cung cấp ngữ cảnh hiện trường chân thực, phát âm chuẩn studio kép UK/US, và phương pháp ôn tập ngắt quãng khoa học giúp người làm kỹ thuật ghi nhớ lâu dài và tự tin trong công việc hàng ngày.",
              "FM Dictionary was created as a non-profit gift for the community. It delivers contextual operational definitions, dual UK/US studio pronunciations, and an SRS memory engine that helps engineering personnel remember terms permanently and build confidence on the job."
            )}
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-ink mb-3">
              {t("Nguyên tắc triết lý sản phẩm", "Our Core Principles")}
            </h2>
            <p className="text-ink-muted text-sm max-w-lg mx-auto">
              {t(
                "Những tôn chỉ bất biến dẫn dắt từng tính năng trong dự án FM Dictionary.",
                "The steadfast tenets that guide every feature in FM Dictionary."
              )}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <RevealOnScroll key={i} delay={i * 100}>
                <SpotlightCard
                  className="p-6 rounded-2xl bg-surface-1 border border-hairline hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-canvas border border-hairline flex items-center justify-center text-accent-blue mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2">{v.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{v.desc}</p>
                </SpotlightCard>
              </RevealOnScroll>
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
            {t("Từ ý tưởng thực tế công trường tới ứng dụng đa nền tảng hoàn chỉnh.", "From site-level need to a complete multi-platform application.")}
          </p>
        </div>

        <div className="space-y-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="w-8 h-8 rounded-full bg-surface-2 border border-accent-blue flex items-center justify-center text-xs font-semibold text-ink shrink-0">
                {idx + 1}
              </div>
              <div className="w-full p-6 rounded-2xl bg-surface-1 border border-hairline">
                <span className="text-xs text-accent-blue font-semibold">{m.year}</span>
                <h3 className="text-base font-semibold text-ink mt-1 mb-2">{m.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Leadership & Development Team */}
      <section className="px-6 max-w-5xl mx-auto mb-24" id="team">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-ink mb-3">
            {t("Nhóm Dự Án & Định Hướng", "Project Leadership & Team")}
          </h2>
          <p className="text-ink-muted text-sm max-w-lg mx-auto">
            {t(
              "Những con người tâm huyết xây dựng và duy trì FM Dictionary cho cộng đồng.",
              "The dedicated team creating and sustaining FM Dictionary for the engineering community."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, idx) => {
            const BadgeIcon = member.badgeIcon;
            return (
              <SpotlightCard
                key={idx}
                className="p-8 rounded-3xl bg-surface-1 border border-hairline flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-hairline flex items-center justify-center text-ink font-bold text-xl shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-canvas border border-hairline text-[11px] text-accent-blue mb-1">
                        <BadgeIcon className="w-3 h-3" />
                        <span>{member.role}</span>
                      </div>
                      <h3 className="text-xl font-bold text-ink">{member.name}</h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-ink-muted leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {member.contactLink && (
                  <div className="pt-4">
                    <a
                      href={member.contactLink}
                      className="inline-flex items-center gap-2 text-xs text-accent-blue hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{member.contactLabel}</span>
                    </a>
                  </div>
                )}
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* Free Community Project Commitment */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <SpotlightCard className="p-8 md:p-12 rounded-3xl bg-surface-1 border border-hairline">
          <h3 className="text-2xl font-semibold text-ink mb-3">
            {t("Dự án cộng đồng 100% Miễn phí & Phi lợi nhuận", "100% Free Non-Profit Community Project")}
          </h3>
          <p className="text-xs md:text-sm text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed">
            {t(
              "FM Dictionary được phát triển vì mục tiêu xã hội: chia sẻ tri thức chuyên ngành, giúp kỹ sư và kỹ thuật viên cơ điện Việt Nam tự tin làm chủ công việc mà không mất bất kỳ chi phí nào.",
              "FM Dictionary is developed for community advancement: sharing specialized terminology to help Vietnamese MEP and property engineers master their work at zero cost."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white dark:text-black font-semibold text-xs hover:opacity-90 active:scale-95 transition-transform transition-opacity"
            >
              <AppleIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>{t("Tải trên Apple App Store", "Get on Apple App Store")}</span>
            </a>
            <a
              href="https://github.com/ankhang0704/fm_dictionary_app/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline bg-surface-2 text-ink font-semibold text-xs hover:bg-surface-1 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t("Tải Bản Android APK", "Get Android APK")}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline bg-canvas text-ink font-semibold text-xs hover:bg-surface-2 transition-colors"
            >
              <span>{t("Liên hệ & Góp ý", "Contact Us")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </SpotlightCard>
      </section>
    </div>
  );
}
