"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Lock, Database, Mic, Cookie, Mail, Clock, FileText } from "lucide-react";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-12 pb-24 text-ink">
      <div className="px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-blue" />
            <span>{t("Chính sách Bảo mật & Quyền riêng tư", "Privacy & Data Protection Policy")}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mb-4">
            {t("Chính sách Bảo mật Thông tin", "Privacy Policy")}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-ink-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {t("Cập nhật lần cuối: 21 tháng 10, 2026", "Last updated: October 21, 2026")}
            </span>
            <span>•</span>
            <span>{t("Phiên bản chính sách: 2.1 (Local-First)", "Policy Version: 2.1 (Local-First)")}</span>
          </div>
        </div>

        {/* 30-Second Plain Language Summary Box */}
        <div className="p-6 md:p-8 rounded-3xl bg-surface-1 border border-hairline mb-12">
          <div className="flex items-center gap-2 text-xs text-accent-blue mb-2 font-medium">
            <Lock className="w-4 h-4" />
            <span>{t("Tóm tắt trong 30 giây (Ngôn ngữ giản dị)", "30-Second Plain Language Summary")}</span>
          </div>
          <h2 className="text-lg font-semibold text-ink mb-3">
            {t(
              "Chúng tôi không theo dõi bạn, không bán dữ liệu của bạn, và tôn trọng quyền sở hữu cá nhân.",
              "We do not track you, do not sell your data, and preserve 100% of your data ownership."
            )}
          </h2>
          <ul className="space-y-2 text-xs md:text-sm text-ink-muted leading-relaxed list-disc list-inside">
            <li>
              <strong>Local-First:</strong> {t("Tiến độ học tập, lịch sử tra cứu và từ vựng yêu thích được lưu cục bộ trên máy bạn thông qua Hive DB.", "Your study progress, search queries, and bookmarked terms reside solely on your device via Hive DB.")}
            </li>
            <li>
              <strong>Âm thanh & Ghi âm:</strong> {t("Khi luyện phát âm, micro chỉ xử lý tạm thời tại thiết bị hoặc phân tích ngắn hạn; không bao giờ lưu trữ file giọng nói của bạn.", "Microphone input for pronunciation practice is processed ephemerally on-device and is never retained or used for third-party AI training.")}
            </li>
            <li>
              <strong>Không bên thứ ba:</strong> {t("Không nhúng Facebook Pixel, Google Analytics hay bất kỳ mã quảng cáo nào.", "Zero marketing SDKs, zero user telemetry selling, and zero third-party profiling.")}
            </li>
          </ul>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-sm md:text-base text-ink-muted leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <Database className="w-5 h-5 text-accent-blue" />
              <span>1. {t("Dữ liệu được lưu trữ cục bộ (Local-First Architecture)", "Locally Stored Data (Local-First)")}</span>
            </h3>
            <p>
              {t(
                "FM Dictionary được thiết kế để hoạt động hoàn toàn độc lập với máy chủ. Khi bạn cài đặt và sử dụng ứng dụng:",
                "FM Dictionary is engineered with a strict local-first paradigm. When you run the application:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>{t("Từ điển 1,800+ thuật ngữ và các bài test tình huống nằm trực tiếp trong file cài đặt.", "The complete lexicon of 1,800+ terms and scenario drills is embedded directly in the application bundle.")}</li>
              <li>{t("Hộp từ vựng ôn tập SRS (Spaced Repetition) được tính toán và lưu trong cơ sở dữ liệu Hive DB nội bộ thiết bị.", "SRS memory intervals and flashcard ratings are computed and saved strictly inside local Hive database storage.")}</li>
              <li>{t("Danh mục yêu thích, lịch sử tìm kiếm và ghi chú không được truyền ra ngoài Internet.", "Favorite collections, search history, and personal engineering notes are never transmitted over external networks.")}</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <Mic className="w-5 h-5 text-accent-blue" />
              <span>2. {t("Quyền Micro & Dữ liệu Luyện phát âm AI", "Microphone Permissions & Audio Data")}</span>
            </h3>
            <p>
              {t(
                "Để phục vụ tính năng chấm điểm phát âm tiếng Anh kỹ thuật (UK & US):",
                "To deliver acoustic pronunciation scoring for British and American technical phonetics:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>{t("Ứng dụng chỉ xin cấp quyền truy cập Microphone khi bạn nhấn nút 'Luyện phát âm'.", "The app requests microphone access only when you actively trigger the 'Practice Speech' interaction.")}</li>
              <li>{t("Dữ liệu âm thanh giọng nói của bạn được phân tích tức thời (real-time stream) để đối chiếu âm vị IPA và sẽ tự động xóa ngay khi kết quả chấm điểm hiển thị.", "Voice telemetry is analyzed in real-time buffers to compare IPA phonemes and is discarded immediately after scoring.")}</li>
              <li>{t("Chúng tôi cam kết KHÔNG ghi âm lén, KHÔNG lưu trữ file âm thanh và KHÔNG sử dụng giọng nói của bạn để huấn luyện mô hình AI thương mại.", "We never record background audio, never store voice recordings on cloud disks, and never use user voice data for commercial model training.")}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <Cookie className="w-5 h-5 text-accent-blue" />
              <span>3. {t("Website Landing Page & Cookies", "Landing Page Web Cookies")}</span>
            </h3>
            <p>
              {t(
                "Website giới thiệu này (fm-dictionary.dev) hoạt động dưới dạng trang tĩnh Next.js được triển khai an toàn:",
                "This official presentation website operates as a static Next.js deployment:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>{t("Chúng tôi chỉ sử dụng LocalStorage của trình duyệt để ghi nhớ lựa chọn ngôn ngữ (Tiếng Việt / English) của bạn.", "We only utilize browser LocalStorage to persist your language preference (Vietnamese / English).")}</li>
              <li>{t("Không có cookie theo dõi quảng cáo của bên thứ ba nào được cài đặt trên trình duyệt của bạn.", "Zero cross-site advertising cookies or behavioral trackers are placed on your machine.")}</li>
              <li>{t("Bạn có thể xóa toàn bộ dữ liệu này bất cứ lúc nào bằng cách xóa lịch sử duyệt web hoặc bộ nhớ cache của trình duyệt.", "You can purge this at any time by clearing your browser cache and cookies.")}</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-semantic-success" />
              <span>4. {t("Quyền yêu cầu xóa dữ liệu của người dùng", "User Data Deletion Rights")}</span>
            </h3>
            <p>
              {t(
                "Bạn có toàn quyền kiểm soát dữ liệu của mình bất cứ lúc nào:",
                "You maintain full, unencumbered rights regarding your data:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>{t("Với bản Offline: Vào phần Cài đặt > 'Xóa toàn bộ dữ liệu học tập' để đưa ứng dụng về trạng thái nguyên bản xuất xưởng.", "Offline Mode: Open Settings > 'Reset All Study Data' to permanently wipe all local database records instantly.")}</li>
              <li>{t("Với tài khoản Cloud Sync: Gửi email tới ankhang.nguyen0704@gmail.com với tiêu đề 'Yêu cầu xóa tài khoản' để xóa vĩnh viễn UID khỏi Firebase trong 48 giờ làm việc.", "Cloud Sync Mode: Email ankhang.nguyen0704@gmail.com with subject 'Account Deletion' to permanently delete all Firebase cloud records within 48 hours.")}</li>
            </ul>
          </section>

          {/* Section 5: Version History Changelog */}
          <section className="p-6 rounded-2xl bg-surface-1 border border-hairline space-y-3">
            <h4 className="text-base font-semibold text-ink">
              {t("Lịch sử thay đổi chính sách (Changelog)", "Policy Version History")}
            </h4>
            <div className="space-y-3 text-xs text-ink-muted">
              <div className="flex items-start justify-between pb-1">
                <span className="text-ink font-semibold">v2.1 • 21/10/2026</span>
                <span>{t("Bổ sung quy định minh bạch về bảo mật âm thanh phát âm và cam kết 0-tracker.", "Added explicit audio privacy disclosure and zero-tracker guarantee.")}</span>
              </div>
              <div className="flex items-start justify-between pb-1">
                <span className="text-ink font-semibold">v2.0 • 15/01/2025</span>
                <span>{t("Chuyển dịch sang kiến trúc bảo mật ưu tiên cục bộ (Local-First Hive DB).", "Transitioned to Local-First Hive database security standard.")}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-ink font-semibold">v1.0 • 01/08/2024</span>
                <span>{t("Công bố chính sách bảo mật ban đầu của dự án cộng đồng.", "Initial privacy policy release.")}</span>
              </div>
            </div>
          </section>

          {/* Section 6: Contact */}
          <section className="p-6 md:p-8 rounded-2xl bg-canvas border border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-semibold text-ink mb-1">
                {t("Cần hỗ trợ về quyền riêng tư?", "Questions About Your Privacy?")}
              </h4>
              <p className="text-xs text-ink-muted">
                {t(
                  "Mọi khiếu nại hoặc thắc mắc sẽ được tác giả dự án giải quyết trực tiếp trong 24h.",
                  "Any privacy requests or audit inquiries are addressed directly by the maintainer within 24 hours."
                )}
              </p>
            </div>
            <Link
              href="mailto:ankhang.nguyen0704@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink text-black font-semibold text-xs shrink-0 hover:bg-neutral-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>ankhang.nguyen0704@gmail.com</span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
