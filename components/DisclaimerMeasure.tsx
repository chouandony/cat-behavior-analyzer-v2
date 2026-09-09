'use client'

import { useEffect } from 'react'

/**
 * 測量底部免責聲明列的實際高度，寫入 CSS 變數 --disclaimer-height。
 * 讓問卷底部導覽列（fixed）與 main 的 padding-bottom 能動態避開免責聲明，
 * 任何螢幕寬度、任何字體載入時機、含安全區（iPhone home indicator）都不會被遮蓋。
 */
export default function DisclaimerMeasure() {
  useEffect(() => {
    const el = document.getElementById('site-disclaimer')
    if (!el) return

    const update = () => {
      document.documentElement.style.setProperty(
        '--disclaimer-height',
        `${el.offsetHeight}px`
      )
    }

    update()

    // 免責聲明文字會隨螢幕寬度換行、字體載入而改變高度，持續監聽
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
    }
  }, [])

  return null
}
