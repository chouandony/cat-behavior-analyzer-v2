"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  BookOpen,
  Search,
  BarChart3,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";
import { behaviors } from "@/data/behaviors";
import BehaviorCard from "@/components/BehaviorCard";
import CatSVG from "@/components/CatSVG";

export default function HomePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleBehavior = useCallback((id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const queryString =
    selected.length > 0 ? `?behaviors=${selected.join(",")}` : "";

  return (
    <div className="space-y-6">
      {/* Hero 區域 */}
      <div className="relative bg-gradient-to-br from-forest-50 via-cream to-cat-50 rounded-3xl border-2 border-earth-200 p-6 overflow-hidden">
        <div className="absolute top-3 right-3 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="35" rx="12" ry="10" fill="#8B7D6B" />
            <ellipse cx="18" cy="20" rx="5" ry="6" fill="#8B7D6B" />
            <ellipse cx="30" cy="15" rx="5" ry="6" fill="#8B7D6B" />
            <ellipse cx="42" cy="20" rx="5" ry="6" fill="#8B7D6B" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 opacity-10 rotate-12">
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="35" rx="12" ry="10" fill="#8B7D6B" />
            <ellipse cx="18" cy="20" rx="5" ry="6" fill="#8B7D6B" />
            <ellipse cx="30" cy="15" rx="5" ry="6" fill="#8B7D6B" />
            <ellipse cx="42" cy="20" rx="5" ry="6" fill="#8B7D6B" />
          </svg>
        </div>

        <div className="flex items-center gap-4">
          <div className="shrink-0 animate-float">
            <CatSVG size={100} pose="waving" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={16} className="text-cat-500" />
              <span className="text-xs font-bold text-cat-600 tracking-wide">
                專業貓咪行為分析
              </span>
            </div>
            <h1 className="text-2xl font-black text-earth-600 leading-tight">
              貓咪行為分析
            </h1>
            <p className="text-sm text-earth-400 mt-1.5 leading-relaxed">
              選擇您想了解的問題行為，開始{" "}
              <span className="font-bold text-cat-600">ABC+E 分析</span>{" "}
              與對策規劃
            </p>
          </div>
        </div>

        {/* 快速統計 */}
        <div className="flex gap-3 mt-4 pt-4 border-t border-earth-200/60">
          <div className="flex items-center gap-1.5 text-xs text-earth-500">
            <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-forest-600">35</span>
            </div>
            <span>訓練技術</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-earth-500">
            <div className="w-6 h-6 rounded-full bg-cat-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-cat-600">12</span>
            </div>
            <span>行為維度</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-earth-500">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-600">6</span>
            </div>
            <span>ABC功能</span>
          </div>
        </div>
      </div>

      {/* 問卷入口 - 新增 */}
      <Link
        href="/questionnaire/"
        className="group block relative bg-gradient-to-r from-cat-500 to-cat-600 rounded-2xl p-5 text-white shadow-lg hover:shadow-xl transition-all active:scale-[0.98] overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative flex items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ClipboardCheck size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="font-black text-lg">Fe-BARQ 行為評估問卷</h2>
            <p className="text-sm text-white/80 mt-0.5">
              100題專業評估，24個行為維度，自動識別需要關注的行為問題
            </p>
          </div>
          <ArrowRight
            size={24}
            className="shrink-0 text-white/80 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </Link>

      {/* 貓咪提示條 */}
      <div className="flex items-center gap-3 bg-white rounded-xl border border-earth-200 p-3 card-hover">
        <div className="shrink-0">
          <CatSVG size={48} pose="pointing" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-earth-500 font-medium">
            👇 點擊下方卡片選擇行為問題
          </p>
          <p className="text-xs text-earth-400 mt-0.5">
            選擇後可以進行 ABC+E 行為分析，或直接進行問卷評估
          </p>
        </div>
      </div>

      {/* 行為卡片列表 */}
      <div className="grid gap-3">
        {behaviors.map((b, index) => (
          <div
            key={b.id}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 0.05}s`,
              animationFillMode: "both",
            }}
          >
            <BehaviorCard
              behavior={b}
              selected={selected.includes(b.id)}
              onToggle={() => toggleBehavior(b.id)}
            />
          </div>
        ))}
      </div>

      {/* 底部浮動按鈕 */}
      {selected.length > 0 && (
        <div className="fixed bottom-6 left-0 right-0 px-4 z-40 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <Link
              href={`/abc/${queryString}`}
              className="flex items-center justify-center gap-2 w-full bg-cat-500 hover:bg-cat-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98]"
            >
              <span>開始分析 ({selected.length})</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      )}

      {/* 功能入口 */}
      <div className="pt-4">
        <div className="flex items-center gap-2 mb-3">
          <CatSVG size={32} pose="sitting" />
          <h2 className="text-sm font-bold text-earth-500">更多工具</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/techniques/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-cat-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cat-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-cat-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen size={22} className="text-cat-500" />
            </div>
            <span className="text-sm font-bold text-earth-500">35個訓練技術</span>
            <span className="text-[10px] text-earth-400">專業訓練方法總彙</span>
          </Link>
          <Link
            href="/analysis/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-forest-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-forest-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Search size={22} className="text-forest-500" />
            </div>
            <span className="text-sm font-bold text-earth-500">ABC與九大成因</span>
            <span className="text-[10px] text-earth-400">科學行為分析工具</span>
          </Link>
          <Link
            href="/tracker/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-blue-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BarChart3 size={22} className="text-blue-500" />
            </div>
            <span className="text-sm font-bold text-earth-500">進度追蹤</span>
            <span className="text-[10px] text-earth-400">記錄改善趨勢</span>
          </Link>
          <Link
            href="/abc/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-purple-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ClipboardList size={22} className="text-purple-500" />
            </div>
            <span className="text-sm font-bold text-earth-500">直接分析</span>
            <span className="text-[10px] text-earth-400">快速 ABC+E 分析</span>
          </Link>
        </div>
      </div>

      {/* 底部貓咪裝飾 */}
      <div className="flex justify-center pt-4 opacity-40">
        <CatSVG size={80} pose="sleeping" />
      </div>
    </div>
  );
}
