"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  BookOpen,
  Search,
  BarChart3,
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  BookOpenText,
} from "lucide-react";
import { behaviors } from "@/data/behaviors";
import BehaviorCard from "@/components/BehaviorCard";
import CatSVG from "@/components/CatSVG";

const guidePages = [
  <div key="1" className="space-y-4">
    <div className="text-center pb-4 border-b-2 border-cat-100">
      <div className="text-5xl mb-2">🐱</div>
      <h2 className="text-2xl font-black text-slate-800">貓咪行為分析器</h2>
      <p className="text-sm text-slate-500 mt-1">飼主使用手冊</p>
      <p className="text-xs text-cat-500 font-bold mt-2">別再猜「牠到底在想什麼」——學會讀懂貓咪的行為語言 🐾</p>
    </div>
    <div className="space-y-3">
      <p className="text-sm text-slate-600 leading-relaxed">「我的貓為什麼總是亂尿？」「為什麼牠突然攻擊我？」「是不是哪裡不舒服？」「明明平常好好的，為什麼突然變了？」</p>
      <p className="text-sm text-slate-600 leading-relaxed">如果你也曾經被貓咪這些「神秘行為」搞得一頭霧水……<span className="font-bold text-cat-600">這套貓咪行為分析器，就是為你設計的。</span></p>
      <div className="bg-cat-50 rounded-xl border border-cat-200 p-4">
        <h3 className="font-bold text-cat-700 mb-2 text-sm">🟦 為什麼需要貓咪行為分析器？</h3>
        <div className="space-y-2 text-xs text-slate-600">
          <p>🐱 貓咪突然在貓砂盆外尿尿，不知道到底是生病還是行為問題。</p>
          <p>🙈 客人一來，貓咪立刻躲起來、發抖，甚至哈氣攻擊。</p>
          <p>🛋️ 新買的家具還沒欣賞幾天，就已經被抓得慘不忍睹。</p>
          <p>😿 明明每天都很疼牠，牠卻突然抓你、咬你。</p>
          <p>🌙 半夜三點突然開始全屋跑酷，主人只想問：「現在到底是誰家的白天？」</p>
        </div>
      </div>
      <p className="text-xs text-slate-500">遇到問題時，我們通常上網搜尋、問獸醫、問朋友、自己亂試……結果不但沒改善，問題甚至可能越來越嚴重。</p>
    </div>
  </div>,
  <div key="2" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">💡 這個工具幫你做到什麼？</h3>
    <div className="grid grid-cols-1 gap-3">
      <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-3">
        <p className="text-sm font-bold text-emerald-700">🔹 系統化評估</p>
        <p className="text-xs text-slate-600 mt-1">透過專業行為評估問卷，100 題完整檢視貓咪的 24 個行為維度。</p>
      </div>
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-3">
        <p className="text-sm font-bold text-blue-700">🔹 科學化分析</p>
        <p className="text-xs text-slate-600 mt-1">透過 ABC 模型尋找行為背後的原因，而不是簡單把貓咪貼上「不乖」的標籤。</p>
      </div>
      <div className="bg-cat-50 rounded-xl border border-cat-200 p-3">
        <p className="text-sm font-bold text-cat-700">🔹 個人化對策</p>
        <p className="text-xs text-slate-600 mt-1">根據分析結果提供具體、可執行的訓練步驟。</p>
      </div>
      <div className="bg-purple-50 rounded-xl border border-purple-200 p-3">
        <p className="text-sm font-bold text-purple-700">🔹 長期追蹤</p>
        <p className="text-xs text-slate-600 mt-1">記錄每天的行為數據，觀察改善趨勢。</p>
      </div>
    </div>
    <div className="bg-gradient-to-r from-cat-100 to-emerald-100 rounded-xl p-4 text-center">
      <p className="text-sm font-bold text-slate-700">❤️ 核心理念</p>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">貓咪的每個「問題行為」背後，都有原因。<br/>理解原因，才能找到對的方法。<br/>不是貓咪要改，是我們要學會讀懂牠。</p>
    </div>
    <h3 className="text-lg font-black text-slate-800 pt-2">🚀 三分鐘快速上手</h3>
    <div className="space-y-2 text-sm text-slate-600">
      <p><span className="font-bold text-cat-600">🔵 第一步｜打開網頁</span><br/>不用下載 App，不用註冊帳號，打開網頁就可以使用。</p>
      <p><span className="font-bold text-cat-600">🔵 第二步｜選擇功能</span><br/>還不確定問題？→ 點「行為評估問卷」<br/>已經知道問題？→ 首頁選行為卡片 → 按「開始 ABC 分析」<br/>想學方法？→ 點「35 個訓練技術」</p>
      <p><span className="font-bold text-cat-600">🔵 第三步｜跟著引導走</span><br/>每個頁面都有清楚步驟，遇到不懂的名詞都有說明。</p>
    </div>
  </div>,
  <div key="3" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">🏠 首頁｜你的貓咪行為分析起點</h3>
    <div className="bg-white rounded-xl border-2 border-slate-200 p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <span className="text-xl">🐱</span>
        <span className="font-bold text-slate-700">貓咪行為分析</span>
      </div>
      <div className="bg-cat-50 rounded-lg p-3 border border-cat-200">
        <p className="text-sm font-bold text-cat-700">📋 行為評估問卷</p>
        <p className="text-xs text-slate-600 mt-1">100 題專業評估，涵蓋 24 個行為維度。<br/>適合：「我不知道貓咪到底有什麼問題。」</p>
      </div>
      <div className="bg-slate-50 rounded-lg p-3">
        <p className="text-sm font-bold text-slate-700">🐱 問題行為卡片</p>
        <p className="text-xs text-slate-600 mt-1">亂尿／噴尿 / 焦慮與恐懼 / 破壞抓家具 / 攻擊性行為 / 護食護位置 / 過動衝動<br/>選一個 → 按「開始 ABC 分析」</p>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-blue-50 rounded-lg p-2 text-center"><p className="font-bold text-blue-700">📚 35 個訓練技術</p></div>
        <div className="bg-emerald-50 rounded-lg p-2 text-center"><p className="font-bold text-emerald-700">📊 進度追蹤</p></div>
      </div>
    </div>
    <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-3">
      <p className="text-xs text-yellow-700">💡 小提示：如果尚未選擇行為，底部「開始 ABC 分析」按鈕會顯示灰色「請先選擇一個行為」，點擊後會自動捲回行為卡片區提醒你選擇。</p>
    </div>
  </div>,
  <div key="4" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">📊 行為評估｜先全面了解你的貓</h3>
    <p className="text-sm text-slate-600 leading-relaxed">本問卷基於學術研究框架設計，涵蓋 24 個行為維度，幫助您全面了解貓咪的行為特徵。</p>
    <p className="text-xs text-slate-500">這是一套參考學術研究框架編寫的行為評估問卷，改編為一般飼主也能在家完成的互動式問卷。</p>
    <div className="bg-gradient-to-br from-cat-50 to-emerald-50 rounded-xl border-2 border-cat-200 p-4">
      <p className="text-sm font-bold text-slate-700 mb-3">📋 24 個行為維度</p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-slate-600">
        <p>1️⃣ 活動／玩耍性</p>
        <p>2️⃣ 對人的社交性</p>
        <p>3️⃣ 定向叫聲／發聲</p>
        <p>4️⃣ 呼嚕聲</p>
        <p>5️⃣ 尋求關注</p>
        <p>6️⃣ 對貓的社交性</p>
        <p>7️⃣ 對陌生人攻擊性</p>
        <p>8️⃣ 對主人攻擊性</p>
        <p>9️⃣ 抗拒約束</p>
        <p>🔟 對熟悉貓的攻擊性</p>
        <p>1️⃣1️⃣ 對狗的攻擊性</p>
        <p>1️⃣2️⃣ 恐懼與焦慮</p>
        <p>1️⃣3️⃣ 分離相關行為</p>
        <p>1️⃣4️⃣ 可訓練性</p>
        <p>1️⃣5️⃣ 捕食行為</p>
        <p>1️⃣6️⃣ 獵物興趣</p>
        <p>1️⃣7️⃣ 睡覺地點偏好</p>
        <p>1️⃣8️⃣ 過度舔毛</p>
        <p>1️⃣9️⃣ 其他強迫行為</p>
        <p>2️⃣0️⃣ 不當排泄</p>
        <p>2️⃣1️⃣ 排泄偏好</p>
        <p>2️⃣2️⃣ 晨昏活動性</p>
        <p>2️⃣3️⃣ 雜項行為</p>
      </div>
    </div>
    <p className="text-xs text-slate-500 text-center">總共 <span className="font-bold text-cat-600">100 題</span>，預估時間約 <span className="font-bold text-cat-600">10～15 分鐘</span></p>
  </div>,
  <div key="5" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">📝 問卷怎麼填？</h3>
    <div className="bg-white rounded-xl border-2 border-slate-200 p-4">
      <p className="text-sm font-bold text-slate-700 mb-3">每題都是 0～5 分：</p>
      <div className="grid grid-cols-6 gap-1 text-center text-xs">
        <div className="bg-slate-100 rounded-lg p-2"><div className="text-lg font-bold text-slate-600">0</div><div className="text-[10px]">未知</div></div>
        <div className="bg-emerald-100 rounded-lg p-2"><div className="text-lg font-bold text-emerald-600">1</div><div className="text-[10px]">從不</div></div>
        <div className="bg-emerald-50 rounded-lg p-2"><div className="text-lg font-bold text-emerald-500">2</div><div className="text-[10px]">很少</div></div>
        <div className="bg-yellow-100 rounded-lg p-2"><div className="text-lg font-bold text-yellow-600">3</div><div className="text-[10px]">有時</div></div>
        <div className="bg-orange-100 rounded-lg p-2"><div className="text-lg font-bold text-orange-600">4</div><div className="text-[10px]">經常</div></div>
        <div className="bg-red-100 rounded-lg p-2"><div className="text-lg font-bold text-red-600">5</div><div className="text-[10px]">總是</div></div>
      </div>
    </div>
    <div className="space-y-2 text-sm text-slate-600">
      <p><span className="font-bold text-cat-600">🔹 不要想太久</span><br/>憑平常觀察到的第一印象回答即可。</p>
      <p><span className="font-bold text-cat-600">🔹 0 分不是壞事</span><br/>代表你沒有觀察過這個行為，也是一個有效答案。</p>
      <p><span className="font-bold text-cat-600">🔹 選 5 分要特別注意</span><br/>代表這個行為頻率很高，系統會提醒你可以優先關注。</p>
    </div>
    <div className="bg-blue-50 rounded-xl border border-blue-200 p-3">
      <p className="text-sm font-bold text-blue-700 mb-2">📌 問卷還有這些貼心功能</p>
      <div className="space-y-1 text-xs text-slate-600">
        <p>📊 <b>頂部進度條</b> — 告訴你目前完成幾題，正在第幾個維度</p>
        <p>🔵 <b>維度快捷列</b> — 可以直接跳到指定維度，完成的會顯示完成狀態</p>
        <p>🔄 <b>清除重填</b> — 可以把目前維度的答案清除，重新作答</p>
        <p>🚨 <b>防呆檢查</b> — 有漏題會提醒並自動捲到漏題位置</p>
        <p>💾 <b>自動保存</b> — 即使關閉網頁，下次回來仍可繼續</p>
        <p>⚠️ <b>離開提醒</b> — 還有題目沒回答就準備離開，系統會跳出確認提示</p>
      </div>
    </div>
    <p className="text-xs text-slate-500 text-center">⏱️ 可以分次完成，不用一次寫完 100 題！</p>
  </div>,
  <div key="6" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">📈 評估結果報告｜看懂你的貓</h3>
    <p className="text-sm text-slate-600">完成 100 題後，點「提交分析」，系統會自動計算結果。</p>
    <div className="bg-white rounded-xl border-2 border-slate-200 p-4 space-y-3">
      <div className="bg-gradient-to-r from-emerald-100 via-yellow-100 to-red-100 rounded-lg p-3">
        <p className="text-sm font-bold text-slate-700">📊 整體行為風險指數</p>
        <div className="h-3 bg-white rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-red-400 rounded-full w-3/4" />
        </div>
        <p className="text-xs text-slate-500 mt-1">0 ～ 100 分，綜合 24 個維度計算，分數越高代表需要關注的行為越多</p>
      </div>
      <div className="bg-red-50 rounded-lg p-3 border border-red-200">
        <p className="text-sm font-bold text-red-700">🚨 需要關注的行為</p>
        <p className="text-xs text-slate-600 mt-1">分數超過閾值的行為，按嚴重程度排序。每項旁有「ABC 分析」按鈕，點擊深入了解原因與對策。</p>
      </div>
      <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
        <p className="text-sm font-bold text-emerald-700">🟢 正常範圍的行為</p>
        <p className="text-xs text-slate-600 mt-1">表現正常的行為，可以安心，這些方面沒問題。</p>
      </div>
    </div>
    <div className="bg-cat-50 rounded-xl border-2 border-cat-200 p-4 text-center">
      <p className="text-sm font-bold text-cat-700">⚠️ 千萬不要看到「嚴重」就嚇到！</p>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed">「嚴重」不代表貓咪沒救了、很壞、或一定無法改善。<br/>它主要代表這個行為發生頻率較高，需要優先處理。</p>
      <p className="text-xs text-cat-500 font-bold mt-2">下一步：點「ABC 分析」，深入了解原因與對策。</p>
    </div>
  </div>,
  <div key="7" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">🔍 ABC 分析｜真正開始「讀懂貓咪」</h3>
    <p className="text-sm text-slate-600">很多人看到貓咪亂尿，第一個想法可能是「牠討厭貓砂盆」或「牠故意的！」但 ABC 分析會要求我們把事情拆開：</p>
    <div className="bg-white rounded-xl border-2 border-slate-200 p-4">
      <div className="flex items-center justify-between text-center">
        <div className="flex-1 bg-blue-50 rounded-lg p-3 mx-1">
          <p className="text-lg font-bold text-blue-700">A</p>
          <p className="text-xs font-bold text-slate-700">前事</p>
          <p className="text-[10px] text-slate-500 mt-1">行為發生前<br/>環境發生什麼？</p>
        </div>
        <div className="text-slate-400 text-xl">→</div>
        <div className="flex-1 bg-cat-50 rounded-lg p-3 mx-1">
          <p className="text-lg font-bold text-cat-700">B</p>
          <p className="text-xs font-bold text-slate-700">行為</p>
          <p className="text-[10px] text-slate-500 mt-1">貓咪<br/>做了什麼？</p>
        </div>
        <div className="text-slate-400 text-xl">→</div>
        <div className="flex-1 bg-emerald-50 rounded-lg p-3 mx-1">
          <p className="text-lg font-bold text-emerald-700">C</p>
          <p className="text-xs font-bold text-slate-700">後果</p>
          <p className="text-[10px] text-slate-500 mt-1">行為發生後<br/>得到什麼？</p>
        </div>
      </div>
    </div>
    <div className="bg-purple-50 rounded-xl border border-purple-200 p-4">
      <p className="text-sm font-bold text-purple-700 mb-2">🐱 舉個例子：貓咪亂尿</p>
      <div className="space-y-1 text-xs text-slate-600">
        <p><b>🅰️ A 前事：</b>你剛清理完貓砂盆，貓咪走過來聞了聞</p>
        <p><b>🅱️ B 行為：</b>貓咪沒進砂盆，反而在旁邊地板上尿尿</p>
        <p><b>🅲️ C 後果：</b>你過來清理，還摸摸牠的頭說「不可以！」</p>
      </div>
      <div className="mt-2 bg-white rounded-lg p-2 border border-purple-200">
        <p className="text-xs text-purple-700">🐱 貓咪可能發現：「我尿在這裡 → 主人就會過來關注我」<br/><b>功能可能是「獲取注意」，而不一定單純代表「牠討厭貓砂盆」。</b></p>
      </div>
    </div>
  </div>,
  <div key="8" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">🎯 ABC 分析只要 5 步驟</h3>
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-cat-500 text-white flex items-center justify-center font-bold shrink-0">1</div>
        <div>
          <p className="text-sm font-bold text-slate-700">選擇行為</p>
          <p className="text-xs text-slate-500">從列表中選一個你想了解的問題行為（單選）</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">2</div>
        <div>
          <p className="text-sm font-bold text-slate-700">選擇前事 A</p>
          <p className="text-xs text-slate-500">選擇觸發行為的情境：另一隻貓靠近、門鈴、陌生人出現、準備出門等</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-cat-500 text-white flex items-center justify-center font-bold shrink-0">3</div>
        <div>
          <p className="text-sm font-bold text-slate-700">選擇行為 B</p>
          <p className="text-xs text-slate-500">選擇貓咪具體做了什麼：喵叫、哈氣、亂尿、抓家具、過度舔毛等</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">4</div>
        <div>
          <p className="text-sm font-bold text-slate-700">選擇後果 C</p>
          <p className="text-xs text-slate-500">選擇行為發生後的結果：獲得關注、得到食物、刺激消失、自我滿足等</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold shrink-0">5</div>
        <div>
          <p className="text-sm font-bold text-slate-700">確認並推測功能</p>
          <p className="text-xs text-slate-500">系統顯示 A→B→C 的組合，你選擇最可能的功能，然後點「查看訓練對策」</p>
        </div>
      </div>
    </div>
    <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-3">
      <p className="text-xs text-yellow-700">💡 可以分析的行為：亂尿／噴尿、恐懼與焦慮、攻擊性行為、破壞抓家具、護食護位置、過度興奮、分離焦慮、過度舔毛、亂叫、衝門、社交不適、排泄問題。ABC 一次只能選一個，讓分析更精準。</p>
    </div>
  </div>,
  <div key="9" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">📋 訓練對策｜知道原因之後，接下來怎麼做？</h3>
    <p className="text-sm text-slate-600">ABC 完成後，系統會依照你的分析結果提供對策，分成三個階段：</p>
    <div className="space-y-3">
      <div className="bg-red-50 rounded-xl border-2 border-red-200 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">必要</span>
          <span className="text-sm font-bold text-red-700">🔴 安全管理</span>
        </div>
        <p className="text-xs text-slate-600">👉 現在就做。例如亂尿問題：先排除醫療問題、檢查砂盆數量（N+1 原則：貓咪數量+1個砂盆）、砂盆放在安靜通風處、遠離食水碗。</p>
        <p className="text-xs text-slate-500 mt-1">推薦技術：環境豐富化、砂盆管理</p>
      </div>
      <div className="bg-orange-50 rounded-xl border-2 border-orange-200 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">建議</span>
          <span className="text-sm font-bold text-orange-700">🟠 核心訓練</span>
        </div>
        <p className="text-xs text-slate-600">👉 接下來幾週執行。建立替代行為與正向強化：貓咪在正確位置排泄 → 立即給予高價值獎勵 → 讓牠逐漸建立正確習慣。</p>
        <p className="text-xs text-slate-500 mt-1">推薦技術：正增強、脫敏與反制約</p>
      </div>
      <div className="bg-emerald-50 rounded-xl border-2 border-emerald-200 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded">選用</span>
          <span className="text-sm font-bold text-emerald-700">🟢 日常管理</span>
        </div>
        <p className="text-xs text-slate-600">👉 長期維持。建立規律餵食與清理時間、維持穩定環境、持續觀察變化。</p>
      </div>
    </div>
    <p className="text-xs text-slate-500 text-center">點推薦技術標籤會跳到「35 個訓練技術」的詳細說明</p>
  </div>,
  <div key="10" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">📚 35 個訓練技術｜不要只知道「要訓練」</h3>
    <p className="text-sm text-slate-600">系統收錄 35 種貓咪訓練與行為矯正專業技術，分為六大類別：</p>
    <div className="grid grid-cols-3 gap-2 text-xs text-center">
      <div className="bg-blue-50 rounded-lg p-2 border border-blue-200"><p className="font-bold text-blue-700">基礎服從</p></div>
      <div className="bg-red-50 rounded-lg p-2 border border-red-200"><p className="font-bold text-red-700">行為矯正</p></div>
      <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-200"><p className="font-bold text-emerald-700">環境管理</p></div>
      <div className="bg-purple-50 rounded-lg p-2 border border-purple-200"><p className="font-bold text-purple-700">脫敏</p></div>
      <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200"><p className="font-bold text-yellow-700">社交化</p></div>
      <div className="bg-cat-50 rounded-lg p-2 border border-cat-200"><p className="font-bold text-cat-700">進階技巧</p></div>
    </div>
    <div className="bg-white rounded-xl border border-slate-200 p-3">
      <p className="text-sm font-bold text-slate-700 mb-1">每個技術都包含：</p>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">💡 核心概念</span>
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">📝 操作步驟</span>
        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">⚠️ 常見錯誤</span>
        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">🐱 適用情境</span>
      </div>
    </div>
    <div className="border-t-2 border-slate-100 pt-4">
      <h3 className="text-lg font-black text-slate-800">📉 進度追蹤｜不要只靠「我覺得好像有改善」</h3>
      <p className="text-sm text-slate-600">行為矯正不是一天兩天的事情。系統提供進度追蹤，記錄：</p>
      <div className="grid grid-cols-3 gap-2 text-center mt-2">
        <div className="bg-blue-50 rounded-lg p-2"><p className="text-lg font-bold text-blue-600">📊</p><p className="text-xs text-slate-600">總次數</p></div>
        <div className="bg-red-50 rounded-lg p-2"><p className="text-lg font-bold text-red-600">💥</p><p className="text-xs text-slate-600">平均強度</p></div>
        <div className="bg-emerald-50 rounded-lg p-2"><p className="text-lg font-bold text-emerald-600">⏱️</p><p className="text-xs text-slate-600">恢復時間</p></div>
      </div>
      <p className="text-xs text-slate-500 mt-2">次數下降、強度下降、恢復時間縮短 = 方法可能有效！建議每天固定時間記錄（例如睡前），持續 2～4 週。</p>
    </div>
  </div>,
  <div key="11" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">🧠 九大成因分析｜如果問題沒有那麼簡單？</h3>
    <p className="text-sm text-slate-600">有時做完 ABC，你還是會覺得「好像還有什麼地方不對。」這時候可以進一步使用九大成因分析。</p>
    <div className="bg-white rounded-xl border-2 border-slate-200 p-4">
      <p className="text-sm font-bold text-slate-700 mb-2">貓咪行為的九大成因</p>
      <div className="grid grid-cols-1 gap-1 text-xs text-slate-600">
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span><span>基因與品種傾向</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">2</span><span>早期經驗（0～12 週齡）</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">3</span><span>學習史（過去發生過什麼）</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">4</span><span>健康與生理狀態</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">5</span><span>環境與資源（空間、豐富度）</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">6</span><span>社交關係（與人、與其他貓）</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">7</span><span>資源競爭（食物、砂盆、睡覺處）</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">8</span><span>壓力源（搬家、新成員、噪音）</span></div>
        <div className="flex items-center gap-2"><span className="bg-slate-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">9</span><span>認知與老化（老年貓認知退化）</span></div>
      </div>
    </div>
    <div className="bg-purple-50 rounded-xl border border-purple-200 p-3">
      <p className="text-xs text-purple-700">貓咪的行為問題通常不是單一原因，而是多個因素疊加。如果只找到一個原因，有時候代表分析還不夠完整。</p>
    </div>
    <h3 className="text-sm font-bold text-slate-700 pt-2">三種使用方式</h3>
    <div className="space-y-2 text-xs text-slate-600">
      <p><b>情境一｜第一次用，想全面了解貓咪</b><br/>首頁 → 行為評估問卷 → 100 題 → 結果報告 → ABC 分析 → 訓練對策 → 35 個訓練技術 → 開始執行 → 每天追蹤</p>
      <p><b>情境二｜已經知道貓咪有亂尿問題</b><br/>首頁 → 亂尿／噴尿 → ABC 分析 → 訓練對策 → 訓練技術 → 開始執行 → 進度追蹤</p>
      <p><b>情境三｜想先學方法</b><br/>首頁 → 35 個訓練技術 → 找到想學的方法 → 閱讀詳細說明 → 回首頁 → 選擇行為 → ABC 分析</p>
    </div>
  </div>,
  <div key="12" className="space-y-4">
    <h3 className="text-lg font-black text-slate-800">❓ 飼主最常問的 7 個問題</h3>
    <div className="space-y-3 text-sm">
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <p className="font-bold text-slate-700 text-sm">1｜這個工具要錢嗎？</p>
        <p className="text-xs text-slate-600 mt-1">完全免費，不用註冊帳號。資料存在自己的手機或電腦裡，不收集個人資訊。</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <p className="font-bold text-slate-700 text-sm">2｜100 題一定要一次填完嗎？</p>
        <p className="text-xs text-slate-600 mt-1">不用！可以分 2～3 次完成，每次填 3～4 個維度，系統會自動保存進度。</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <p className="font-bold text-slate-700 text-sm">3｜結果顯示「嚴重」，是不是沒救？</p>
        <p className="text-xs text-slate-600 mt-1">不是！「嚴重」代表這個行為發生頻率高，需要優先處理。找到原因、用對方法，幾週內可能改善。</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <p className="font-bold text-slate-700 text-sm">4｜可以取代獸醫或貓咪行為師嗎？</p>
        <p className="text-xs text-slate-600 mt-1"><b>不能。</b>這是輔助工具。如果貓咪有突然行為改變、生理症狀、嚴重攻擊（咬到流血、無法靠近），請先帶去看獸醫。</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <p className="font-bold text-slate-700 text-sm">5｜訓練後沒有改善怎麼辦？</p>
        <p className="text-xs text-slate-600 mt-1">可能時間不夠（通常要 2～8 週）、執行不一致、方法不對、或還有更深層原因。持續 4～6 週沒改善，可以尋求 IAABC 認證貓咪行為諮詢師協助。</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <p className="font-bold text-slate-700 text-sm">6｜換手機或電腦，之前紀錄會不見嗎？</p>
        <p className="text-xs text-slate-600 mt-1">會。資料存在原本裝置的瀏覽器裡，重要資料建議定期截圖保存。</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <p className="font-bold text-slate-700 text-sm">7｜可以同時分析很多行為嗎？</p>
        <p className="text-xs text-slate-600 mt-1">ABC 一次只能分析一個行為。建議先處理一個，穩定改善後再處理下一個。不要同時處理太多，不然貓咪累、飼主也累。</p>
      </div>
    </div>
    <div className="bg-gradient-to-br from-cat-50 via-white to-emerald-50 rounded-2xl border-2 border-cat-200 p-5 text-center">
      <p className="text-3xl mb-2">🐱❤️</p>
      <p className="text-sm font-bold text-slate-700 leading-relaxed">貓咪不會說話，但牠們的行為，就是牠們正在說的話。<br/>亂尿不一定是在「搗蛋」，也可能是在說「我不舒服」「我害怕」。<br/>攻擊不一定是「壞脾氣」，也可能是在說「請不要這樣對我」。<br/>過度舔毛不一定只是「無聊」，可能是在說「我壓力好大」。</p>
      <p className="text-xs text-slate-500 mt-3 leading-relaxed">所以我們真正需要學習的，不只是「怎麼讓貓咪不要做這件事？」<br/>而是：<span className="font-bold text-cat-600">「牠為什麼會做這件事？」</span></p>
      <p className="text-xs text-cat-500 font-bold mt-3">理解貓咪，才是改變的開始。</p>
      <p className="text-sm font-black text-slate-800 mt-4">祝你和你的毛孩，一起過上更和諧的生活。🐾</p>
    </div>
  </div>,
];

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [shakeCard, setShakeCard] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [guidePage, setGuidePage] = useState(0);

  const selectBehavior = useCallback((id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  }, []);

  const handleStartAnalysis = useCallback(() => {
    if (!selected) {
      setShakeCard(true);
      setTimeout(() => setShakeCard(false), 500);
      const el = document.getElementById("behavior-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

  const queryString = selected ? `?behaviors=${selected}` : "";

  // ESC 鍵關閉手冊
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showGuide) {
        setShowGuide(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showGuide]);

  // 開啟手冊時禁止背景捲動
  useEffect(() => {
    if (showGuide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showGuide]);

  return (
    <div className="space-y-6">
      {/* Hero 區域 */}
      <div className="relative bg-gradient-to-br from-cat-50 via-white to-emerald-50 rounded-3xl border-2 border-cat-100 p-6 overflow-hidden">
        <div className="absolute top-3 right-3 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="35" rx="12" ry="10" fill="#F472B6" />
            <ellipse cx="18" cy="20" rx="5" ry="6" fill="#F472B6" />
            <ellipse cx="30" cy="15" rx="5" ry="6" fill="#F472B6" />
            <ellipse cx="42" cy="20" rx="5" ry="6" fill="#F472B6" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 opacity-10 rotate-12">
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <ellipse cx="30" cy="35" rx="12" ry="10" fill="#10B981" />
            <ellipse cx="18" cy="20" rx="5" ry="6" fill="#10B981" />
            <ellipse cx="30" cy="15" rx="5" ry="6" fill="#10B981" />
            <ellipse cx="42" cy="20" rx="5" ry="6" fill="#10B981" />
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
            <h1 className="text-2xl font-black text-slate-800 leading-tight">
              貓咪行為分析
            </h1>
            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
              選擇您想了解的問題行為，開始{" "}
              <span className="font-bold text-cat-600">ABC+E 分析</span>{" "}
              與對策規劃
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-4 pt-4 border-t border-cat-100/60">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-emerald-600">35</span>
            </div>
            <span>訓練技術</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <div className="w-6 h-6 rounded-full bg-cat-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-cat-600">12</span>
            </div>
            <span>行為維度</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-600">6</span>
            </div>
            <span>ABC功能</span>
          </div>
        </div>
      </div>

      {/* 問卷入口 */}
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
            <h2 className="font-black text-lg">行為評估問卷</h2>
            <p className="text-sm text-white/80 mt-0.5">
              100題專業評估，24個維度，自動識別需要關注的行為問題
            </p>
          </div>
          <ArrowRight
            size={24}
            className="shrink-0 text-white/80 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </Link>

      {/* 使用手冊按鈕 */}
      <button
        onClick={() => { setShowGuide(true); setGuidePage(0); }}
        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-cat-200 text-cat-600 font-bold py-3 rounded-xl hover:bg-cat-50 hover:border-cat-300 transition-all active:scale-[0.98]"
      >
        <BookOpenText size={20} />
        <span>📖 飼主使用手冊</span>
        <span className="text-xs text-cat-400 font-normal">（第一次使用請先看）</span>
      </button>

      {/* 貓咪提示條 */}
      <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-3 card-hover">
        <div className="shrink-0">
          <CatSVG size={48} pose="pointing" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-slate-700 font-bold">
            👇 請選擇一個您想了解的問題行為
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            點擊下方卡片選擇一項，即可進行 ABC+E 行為分析
          </p>
        </div>
      </div>

      {/* 行為卡片列表 - 單選 */}
      <div id="behavior-section" className={`grid gap-3 ${shakeCard ? 'animate-shake' : ''}`}>
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
              selected={selected === b.id}
              onToggle={() => selectBehavior(b.id)}
            />
          </div>
        ))}
      </div>

      {/* 底部浮動按鈕 */}
      <div className="fixed bottom-16 left-0 right-0 px-4 z-[60]">
        <div className="max-w-2xl mx-auto">
          {selected ? (
            <Link
              href={`/abc/${queryString}`}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cat-500 to-cat-600 hover:from-cat-600 hover:to-cat-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-cat-200 transition-all active:scale-[0.98] animate-fade-in-up"
            >
              <CheckCircle2 size={20} />
              <span>開始 ABC 分析</span>
              <ArrowRight size={20} />
            </Link>
          ) : (
            <button
              onClick={handleStartAnalysis}
              className="flex items-center justify-center gap-2 w-full bg-slate-200 text-slate-400 font-bold py-3.5 px-6 rounded-xl cursor-not-allowed transition-all"
            >
              <AlertCircle size={20} />
              <span>請先選擇一個行為</span>
            </button>
          )}
        </div>
      </div>

      {/* 功能入口 */}
      <div className="pt-4 pb-32">
        <div className="flex items-center gap-2 mb-3">
          <CatSVG size={32} pose="sitting" />
          <h2 className="text-sm font-bold text-slate-700">更多工具</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/techniques/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-cat-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cat-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-cat-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen size={22} className="text-cat-500" />
            </div>
            <span className="text-sm font-bold text-slate-700">35個訓練技術</span>
            <span className="text-[10px] text-slate-400">專業訓練方法總彙</span>
          </Link>
          <Link
            href="/analysis/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Search size={22} className="text-emerald-500" />
            </div>
            <span className="text-sm font-bold text-slate-700">ABC與九大成因</span>
            <span className="text-[10px] text-slate-400">科學行為分析工具</span>
          </Link>
          <Link
            href="/tracker/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BarChart3 size={22} className="text-blue-500" />
            </div>
            <span className="text-sm font-bold text-slate-700">進度追蹤</span>
            <span className="text-[10px] text-slate-400">記錄改善趨勢</span>
          </Link>
          <Link
            href="/abc/"
            className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100 to-transparent opacity-50 rounded-bl-full" />
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ClipboardList size={22} className="text-purple-500" />
            </div>
            <span className="text-sm font-bold text-slate-700">直接分析</span>
            <span className="text-[10px] text-slate-400">快速 ABC+E 分析</span>
          </Link>
        </div>
      </div>

      {/* 底部裝飾 */}
      <div className="flex justify-center pt-4 pb-8 opacity-40">
        <CatSVG size={80} pose="sleeping" />
      </div>

      {/* 使用手冊彈窗 */}
      {showGuide && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) setShowGuide(false); }}
        >
          <div className="bg-white w-full max-w-2xl h-[100dvh] sm:h-[80vh] sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden pt-14 sm:pt-0">
            {/* 頂部標題列 */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-cat-50 to-emerald-50 shrink-0">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <BookOpenText size={20} className="text-cat-500 shrink-0" />
                <span className="font-bold text-slate-700 truncate">📖 飼主使用手冊</span>
                <span className="text-xs text-slate-400 shrink-0">{guidePage + 1} / {guidePages.length}</span>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors border border-slate-200 shrink-0 ml-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* 內容區 */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="animate-fade-in">
                {guidePages[guidePage]}
              </div>
            </div>

            {/* 底部翻頁控制 */}
            <div className="flex items-center justify-between px-5 pt-4 pb-16 sm:pb-4 border-t border-slate-100 bg-white shrink-0">
              <button
                onClick={() => setGuidePage((p) => Math.max(0, p - 1))}
                disabled={guidePage === 0}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  guidePage === 0
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                    : "bg-cat-50 text-cat-600 hover:bg-cat-100 border border-cat-200"
                }`}
              >
                <ChevronLeft size={16} />
                上一頁
              </button>

              <div className="flex items-center gap-1.5">
                {guidePages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setGuidePage(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === guidePage ? "bg-cat-500" : "bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setGuidePage((p) => Math.min(guidePages.length - 1, p + 1))}
                disabled={guidePage === guidePages.length - 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  guidePage === guidePages.length - 1
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                    : "bg-cat-50 text-cat-600 hover:bg-cat-100 border border-cat-200"
                }`}
              >
                下一頁
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
