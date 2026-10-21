"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck, Mail, Clock, FileCheck } from "lucide-react";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-12 pb-24 text-ink">
      <div className="px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-4">
            <Scale className="w-3.5 h-3.5 text-accent-blue" />
            <span>{t("Điều khoản Dịch vụ & Trách nhiệm", "Terms of Service & Operational Disclaimer")}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mb-4">
            {t("Điều khoản Sử dụng", "Terms of Service")}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {t("Cập nhật lần cuối: 21 tháng 10, 2026", "Last updated: October 21, 2026")}
            </span>
            <span>•</span>
            <span>{t("Giấy phép: MIT Open Source", "License: MIT Open Source")}</span>
          </div>
        </div>

        {/* Plain Language Summary */}
        <div className="p-6 md:p-8 rounded-3xl bg-surface-1 border border-hairline mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-blue mb-2">
            <FileCheck className="w-4 h-4" />
            <span>{t("Tóm tắt Điều khoản ngắn gọn", "Key Highlights Summary")}</span>
          </div>
          <h2 className="text-lg font-semibold text-ink mb-3">
            {t(
              "Ứng dụng phục vụ mục đích học thuật và tra cứu tham khảo kỹ thuật.",
              "FM Dictionary is provided for academic study and engineering reference purposes."
            )}
          </h2>
          <p className="text-xs md:text-sm text-ink-muted leading-relaxed">
            {t(
              "FM Dictionary là công cụ hỗ trợ nâng cao trình độ tiếng Anh chuyên ngành. Mặc dù mọi thuật ngữ đều được đối chiếu kỹ lưỡng với ASHRAE, NFPA và ISO, bạn luôn phải tuân thủ bản vẽ thiết kế đã được phê duyệt và quy chuẩn an toàn lao động thực tế tại công trường toà nhà của mình.",
              "FM Dictionary is designed to elevate technical fluency. While cross-referenced with standards like ASHRAE, NFPA, and ISO, site engineers must always adhere to approved shop drawings, local building codes, and safety protocols for physical operations."
            )}
          </p>
        </div>

        {/* Detailed Terms */}
        <div className="space-y-10 text-sm md:text-base text-ink-muted leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-blue" />
              <span>1. {t("Quyền & Trách nhiệm của Người dùng", "User Responsibilities & Acceptable Use")}</span>
            </h3>
            <p>
              {t(
                "Bạn được toàn quyền sử dụng ứng dụng FM Dictionary cho mục đích cá nhân, học tập, nghiên cứu và công việc chuyên môn hoàn toàn miễn phí. Khi sử dụng ứng dụng, bạn đồng ý:",
                "You are granted full, royalty-free rights to use FM Dictionary for personal study, research, and professional engineering practice. You agree to:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
              <li>{t("Không sử dụng ứng dụng để phân phối mã độc, quấy rối hoặc tấn công hệ thống dịch vụ đồng bộ đám mây.", "Not distribute malware, compromise cloud sync endpoints, or attempt unauthorized reverse engineering of backend infrastructure.")}</li>
              <li>{t("Đóng góp bản dịch và nội dung thuật ngữ một cách trung thực, chính xác và có căn cứ khoa học.", "Contribute lexicon suggestions truthfully, citing recognized engineering standards wherever possible.")}</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>2. {t("Giới hạn Trách nhiệm Kỹ thuật Thực địa", "Limitation of Engineering Liability")}</span>
            </h3>
            <p>
              {t(
                "Các thông tin, định nghĩa, thông số nhiệt động, áp suất và ký hiệu kỹ thuật trong ứng dụng được biên soạn từ các nguồn chuẩn quốc tế uy tín. Tuy nhiên:",
                "Definitions, thermodynamic references, pressure units, and schematic symbols in this application are compiled from established global engineering sources. However:"
              )}
            </p>
            <div className="p-4 rounded-2xl bg-canvas border border-hairline text-xs md:text-sm space-y-2">
              <p>
                {t(
                  "ỨNG DỤNG ĐƯỢC CUNG CẤP DƯỚI DẠNG 'NGUYÊN BẢN' (AS IS). TÁC GIẢ KHÔNG CHỊU TRÁCH NHIỆM PHÁP LÝ CHO BẤT KỲ THIỆT HẠI TRỰC TIẾP HOẶC GIÁN TIẾP NÀO VỀ TRANG THIẾT BỊ, THẤT THOÁT NĂNG LƯỢNG HOẶC TAI NẠN LAO ĐỘNG PHÁT SINH TỪ VIỆC ÁP DỤNG SAI THUẬT NGỮ HOẶC QUY TRÌNH KỸ THUẬT NGOÀI CÔNG TRƯỜNG.",
                  "THE APPLICATION IS PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND. AUTHORS SHALL NOT BE HELD LIABLE FOR DIRECT OR INDIRECT EQUIPMENT DAMAGE, ENERGY INEFFICIENCIES, OR SITE INCIDENTS RESULTING FROM PHYSICAL IMPLEMENTATION OF TECHNICAL REFERENCES."
                )}
              </p>
              <p className="text-ink-muted">
                {t(
                  "Kỹ sư vận hành bắt buộc phải tham khảo tài liệu kỹ thuật O&M chính hãng của nhà sản xuất (OEM) và chỉ dẫn của Tư vấn Giám sát có thẩm quyền.",
                  "Licensed operational personnel must always defer to authorized OEM operations manuals, local fire codes, and resident supervisory engineer approvals."
                )}
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>3. {t("Bản quyền & Giấy phép Mã nguồn", "Intellectual Property & Licensing")}</span>
            </h3>
            <p>
              {t(
                "Mã nguồn của dự án FM Dictionary được phân phối theo giấy phép mã nguồn mở MIT License. Bạn có quyền sao chép, chỉnh sửa, phân nhánh (fork) và đóng góp cho dự án phù hợp với quy định của giấy phép mã nguồn mở công khai trên GitHub.",
                "FM Dictionary codebase is published under the permissive MIT Open Source License. You are free to inspect, fork, modify, and build upon the source code in alignment with the repository terms on GitHub."
              )}
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-canvas border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-ink">
                {t("Cần trao đổi thêm về điều khoản?", "Questions regarding our terms?")}
              </div>
              <div className="text-xs text-ink-muted">
                {t("Gửi thư trực tiếp tới hòm thư quản trị viên dự án.", "Reach out to the lead repository maintainer directly.")}
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
