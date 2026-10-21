"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Search,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Mail,
  Github,
  Sparkles,
  ArrowRight,
  BookOpen,
  WifiOff,
  ShieldCheck,
  Brain,
} from "lucide-react";

export default function FAQPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const topics = [
    { id: "all", name: t("Tất cả chủ đề", "All Topics"), icon: HelpCircle },
    { id: "general", name: t("Bắt đầu & Chi phí", "Getting Started & Cost"), icon: BookOpen },
    { id: "methodology", name: t("Phương pháp học & SRS", "Learning & SRS Engine"), icon: Brain },
    { id: "tech", name: t("Công nghệ & Offline", "Technology & Offline"), icon: WifiOff },
    { id: "privacy", name: t("Quyền riêng tư & Dữ liệu", "Privacy & Data Safety"), icon: ShieldCheck },
  ];

  const faqs = [
    {
      topic: "general",
      question: t("FM Dictionary có hoàn toàn miễn phí không?", "Is FM Dictionary completely free?"),
      answer: t(
        "Có. FM Dictionary là một dự án mã nguồn mở phi lợi nhuận dành riêng cho cộng đồng kỹ sư và nhà quản lý cơ sở vật chất (Facility Management). Bạn có thể truy cập toàn bộ 1,800+ thuật ngữ, âm thanh phát âm và bài kiểm tra tình huống mà không mất bất kỳ khoản phí nào, không có quảng cáo và không có gói đăng ký định kỳ.",
        "Yes. FM Dictionary is a 100% free, open-source community project dedicated to engineers and property managers. All 1,800+ terms, audio pronunciations, and scenario quizzes are accessible with zero subscriptions, zero microtransactions, and zero ads."
      ),
    },
    {
      topic: "general",
      question: t("Ứng dụng dành cho những đối tượng nào?", "Who is this application built for?"),
      answer: t(
        "Ứng dụng được thiết kế chuyên biệt cho: (1) Kỹ sư MEP, Chiller, HVAC, PCCC, Điện toà nhà; (2) Trưởng ban Quản lý toà nhà, Giám đốc Kỹ thuật; (3) Sinh viên các ngành Nhiệt lạnh, Điện công trình, Kỹ thuật xây dựng; (4) Chuyên viên vận hành toà nhà chuẩn bị thi các chứng chỉ quốc tế như IFMA FMP, LEED AP, hoặc ASHRAE.",
        "The app is tailored for: (1) MEP, HVAC, Chiller, Fire Protection, and Electrical site engineers; (2) Facility Managers and Chief Technical Officers; (3) Building engineering and HVAC university students; (4) Professionals preparing for international accreditations such as IFMA FMP, LEED AP, or ASHRAE certifications."
      ),
    },
    {
      topic: "methodology",
      question: t("Thuật toán Spaced Repetition (SRS) hoạt động như thế nào?", "How does the Spaced Repetition (SRS) algorithm work?"),
      answer: t(
        "FM Dictionary tích hợp biến thể thuật toán SM-2 dựa trên đường cong lãng quên Ebbinghaus. Khi bạn đánh giá mức độ ghi nhớ của một từ vựng ('Quên', 'Khó', 'Tốt', 'Dễ'), thuật toán sẽ tự động tính toán thời điểm chính xác bạn sắp quên để đưa từ đó vào danh sách ôn tập. Nhờ đó, bạn chỉ mất 10-15 phút mỗi ngày nhưng tỷ lệ lưu giữ kiến thức lên tới 85-92%.",
        "FM Dictionary utilizes an optimized SM-2 spaced repetition algorithm based on Ebbinghaus's forgetting curve. As you rate your recall ('Again', 'Hard', 'Good', 'Easy'), the engine calculates the exact interval before decay occurs, scheduling targeted reviews. This yields 85-92% long-term retention with just 10-15 minutes of daily practice."
      ),
    },
    {
      topic: "methodology",
      question: t("Hệ thống âm thanh phát âm chuẩn kép UK/US lấy nguồn từ đâu?", "Where do the dual UK/US pronunciations come from?"),
      answer: t(
        "Hệ thống phát âm được ghi nhận theo chuẩn ký hiệu ngữ âm quốc tế (IPA). Chúng tôi cung cấp cả hai giọng đọc chuẩn: Anh - Anh (RP/BBC Standard) và Anh - Mỹ (General American), đặc biệt tập trung vào các từ viết tắt chuyên ngành (HVAC, AHU, VAV, NFPA, ASHRAE, Legionella) thường bị phát âm sai trong môi trường công trường.",
        "Phonetic transcriptions strictly adhere to the International Phonetic Alphabet (IPA). Audio samples feature dual standard studio pronunciations (British RP and General American), paying special attention to technical acronyms and building automation jargon commonly mispronounced in site handovers."
      ),
    },
    {
      topic: "tech",
      question: t("Ứng dụng có thể sử dụng hoàn toàn khi không có mạng (Offline) không?", "Can I use the app completely offline in plant rooms?"),
      answer: t(
        "Hoàn toàn được. Toàn bộ cơ sở dữ liệu hơn 1,800 thuật ngữ, định nghĩa, ví dụ kỹ thuật và hệ thống lưu trữ tiến độ học tập đều được đóng gói sẵn trong bộ nhớ cục bộ bằng Hive database. Bạn có thể sử dụng trơn tru tại tầng hầm, trạm biến áp, phòng máy Chiller hay phòng máy phát điện mà không cần kết nối Internet.",
        "Absolutely. The entire database of 1,800+ terms, definitions, engineering context, and progress trackers is embedded locally via Hive storage. You can perform rapid lookups inside reinforced concrete plant basements, transformer rooms, or chiller enclosures with zero network reception."
      ),
    },
    {
      topic: "tech",
      question: t("FM Dictionary hỗ trợ các nền tảng thiết bị nào?", "Which platforms and operating systems are supported?"),
      answer: t(
        "FM Dictionary được phát triển trên nền tảng Flutter Clean Architecture với chất lượng cao, hỗ trợ cả Android (APK/Google Play), iOS (App Store), trình duyệt Web (PWA) và phiên bản máy tính bàn Windows Desktop.",
        "FM Dictionary is built with high-standard Flutter Clean Architecture, offering full native support for Android (APK/Google Play), iOS (App Store), modern Web browsers, and Windows Desktop."
      ),
    },
    {
      topic: "privacy",
      question: t("Dữ liệu của tôi có bị thu thập hoặc chia sẻ cho bên thứ ba không?", "Is my data collected or shared with third parties?"),
      answer: t(
        "Không. Chúng tôi tôn trọng quyền riêng tư 100%. Không có bất kỳ phần mềm theo dõi hành vi, mã thu thập dữ liệu quảng cáo hay bên thứ ba nào can thiệp. Mọi ghi chú, lịch sử học tập và danh mục yêu thích đều nằm lại trên chính thiết bị của bạn.",
        "No. We enforce strict local-first privacy. There is zero telemetry tracking, zero marketing SDKs, and zero third-party data selling. Your custom notes, favorites, and quiz statistics stay strictly on your local device."
      ),
    },
    {
      topic: "privacy",
      question: t("Làm thế nào để sao lưu hoặc khôi phục dữ liệu học tập khi đổi máy?", "How do I backup or transfer my learning data?"),
      answer: t(
        "Trong phiên bản đồng bộ đám mây tùy chọn (Firebase), bạn có thể đăng nhập bằng tài khoản để lưu trữ đám mây. Nếu không đăng nhập, bạn hoàn toàn có thể sử dụng chế độ Khách (Guest) và xuất tệp sao lưu dữ liệu cục bộ an toàn trong phần Cài đặt.",
        "In our optional cloud sync configuration, you can sign in to backup progress to secure Firebase RTDB. Alternatively, you can remain completely offline in Guest mode and export your database backup file anytime from the Settings drawer."
      ),
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchTopic = selectedTopic === "all" || faq.topic === selectedTopic;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);
      return matchTopic && matchQuery;
    });
  }, [faqs, selectedTopic, searchQuery]);

  return (
    <div className="pt-12 pb-24 text-ink">
      {/* Header & Search */}
      <section className="px-6 max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-6">
          <HelpCircle className="w-3.5 h-3.5 text-accent-blue" />
          <span>{t("Trung tâm Giải đáp Thắc mắc", "Knowledge Base & FAQ")}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
          {t("Câu hỏi thường gặp về FM Dictionary", "Frequently Asked Questions")}
        </h1>
        <p className="text-base md:text-lg text-ink-muted max-w-xl mx-auto mb-8">
          {t(
            "Tìm kiếm câu trả lời nhanh chóng về phương pháp học, tính năng offline và kiến trúc bảo mật.",
            "Instant answers regarding learning methodology, offline support, and local data security."
          )}
        </p>

        {/* Real-time Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(
              "Tìm kiếm câu hỏi (vd: offline, chi phí, SRS, phát âm...)",
              "Search questions (e.g. offline, cost, SRS algorithm, audio...)"
            )}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface-1 border border-hairline text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors shadow-lg"
          />
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {topics.map((tItem) => {
            const Icon = tItem.icon;
            const isSelected = selectedTopic === tItem.id;
            return (
              <button
                key={tItem.id}
                onClick={() => setSelectedTopic(tItem.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-ink text-black font-semibold shadow"
                    : "bg-surface-1 border border-hairline text-ink-muted hover:text-ink hover:bg-surface-2"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tItem.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="px-6 max-w-3xl mx-auto mb-20">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-surface-1 border border-hairline">
            <HelpCircle className="w-8 h-8 text-ink-muted mx-auto mb-3" />
            <h3 className="text-base font-semibold text-ink mb-1">
              {t("Không tìm thấy câu hỏi phù hợp", "No matching questions found")}
            </h3>
            <p className="text-xs text-ink-muted mb-4">
              {t(
                "Hãy thử tìm với từ khóa khác hoặc liên hệ trực tiếp với chúng tôi bên dưới.",
                "Try refining your keyword query or reach out via our direct support channels below."
              )}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTopic("all");
              }}
              className="text-xs text-accent-blue hover:underline"
            >
              {t("Đặt lại bộ lọc tìm kiếm", "Reset search filters")}
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-surface-1 border border-hairline transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm md:text-base font-medium text-ink">
                      {faq.question}
                    </span>
                    <span className="text-ink-muted shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-accent-blue" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-ink-muted leading-relaxed border-t border-hairline/50 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Tiered Contact Channels (Ordered by Accessibility) */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-ink mb-2">
            {t("Vẫn chưa tìm thấy câu trả lời?", "Still need assistance?")}
          </h2>
          <p className="text-xs md:text-sm text-ink-muted">
            {t(
              "Chúng tôi sẵn sàng giải đáp mọi thắc mắc qua các kênh liên lạc xếp theo mức độ tiếp cận dưới đây.",
              "We provide transparent contact methods ordered from quickest to direct developer correspondence."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tier 1: Interactive Form */}
          <div className="p-6 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono text-blue-400 mb-1">
                {t("Cấp độ 1 • Nhanh nhất", "Tier 1 • Instant")}
              </div>
              <h3 className="text-sm font-semibold text-ink mb-1">
                {t("Gửi biểu mẫu trực tiếp", "Interactive Contact Form")}
              </h3>
              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                {t(
                  "Điền câu hỏi của bạn vào trang Liên hệ, nhận phản hồi kỹ thuật trong vòng 24 giờ.",
                  "Submit your inquiry through our web contact portal for responses within 24 hours."
                )}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-ink font-semibold hover:text-accent-blue transition-colors"
            >
              <span>{t("Đi tới Biểu mẫu", "Open Form")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Tier 2: GitHub Discussions / Issues */}
          <div className="p-6 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                <Github className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono text-purple-400 mb-1">
                {t("Cấp độ 2 • Cộng đồng", "Tier 2 • Community")}
              </div>
              <h3 className="text-sm font-semibold text-ink mb-1">
                {t("GitHub Issues & Thảo luận", "GitHub Discussions")}
              </h3>
              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                {t(
                  "Báo cáo lỗi mã nguồn, đề xuất thuật ngữ mới hoặc đóng góp tính năng cùng các lập trình viên khác.",
                  "Report bugs, contribute term translations, or propose architecture enhancements on GitHub."
                )}
              </p>
            </div>
            <Link
              href="https://github.com/ankhang0704/fm_dictionary_app/issues"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs text-ink font-semibold hover:text-accent-blue transition-colors"
            >
              <span>{t("Mở GitHub Issues", "View Issues")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Tier 3: Direct Email */}
          <div className="p-6 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono text-emerald-400 mb-1">
                {t("Cấp độ 3 • Trực tiếp", "Tier 3 • Direct")}
              </div>
              <h3 className="text-sm font-semibold text-ink mb-1">
                {t("Email Tác giả", "Author Direct Email")}
              </h3>
              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                {t(
                  "Dành cho trao đổi học thuật chuyên sâu, đào tạo doanh nghiệp hoặc phản ánh bản quyền.",
                  "Reserved for enterprise training partnerships, academic collaborations, or legal inquiries."
                )}
              </p>
            </div>
            <Link
              href="mailto:ankhang0704@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs text-ink font-semibold hover:text-accent-blue transition-colors"
            >
              <span>ankhang0704@gmail.com</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
