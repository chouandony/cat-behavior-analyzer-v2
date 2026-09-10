import Image from 'next/image'

type Pose =
  | 'sitting'
  | 'standing'
  | 'waving'
  | 'sleeping'
  | 'pointing'
  // 以下為素材提供的額外姿勢，可自由使用
  | 'playbow'
  | 'rollup'
  | 'butterfly'
  | 'lookingback'

interface CatSVGProps {
  className?: string
  size?: number
  pose?: Pose
}

// 各姿勢素材的寬高比（width / height）
const poseAspect: Record<Pose, number> = {
  sitting: 269 / 500,
  standing: 315 / 500,
  waving: 292 / 500,
  sleeping: 727 / 500,
  pointing: 256 / 500,
  playbow: 307 / 500,
  rollup: 427 / 500,
  butterfly: 311 / 500,
  lookingback: 274 / 500,
}

const poseFile = (pose: Pose) => `/cats/${pose}.png`

/**
 * 虎斑貓插畫元件（點陣版）。
 * 介面與舊版手刻 SVG 完全一致：size 控制高度，className 可覆蓋樣式。
 * waving=揮手(首頁Hero/問卷)、pointing=走向你伸爪(提示列)、sitting=正面坐姿(更多工具)、
 * sleeping=捲曲熟睡(底部裝飾)、standing=舔手手(背景裝飾)
 */
function CatSVG({ className = '', size = 120, pose = 'sitting' }: CatSVGProps) {
  const width = Math.round(size * poseAspect[pose])
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={poseFile(pose)}
      alt={`虎斑貓插畫（${pose}）`}
      width={width}
      height={size}
      className={className}
      style={{ width, height: size }}
    />
  )
}

export default CatSVG
export { CatSVG }
