import Image from 'next/image'

type Pose =
  | 'sitting'
  | 'standing'
  | 'waving'
  | 'sleeping'
  | 'pointing'
  | 'playbow'
  | 'rollup'
  | 'butterfly'
  | 'lookingback'
  | 'wink'
  | 'lookingup'
  | 'ball'

interface CatSVGProps {
  className?: string
  size?: number
  pose?: Pose
}

// 各姿勢素材的寬高比（width / height）
const poseAspect: Record<Pose, number> = {
  sitting: 269 / 500,     // 第三套：正面坐姿
  standing: 315 / 500,    // 第二套：坐姿舔前爪
  waving: 292 / 500,      // 第三套：後腿站立舉爪
  sleeping: 727 / 500,    // 第三套：熟睡（寬版）
  pointing: 256 / 500,    // 第三套：走向你
  playbow: 307 / 500,     // 第三套：趴姿瞇眼
  rollup: 427 / 500,      // 第三套：翻肚
  butterfly: 311 / 500,   // 第二套：坐姿舉右爪撲蝶
  lookingback: 274 / 500, // 第一套：回頭看
  wink: 523 / 500,        // 第三套：眨眼趴著（寬版）
  lookingup: 275 / 500,   // 第三套：坐姿仰望
  ball: 289 / 500,        // 第三套：玩球
}

const poseFile = (pose: Pose) => `/cats/${pose}.png`

/**
 * 虎斑貓插畫元件（點陣版，彙集三套素材）。
 * 介面不變：size 控制高度，className 可覆蓋樣式。
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
