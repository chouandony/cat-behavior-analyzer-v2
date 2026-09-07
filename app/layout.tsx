import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import CatSVG from '@/components/CatSVG'

export const metadata: Metadata = {
  title: '貓咪行為分析與訓練對策 | Cat Behavior Analyzer',
  description: '從天性判讀到訓練技術選擇的完整流程。分析貓咪不良行為的 ABC+E 模式，找到最適合的訓練對策，記錄進度改善成效。',
  keywords: '貓咪訓練, 行為分析, 亂尿, 咬人, 抓沙發, 多貓衝突, 正向訓練, ABC分析, 貓行為',
  openGraph: {
    title: '貓咪行為分析與訓練對策',
    description: '從天性判讀到訓練技術選擇的完整流程',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-cream min-h-screen text-earth-500 relative overflow-x-hidden">
        {/* 背景裝飾 - 角落貓咪 */}
        <div className="fixed top-20 right-2 opacity-[0.06] pointer-events-none z-0 hidden lg:block">
          <CatSVG size={180} pose="standing" />
        </div>
        <div className="fixed bottom-10 left-2 opacity-[0.05] pointer-events-none z-0 rotate-[-10deg]">
          <CatSVG size={150} pose="sleeping" />
        </div>

        {/* 點狀背景 */}
        <div className="fixed inset-0 dot-pattern opacity-30 pointer-events-none z-0" />

        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-6 pb-28 relative z-10">
          {children}
        </main>

        {/* 底部免責聲明 */}
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white text-[10px] py-2 px-4 text-center z-50">
          <p>
            本工具僅供輔助參考，不構成專業獸醫或動物行為諮詢建議。評估結果與訓練對策基於學術研究框架獨立編寫，非官方授權的標準化問卷。若您依據本工具建議操作，導致寵物受傷、行為問題惡化或人員受傷，開發者不負相關法律責任。如有嚴重行為問題，請尋求認證行為諮詢師協助。
          </p>
        </div>

        {/* 底部裝飾 */}
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-400 via-cat-400 to-forest-400 opacity-60" />
      </body>
    </html>
  )
}
