"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  Brain,
  Volume2,
  Zap,
  Award,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { AppleIcon } from "@/components/AppleIcon";

interface ScreenWorkflow {
  id: string;
  index: number;
  titleVi: string;
  titleEn: string;
  categoryVi: string;
  categoryEn: string;
  descVi: string;
  descEn: string;
  fieldBenefitVi: string;
  fieldBenefitEn: string;
  standard: string;
  imagePath: string;
  icon: React.ElementType;
}

const WORKFLOWS: ScreenWorkflow[] = [
  {
    id: "search",
    index: 1,
    titleVi: "Tra cứu tức thì 1,800+ thuật ngữ",
    titleEn: "Instant 1,800+ Term Lookup",
    categoryVi: "Từ điển kỹ thuật O&M",
    categoryEn: "O&M Technical Lexicon",
    descVi: "Bộ lọc thông minh 53 chuyên đề MEP, hỗ trợ tìm kiếm song ngữ Anh - Việt và giải mã các ký hiệu viết tắt trên bản vẽ thiết kế.",
    descEn: "Intelligent filtering across 53 MEP disciplines with bilingual search and CAD/BIM drawing acronym decoding.",
    fieldBenefitVi: "Tra cứu dưới 0.2 giây, triệt tiêu rủi ro hiểu sai thông số kỹ thuật",
    fieldBenefitEn: "Sub-0.2s lookup eliminates misinterpretation of MEP parameters",
    standard: "ASHRAE 90.1 / NFPA",
    imagePath: "/images/screenshots/fm_dictionary_0001.webp",
    icon: BookOpen,
  },
  {
    id: "srs",
    index: 2,
    titleVi: "Thẻ nhớ Spaced Repetition (SM-2)",
    titleEn: "Cognitive Spaced Repetition (SM-2)",
    categoryVi: "Ghi nhớ ngắt quãng",
    categoryEn: "Spaced Retention Engine",
    descVi: "Ứng dụng thuật toán SM-2 dựa trên đường cong quên lãng Ebbinghaus, tự động điều chỉnh chu kỳ ôn tập chỉ với 5-10 phút mỗi ngày.",
    descEn: "Applies the SM-2 algorithm based on the Ebbinghaus forgetting curve, adjusting review intervals in 5-10 minutes daily.",
    fieldBenefitVi: "Ghi nhớ bền vững từ vựng khó, không còn tình trạng học trước quên sau",
    fieldBenefitEn: "Permanent retention of complex technical terms without rote cramming",
    standard: "SM-2 Algorithm",
    imagePath: "/images/screenshots/fm_dictionary_0002.webp",
    icon: Brain,
  },
  {
    id: "audio",
    index: 3,
    titleVi: "Chấm âm ngữ âm kép UK & US",
    titleEn: "Dual UK & US Studio Phonetics",
    categoryVi: "Chuẩn hóa giọng đọc",
    categoryEn: "Phonetic Precision Studio",
    descVi: "Âm thanh phòng thu với bảng ký hiệu ngữ âm quốc tế IPA, hiển thị rõ trọng âm cho các từ viết tắt chuyên ngành phức tạp.",
    descEn: "Studio-grade dual audio with international IPA phonetics, highlighting primary stress markers for complex acronyms.",
    fieldBenefitVi: "Tự tin thuyết minh kỹ thuật trước đối tác nước ngoài và kiểm toán viên",
    fieldBenefitEn: "Confident pronunciation when presenting to foreign contractors and auditors",
    standard: "IPA Standard",
    imagePath: "/images/screenshots/fm_dictionary_0003.webp",
    icon: Volume2,
  },
  {
    id: "simulation",
    index: 4,
    titleVi: "300+ tình huống xử lý sự cố thực tế",
    titleEn: "300+ Field Incident Scenarios",
    categoryVi: "Tình huống thực chiến",
    categoryEn: "Incident Simulation Drills",
    descVi: "Mô phỏng các sự cố công trường thực tế: tụt áp suất Chiller, lỗi liên lạc DDC, kẹt van ngăn khói FSD và quy trình bàn giao ca trực.",
    descEn: "Simulates real job-site emergencies: chiller head pressure drop, DDC bus faults, FSD damper trips, and shift handovers.",
    fieldBenefitVi: "Rèn luyện phản xạ quyết định chính xác và nhanh chóng trong ca trực",
    fieldBenefitEn: "Sharpens fast, accurate diagnostic reflexes during active shift work",
    standard: "ISO 41001 / O&M Protocol",
    imagePath: "/images/screenshots/fm_dictionary_0004.webp",
    icon: Zap,
  },
  {
    id: "milestones",
    index: 5,
    titleVi: "75 Huy hiệu năng lực & Chuỗi Streak",
    titleEn: "75 Competency Badges & Daily Streak",
    categoryVi: "Khung năng lực CEFR",
    categoryEn: "CEFR Competency Framework",
    descVi: "Theo dõi tiến độ học tập theo khung CEFR từ A1 đến C2, mở khóa huy hiệu chuyên môn và duy trì chuỗi ngày rèn luyện liên tục.",
    descEn: "Tracks professional progression aligned with CEFR A1 to C2, unlocking specialized badges to maintain daily learning momentum.",
    fieldBenefitVi: "Đo lường tiến độ cụ thể, xây dựng thói quen học tập có kỷ luật",
    fieldBenefitEn: "Measurable milestone progression, building disciplined professional habits",
    standard: "CEFR A1 - C2 Aligned",
    imagePath: "/images/screenshots/fm_dictionary_0005.webp",
    icon: Award,
  },
  {
    id: "offline",
    index: 6,
    titleVi: "Bảo mật cục bộ 100% Offline-First",
    titleEn: "100% Offline-First Local Engine",
    categoryVi: "Không phụ thuộc mạng",
    categoryEn: "Zero-Cloud Local Privacy",
    descVi: "Cơ sở dữ liệu Hive DB nhúng trực tiếp trên thiết bị, cho phép tra cứu, phát âm và làm bài tập trơn tru dưới tầng hầm kín không có sóng.",
    descEn: "Embedded Hive database operates entirely on-device, ensuring zero latency lookup and playback in shielded sub-basements.",
    fieldBenefitVi: "Hoạt động hoàn hảo trong phòng biến áp, hầm Chiller và khu vực không có wifi",
    fieldBenefitEn: "Flawless operation inside transformer vaults, chiller basements, and dead zones",
    standard: "Hive DB Embedded",
    imagePath: "/images/screenshots/fm_dictionary_0006.webp",
    icon: ShieldCheck,
  },
];

