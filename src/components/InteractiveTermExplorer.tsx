"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Volume2, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

interface TermItem {
  id: string;
  topic: string;
  topicBadge: string;
  word: string;
  abbreviation?: string;
  phoneticUK: string;
  phoneticUS: string;
  vietnameseMeaning: string;
  englishDefinition: string;
  fieldNote: string;
  standard: string;
  quizQuestion: {
    promptVi: string;
    promptEn: string;
    options: { textVi: string; textEn: string; isCorrect: boolean }[];
  };
}

const SAMPLE_TERMS: TermItem[] = [
  {
    id: "vav",
    topic: "HVAC & Thermal",
    topicBadge: "/badges/ill_badge_topic_hvac.svg",
    word: "Variable Air Volume",
    abbreviation: "VAV Box",
    phoneticUK: "/ˈveə.ri.ə.bəl eər ˈvɒl.juːm/",
    phoneticUS: "/ˈver.i.ə.bəl er ˈvɑːl.juːm/",
    vietnameseMeaning: "Hộp điều chỉnh lưu lượng gió biến đổi theo tải nhiệt thực tế của khu vực phòng.",
    englishDefinition: "Terminal equipment that regulates supply airflow at constant supply temperature to maintain zone comfort.",
    fieldNote: "Thường lắp đặt phía trên trần thạch cao, tích hợp van gió điều khiển bằng actuator điện và bộ cảm biến lưu lượng.",
    standard: "ASHRAE 90.1",
    quizQuestion: {
      promptVi: "Chức năng chính của VAV Box trong hệ thống lạnh trung tâm là gì?",
      promptEn: "What is the primary function of a VAV Box in a central HVAC system?",
      options: [
        {
          textVi: "Thay đổi nhiệt độ nước lạnh cung cấp cho Chiller",
          textEn: "Varying chilled water temperature supply to chiller",
          isCorrect: false,
        },
        {
          textVi: "Điều tiết lưu lượng gió cấp tùy theo tải nhiệt của từng phòng",
          textEn: "Regulating supply air volume based on zone cooling demand",
          isCorrect: true,
        },
        {
          textVi: "Lọc bụi thô tại cửa hút ngoài trời của tòa nhà",
          textEn: "Filtering coarse outdoor air dust at fresh air louvers",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "chiller",
    topic: "HVAC & Thermal",
    topicBadge: "/badges/ill_badge_topic_hvac.svg",
    word: "Centrifugal Chiller",
    abbreviation: "Water-Cooled",
    phoneticUK: "/sɛnˈtrɪf.jʊ.ɡəl ˈtʃɪl.ər/",
    phoneticUS: "/sɛnˈtrɪf.jə.ɡəl ˈtʃɪl.ɚ/",
    vietnameseMeaning: "Máy làm lạnh ly tâm làm mát bằng nước cho các tòa nhà quy mô lớn.",
    englishDefinition: "A refrigeration machine utilizing a rotating impeller to compress refrigerant vapor and chill water for air distribution.",
    fieldNote: "Hoạt động với hệ số hiệu quả COP từ 5.5 đến 7.0, kết hợp với tháp giải nhiệt cooling tower tại tầng mái.",
    standard: "AHRI 550/590",
    quizQuestion: {
      promptVi: "Máy lạnh ly tâm Centrifugal Chiller thường được giải nhiệt bằng gì?",
      promptEn: "How is a large-capacity Centrifugal Chiller typically heat-rejected?",
      options: [
        {
          textVi: "Tháp giải nhiệt giải nhiệt bằng nước tuần hoàn",
          textEn: "Water-cooled via cooling towers and condenser pumps",
          isCorrect: true,
        },
        {
          textVi: "Quạt gió thổi trực tiếp từ dàn nóng cục bộ",
          textEn: "Direct air-cooled fan coils without water loop",
          isCorrect: false,
        },
        {
          textVi: "Bơm chìm hút nước ngầm thải bỏ trực tiếp",
          textEn: "Submersible pump dumping groundwater",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "bms",
    topic: "Smart Building & BMS",
    topicBadge: "/badges/ill_badge_topic_bms.svg",
    word: "Building Management System",
    abbreviation: "BMS / BAS",
    phoneticUK: "/ˈbɪl.dɪŋ ˈmæn.ɪdʒ.mənt ˈsɪs.təm/",
    phoneticUS: "/ˈbɪl.dɪŋ ˈmæn.ədʒ.mənt ˈsɪs.təm/",
    vietnameseMeaning: "Hệ thống quản lý tòa nhà tự động hóa giám sát tập trung cơ điện MEP.",
    englishDefinition: "A computer-based control architecture that monitors and regulates mechanical and electrical equipment across a facility.",
    fieldNote: "Giao tiếp qua giao thức mở BACnet IP hoặc MS/TP kết nối DDC controllers tới máy chủ điều khiển trung tâm.",
    standard: "ISO 16484",
    quizQuestion: {
      promptVi: "Giao thức truyền thông mở phổ biến nhất trong hệ thống BMS hiện đại là gì?",
      promptEn: "Which open protocol is most widely used across modern BMS controllers?",
      options: [
        {
          textVi: "BACnet (Building Automation and Control networks)",
          textEn: "BACnet protocol",
          isCorrect: true,
        },
        {
          textVi: "HTTP không mã hóa cổng 80",
          textEn: "Unencrypted HTTP on port 80",
          isCorrect: false,
        },
        {
          textVi: "Bluetooth BLE tầm ngắn 5 mét",
          textEn: "Short-range 5m Bluetooth BLE",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "damper",
    topic: "Fire Life Safety",
    topicBadge: "/badges/ill_badge_topic_fire_safety.svg",
    word: "Motorized Fire Smoke Damper",
    abbreviation: "FSD",
    phoneticUK: "/ˈməʊ.tə.raɪzd faɪər sməʊk ˈdæm.pər/",
    phoneticUS: "/ˈmoʊ.t̬ɚ.aɪzd faɪr smoʊk ˈdæm.pɚ/",
    vietnameseMeaning: "Van chặn lửa và ngăn khói cơ điện tự động đóng khi có tín hiệu báo cháy.",
    englishDefinition: "A combination damper tested to resist both the passage of flame and hot smoke through rated wall partitions.",
    fieldNote: "Trang bị cầu chì nhiệt 74°C hoặc tín hiệu kích hoạt từ tủ trung tâm báo cháy FAS để đóng kín khoang ngăn cháy.",
    standard: "NFPA 90A / UL 555S",
    quizQuestion: {
      promptVi: "Khi cảm biến báo cháy tác động, van FSD sẽ ở trạng thái nào?",
      promptEn: "Upon fire alarm activation, what is the default safe state of an FSD?",
      options: [
        {
          textVi: "Tự động đóng kín bằng lò xo để cô lập khói lửa",
          textEn: "Spring-return closed to seal the fire compartment",
          isCorrect: true,
        },
        {
          textVi: "Mở tối đa 100% để hút không khí ngoài vào",
          textEn: "Open fully to draw outdoor air into fire zone",
          isCorrect: false,
        },
        {
          textVi: "Chuyển sang chế độ rung lắc định kỳ",
          textEn: "Oscillate periodically",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "cavitation",
    topic: "Plumbing & Pumps",
    topicBadge: "/badges/ill_badge_topic_plumbing.svg",
    word: "Pump Cavitation",
    abbreviation: "NPSH Issue",
    phoneticUK: "/pʌmp ˌkæv.ɪˈteɪ.ʃən/",
    phoneticUS: "/pʌmp ˌkæv.əˈteɪ.ʃən/",
    vietnameseMeaning: "Hiện tượng xâm thực cánh bơm do áp suất hút giảm dưới áp suất bay hơi của nước.",
    englishDefinition: "Rapid formation and collapse of vapor bubbles inside fluid pumps, causing pitting corrosion and intense vibration.",
    fieldNote: "Gây ra âm thanh lách tách như bơm đá sỏi, làm mòn rỗ cánh bơm chỉ trong vài tuần nếu không khắc phục NPSHa.",
    standard: "HI 9.6.1 (Hydraulic Institute)",
    quizQuestion: {
      promptVi: "Dấu hiệu nhận biết âm thanh điển hình khi bơm bị bọt khí xâm thực (Cavitation) là gì?",
      promptEn: "What is the characteristic acoustic sign of severe pump cavitation?",
      options: [
        {
          textVi: "Âm thanh lạo xạo như bơm đang hút phải sỏi đá",
          textEn: "A crackling sound as if pumping gravel or stones",
          isCorrect: true,
        },
        {
          textVi: "Hoàn toàn im lặng không có bất kỳ tiếng động nào",
          textEn: "Absolute complete silence with zero noise",
          isCorrect: false,
        },
        {
          textVi: "Tiếng còi báo động liên tục phát ra từ động cơ",
          textEn: "Continuous siren tone emitted by the stator",
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: "switchgear",
    topic: "Electrical & Power",
    topicBadge: "/badges/ill_badge_topic_electrical.svg",
    word: "Low Voltage Switchgear",
    abbreviation: "MSB / MDB",
    phoneticUK: "/ləʊ ˈvɒl.tɪdʒ ˈswɪtʃ.ɡɪər/",
    phoneticUS: "/loʊ ˈvoʊl.tɪdʒ ˈswɪtʃ.ɡɪr/",
    vietnameseMeaning: "Tủ phân phối điện hạ thế tổng cấp nguồn cho toàn bộ phụ tải tòa nhà.",
    englishDefinition: "An integrated assembly of circuit breakers, busbars, and protection relays that distributes main incoming power.",
    fieldNote: "Chứa các máy cắt không khí ACB, bộ chuyển nguồn tự động ATS và hệ thống đo lường giám sát năng lượng kỹ thuật số.",
    standard: "IEC 61439-2",
    quizQuestion: {
      promptVi: "Thiết bị đóng cắt chính bên trong tủ điện tổng MSB thường là loại nào?",
      promptEn: "Which main incoming circuit breaker is standard inside an MSB switchgear?",
      options: [
        {
          textVi: "Máy cắt không khí (Air Circuit Breaker - ACB)",
          textEn: "Air Circuit Breaker (ACB)",
          isCorrect: true,
        },
        {
          textVi: "Aptomat tép một cực 10A (MCB 1P)",
          textEn: "Single-pole 10A miniature breaker",
          isCorrect: false,
        },
        {
          textVi: "Công tắc điện xoay chiều dân dụng",
          textEn: "Standard residential rotary toggle",
          isCorrect: false,
        },
      ],
    },
  },
];

export const InteractiveTermExplorer: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTermId, setSelectedTermId] = useState<string>("vav");
  const [playingAccent, setPlayingAccent] = useState<"uk" | "us" | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  const activeTerm = SAMPLE_TERMS.find((term) => term.id === selectedTermId) || SAMPLE_TERMS[0];

  const handleSpeech = (text: string, accent: "uk" | "us") => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = accent === "uk" ? "en-GB" : "en-US";
    utterance.rate = 0.9;

    setPlayingAccent(accent);
    utterance.onend = () => setPlayingAccent(null);
    utterance.onerror = () => setPlayingAccent(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleSelectTerm = (id: string) => {
    setSelectedTermId(id);
    setQuizAnswer(null);
  };

  return (
    <div className="w-full bg-surface-1 rounded-3xl p-6 sm:p-10 lg:p-12">
      {/* Component Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-ink mb-2">
            {t("Thử Nghiệm Phát Âm & Phản Xạ Kỹ Thuật.", "Test Phonetics & Operational Reflexes.")}
          </h2>
          <p className="text-[14px] sm:text-base text-neutral-300 max-w-[65ch]">
            {t(
              "Chọn một thuật ngữ để nghe phát âm chuẩn kép UK/US và thử sức với bài toán sự cố hiện trường.",
              "Select a specialized term to trigger dual UK/US audio and solve site-level diagnostic drills."
            )}
          </p>
        </div>

        <div className="flex items-center gap-2 text-[14px] text-neutral-300">
          <span>{SAMPLE_TERMS.length} {t("thuật ngữ sẵn sàng", "terms ready")}</span>
        </div>
      </div>

      {/* Term Selector Pills */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {SAMPLE_TERMS.map((term) => {
          const isSelected = term.id === activeTerm.id;
          return (
            <button
              key={term.id}
              onClick={() => handleSelectTerm(term.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                isSelected
                  ? "bg-ink text-black font-semibold"
                  : "bg-canvas text-neutral-300 hover:text-ink hover:bg-surface-2"
              }`}
            >
              <div className="w-4 h-4 rounded overflow-hidden shrink-0">
                <Image
                  src={term.topicBadge}
                  alt={term.topic}
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>{term.word}</span>
            </button>
          );
        })}
      </div>

      {/* Main Term Presentation Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Term Detail & Audio */}
        <SpotlightCard data-ui="true" className="lg:col-span-7 bg-canvas rounded-2xl p-6 sm:p-8 animate-enter">
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-4 mb-4 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded overflow-hidden">
                <Image
                  src={activeTerm.topicBadge}
                  alt={activeTerm.topic}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[14px] font-medium text-neutral-300">
                {activeTerm.topic}
              </span>
            </div>
            {activeTerm.abbreviation && (
              <span className="text-[13px] font-medium text-accent-blue px-3 py-1 rounded-full bg-accent-blue/10">
                {activeTerm.abbreviation}
              </span>
            )}
          </div>

          {/* Primary Word */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-3">
            {activeTerm.word}
          </h3>

          {/* Audio Phonetics Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {/* UK Button */}
            <button
              onClick={() => handleSpeech(activeTerm.word, "uk")}
              className={`flex items-center justify-between p-3.5 rounded-xl text-left text-[14px] transition-colors border ${
                playingAccent === "uk"
                  ? "bg-surface-2 text-accent-blue border-accent-blue"
                  : "bg-surface-1 text-ink border-transparent hover:bg-surface-2"
              }`}
              title="Click to play UK pronunciation"
            >
              <div className="flex flex-col">
                <span className="text-[13px] text-neutral-400">UK RP Phonetic</span>
                <span className="font-medium text-ink">{activeTerm.phoneticUK}</span>
              </div>
              <Volume2
                size={18}
                className={playingAccent === "uk" ? "text-accent-blue" : "text-neutral-400"}
              />
            </button>

            {/* US Button */}
            <button
              onClick={() => handleSpeech(activeTerm.word, "us")}
              className={`flex items-center justify-between p-3.5 rounded-xl text-left text-[14px] transition-colors border ${
                playingAccent === "us"
                  ? "bg-surface-2 text-accent-blue border-accent-blue"
                  : "bg-surface-1 text-ink border-transparent hover:bg-surface-2"
              }`}
              title="Click to play US pronunciation"
            >
              <div className="flex flex-col">
                <span className="text-[13px] text-neutral-400">US GA Phonetic</span>
                <span className="font-medium text-ink">{activeTerm.phoneticUS}</span>
              </div>
              <Volume2
                size={18}
                className={playingAccent === "us" ? "text-accent-blue" : "text-neutral-400"}
              />
            </button>
          </div>

          {/* Definitions */}
          <div className="space-y-4 text-[14px] sm:text-base leading-relaxed mb-6">
            <div>
              <span className="text-neutral-400 block text-[13px] mb-1">
                {t("Định nghĩa Tiếng Việt", "Vietnamese Definition")}
              </span>
              <p className="text-ink font-medium max-w-[65ch]">
                {activeTerm.vietnameseMeaning}
              </p>
            </div>

            <div>
              <span className="text-neutral-400 block text-[13px] mb-1">
                {t("Ngữ cảnh kỹ thuật tiếng Anh", "English Engineering Definition")}
              </span>
              <p className="text-neutral-300 max-w-[65ch]">
                {activeTerm.englishDefinition}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-1">
              <span className="text-neutral-400 block text-[13px] mb-1">
                {t("Ghi chú thực địa", "Job Site Practical Note")}
              </span>
              <p className="text-[14px] text-neutral-300 max-w-[65ch]">
                {activeTerm.fieldNote}
              </p>
            </div>
          </div>

          {/* Bottom Reference Tag */}
          <div className="flex items-center justify-between text-[13px] text-neutral-400 pt-3">
            <span>{t("Tiêu chuẩn tham chiếu", "Referenced Standard")}: {activeTerm.standard}</span>
            <span className="text-semantic-success flex items-center gap-1 font-medium">
              <CheckCircle2 size={15} />
              <span>Offline Ready</span>
            </span>
          </div>
        </SpotlightCard>

        {/* Right Column: Mini Reflex Quiz */}
        <SpotlightCard data-ui="true" className="lg:col-span-5 bg-canvas rounded-2xl p-6 sm:p-8 animate-enter">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-accent-blue" />
            <h3 className="text-base font-semibold text-ink">
              {t("Trắc nghiệm phản xạ kỹ thuật", "Operational Reflex Quiz")}
            </h3>
          </div>

          <p className="text-[14px] text-ink font-medium leading-relaxed mb-4">
            {t(activeTerm.quizQuestion.promptVi, activeTerm.quizQuestion.promptEn)}
          </p>

          <div className="space-y-2 mb-6">
            {activeTerm.quizQuestion.options.map((opt, optIdx) => {
              const isSelected = quizAnswer === optIdx;
              const hasAnswered = quizAnswer !== null;

              let buttonStyle = "bg-surface-1 text-neutral-300 hover:text-ink hover:bg-surface-2 border border-transparent";
              if (hasAnswered) {
                if (opt.isCorrect) {
                  buttonStyle = "bg-emerald-950/60 text-emerald-200 border border-emerald-500";
                } else if (isSelected && !opt.isCorrect) {
                  buttonStyle = "bg-rose-950/60 text-rose-200 border border-rose-500";
                } else {
                  buttonStyle = "bg-surface-1/40 text-neutral-600 opacity-60 border border-transparent";
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => setQuizAnswer(optIdx)}
                  className={`w-full p-4 rounded-xl text-left text-[14px] leading-relaxed transition-colors flex items-start gap-3 ${buttonStyle}`}
                >
                  <span className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[13px] font-bold mt-0.5 bg-canvas text-ink">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="flex-1">
                    {t(opt.textVi, opt.textEn)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback banner */}
          {quizAnswer !== null && (
            <div
              className={`p-4 rounded-xl text-[14px] leading-relaxed ${
                activeTerm.quizQuestion.options[quizAnswer].isCorrect
                  ? "bg-emerald-950/40 text-emerald-300"
                  : "bg-rose-950/40 text-rose-300"
              }`}
            >
              <div className="flex items-center gap-2 font-semibold mb-1">
                {activeTerm.quizQuestion.options[quizAnswer].isCorrect ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>{t("Chính xác!", "Correct Analysis!")}</span>
                  </>
                ) : (
                  <>
                    <XCircle size={16} />
                    <span>{t("Chưa chuẩn xác", "Incorrect Assessment")}</span>
                  </>
                )}
              </div>
              <p className="text-[13px] text-neutral-300">
                {t(
                  "Trong ứng dụng FM Dictionary, mọi câu hỏi đều đi kèm phân tích giải thích nguyên lý vận hành sâu sắc.",
                  "In the full FM Dictionary app, each quiz case includes deep root-cause engineering explanations."
                )}
              </p>
            </div>
          )}
        </SpotlightCard>
      </div>
    </div>
  );
};
