"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Globe,
  Bug,
  BookOpen,
  Building,
  HelpCircle,
  UserCheck,
} from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "lexicon",
    message: "",
  });

  const categories = [
    {
      id: "lexicon",
      label: t("Góp ý thuật ngữ / Dịch thuật", "Terminology / Lexicon Suggestion"),
      icon: BookOpen,
    },
    {
      id: "bug",
      label: t("Báo cáo lỗi kỹ thuật", "Bug Report / Technical Issue"),
      icon: Bug,
    },
    {
      id: "enterprise",
      label: t("Đào tạo doanh nghiệp / Trường học", "Enterprise / Campus Training"),
      icon: Building,
    },
    {
      id: "general",
      label: t("Hợp tác & Câu hỏi khác", "Partnership & General Inquiries"),
      icon: HelpCircle,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-12 pb-24 text-ink">
      {/* Header */}
      <section className="px-6 max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-6">
          <MessageSquare className="w-3.5 h-3.5 text-accent-blue" />
          <span>{t("Kết nối & Hỗ trợ kỹ thuật", "Get in Touch & Engineering Support")}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
          {t("Chúng tôi luôn lắng nghe phản hồi của bạn", "We'd Love to Hear from You")}
        </h1>
        <p className="text-base md:text-lg text-ink-muted max-w-xl mx-auto">
          {t(
            "Bạn có thuật ngữ FM mới cần bổ sung, phát hiện lỗi bản vẽ hoặc muốn kết nối với ban dự án? Hãy để lại lời nhắn.",
            "Have a new FM term suggestion, spotted a blueprint nuance, or wish to connect with our team? Send us a message."
          )}
        </p>
      </section>

      {/* Main Content Grid: Form + Direct Contact Cards */}
      <section className="px-6 max-w-5xl mx-auto" data-ui="contact-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 rounded-3xl bg-surface-1 border border-hairline">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">
                    {t("Gửi thông điệp thành công!", "Message Received!")}
                  </h3>
                  <p className="text-xs md:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                    {t(
                      `Cảm ơn bạn ${formData.name}. Lời nhắn về phân loại '${formData.category}' đã được ghi nhận. Kỹ sư phát triển Nguyễn An Khang sẽ phản hồi qua địa chỉ ${formData.email} sớm nhất.`,
                      `Thank you, ${formData.name}. Your inquiry regarding '${formData.category}' has been logged. Technical developer Nguyen An Khang will reach back to ${formData.email} as soon as possible.`
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", category: "lexicon", message: "" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink text-white dark:text-black font-semibold text-xs mt-4 hover:opacity-90 active:scale-95 transition-transform transition-opacity"
                  >
                    <span>{t("Gửi lời nhắn khác", "Send Another Message")}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2">
                      {t("Phân loại mục đích liên hệ", "Inquiry Classification")}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = formData.category === cat.id;
                        return (
                          <button
                            type="button"
                            key={cat.id}
                            onClick={() => setFormData({ ...formData, category: cat.id })}
                            className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs transition-colors ${
                              isSelected
                                ? "bg-canvas border-accent-blue text-ink font-medium"
                                : "bg-canvas/50 border-hairline text-ink-muted hover:border-neutral-400 dark:hover:border-neutral-700 hover:text-ink"
                            }`}
                          >
                            <Icon
                              className="w-4 h-4 shrink-0"
                              style={{ color: isSelected ? "#0099ff" : undefined }}
                            />
                            <span className="truncate">{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-muted mb-1.5">
                        {t("Họ và tên của bạn", "Your Full Name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("vd: Nguyễn Văn A", "e.g. Alex Morgan")}
                        className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-ink-muted mb-1.5">
                        {t("Địa chỉ Email", "Email Address")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("name@company.com", "name@company.com")}
                        className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-1.5">
                      {t("Nội dung chi tiết lời nhắn", "Detailed Message")} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t(
                        "Hãy mô tả chi tiết thuật ngữ cần bổ sung, lỗi gặp phải hoặc dự án bạn muốn hợp tác...",
                        "Describe your term proposal, error logs, or institutional deployment goals..."
                      )}
                      className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-ink text-white dark:text-black font-semibold text-sm hover:opacity-90 active:scale-95 transition-transform transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("Gửi phản hồi cho ban dự án", "Transmit Message")}</span>
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>

          {/* Right Direct Info Cards: 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            {/* Developer Card */}
            <RevealOnScroll delay={100}>
              <SpotlightCard className="p-6 rounded-2xl bg-surface-1 border border-hairline">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-canvas border border-hairline flex items-center justify-center text-accent-blue">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">
                      {t("Kỹ sư phát triển & Hỗ trợ kỹ thuật", "Technical Developer & Support")}
                    </h3>
                    <span className="text-xs text-ink-muted">
                      Nguyễn An Khang
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:ankhang.nguyen0704@gmail.com"
                  className="text-sm text-accent-blue font-medium hover:underline block"
                >
                  ankhang.nguyen0704@gmail.com
                </a>
              </SpotlightCard>
            </RevealOnScroll>

            {/* Project Owner Card */}
            <RevealOnScroll delay={200}>
              <SpotlightCard className="p-6 rounded-2xl bg-surface-1 border border-hairline">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-canvas border border-hairline flex items-center justify-center text-accent-blue">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">
                      {t("Chủ sở hữu & Định hướng dự án", "Project Owner & Lead Curator")}
                    </h3>
                    <span className="text-xs text-ink-muted">
                      Chị Thúy Tạ (Thuy Ta)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t(
                    "Định hướng nội dung thuật ngữ và duy trì dự án hoạt động phi lợi nhuận 100% miễn phí vì cộng đồng kỹ sư FM Việt Nam.",
                    "Directing technical terminology standards and sustaining the 100% free community project for Vietnamese facility engineers."
                  )}
                </p>
              </SpotlightCard>
            </RevealOnScroll>

            {/* Community Circle Card */}
            <SpotlightCard className="p-6 rounded-2xl bg-surface-1 border border-hairline">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-canvas border border-hairline flex items-center justify-center text-semantic-success">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">
                    {t("Cộng đồng Kỹ sư MEP & FM", "MEP & FM Engineering Circle")}
                  </h3>
                  <span className="text-xs text-ink-muted">
                    {t("Đồng hành & Chia sẻ tri thức", "Knowledge sharing network")}
                  </span>
                </div>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                {t(
                  "Chúng tôi chào đón sự đóng góp thuật ngữ từ các kỹ sư thuộc ASHRAE Vietnam Chapter, VGBC (Hội đồng Công trình Xanh) và IFMA.",
                  "We welcome terminology contributions from members of ASHRAE Vietnam, VGBC, and IFMA community chapters."
                )}
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
}
