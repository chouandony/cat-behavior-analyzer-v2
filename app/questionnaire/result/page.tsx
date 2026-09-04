"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Cat,
  BarChart3,
  RefreshCw,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { calculateScores, type QuestionnaireResult, getRiskLabel, getLevelConfig } from "@/data/scoring";
import { behaviors } from "@/data/behaviors";
import CatSVG from "@/components/CatSVG";

export default function QuestionnaireResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuestionnaireResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = sessionStorage.getItem("cat-questionnaire-result");
    if (!raw) {
      router.push("/questionnaire/");
      return;
    }
    try {
      const answers = JSON.parse(raw);
      const res = calculateScores(answers);
      setResult(res);
    } catch {
      router.push("/questionnaire/");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="animate-float">
          <CatSVG size={120} pose="standing" />
        </div>
        <p className="text-slate-600 font-bold text-lg">正在分析行為數據...</p>
        <div className="w-48 h-3 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 via-orange-400 to-red-400 rounded-full animate-pulse w-full" />
        </div>
      </div>
    );
  }

  if (!result) return null;

  const riskLabel = getRiskLabel(result.overallRisk);
  const flaggedBehaviors = result.behaviorScores.filter((b) => b.flagged);
  const normalBehaviors = result.behaviorScores.filter((b) => !b.flagged);

  return (
    <div className="space-y-6 pb-24">
      {/* 總覽卡片 - 更艷麗 */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-emerald-50 rounded-3xl border-2 border-orange-100 p-6 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            <CatSVG size={80} pose="waving" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-black text-slate-800">評估結果總覽</h1>
            <p className="text-sm text-slate-500 mt-1">
              完成 {result.completedCount} / {result.totalCount} 題
            </p>
          </div>
        </div>

        {/* 風險儀表板 */}
        <div className="mt-5 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-slate-700">整體行為風險指數</span>
            <span className={`text-sm font-black px-3 py-1 rounded-full ${riskLabel.bg} ${riskLabel.color}`}>
              {riskLabel.text}
            </span>
          </div>
          <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000"
              style={{
                width: `${result.overallRisk}%`,
                background: `linear-gradient(90deg, #10B981 0%, #F59E0B 50%, #EF4444 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            基於 {flaggedBehaviors.length} 項行為維度超過關注閾值計算。此指數僅供參考，具體訓練方案請諮詢專業行為師。
          </p>
        </div>
      </div>

      {/* 需要關注的行為 */}
      {flaggedBehaviors.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} className="text-orange-500" />
            <h2 className="text-base font-bold text-slate-800">
              需要關注的行為（{flaggedBehaviors.length} 項）
            </h2>
          </div>

          <div className="grid gap-3">
            {flaggedBehaviors.map((b, idx) => {
              const levelCfg = getLevelConfig(b.level);
              const queryString = `?behaviors=${b.behavior.id}`;
              return (
                <div
                  key={b.behavior.id}
                  className="bg-white rounded-xl border-2 border-slate-200 p-4 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "both" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 text-2xl">{b.behavior.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-slate-800">{b.behavior.name}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${levelCfg.bg} ${levelCfg.color} ${levelCfg.border}`}>
                          {levelCfg.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {b.behavior.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex-1">
                          <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                            <span>平均得分</span>
                            <span className="font-bold text-slate-700">{b.average} / 5</span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-orange-400"
                              style={{ width: `${(b.average / 5) * 100}%` }}
                            />
                          </div>
                        </div>
                        <Link
                          href={`/abc/${queryString}`}
                          className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-xs font-bold border border-orange-200 hover:bg-orange-100 transition-colors"
                        >
                          <Sparkles size={12} />
                          ABC分析
                          <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 正常範圍的行為 */}
      {normalBehaviors.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-500" />
            <h2 className="text-base font-bold text-slate-800">
              正常範圍的行為（{normalBehaviors.length} 項）
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {normalBehaviors.map((b) => (
              <div
                key={b.behavior.id}
                className="bg-white rounded-xl border border-slate-200 p-3 flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="text-xl shrink-0">{b.behavior.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-600 truncate">{b.behavior.name}</p>
                  <p className="text-[10px] text-slate-400">得分 {b.average} / 5</p>
                </div>
                <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 底部操作（已移除「對全部關注行為進行 ABC+E 分析」大按鈕） */}
      <div className="pt-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/questionnaire/"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            <RefreshCw size={16} />
            重新評估
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            <BarChart3 size={16} />
            返回首頁
          </Link>
        </div>
      </div>

      {/* 底部裝飾 */}
      <div className="flex justify-center pt-4 opacity-40">
        <CatSVG size={80} pose="sleeping" />
      </div>
    </div>
  );
}
