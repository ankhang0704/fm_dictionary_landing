"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Database,
  Volume2,
  FileText,
  Sparkles,
  Clock,
  ShieldCheck,
  Copy,
  Check,
  Terminal,
  Wrench,
  Smartphone,
  HelpCircle,
} from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { AppleIcon } from "@/components/AppleIcon";

interface TroubleshootingItem {
  id: string;
  category: string;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  actionVi: string;
  actionEn: string;
  actionHref?: string;
  icon: React.ElementType;
}

export default function SupportPage() {
  const { t } = useLanguage();
  const [selectedIssue, setSelectedIssue] = useState<string>("apk");
  const [deviceModel, setDeviceModel] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const developerEmail = "ankhang.nguyen0704@gmail.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(developerEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const troubleshootingGuides: TroubleshootingItem[] = [
    {
      id: "apk",
      category: t("Cài đặt Android", "Android Installation"),
      titleVi: "Tải & Cài đặt bản Android APK trực tiếp",
      titleEn: "Direct Android APK Download & Setup",
      descVi: "Khi tải file APK qua trình duyệt, nếu điện thoại hiện cảnh báo bảo mật, hãy chọn 'Vẫn tải xuống' và cấp quyền 'Cài đặt ứng dụng không rõ nguồn gốc'.",
      descEn: "When downloading direct APK builds via mobile browsers, accept the standard security prompt and allow 'Install unknown apps' in Settings.",
      actionVi: "Truy cập thư mục APK Google Drive",
      actionEn: "Access Google Drive APK Folder",
      actionHref: "https://drive.google.com/drive/folders/1yiT3UqwH2SL6eF1pf84VaErP_o6UP_g8",
      icon: Download,
    },
    {
      id: "offline",
      category: t("Bộ nhớ ngoại tuyến", "Offline Storage"),
      titleVi: "Tra cứu không cần mạng dưới tầng hầm & phòng máy",
      titleEn: "Zero-Network Lookup in Basements & Vaults",
      descVi: "1,800+ thuật ngữ đã được đóng gói sẵn trong Hive DB cục bộ. Bạn không cần 4G hay Wifi khi làm việc tại hầm kỹ thuật Chiller hay trạm biến áp.",
      descEn: "1,800+ terms are embedded locally inside Hive DB. Zero connectivity is required when operating inside transformer vaults or chiller plants.",
      actionVi: "Xem chi tiết cơ chế bảo mật Local-First",
      actionEn: "Review Local-First Privacy Specs",
      actionHref: "/privacy",
      icon: Database,
    },
    {
      id: "audio",
      category: t("Âm thanh & Micro", "Audio & Microphone"),
      titleVi: "Luyện phát âm chuẩn kép UK/US & cấp quyền Micro",
      titleEn: "Dual UK/US Studio Phonetics & Mic Permissions",
      descVi: "Để làm bài luyện phát âm, hãy đảm bảo bạn đã bật loa và cấp quyền truy cập Microphone khi ứng dụng yêu cầu. Giọng nói được đối chiếu âm vị IPA tức thời và không bị lưu trữ.",
      descEn: "For phonetic pronunciation scoring, ensure audio is unmuted and microphone permissions are granted. Audio is scored in real-time buffers and never stored.",
      actionVi: "Thử tính năng phát âm trực tiếp trên web",
      actionEn: "Test Live Phonetics on Explorer",
      actionHref: "/#explorer",
      icon: Volume2,
    },
    {
      id: "terms",
      category: t("Đóng góp thuật ngữ", "Terminology Suggestions"),
      titleVi: "Đề xuất thuật ngữ MEP & Bản vẽ O&M mới",
      titleEn: "Submit New MEP Terms & O&M Schematics",
      descVi: "Bạn có tài liệu kỹ thuật, tiêu chuẩn ASHRAE/NFPA hoặc từ viết tắt công trường cần bổ sung vào từ điển? Hãy gửi thông tin trực tiếp để ban dự án thẩm định.",
      descEn: "Have job-site abbreviations, ASHRAE submittals, or equipment codes to add? Submit them directly to our curation queue for verification.",
      actionVi: "Gửi biểu mẫu đóng góp thuật ngữ",
      actionEn: "Open Term Submission Form",
      actionHref: "/contact",
      icon: FileText,
    },
  ];

  const issueCategories = [
    {
      id: "apk",
      label: t("Cài đặt APK / iOS", "APK & iOS Installation"),
      defaultSubject: "[FM-SUPPORT-v1.1.3] Hỗ trợ cài đặt ứng dụng FM Dictionary",
    },
    {
      id: "bug",
      label: t("Báo cáo lỗi kỹ thuật", "Technical Bug Report"),
      defaultSubject: "[FM-SUPPORT-v1.1.3] Báo cáo lỗi kỹ thuật / Hive DB",
    },
    {
      id: "term",
      label: t("Góp ý thuật ngữ MEP", "MEP Term Suggestion"),
      defaultSubject: "[FM-SUPPORT-v1.1.3] Đề xuất bổ sung thuật ngữ chuyên ngành",
    },
    {
      id: "other",
      label: t("Câu hỏi khác", "General Inquiries"),
      defaultSubject: "[FM-SUPPORT-v1.1.3] Yêu cầu hỗ trợ kỹ thuật",
    },
  ];

  const currentCategory = issueCategories.find((c) => c.id === selectedIssue) || issueCategories[0];

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(currentCategory.defaultSubject);
    const bodyContent = `Xin chào Kỹ sư Nguyễn An Khang,\n\nTôi cần hỗ trợ về FM Dictionary (Phiên bản 1.1.3):\n- Phân loại vấn đề: ${currentCategory.label}\n- Thiết bị đang sử dụng: ${deviceModel || "(Chưa nhập thiết bị)"}\n\nNội dung chi tiết sự cố / yêu cầu:\n[Vui lòng mô tả chi tiết vấn đề bạn gặp phải tại đây...]\n\nCảm ơn anh!`;
    const body = encodeURIComponent(bodyContent);
    return `mailto:${developerEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-6 pb-24 text-ink">
      {/* 1. Header Hero Console */}
      <section className="px-6 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-6">
          <Wrench className="w-3.5 h-3.5 text-accent-blue" />
          <span>{t("Trung tâm hỗ trợ kỹ thuật trực tiếp", "Direct Technical Support & Diagnostics")}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue ml-1" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-ink mb-6 leading-tight">
          {t(
            "Hỗ Trợ Kỹ Thuật & Vận Hành FM Dictionary.",
            "Technical Support & Operations Hub."
          )}
        </h1>

        <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed mb-8">
          {t(
            "Kênh tiếp nhận hỗ trợ trực tiếp từ Kỹ sư phần mềm Nguyễn An Khang. Dự án cộng đồng phi lợi nhuận 100% miễn phí dành cho kỹ sư cơ điện & quản lý tòa nhà Việt Nam.",
            "Direct technical assistance channel provided by Software Developer Nguyen An Khang. A 100% free community project dedicated to MEP engineers and facility managers."
          )}
        </p>

        {/* Quick Identity Status Cards */}
        <div data-ui="true" className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-xs text-ink-muted">
          <div className="p-3.5 rounded-2xl bg-surface-1 border border-hairline flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t("100% Miễn phí & Phi lợi nhuận", "100% Free Non-Profit Project")}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-1 border border-hairline flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-accent-blue shrink-0" />
            <span>{t("Phản hồi trong 24 – 48 giờ", "Direct Reply in 24 – 48 Hours")}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-1 border border-hairline flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>{t("Bảo mật cục bộ (Không mật khẩu)", "Local Privacy (Zero Passwords)")}</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Issue Ticket Composer */}
      <section className="px-6 max-w-5xl mx-auto mb-20" data-ui="true">
        <RevealOnScroll>
          <SpotlightCard className="p-6 sm:p-10 rounded-3xl bg-surface-1 border border-hairline">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-hairline"> {/* taste-skill-ignore */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-blue mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>{t("Tạo yêu cầu hỗ trợ nhanh", "Direct Ticket Dispatcher")}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">
                  {t("Gửi Email Hỗ Trợ Cho Kỹ Sư Phát Triển", "Send Support Email Directly to Developer")}
                </h2>
              </div>

              {/* Developer Email Pill with One-Click Copy */}
              <div className="flex items-center gap-2 bg-surface-2 p-1.5 pl-3.5 rounded-full border border-hairline text-xs">
                <Mail className="w-4 h-4 text-accent-blue shrink-0" />
                <span className="font-medium text-ink text-[13px]">{developerEmail}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-surface-1 hover:bg-canvas text-ink-muted hover:text-ink border border-hairline transition-colors flex items-center gap-1.5 font-medium"
                  title="Sao chép địa chỉ email"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t("Đã chép", "Copied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t("Chép", "Copy")}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Step 1: Select Issue Classification */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-xs font-semibold text-ink-muted mb-2">
                  1. {t("Chọn phân loại vấn đề bạn cần hỗ trợ:", "Select your inquiry classification:")}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {issueCategories.map((cat) => {
                    const isSelected = selectedIssue === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedIssue(cat.id)}
                        className={`p-3 rounded-xl border text-xs text-left transition-colors font-medium ${
                          isSelected
                            ? "bg-accent-blue text-white border-transparent"
                            : "bg-surface-2 text-ink-muted hover:text-ink hover:bg-canvas border-hairline"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Device Model Information */}
              <div>
                <label className="block text-xs font-semibold text-ink-muted mb-2">
                  2. {t("Thông tin thiết bị của bạn (tùy chọn, giúp chẩn đoán lỗi nhanh hơn):", "Your device model (optional, accelerates debugging):")}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Smartphone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
                    <input
                      type="text"
                      value={deviceModel}
                      onChange={(e) => setDeviceModel(e.target.value)}
                      placeholder={t("vd: iPhone 14 Pro, Samsung Galaxy S23, Xiaomi 13...", "e.g. iPhone 14, Samsung Galaxy S23...")}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-2 border border-hairline text-ink text-xs placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2/60 border border-hairline text-xs text-ink-muted">
                    <Sparkles className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>{t("Phiên bản ứng dụng: FM Dictionary v1.1.3", "App Version: FM Dictionary v1.1.3")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Trigger Mailto with Generated Structured Payload */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-hairline"> {/* taste-skill-ignore */}
              <p className="text-xs text-ink-muted">
                {t(
                  "Email sẽ mở với nội dung và tiêu đề được chuẩn bị sẵn trong ứng dụng gửi thư của bạn.",
                  "Clicking will launch your preferred mail app with pre-filled technical subject and body."
                )}
              </p>

              <a
                href={buildMailtoLink()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent-blue text-white font-semibold text-sm hover:opacity-95 active:scale-95 transition-transform transition-opacity shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>{t("Mở Email Gửi Yêu Cầu Hỗ Trợ", "Launch Support Email")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </SpotlightCard>
        </RevealOnScroll>
      </section>

      {/* 3. Field Diagnostics & Self-Service Guides */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-1 border border-hairline text-xs font-semibold text-accent-blue mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t("Tự chẩn đoán & Hướng dẫn kỹ thuật", "Self-Service Engineering Guides")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-2">
            {t("Bốn Vấn Đề Thường Gặp & Cách Khắc Phục", "Four Common Scenarios & Instant Solutions")}
          </h2>
          <p className="text-sm text-ink-muted max-w-xl mx-auto">
            {t(
              "Nắm nhanh cách xử lý khi gặp khó khăn về cài đặt hoặc tra cứu ngoại tuyến.",
              "Quick operational steps to resolve installation and offline lookup questions."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {troubleshootingGuides.map((guide, idx) => {
            const GuideIcon = guide.icon;
            return (
              <RevealOnScroll key={guide.id} delay={idx * 80}>
                <SpotlightCard className="p-6 rounded-2xl bg-surface-1 border border-hairline flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-surface-2 border border-hairline flex items-center justify-center text-accent-blue shrink-0">
                        <GuideIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-semibold text-accent-blue px-2.5 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                        {guide.category}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-ink mb-2">
                      {t(guide.titleVi, guide.titleEn)}
                    </h3>

                    <p className="text-xs text-ink-muted leading-relaxed mb-6">
                      {t(guide.descVi, guide.descEn)}
                    </p>
                  </div>

                  {guide.actionHref && (
                    <div className="pt-3 border-t border-hairline"> {/* taste-skill-ignore */}
                      <Link
                        href={guide.actionHref}
                        className="inline-flex items-center gap-1.5 text-xs text-accent-blue font-semibold hover:underline"
                      >
                        <span>{t(guide.actionVi, guide.actionEn)}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </SpotlightCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* 4. Quick Access App Installation Strip */}
      <section className="px-6 max-w-5xl mx-auto mb-16" data-ui="true">
        <SpotlightCard className="p-8 rounded-3xl bg-surface-1 border border-hairline flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-ink mb-1">
              {t("Bạn đang cần cài lại ứng dụng FM Dictionary?", "Need to Reinstall FM Dictionary?")}
            </h3>
            <p className="text-xs text-ink-muted max-w-lg leading-relaxed">
              {t(
                "Tải trực tiếp từ Apple App Store cho iOS hoặc lấy tệp APK cài đặt Android từ thư mục Google Drive chính thức.",
                "Download directly from the Apple App Store for iOS or download the direct Android APK from our official drive repository."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-white dark:text-black text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-transform transition-opacity"
            >
              <AppleIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>Apple App Store</span>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1yiT3UqwH2SL6eF1pf84VaErP_o6UP_g8"
              target="_blank"
              rel="noopener noreferrer"
              data-ui="true"
              className="inline-flex items-center gap-2 bg-surface-2 text-ink hover:text-accent-blue border border-hairline text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-surface-1 transition-colors" /* taste-skill-ignore */
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>{t("Tải Android APK", "Get Android APK")}</span>
            </a>
          </div>
        </SpotlightCard>
      </section>

      {/* 5. Navigation Shortcuts Footer Row */}
      <div className="px-6 max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-hairline text-xs text-ink-muted"> {/* taste-skill-ignore */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-semantic-success" />
          <span>{t("Cho biết thiết bị và phiên bản. Không gửi mật khẩu cá nhân.", "State device and app version. Never send personal passwords.")}</span>
        </div>

        <div className="flex items-center gap-4">
          <Link className="font-semibold text-accent-blue hover:underline" href="/faq">
            {t("Trung tâm Hỏi đáp (FAQ)", "Complete FAQ")}
          </Link>
          <span>•</span>
          <Link className="font-semibold text-accent-blue hover:underline" href="/about">
            {t("Về dự án & Đội ngũ", "About the Team")}
          </Link>
          <span>•</span>
          <Link className="font-semibold text-accent-blue hover:underline" href="/contact">
            {t("Góp ý & Biểu mẫu", "Feedback Form")}
          </Link>
        </div>
      </div>
    </div>
  );
}
