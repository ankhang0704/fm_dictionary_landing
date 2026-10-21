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
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted">
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
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-blue mb-2">
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
              <strong>Không Cookie theo dõi:</strong> {t("Website này chỉ dùng localStorage để ghi nhớ ngôn ngữ hiển thị (Tiếng Việt / English). Không có Google Ads hay cookie theo dõi quảng cáo.", "This site only stores your language preference (EN/VI) in localStorage. Zero marketing trackers or ad cookies.")}
            </li>
          </ul>
        </div>

        {/* Detailed Legal Sections */}
        <div className="space-y-10 text-sm md:text-base text-ink-muted leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <Database className="w-5 h-5 text-accent-blue" />
              <span>1. {t("Dữ liệu chúng tôi thu thập & Cách thức lưu trữ", "Data Collected & Storage Architecture")}</span>
            </h3>
            <p>
              {t(
                "FM Dictionary được thiết kế với kiến trúc ưu tiên cục bộ (Local-First Architecture). Khi bạn sử dụng ứng dụng di động hoặc ứng dụng máy tính:",
                "FM Dictionary is engineered with a Local-First architecture. When using our mobile or desktop applications:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>
                <strong>{t("Dữ liệu học tập & Đánh giá SRS:", "Study Progress & SRS States:")}</strong>{" "}
                {t("Được lưu hoàn toàn trong tệp Hive cơ sở dữ liệu trên bộ nhớ thiết bị của bạn. Chúng tôi không thể đọc được các dữ liệu này.", "Stored exclusively in local Hive boxes on your device storage. We have no access to these records.")}
              </li>
              <li>
                <strong>{t("Tài khoản tùy chọn (Nếu đăng nhập Cloud Sync):", "Optional Accounts (Cloud Sync):")}</strong>{" "}
                {t("Nếu bạn chủ động đăng nhập để đồng bộ qua Firebase, chúng tôi chỉ lưu trữ UID ẩn danh, email của bạn và dữ liệu chuỗi ngày học để hỗ trợ đồng bộ đa thiết bị.", "If you opt into Firebase cloud sync, we store only your anonymized UID, email, and learning streak timestamps to enable cross-device restoration.")}
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <Mic className="w-5 h-5 text-rose-400" />
              <span>2. {t("Bảo mật Âm thanh & Quyền truy cập Micro", "Audio Privacy & Microphone Access")}</span>
            </h3>
            <p>
              {t(
                "Tính năng Luyện phát âm yêu cầu quyền truy cập micro nhằm phân tích độ tương đồng ngữ âm với chuẩn IPA quốc tế. Quy trình xử lý như sau:",
                "The Pronunciation Practice feature requests microphone permissions solely to compare your voice against international IPA phonetic models:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>{t("Âm thanh được phân tích tức thì trong bộ nhớ đệm RAM và bị hủy bỏ ngay khi hiển thị điểm số.", "Audio samples are evaluated instantaneously in ephemeral RAM buffers and destroyed immediately upon score calculation.")}</li>
              <li>{t("Chúng tôi TUYỆT ĐỐI KHÔNG ghi âm ngầm, không lưu trữ tệp âm thanh giọng nói của bạn lên bất kỳ máy chủ nào.", "We strictly do not record in the background or transmit raw voice samples to external servers.")}</li>
              <li>{t("Giọng nói của bạn không bao giờ được cấp phép hoặc cung cấp cho bất kỳ đơn vị nghiên cứu AI nào.", "Your voice is never licensed or sold to third-party commercial AI model training corpuses.")}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <Cookie className="w-5 h-5 text-amber-400" />
              <span>3. {t("Chính sách Cookie & Lưu trữ Trình duyệt", "Cookie Policy & Web Storage")}</span>
            </h3>
            <p>
              {t(
                "Trang web landing page này không sử dụng bất kỳ cookie của bên thứ ba nào nhằm mục đích theo dõi quảng cáo hoặc định danh hành vi trực tuyến:",
                "This landing website does not use third-party tracking or advertising cookies:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>
                <code>fm_lang</code>: {t("Được lưu trong localStorage để ghi nhớ lựa chọn Tiếng Việt hoặc English của bạn.", "Stored in browser localStorage strictly to preserve your Vietnamese/English language toggle.")}
              </li>
              <li>
                {t("Bạn có thể xóa toàn bộ dữ liệu này bất cứ lúc nào bằng cách xóa lịch sử duyệt web hoặc bộ nhớ cache của trình duyệt.", "You can purge this at any time by clearing your browser cache and cookies.")}
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
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
              <li>{t("Với tài khoản Cloud Sync: Gửi email tới ankhang0704@gmail.com với tiêu đề 'Yêu cầu xóa tài khoản' để xóa vĩnh viễn UID khỏi Firebase trong 48 giờ làm việc.", "Cloud Sync Mode: Email ankhang0704@gmail.com with subject 'Account Deletion' to permanently delete all Firebase cloud records within 48 hours.")}</li>
            </ul>
          </section>

          {/* Section 5: Version History Changelog */}
          <section className="p-6 rounded-2xl bg-surface-1 border border-hairline space-y-3">
            <h4 className="text-base font-semibold text-ink">
              {t("Lịch sử thay đổi chính sách (Changelog)", "Policy Version History")}
            </h4>
            <div className="space-y-2 text-xs text-ink-muted">
              <div className="flex items-start justify-between border-b border-hairline/50 pb-2">
                <span className="font-mono text-ink">v2.1 • 21/10/2026</span>
                <span>{t("Bổ sung quy định minh bạch về bảo mật âm thanh phát âm và cam kết 0-tracker.", "Added explicit audio privacy disclosure and zero-tracker guarantee.")}</span>
              </div>
              <div className="flex items-start justify-between border-b border-hairline/50 pb-2">
                <span className="font-mono text-ink">v2.0 • 15/01/2025</span>
                <span>{t("Chuyển dịch sang kiến trúc bảo mật ưu tiên cục bộ (Local-First Hive DB).", "Transitioned to Local-First Hive database security standard.")}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="font-mono text-ink">v1.0 • 01/08/2024</span>
                <span>{t("Công bố chính sách bảo mật ban đầu của dự án cộng đồng.", "Initial privacy policy release.")}</span>
              </div>
            </div>
          </section>

          {/* Section 6: Legal Contact */}
          <section className="p-6 rounded-2xl bg-canvas border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-ink">
                {t("Cần giải đáp thắc mắc pháp lý hoặc quyền riêng tư?", "Have legal or privacy inquiries?")}
              </div>
              <div className="text-xs text-ink-muted">
                {t("Liên hệ trực tiếp với bộ phận kỹ thuật dự án FM Dictionary.", "Contact the FM Dictionary engineering lead directly.")}
              </div>
            </div>
            <Link
              href="mailto:ankhang0704@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-1 border border-hairline text-ink font-semibold text-xs hover:bg-surface-2 transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-accent-blue" />
              <span>ankhang0704@gmail.com</span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
