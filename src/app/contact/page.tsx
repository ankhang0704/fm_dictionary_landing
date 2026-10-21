"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Github,
  Globe,
  Bug,
  BookOpen,
  Building,
  HelpCircle,
} from "lucide-react";

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
    // Client-side confirmation state
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
            "Bạn có thuật ngữ FM mới cần bổ sung, phát hiện lỗi bản vẽ hoặc muốn triển khai cho ban quản lý toà nhà của mình? Hãy để lại lời nhắn.",
            "Have a new FM term suggestion, spotted a blueprint nuance, or interested in team deployment? Send us a message."
          )}
        </p>
      </section>

      {/* Main Content Grid: Form + Direct Contact Cards */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-surface-1 border border-hairline relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">
                    {t("Gửi thông điệp thành công!", "Message Received!")}
                  </h3>
                  <p className="text-xs md:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                    {t(
                      `Cảm ơn bạn ${formData.name}. Lời nhắn về phân loại '${formData.category}' đã được ghi nhận. Chúng tôi sẽ phản hồi lại qua địa chỉ ${formData.email} sớm nhất.`,
                      `Thank you, ${formData.name}. Your inquiry regarding '${formData.category}' has been logged. We will reach back to ${formData.email} as soon as possible.`
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", category: "lexicon", message: "" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink text-black font-semibold text-xs mt-4 hover:opacity-90"
                  >
                    <span>{t("Gửi lời nhắn khác", "Send Another Message")}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
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
                            className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs transition-all ${
                              isSelected
                                ? "bg-canvas border-accent-blue text-ink shadow-sm font-medium"
                                : "bg-canvas/50 border-hairline text-ink-muted hover:border-hairline-hover hover:text-ink"
                            }`}
                          >
                            <Icon
                              className="w-4 h-4 shrink-0"
                              style={{ color: isSelected ? "#38bdf8" : undefined }}
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
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
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
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
                        {t("Địa chỉ Email", "Email Address")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
                      {t("Nội dung chi tiết", "Message Details")} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t(
                        "Hãy mô tả chi tiết thuật ngữ cần bổ sung, lỗi bạn gặp phải hoặc ý tưởng hợp tác...",
                        "Please describe the term to add, bug steps to reproduce, or training requirements..."
                      )}
                      className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-ink text-black font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("Gửi thông điệp ngay", "Submit Inquiry")}</span>
                  </button>
                  <p className="text-[11px] text-center text-ink-muted">
                    {t(
                      "Cam kết bảo mật: Thông tin của bạn không bao giờ bị chia sẻ cho bên thứ ba.",
                      "Privacy Guarantee: Your email is used strictly for technical correspondence."
                    )}
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Channels: 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-surface-1 border border-hairline">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-ink mb-1">
                {t("Email Trực tiếp", "Direct Developer Email")}
              </h3>
              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                {t(
                  "Ưu tiên trao đổi nhanh về mã nguồn, bảo mật dữ liệu và cấp phép sử dụng phi lợi nhuận.",
                  "Direct inbox for architecture, security audits, and institutional requests."
                )}
              </p>
              <Link
                href="mailto:ankhang0704@gmail.com"
                className="text-xs font-mono text-accent-blue hover:underline"
              >
                ankhang0704@gmail.com
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-surface-1 border border-hairline">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-ink mb-1">
                {t("Mã nguồn & Đóng góp", "Open Source Issues")}
              </h3>
              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                {t(
                  "Theo dõi tiến độ phát triển, gửi pull request hoặc tạo issue thảo luận thuật ngữ công khai.",
                  "Track roadmap milestones, submit PRs, or file public terminology issues."
                )}
              </p>
              <Link
                href="https://github.com/ankhang0704/fm_dictionary_app"
                target="_blank"
                className="text-xs font-mono text-purple-400 hover:underline"
              >
                github.com/ankhang0704/fm_dictionary_app
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-surface-1 border border-hairline">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-ink mb-1">
                {t("Hồ sơ & Dự án Khác", "Portfolio & Projects")}
              </h3>
              <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                {t(
                  "Khám phá các sản phẩm công nghệ và cẩm nang kỹ thuật toà nhà khác của tác giả.",
                  "Explore other open-source engineering tools and building technology writeups."
                )}
              </p>
              <Link
                href="https://ankhang0704.github.io"
                target="_blank"
                className="text-xs font-mono text-emerald-400 hover:underline"
              >
                ankhang0704.github.io
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