export const AppScreenshotsShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeWorkflow = WORKFLOWS[activeIndex];
  const Icon = activeWorkflow.icon;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : WORKFLOWS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < WORKFLOWS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div data-ui="true" className="w-full bg-surface-1 border border-hairline rounded-3xl p-6 sm:p-10 lg:p-12">
      {/* 1. Header Statement */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-enter">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-xs font-medium text-accent-blue mb-4">
            <Sparkles size={13} />
            <span>{t("Giao Diện Thực Tế Trên Thiết Bị", "Production Mobile Interface")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter text-ink mb-3 leading-tight">
            {t(
              "Trực Quan Hóa Tác Nghiệp O&M Hiện Trường.",
              "Visualizing Job-Site Facility Operations."
            )}
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {t(
              "Tất cả ảnh chụp trực tiếp từ ứng dụng FM Dictionary đang vận hành. Không dùng ảnh đồ họa giả lập.",
              "All captures taken directly from the production FM Dictionary app. Zero artificial mockups."
            )}
          </p>
        </div>

        {/* Quick Stepper Navigation for Desktop */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-hairline bg-surface-2 text-ink-muted hover:text-ink hover:bg-canvas transition-colors flex items-center justify-center active:scale-95"
            aria-label="Previous screenshot"
            title="Xem màn hình trước"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-semibold text-ink px-2 tabular-nums">
            {activeIndex + 1} / {WORKFLOWS.length}
          </span>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-hairline bg-surface-2 text-ink-muted hover:text-ink hover:bg-canvas transition-colors flex items-center justify-center active:scale-95"
            aria-label="Next screenshot"
            title="Xem màn hình kế tiếp"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* 2. Interactive Asymmetric Neo-Bento Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (5 cols): Interactive Workflow Selector Track */}
        <div className="lg:col-span-5 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none snap-x snap-mandatory -mx-2 px-2 lg:mx-0 lg:px-0">
          {WORKFLOWS.map((wf, idx) => {
            const isSelected = activeIndex === idx;
            const WfIcon = wf.icon;

            return (
              <button
                key={wf.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-[260px] sm:w-[280px] lg:w-full shrink-0 snap-start text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 border flex items-start gap-3.5 group relative ${
                  isSelected
                    ? "bg-surface-2 border-accent-blue/50 ring-1 ring-accent-blue/20"
                    : "bg-canvas/60 border-hairline hover:bg-surface-2/70 hover:border-hairline"
                }`}
              >
                {/* Number / Icon Pin */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-accent-blue text-white"
                      : "bg-surface-2 text-ink-muted group-hover:text-ink"
                  }`}
                >
                  <WfIcon size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase ${
                        isSelected ? "text-accent-blue" : "text-ink-muted"
                      }`}
                    >
                      {t(wf.categoryVi, wf.categoryEn)}
                    </span>
                    <span className="text-[11px] text-ink-muted tabular-nums">
                      {wf.standard}
                    </span>
                  </div>
                  <h3
                    className={`text-sm sm:text-base font-semibold tracking-tight leading-snug truncate ${
                      isSelected ? "text-ink" : "text-ink-muted group-hover:text-ink"
                    }`}
                  >
                    {t(wf.titleVi, wf.titleEn)}
                  </h3>
                </div>

                {/* Active Indicator Dot */}
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-accent-blue shrink-0 mt-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column (7 cols): The Hero Device Frame & Detail Callout */}
        <div className="lg:col-span-7 flex flex-col items-center" data-ui="true">
          <SpotlightCard data-ui="true" className="w-full max-w-lg bg-canvas p-6 sm:p-8 rounded-3xl border border-hairline relative">
            {/* Context Badge Header above phone */}
            <div data-ui="true" className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-hairline text-xs">
              <div className="flex items-center gap-2">
                <Icon size={16} className="text-accent-blue" />
                <span className="font-semibold text-ink">
                  {t(activeWorkflow.titleVi, activeWorkflow.titleEn)}
                </span>
              </div>
              <span className="text-[11px] font-medium text-semantic-success px-2.5 py-0.5 rounded-full bg-surface-2">
                {activeWorkflow.standard}
              </span>
            </div>

            {/* Realistic Smartphone Showcase Chassis */}
            <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] aspect-[9/18.8] rounded-[2.2rem] sm:rounded-[2.5rem] p-2.5 sm:p-3 bg-surface-2 border border-hairline">
              {/* Phone Inner Bezel */}
              <div className="relative w-full h-full rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden bg-black border border-hairline">
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-surface-2" />
                </div>

                {/* Real App Screenshot Image */}
                <Image
                  key={activeWorkflow.imagePath}
                  src={activeWorkflow.imagePath}
                  alt={t(activeWorkflow.titleVi, activeWorkflow.titleEn)}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-opacity duration-300"
                  priority
                />
              </div>
            </div>

            {/* Active Workflow Field Note Box below phone */}
            <div className="mt-6 p-4 rounded-2xl bg-surface-1 border border-hairline text-xs">
              <div className="flex items-center gap-2 text-accent-blue font-semibold mb-1">
                <CheckCircle2 size={14} />
                <span>{t("Giá trị ứng dụng thực tế:", "Job-Site Value:")}</span>
              </div>
              <p className="text-ink font-medium leading-relaxed mb-2">
                {t(activeWorkflow.fieldBenefitVi, activeWorkflow.fieldBenefitEn)}
              </p>
              <p className="text-ink-muted leading-relaxed">
                {t(activeWorkflow.descVi, activeWorkflow.descEn)}
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* 3. Direct Store Download Actions Footer */}
      <div data-ui="true" className="mt-12 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-ink-muted border-t border-hairline">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-accent-blue" />
          <span>{t("Kiến trúc Flutter Clean Architecture • Hoạt động 100% Ngoại tuyến", "Flutter Clean Architecture • 100% Offline-Ready")}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink font-semibold hover:text-accent-blue transition-colors"
          >
            <AppleIcon className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>{t("Apple App Store (iOS)", "Apple App Store (iOS)")}</span>
            <ArrowRight size={14} />
          </a>
          <span>•</span>
          <a
            href="https://github.com/ankhang0704/fm_dictionary_app/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors"
          >
            <span>{t("Tải Android APK", "Direct Android APK")}</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
