"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Brain, Mic, ShieldAlert, Award, Database, ArrowRight } from "lucide-react";

interface ScreenItem {
  id: string;
  titleVi: string;
  titleEn: string;
  categoryVi: string;
  categoryEn: string;
  descVi: string;
  descEn: string;
  imagePath: string;
  icon: React.ElementType;
}

const SCREENS: ScreenItem[] = [
  {
    id: "search",
    titleVi: "Tra cứu tức thì 1,800+ thuật ngữ",
    titleEn: "Instant 1,800+ Term Lookup",
    categoryVi: "Từ điển kỹ thuật",
    categoryEn: "Technical Lexicon",
    descVi: "Bộ lọc thông minh 53 chuyên đề MEP, hỗ trợ tìm kiếm song ngữ Anh - Việt và giải mã ký hiệu viết tắt bản vẽ.",
    descEn: "Intelligent filtering across 53 MEP topics with bilingual search and blueprint acronym decoding.",
    imagePath: "/images/screenshots/fm_dictionary_0001.webp",
    icon: BookOpen,
  },
  {
    id: "srs",
    titleVi: "Thẻ nhớ Spaced Repetition SM-2",
    titleEn: "SM-2 Cognitive Spaced Repetition",
    categoryVi: "Ghi nhớ ngắt quãng",
    categoryEn: "Spaced Retention",
    descVi: "Tối ưu hóa thời gian học tập chỉ 10 phút mỗi ngày theo đường cong quên lãng khoa học.",
    descEn: "Optimize memory retention in 10 minutes a day calculated via cognitive decay curves.",
    imagePath: "/images/screenshots/fm_dictionary_0002.webp",
    icon: Brain,
  },
  {
    id: "audio",
    titleVi: "Chấm âm ngữ âm kép UK & US",
    titleEn: "Dual UK & US Phonetic Audio",
    categoryVi: "Chuẩn hóa giọng đọc",
    categoryEn: "Phonetic Precision",
    descVi: "Phát âm phòng thu phân tích rõ vị trí trọng âm và âm tiết cho các từ viết tắt chuyên ngành phức tạp.",
    descEn: "Studio audio analysis with precise stress markers and syllable breakdown for difficult terms.",
    imagePath: "/images/screenshots/fm_dictionary_0003.webp",
    icon: Mic,
  },
  {
    id: "simulation",
    titleVi: "300+ ca sự cố công trường thực tế",
    titleEn: "300+ Field Incident Scenarios",
    categoryVi: "Tình huống thực chiến",
    categoryEn: "Scenario Drills",
    descVi: "Giải quyết các ca sự cố O&M: tụt áp suất Chiller, lỗi tín hiệu DDC và quy trình bàn giao ca trực.",
    descEn: "Solve real site emergencies: chiller head pressure drops, DDC communication loss, and shift handovers.",
    imagePath: "/images/screenshots/fm_dictionary_0004.webp",
    icon: ShieldAlert,
  },
  {
    id: "milestones",
    titleVi: "75 Huy hiệu thành tựu chuyên sâu",
    titleEn: "75 Specialized Skill Badges",
    categoryVi: "Khung năng lực CEFR",
    categoryEn: "CEFR Progression",
    descVi: "Duy trì chuỗi ngày học liên tục (Streak) và đạt các huy hiệu chuyên đề Chiller, BMS, PCCC.",
    descEn: "Maintain daily learning streaks and earn specialized badges across Chiller, BMS, and Fire Safety.",
    imagePath: "/images/screenshots/fm_dictionary_0005.webp",
    icon: Award,
  },
  {
    id: "offline",
    titleVi: "Bảo mật cục bộ Offline-First",
    titleEn: "100% Offline-First Architecture",
    categoryVi: "Không cần mạng",
    categoryEn: "Zero-Cloud Privacy",
    descVi: "Cơ sở dữ liệu Hive DB nhúng trực tiếp, tra cứu mượt mà dưới tầng hầm kỹ thuật không có sóng.",
    descEn: "Embedded Hive database operates flawlessly inside sub-basement vaults with zero cell reception.",
    imagePath: "/images/screenshots/fm_dictionary_0006.webp",
    icon: Database,
  },
];

export const AppScreenshotsShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("search");

  return (
    <div className="w-full bg-surface-1 rounded-3xl p-6 sm:p-10 lg:p-12">
      {/* Header */}
      <div className="max-w-3xl mb-12 animate-enter">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter text-ink mb-4">
          {t(
            "Giao Diện Ứng Dụng Chuẩn Thực Địa.",
            "Production-Grade Interface On Field Devices."
          )}
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-[65ch]">
          {t(
            "Hình ảnh chụp thực tế từ ứng dụng FM Dictionary đang vận hành trên thiết bị của các kỹ sư quản lý tòa nhà.",
            "Authentic captures from the native FM Dictionary engine in active operation with building engineers."
          )}
        </p>
      </div>

      {/* Grid of All 6 Real Screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SCREENS.map((screen) => {
          const Icon = screen.icon;
          const isSelected = activeId === screen.id;

          return (
            <div
              key={screen.id}
              data-ui="true"
              onClick={() => setActiveId(screen.id)}
              className={`p-5 rounded-2xl transition-colors cursor-pointer flex flex-col justify-between animate-enter ${
                isSelected ? "bg-surface-2" : "bg-canvas hover:bg-surface-2"
              }`}
            >
              {/* Phone Mockup Frame with Real Image */}
              <div
                className="relative w-full aspect-[9/18.5] rounded-2xl overflow-hidden bg-black mb-5"
              >
                <Image
                  src={screen.imagePath}
                  alt={t(screen.titleVi, screen.titleEn)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center justify-between text-[13px] font-medium text-accent-blue mb-2">
                  <div className="flex items-center gap-2">
                    <Icon size={15} />
                    <span>{t(screen.categoryVi, screen.categoryEn)}</span>
                  </div>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-ink tracking-tight mb-2">
                  {t(screen.titleVi, screen.titleEn)}
                </h3>

                <p className="text-[14px] text-neutral-300 leading-relaxed">
                  {t(screen.descVi, screen.descEn)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Links to Stores */}
      <div className="mt-12 pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-400">
        <span className="text-[14px]">
          {t("Phiên bản v1.1.0 • Kiến trúc Flutter Clean Architecture • 100% Offline", "Version 1.1.0 • Flutter Clean Architecture • 100% Offline")}
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] text-ink font-semibold hover:text-accent-blue transition-colors"
          >
            <span>{t("Xem trên Apple App Store (iOS)", "Get on Apple App Store (iOS)")}</span>
            <ArrowRight size={15} />
          </a>
          <a
            href="https://github.com/ankhang0704/fm_dictionary_app/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] text-ink-muted hover:text-ink transition-colors"
          >
            <span>{t("Tải Android APK", "Get Android APK")}</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
