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
        <main className="max-w-2xl mx-auto px-4 py-6 pb-24 relative z-10">
          {children}
        </main>

        {/* 底部裝飾 */}
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-400 via-cat-400 to-forest-400 opacity-60" />
      </body>
    </html>
  )
}
