"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  CheckCircle2,
  ClipboardCheck,
  Cat,
  Save,
  RotateCcw,
} from "lucide-react";
import { sections, scoreLabels, scoreColors } from "@/data/questionnaire";
import { getUnansweredInSection } from "@/data/scoring";
import CatSVG from "@/components/CatSVG";

const STORAGE_KEY = "cat-questionnaire-answers";
const STORAGE_PROGRESS = "cat-questionnaire-progress";

export default function QuestionnairePage() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [warning, setWarning] = useState<{
    show: boolean;
    missing: number[];
    message: string;
  }>({ show: false, missing: [], message: "" });
  const [highlightId, setHighlightId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // 載入本地儲存
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedProgress = localStorage.getItem(STORAGE_PROGRESS);
      if (saved) {
        setAnswers(JSON.parse(saved));
      }
      if (savedProgress) {
        setCurrentSection(Number(savedProgress));
      }
    } catch {
      // ignore
    }
  }, []);

  // 自動儲存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    localStorage.setItem(STORAGE_PROGRESS, String(currentSection));
  }, [answers, currentSection]);

  const current = sections[currentSection];
  const totalSections = sections.length;
  const progress = Math.round(
    (Object.keys(answers).length / 100) * 100
  );

  const handleSelect = useCallback((qid: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
    // 即時解除警告
    setWarning((prev) => {
      if (prev.missing.includes(qid)) {
        const remaining = prev.missing.filter((id) => id !== qid);
        if (remaining.length === 0) {
          return { show: false, missing: [], message: "" };
        }
        return {
          ...prev,
          missing: remaining,
          message: `尚有 ${remaining.length} 題未作答（題號：${remaining.join(", ")}）`,
        };
      }
      return prev;
    });
  }, []);

  const validateSection = useCallback(() => {
    const missing = getUnansweredInSection(answers, currentSection);
    if (missing.length > 0) {
      setWarning({
        show: true,
        missing,
        message: `尚有 ${missing.length} 題未作答（題號：${missing.join(", ")}）`,
      });
      // 自動滾動到第一個未作答題目
      const firstMissing = missing[0];
      setHighlightId(firstMissing);
      setTimeout(() => setHighlightId(null), 2000);

      const el = questionRefs.current[firstMissing];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return false;
    }
    setWarning({ show: false, missing: [], message: "" });
    return true;
  }, [answers, currentSection]);

  const handleNext = useCallback(() => {
    if (!validateSection()) return;
    if (currentSection < totalSections - 1) {
      setCurrentSection((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [validateSection, currentSection, totalSections]);

  const handlePrev = useCallback(() => {
    setWarning({ show: false, missing: [], message: "" });
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentSection]);

  const handleSubmit = useCallback(() => {
    if (!validateSection()) return;
    // 檢查是否所有部分都完成
    const allMissing: number[] = [];
    for (let i = 0; i < totalSections; i++) {
      allMissing.push(...getUnansweredInSection(answers, i));
    }
    if (allMissing.length > 0) {
      // 跳到第一個未完成的區塊
      for (let i = 0; i < totalSections; i++) {
        if (getUnansweredInSection(answers, i).length > 0) {
          setCurrentSection(i);
          setTimeout(() => {
            setWarning({
              show: true,
              missing: allMissing,
              message: `全問卷尚有 ${allMissing.length} 題未作答，已自動跳轉至未完成區塊`,
            });
            const first = getUnansweredInSection(answers, i)[0];
            if (first) {
              setHighlightId(first);
              setTimeout(() => setHighlightId(null), 2000);
              const el = questionRefs.current[first];
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 100);
          return;
        }
      }
    }

    setIsSubmitting(true);
    // 將答案存入 sessionStorage 供結果頁使用
    sessionStorage.setItem("cat-questionnaire-result", JSON.stringify(answers));
    router.push("/questionnaire/result/");
  }, [validateSection, answers, totalSections, router]);

  const handleReset = useCallback(() => {
    if (confirm("確定要清除所有已填寫的答案嗎？此操作無法復原。")) {
      setAnswers({});
      setCurrentSection(0);
      setWarning({ show: false, missing: [], message: "" });
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_PROGRESS);
    }
  }, []);

  const isQuestionMissing = (qid: number) =>
    warning.show && warning.missing.includes(qid);

  return (
    <div className="space-y-4 pb-32">
      {/* 頂部標題區 */}
      <div className="relative bg-gradient-to-br from-forest-50 via-cream to-cat-50 rounded-3xl border-2 border-earth-200 p-6 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="shrink-0 animate-float">
            <CatSVG size={80} pose="waving" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <ClipboardCheck size={16} className="text-cat-500" />
              <span className="text-xs font-bold text-cat-600 tracking-wide">
                Fe-BARQ 專業評估
              </span>
            </div>
            <h1 className="text-xl font-black text-earth-600 leading-tight">
              貓咪行為評估問卷
            </h1>
            <p className="text-sm text-earth-400 mt-1 leading-relaxed">
              100題專業評估，涵蓋24個行為維度，幫助您全面了解貓咪的行為特徵。
            </p>
          </div>
        </div>

        {/* 進度條 */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-earth-400 mb-1.5">
            <span>完成進度</span>
            <span className="font-bold text-earth-500">{progress}%</span>
          </div>
          <div className="h-2.5 bg-earth-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-forest-400 to-cat-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-earth-400 mt-1">
            <span>{Object.keys(answers).length} / 100 題</span>
            <span>第 {currentSection + 1} / {totalSections} 部分</span>
          </div>
        </div>
      </div>

      {/* 紅色警告區塊 */}
      {warning.show && (
        <div className="animate-fade-in-up bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-bold text-red-700">{warning.message}</p>
            <p className="text-xs text-red-500 mt-1">
              請完成所有題目後再繼續。未作答題目已標記為紅色。
            </p>
          </div>
        </div>
      )}

      {/* 區塊導航快捷列 */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
        {sections.map((sec, idx) => {
          const missingCount = getUnansweredInSection(answers, idx).length;
          const isActive = idx === currentSection;
          const isCompleted = missingCount === 0;
          return (
            <button
              key={sec.id}
              onClick={() => {
                setCurrentSection(idx);
                setWarning({ show: false, missing: [], message: "" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                isActive
                  ? "bg-cat-500 text-white border-cat-500 shadow-md"
                  : isCompleted
                  ? "bg-forest-50 text-forest-600 border-forest-200"
                  : "bg-white text-earth-400 border-earth-200"
              }`}
            >
              <span className="mr-1">{idx + 1}</span>
              {isCompleted && <span className="inline-block ml-0.5">✓</span>}
              {missingCount > 0 && !isActive && (
                <span className="ml-0.5 text-red-500">({missingCount})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* 當前區塊 */}
      <div ref={sectionRef} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cat-100 flex items-center justify-center shrink-0">
            <Cat size={20} className="text-cat-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-earth-600">{current.title}</h2>
            <p className="text-xs text-earth-400">{current.description}</p>
          </div>
          <div className="ml-auto text-xs text-earth-400 bg-white px-3 py-1 rounded-full border border-earth-200">
            {current.questions.length} 題
          </div>
        </div>

        {/* 題目列表 */}
        <div className="space-y-3">
          {current.questions.map((q) => {
            const missing = isQuestionMissing(q.id);
            const selected = answers[q.id];
            const isHighlighted = highlightId === q.id;

            return (
              <div
                key={q.id}
                ref={(el) => {
                  questionRefs.current[q.id] = el;
                }}
                className={`bg-white rounded-xl border-2 p-4 transition-all duration-300 ${
                  missing
                    ? "border-red-400 shadow-red-100 shadow-md"
                    : isHighlighted
                    ? "border-cat-400 shadow-cat-100 shadow-lg scale-[1.02]"
                    : "border-earth-200 hover:border-earth-300"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      missing
                        ? "bg-red-100 text-red-600"
                        : selected !== undefined
                        ? "bg-forest-100 text-forest-600"
                        : "bg-earth-100 text-earth-500"
                    }`}
                  >
                    {q.id}
                  </div>
                  <p
                    className={`text-sm font-medium leading-relaxed pt-1 ${
                      missing ? "text-red-700" : "text-earth-600"
                    }`}
                  >
                    {q.text}
                    {q.reverse && (
                      <span className="ml-1 text-[10px] text-earth-400 bg-earth-50 px-1.5 py-0.5 rounded">
                        反向計分
                      </span>
                    )}
                  </p>
                </div>

                {/* 選項 */}
                <div className="grid grid-cols-6 gap-1.5">
                  {[0, 1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleSelect(q.id, val)}
                      className={`py-2 px-1 rounded-lg text-xs font-bold border-2 transition-all active:scale-95 ${
                        selected === val
                          ? scoreColors[val as keyof typeof scoreColors].replace(
                              "bg-",
                              "ring-2 ring-offset-1 ring-"
                            ) + " " + scoreColors[val as keyof typeof scoreColors]
                          : "bg-white text-earth-400 border-earth-200 hover:border-earth-300"
                      }`}
                    >
                      <span className="block text-lg leading-none mb-0.5">
                        {val}
                      </span>
                      <span className="block text-[9px] scale-90">
                        {scoreLabels[val as keyof typeof scoreLabels]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 底部導航按鈕 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-earth-200 p-4 z-40">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentSection === 0}
            className="shrink-0 flex items-center gap-1 px-4 py-3 rounded-xl border-2 border-earth-200 text-earth-500 font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:border-earth-300 transition-all"
          >
            <ChevronLeft size={18} />
            上一部分
          </button>

          <div className="flex-1 text-center">
            <button
              onClick={handleReset}
              className="text-xs text-earth-400 hover:text-red-500 transition-colors flex items-center gap-1 mx-auto"
            >
              <RotateCcw size={12} />
              清除重填
            </button>
          </div>

          {currentSection < totalSections - 1 ? (
            <button
              onClick={handleNext}
              className="shrink-0 flex items-center gap-1 px-5 py-3 rounded-xl bg-cat-500 hover:bg-cat-600 text-white font-bold text-sm shadow-lg transition-all active:scale-[0.98]"
            >
              下一部分
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="shrink-0 flex items-center gap-1.5 px-5 py-3 rounded-xl bg-forest-500 hover:bg-forest-600 text-white font-bold text-sm shadow-lg transition-all active:scale-[0.98] disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Save size={18} className="animate-pulse" />
                  分析中...
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} />
                  提交分析
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
