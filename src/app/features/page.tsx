"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  Volume2,
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  ChevronRight,
  Cpu,
  BarChart3,
  Quote,
} from "lucide-react";

export default function FeaturesPage() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const featureGroups = [
    {
      id: "lookup",
      jobTitle: t("Tra cứu thực địa cấp tốc", "Instant Field Reference"),
      headline: t(
        "Giải mã bản vẽ MEP và tài liệu kỹ thuật trong 0.2 giây",
        "Decode MEP Blueprints & Engineering Docs in 0.2 Seconds"
      ),
      summary: t(
        "Bạn có thể tra cứu ngay lập tức hơn 1,800 thuật ngữ FM chuyên sâu chuẩn quốc tế với đầy đủ phiên âm kép UK/US, sơ đồ nguyên lý và ngữ cảnh ứng dụng thực tế trên công trường.",
        "Instantly look up over 1,800 international FM technical terms with dual UK/US phonetics, engineering context, and real-world operational examples right on the job site."
      ),
      outcome: t(
        "Triệt tiêu 100% rủi ro hiểu sai ký hiệu kỹ thuật trên bản vẽ HVAC, Chiller, PCCC và hệ thống quản lý toà nhà BMS.",
        "Eliminate 100% risk of misinterpreting technical abbreviations on HVAC, Chiller, Fire Safety, and BMS drawings."
      ),
      icon: Search,
      accent: "#38bdf8",
      quote: {
        text: t(
          "\"Khi nghiệm thu hệ thống Chiller giải nhiệt nước với đối tác Singapore, tính năng tra cứu song ngữ đã giúp đội ngũ kỹ thuật của tôi tránh được sai sót nghiêm trọng về thông số ΔT.\"",
          "\"During chiller commissioning with our Singaporean EPC contractor, the bilingual dictionary prevented a critical misinterpretation of cooling delta-T specifications.\""
        ),
        author: t("Kỹ sư Hoàng Minh", "Hoang Minh, MEP Lead"),
        role: t("Trưởng ban Kỹ thuật - Tòa tháp Bitexco", "Chief MEP Engineer - Grade A Commercial Asset"),
      },
      capabilities: [
        t("Tra cứu Offline 100% không cần kết nối mạng tại tầng hầm / phòng máy", "100% Offline lookup in basements, generator vaults, and plant rooms"),
        t("Phân loại 10 chuyên ngành: HVAC, PCCC, Điện, BMS, ESG, Pháp lý...", "10 FM verticals: HVAC, Fire Protection, Electrical, BMS, ESG, Compliance..."),
        t("Định dạng chuẩn hóa: Phiên âm IPA, ví dụ thực tế và tài liệu đối chiếu ISO/ASHRAE", "Standardized layout: IPA phonetics, site context, and ISO/ASHRAE cross-references"),
      ],
      previewType: "card",
    },
    {
      id: "srs",
      jobTitle: t("Ghi nhớ dài hạn thông minh", "Cognitive Spaced Repetition Engine"),
      headline: t(
        "Nạp 1,800 thuật ngữ vào trí nhớ dài hạn chỉ với 10 phút mỗi ngày",
        "Lock 1,800+ FM Terms into Long-Term Memory in 10 Minutes a Day"
      ),
      summary: t(
        "Bạn được rèn luyện với thuật toán lặp lại ngắt quãng SM-2 tối ưu theo đường cong quên lãng Ebbinghaus, tự động điều chỉnh chu kỳ ôn tập theo mức độ phản hồi của bạn.",
        "You train with an optimized SM-2 spaced repetition algorithm that calculates your forgetting curve, automatically adjusting review intervals based on your recall confidence."
      ),
      outcome: t(
        "Tăng 85% khả năng ghi nhớ vĩnh viễn thuật ngữ phức tạp, không còn tình trạng học trước quên sau khi bước vào kỳ thi chứng chỉ IFMA / FMP.",
        "Achieve 85% higher retention for complex operational jargon; eliminate cram-and-forget fatigue before IFMA / FMP / LEED certification exams."
      ),
      icon: Brain,
      accent: "#a855f7",
      quote: {
        text: t(
          "\"Thuật toán SRS nhắc nhở ôn lại đúng lúc từ vựng sắp rơi rụng. Tôi đã ghi nhớ trọn bộ 400 thuật ngữ HVAC chỉ trong 3 tuần ôn tập.\"",
          "\"The SRS engine nudges you right before a term slips your mind. I mastered 400 HVAC terms in just three weeks of commute practice.\""
        ),
        author: t("Nguyễn Phương Vy", "Phuong Vy Nguyen"),
        role: t("Quản lý Vận hành - CBRE Vietnam", "Property Operations Manager - CBRE Vietnam"),
      },
      capabilities: [
        t("Flashcard lật thẻ 2 mặt với cơ chế đánh giá 4 cấp độ nhớ", "2-sided tactile flashcards with 4-level cognitive confidence grading"),
        t("Biểu đồ chu kỳ ghi nhớ trực quan theo từng thuật ngữ", "Visual retention curve metrics per term and topic"),
        t("Tự động gom từ khó vào hộp ôn tập ưu tiên đặc biệt", "Automatic grouping of high-difficulty terms into priority focus boxes"),
      ],
      previewType: "srs",
    },
    {
      id: "quizzes",
      jobTitle: t("Tình huống vận hành thực chiến", "Diagnostic Operational Quizzes"),
      headline: t(
        "Thử thách phản xạ xử lý sự cố qua tình huống công trường thực tế",
        "Test Operational Reflexes with Scenario-Driven Job Site Cases"
      ),
      summary: t(
        "Bạn đối diện với các ca sự cố thực tiễn: áp suất Chiller tăng đột ngột, lỗi tín hiệu DDC, hoặc báo động van sprinkler, và phải đưa ra quyết định xử lý đúng bằng thuật ngữ chuẩn.",
        "You encounter real-world FM emergencies: abrupt chiller head pressure spikes, DDC controller dropouts, or pre-action sprinkler alarms, applying correct terminology to resolve the incident."
      ),
      outcome: t(
        "Chuyển hóa từ vựng chết thành phản xạ sống, giúp bạn tự tin chỉ huy ca trực và trao đổi trực tiếp với giám đốc kỹ thuật nước ngoài.",
        "Convert passive vocabulary into immediate operational reflexes, enabling confident leadership during critical site handovers and multi-national vendor audits."
      ),
      icon: Zap,
      accent: "#34d399",
      quote: {
        text: t(
          "\"Bài tập tình huống phản ánh chính xác các sự cố chúng tôi gặp tại toà nhà. Làm quen thuật ngữ qua ca xử lý giúp kỹ sư cấp dưới của tôi phản ứng nhanh gấp đôi.\"",
          "\"The scenario quizzes accurately replicate building incidents. Training with context makes our junior technicians respond twice as fast during night shifts.\""
        ),
        author: t("Trần Quốc Bảo", "Quoc Bao Tran"),
        role: t("Giám đốc Kỹ thuật Cụm Tòa Nhà - Savills", "Cluster Technical Director - Savills"),
      },
      capabilities: [
        t("Ngân hàng 600+ câu hỏi tình huống mô phỏng sự cố thực tế", "600+ incident-based quiz scenarios drawn from real MEP operations"),
        t("Phản hồi tức thì với giải thích chi tiết nguyên nhân gốc rễ", "Instant diagnostic feedback explaining root causes and standard protocols"),
        t("Bảng xếp hạng chuỗi ngày học liên tục (Streak) thúc đẩy thói quen", "Dynamic streak tracking and mastery badges to cement daily practice"),
      ],
      previewType: "quiz",
    },
    {
      id: "pronunciation",
      jobTitle: t("Luyện phát âm AI chuẩn kỹ sư", "AI Acoustic Voice Pronunciation"),
      headline: t(
        "Tự tin đàm phán và thuyết minh kỹ thuật không còn sợ phát âm sai",
        "Present Engineering Pitches Confidently with Zero Pronunciation Anxiety"
      ),
      summary: t(
        "Bạn được lắng nghe phát âm phòng thu chuẩn kép Anh - Anh và Anh - Mỹ của các từ viết tắt cực khó như ASHRAE, AHU, FCU, Psychrometric, đi kèm hướng dẫn vị trí nhấn âm.",
        "Listen to dual studio-grade UK and US pronunciations for tricky engineering acronyms and polysyllabic terms (ASHRAE, AHU, Psychrometric, Cavitation) with phoneme-level guidance."
      ),
      outcome: t(
        "Xóa bỏ rào cản tự ti khi phát âm thuật ngữ tiếng Anh trước đối tác, kiểm toán viên quốc tế và chủ đầu tư.",
        "Banish self-doubt and miscommunication when presenting MEP audit findings to international investors and global accreditation panels."
      ),
      icon: Volume2,
      accent: "#f43f5e",
      quote: {
        text: t(
          "\"Nhiều từ viết tắt như LEED, HVAC, Legionella đọc sai sẽ khiến đối tác nghi ngờ năng lực kỹ thuật. Nhờ tính năng phát âm kép, tôi đã làm chủ hoàn toàn các buổi báo cáo hội đồng.\"",
          "\"Mispronouncing acronyms like Legionella or Psychrometrics can undermine client trust. The dual-audio module gave me complete command during executive board reviews.\""
        ),
        author: t("Ths. Đỗ Hải Đăng", "Hai Dang Do, M.Eng"),
        role: t("Tư vấn Năng lượng & Công trình xanh LEED AP", "Energy & Green Building Consultant - LEED AP"),
      },
      capabilities: [
        t("Âm thanh phòng thu chuẩn cao, hoạt động mượt mà cả khi offline", "High-fidelity studio audio samples, functioning seamlessly offline"),
        t("So sánh phiên âm kép UK / US với bảng ký hiệu ngữ âm quốc tế IPA", "Dual UK / US phonetic comparison with standard IPA symbols"),
        t("Tách âm từng âm tiết và hướng dẫn trọng âm chính/phụ rõ ràng", "Syllable breakdown with primary and secondary stress markers"),
      ],
      previewType: "audio",
    },
  ];

  return (
    <div className="pt-12 pb-24 text-ink">
      {/* Header Section */}
      <section className="px-6 max-w-6xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-1 text-xs text-ink-muted mb-6">
          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
          <span>{t("Hệ thống tính năng toàn diện", "Comprehensive Capability Suite")}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          {t(
            "Được thiết kế cho kỹ sư & nhà quản lý cơ sở vật chất hiện đại.",
            "Engineered for Modern Facility Engineers & Property Managers."
          )}
        </h1>
        <p className="text-lg md:text-xl text-ink-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {t(
            "Mỗi tính năng trong FM Dictionary đều được xây dựng để giải quyết chính xác nỗi đau thiếu thấu hiểu thuật ngữ trên công trường và trong phòng họp quốc tế.",
            "Every feature in FM Dictionary is purpose-built to eliminate technical terminology friction on the site floor and inside multinational boardrooms."
          )}
        </p>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-surface-1 border border-hairline rounded-2xl max-w-2xl mx-auto">
          {featureGroups.map((group, index) => {
            const Icon = group.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-ink text-black shadow-lg"
                    : "text-ink-muted hover:text-ink hover:bg-surface-2"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{group.jobTitle}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Feature Deep Dive Container */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        {featureGroups.map((group, index) => {
          if (activeTab !== index) return null;
          const Icon = group.icon;

          return (
            <div
              key={group.id}
              className="bg-surface-1 border border-hairline rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all animate-fadeIn"
            >
              {/* Ambient Glow */}
              <div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ backgroundColor: group.accent }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Context & Outcome Framing */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hairline bg-canvas text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
                    <Icon className="w-3.5 h-3.5" style={{ color: group.accent }} />
                    <span>{group.jobTitle}</span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-ink mb-4 leading-snug">
                    {group.headline}
                  </h2>

                  <p className="text-base md:text-lg text-ink-muted mb-6 leading-relaxed">
                    {group.summary}
                  </p>

                  {/* Outcome Box */}
                  <div className="mb-8 p-4 rounded-2xl bg-canvas border border-hairline flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: group.accent }}
                    />
                    <div>
                      <div className="text-xs uppercase font-mono tracking-wider text-ink-muted mb-1">
                        {t("Kết quả thực tế mang lại", "Measurable Operational Outcome")}
                      </div>
                      <div className="text-sm text-ink font-medium leading-relaxed">
                        {group.outcome}
                      </div>
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-3 mb-8">
                    {group.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-ink-muted">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: group.accent }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Inline CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="https://github.com/ankhang0704/fm_dictionary_app"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <span>{t("Trải nghiệm trên GitHub", "Explore Source on GitHub")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs text-ink-muted">
                      {t("Mã nguồn mở • 100% Offline • Miễn phí", "Open Source • 100% Offline • Free")}
                    </span>
                  </div>
                </div>

                {/* Right Column: Visual Interactive Mockup Card */}
                <div className="lg:col-span-5">
                  {group.previewType === "card" && (
                    <div className="bg-canvas border border-hairline rounded-2xl p-6 shadow-xl relative">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-hairline">
                        <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold">
                          HVAC & CHILLER
                        </span>
                        <span className="text-xs text-ink-muted font-mono">ID: FM-0418</span>
                      </div>

                      <div className="text-2xl font-bold text-ink mb-1">Variable Air Volume</div>
                      <div className="text-xs text-ink-muted font-mono mb-4">
                        /ˈveə.ri.ə.bəl eər ˈvɒl.juːm/ • VAV Box
                      </div>

                      <div className="border-l-2 border-accent-blue pl-3 py-1 mb-4 text-xs text-ink-muted leading-relaxed">
                        {t(
                          "Hộp điều chỉnh lưu lượng gió biến đổi theo tải nhiệt thực tế trong từng khu vực phòng.",
                          "Terminal device that varies airflow at constant temperature to control zone thermal comfort."
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-surface-1 border border-hairline rounded-lg">
                          <div className="text-ink-muted font-mono text-[10px] uppercase">UK Audio</div>
                          <div className="text-ink font-semibold flex items-center gap-1.5 mt-0.5">
                            <Volume2 className="w-3.5 h-3.5 text-accent-blue" />
                            <span>/ˈvɛə.ri.ə.bᵊl/</span>
                          </div>
                        </div>
                        <div className="p-2.5 bg-surface-1 border border-hairline rounded-lg">
                          <div className="text-ink-muted font-mono text-[10px] uppercase">US Audio</div>
                          <div className="text-ink font-semibold flex items-center gap-1.5 mt-0.5">
                            <Volume2 className="w-3.5 h-3.5 text-accent-blue" />
                            <span>/ˈver.i.ə.bəl/</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-[11px] text-ink-muted">
                        <span>ASHRAE 90.1 Standard</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Offline Ready
                        </span>
                      </div>
                    </div>
                  )}

                  {group.previewType === "srs" && (
                    <div className="bg-canvas border border-hairline rounded-2xl p-6 shadow-xl relative">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                          Memory Interval • Step 3/5
                        </span>
                        <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs font-mono">
                          92% Retention
                        </span>
                      </div>

                      <div className="p-5 rounded-xl bg-surface-1 border border-hairline text-center mb-5">
                        <div className="text-xs uppercase text-ink-muted font-mono mb-1">
                          {t("Thuật ngữ mục tiêu", "Target Flashcard")}
                        </div>
                        <div className="text-2xl font-bold text-ink mb-2">Psychrometric Chart</div>
                        <div className="text-xs text-ink-muted">
                          {t(
                            "Đồ thị biểu diễn các thông số nhiệt động của không khí ẩm.",
                            "Thermodynamic graph of moist air parameters at constant pressure."
                          )}
                        </div>
                      </div>

                      <div className="text-xs font-mono text-ink-muted mb-2 text-center">
                        {t("Chọn mức độ phản hồi của bạn:", "Select Recall Grade:")}
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        <div className="py-2 text-center rounded bg-surface-1 border border-hairline text-[11px] text-rose-400 font-semibold">
                          {t("Quên", "Again")}
                          <div className="text-[9px] text-ink-muted font-normal">1 min</div>
                        </div>
                        <div className="py-2 text-center rounded bg-surface-1 border border-hairline text-[11px] text-amber-400 font-semibold">
                          {t("Khó", "Hard")}
                          <div className="text-[9px] text-ink-muted font-normal">1 day</div>
                        </div>
                        <div className="py-2 text-center rounded bg-surface-1 border border-hairline text-[11px] text-blue-400 font-semibold">
                          {t("Tốt", "Good")}
                          <div className="text-[9px] text-ink-muted font-normal">3 days</div>
                        </div>
                        <div className="py-2 text-center rounded bg-surface-1 border border-hairline text-[11px] text-emerald-400 font-semibold">
                          {t("Dễ", "Easy")}
                          <div className="text-[9px] text-ink-muted font-normal">7 days</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {group.previewType === "quiz" && (
                    <div className="bg-canvas border border-hairline rounded-2xl p-6 shadow-xl relative">
                      <div className="flex items-center justify-between mb-4 text-xs font-mono text-emerald-400">
                        <span>OPERATIONAL SCENARIO</span>
                        <span>0:14 / 0:30s</span>
                      </div>

                      <p className="text-sm text-ink font-medium mb-4 leading-relaxed">
                        {t(
                          "Một tháp giải nhiệt xuất hiện hiện tượng bọt khí xâm thực gây rung lắc cánh bơm. Thuật ngữ mô tả hiện tượng này là gì?",
                          "A cooling tower pump impeller experiences vapor bubble collapse causing intense vibration and pitting. What is this phenomenon called?"
                        )}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="p-3 rounded-lg bg-surface-1 border border-hairline text-xs text-ink-muted flex items-center justify-between">
                          <span>A. Thermal Stratification</span>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-semibold flex items-center justify-between">
                          <span>B. Pump Cavitation (Hiện tượng xâm thực)</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="p-3 rounded-lg bg-surface-1 border border-hairline text-xs text-ink-muted flex items-center justify-between">
                          <span>C. Water Hammer Effect</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-surface-1 border border-hairline text-[11px] text-ink-muted">
                        💡 <strong>{t("Giải thích:", "Root Cause:")}</strong> {t("Cavitation xảy ra khi áp suất tĩnh của chất lỏng tụt xuống dưới áp suất bốc hơi.", "Cavitation occurs when fluid static pressure drops below vapor pressure, generating damaging micro-jets.")}
                      </div>
                    </div>
                  )}

                  {group.previewType === "audio" && (
                    <div className="bg-canvas border border-hairline rounded-2xl p-6 shadow-xl relative">
                      <div className="text-center py-6">
                        <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto mb-4">
                          <Volume2 className="w-8 h-8" />
                        </div>
                        <div className="text-2xl font-bold text-ink mb-1">Psychrometrics</div>
                        <div className="text-xs font-mono text-rose-400 mb-4">
                          /ˌsaɪ.krəˈmet.rɪks/
                        </div>

                        {/* Audio wave simulation */}
                        <div className="flex items-center justify-center gap-1.5 h-10 mb-6">
                          {[40, 75, 95, 60, 30, 85, 100, 70, 45, 90, 60, 35].map((h, idx) => (
                            <span
                              key={idx}
                              className="w-1 bg-rose-400/80 rounded-full transition-all"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-left">
                          <div className="p-3 rounded-xl bg-surface-1 border border-hairline">
                            <span className="text-[10px] font-mono text-ink-muted uppercase">UK BBC Standard</span>
                            <p className="text-xs text-ink font-semibold mt-1">/ˌsaɪ.krəˈmet.rɪks/</p>
                          </div>
                          <div className="p-3 rounded-xl bg-surface-1 border border-hairline">
                            <span className="text-[10px] font-mono text-ink-muted uppercase">US General Standard</span>
                            <p className="text-xs text-ink font-semibold mt-1">/ˌsaɪ.kroʊˈmet.rɪks/</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Feature Quote Callout */}
                  <div className="mt-4 p-4 rounded-2xl bg-canvas/60 border border-hairline">
                    <Quote className="w-4 h-4 text-ink-muted mb-2" />
                    <p className="text-xs text-ink-muted italic mb-3 leading-relaxed">
                      {group.quote.text}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-surface-2 border border-hairline flex items-center justify-center text-[10px] font-bold text-ink">
                        {group.quote.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-ink leading-none">
                          {group.quote.author}
                        </div>
                        <div className="text-[10px] text-ink-muted leading-tight mt-0.5">
                          {group.quote.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Grid of All Core Capabilities */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-ink mb-4">
            {t("Toàn cảnh kiến trúc tính năng", "Architectural Capability Breakdown")}
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto text-sm">
            {t(
              "Tất cả công cụ bạn cần để làm chủ tiếng Anh chuyên ngành từ vựng, ngữ âm tới thực hành.",
              "Everything you need to command engineering English from terminology to site execution."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: t("Từ điển chuyên ngành 1,800+ thuật ngữ", "1,800+ FM Terminology Dictionary"),
              desc: t("Bao quát HVAC, Chiller, Điện, PCCC, BMS, Pháp lý và Vận hành toà nhà.", "Covers HVAC, Chiller, Electrical, Fire Safety, BMS, and Real Estate compliance."),
              icon: BookOpen,
            },
            {
              title: t("Thuật toán Spaced Repetition (SRS)", "Cognitive Spaced Repetition (SRS)"),
              desc: t("Ôn tập ngắt quãng thông minh chống quên lãng, ghi nhớ bền vững lâu dài.", "Ebbinghaus-based decay intervals that guarantee permanent knowledge retention."),
              icon: Brain,
            },
            {
              title: t("Phát âm chuẩn UK & US kép", "Dual UK & US Studio Pronunciations"),
              desc: t("Âm thanh phòng thu với bảng ký hiệu ngữ âm quốc tế IPA và chỉ dẫn trọng âm.", "Studio audio with IPA phonetic guides and stress indicators for every acronym."),
              icon: Volume2,
            },
            {
              title: t("Hệ thống Quiz tình huống thực tế", "Real-World Incident Quizzes"),
              desc: t("Hơn 600 câu hỏi phản xạ mô phỏng ca sự cố hiện trường toà nhà thương mại.", "600+ situational drills testing decision making and technical clarity under pressure."),
              icon: Zap,
            },
            {
              title: t("Hoạt động 100% Offline trên máy", "100% Offline Local-First Runtime"),
              desc: t("Bộ cơ sở dữ liệu Hive siêu nhẹ, tra cứu lập tức không cần wifi tại tầng hầm.", "Ultra-fast Hive local database: zero loading spinners even in basement vaults."),
              icon: ShieldCheck,
            },
            {
              title: t("Sổ tay yêu thích & Theo dõi Streak", "Saved Lexicon & Daily Streak Trackers"),
              desc: t("Tạo danh mục từ vựng dự án riêng, duy trì động lực học đều đặn mỗi ngày.", "Organize project-specific word folders and build relentless learning momentum."),
              icon: Award,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-1 border border-hairline hover:border-hairline-hover transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-canvas border border-hairline flex items-center justify-center text-accent-blue mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <div className="bg-surface-1 border border-hairline rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
              {t(
                "Sẵn sàng chuẩn hóa tiếng Anh kỹ thuật ngay hôm nay?",
                "Ready to Standardize Your Technical English Today?"
              )}
            </h2>
            <p className="text-ink-muted text-sm md:text-base max-w-lg mx-auto mb-8">
              {t(
                "Tải xuống ứng dụng miễn phí hoặc khám phá toàn bộ mã nguồn trên GitHub.",
                "Download the free app or inspect the entire open-source codebase on GitHub."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/ankhang0704/fm_dictionary_app/releases"
                target="_blank"
                className="px-8 py-3.5 rounded-full bg-ink text-black font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t("Tải bản phát hành mới nhất", "Download Latest Release")}
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full border border-hairline bg-surface-2 text-ink font-semibold text-sm hover:bg-surface-3 transition-colors"
              >
                {t("Tìm hiểu câu chuyện sáng lập", "Read the Origin Story")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
