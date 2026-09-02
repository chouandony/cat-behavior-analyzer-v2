'use client'

interface Props {
  className?: string
  size?: number
  pose?: 'sitting' | 'standing' | 'waving' | 'sleeping' | 'pointing' | 'stretching'
}

export default function CatSVG({ className = '', size = 120, pose = 'sitting' }: Props) {
  const poses = {
    sitting: (
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* 身體 */}
        <ellipse cx="100" cy="140" rx="42" ry="36" fill="#2D2D3A" />
        <ellipse cx="100" cy="140" rx="25" ry="22" fill="#F5F0E8" />
        {/* 胸部白毛 */}
        <ellipse cx="100" cy="128" rx="18" ry="16" fill="#FFFFFF" />
        {/* 頭部 */}
        <ellipse cx="100" cy="78" rx="36" ry="32" fill="#2D2D3A" />
        {/* 臉部白毛 */}
        <ellipse cx="100" cy="82" rx="16" ry="18" fill="#FFFFFF" />
        <path d="M100 58 L100 96" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        {/* 左眼 */}
        <ellipse cx="88" cy="74" rx="9" ry="10" fill="#FFFFFF" />
        <circle cx="89" cy="75" r="5" fill="#E86A33" />
        <circle cx="90" cy="74" r="2.5" fill="#1a1a2e" />
        <circle cx="87.5" cy="72.5" r="1.5" fill="#FFFFFF" />
        {/* 右眼 */}
        <ellipse cx="112" cy="74" rx="9" ry="10" fill="#FFFFFF" />
        <circle cx="111" cy="75" r="5" fill="#E86A33" />
        <circle cx="110" cy="74" r="2.5" fill="#1a1a2e" />
        <circle cx="112.5" cy="72.5" r="1.5" fill="#FFFFFF" />
        {/* 鼻子 */}
        <ellipse cx="100" cy="88" rx="5" ry="4" fill="#E86A33" />
        {/* 嘴巴 */}
        <path d="M96 92 Q100 96 104 92" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* 鬍鬚 */}
        <path d="M72 84 Q60 82 55 80" stroke="#D4C9B0" strokeWidth="1.5" fill="none" />
        <path d="M72 88 Q60 88 55 88" stroke="#D4C9B0" strokeWidth="1.5" fill="none" />
        <path d="M128 84 Q140 82 145 80" stroke="#D4C9B0" strokeWidth="1.5" fill="none" />
        <path d="M128 88 Q140 88 145 88" stroke="#D4C9B0" strokeWidth="1.5" fill="none" />
        {/* 左耳 */}
        <path d="M72 56 L62 28 L82 48" fill="#2D2D3A" />
        <path d="M70 52 L64 34 L78 46" fill="#F5F0E8" />
        {/* 右耳 */}
        <path d="M128 56 L138 28 L118 48" fill="#2D2D3A" />
        <path d="M130 52 L136 34 L122 46" fill="#F5F0E8" />
        {/* 前腿 */}
        <rect x="80" y="168" width="10" height="24" rx="5" fill="#FFFFFF" />
        <rect x="110" y="168" width="10" height="24" rx="5" fill="#FFFFFF" />
        {/* 爪子 */}
        <ellipse cx="85" cy="191" rx="7" ry="4" fill="#F5F0E8" />
        <ellipse cx="115" cy="191" rx="7" ry="4" fill="#F5F0E8" />
        {/* 尾巴 */}
        <path d="M138 155 Q160 145 165 130 Q170 115 162 120" stroke="#2D2D3A" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M158 138 Q165 130 168 122" stroke="#F5F0E8" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* 項圈 */}
        <path d="M78 108 Q100 118 122 108" stroke="#E86A33" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="114" r="3" fill="#D4AF37" />
      </svg>
    ),
    standing: (
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="132" rx="40" ry="32" fill="#2D2D3A" />
        <ellipse cx="100" cy="132" rx="24" ry="20" fill="#F5F0E8" />
        <ellipse cx="100" cy="122" rx="16" ry="14" fill="#FFFFFF" />
        <ellipse cx="100" cy="70" rx="34" ry="30" fill="#2D2D3A" />
        <path d="M100 48 L100 90" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        <ellipse cx="100" cy="74" rx="14" ry="16" fill="#FFFFFF" />
        <ellipse cx="88" cy="68" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="89" cy="69" r="4.5" fill="#E86A33" />
        <circle cx="90" cy="68" r="2" fill="#1a1a2e" />
        <ellipse cx="112" cy="68" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="111" cy="69" r="4.5" fill="#E86A33" />
        <circle cx="110" cy="68" r="2" fill="#1a1a2e" />
        <ellipse cx="100" cy="82" rx="5" ry="3.5" fill="#E86A33" />
        <path d="M96 86 Q100 89 104 86" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 52 L60 26 L78 44" fill="#2D2D3A" />
        <path d="M132 52 L140 26 L122 44" fill="#2D2D3A" />
        <rect x="78" y="158" width="9" height="28" rx="4.5" fill="#FFFFFF" />
        <rect x="113" y="158" width="9" height="28" rx="4.5" fill="#FFFFFF" />
        <rect x="88" y="160" width="8" height="26" rx="4" fill="#FFFFFF" />
        <rect x="104" y="160" width="8" height="26" rx="4" fill="#FFFFFF" />
        <ellipse cx="82.5" cy="185" rx="6" ry="3.5" fill="#F5F0E8" />
        <ellipse cx="117.5" cy="185" rx="6" ry="3.5" fill="#F5F0E8" />
        <ellipse cx="92" cy="186" rx="5" ry="3" fill="#F5F0E8" />
        <ellipse cx="108" cy="186" rx="5" ry="3" fill="#F5F0E8" />
        <path d="M136 150 Q155 140 160 128 Q164 118 158 122" stroke="#2D2D3A" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M78 100 Q100 108 122 100" stroke="#E86A33" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="105" r="3" fill="#D4AF37" />
      </svg>
    ),
    waving: (
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="135" rx="40" ry="34" fill="#2D2D3A" />
        <ellipse cx="100" cy="135" rx="24" ry="20" fill="#F5F0E8" />
        <ellipse cx="100" cy="125" rx="16" ry="14" fill="#FFFFFF" />
        <ellipse cx="100" cy="72" rx="34" ry="30" fill="#2D2D3A" />
        <path d="M100 50 L100 92" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        <ellipse cx="100" cy="76" rx="14" ry="16" fill="#FFFFFF" />
        <ellipse cx="88" cy="70" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="89" cy="71" r="4.5" fill="#E86A33" />
        <circle cx="90" cy="70" r="2" fill="#1a1a2e" />
        <ellipse cx="112" cy="70" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="111" cy="71" r="4.5" fill="#E86A33" />
        <circle cx="110" cy="70" r="2" fill="#1a1a2e" />
        <ellipse cx="100" cy="84" rx="5" ry="3.5" fill="#E86A33" />
        <path d="M96 88 Q100 91 104 88" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 54 L60 28 L78 46" fill="#2D2D3A" />
        <path d="M132 54 L140 28 L122 46" fill="#2D2D3A" />
        {/* 舉起的前爪 */}
        <rect x="68" y="120" width="9" height="26" rx="4.5" fill="#FFFFFF" transform="rotate(-25 72.5 133)" />
        <ellipse cx="62" cy="114" rx="6" ry="4" fill="#F5F0E8" transform="rotate(-25 62 114)" />
        <rect x="115" y="158" width="9" height="28" rx="4.5" fill="#FFFFFF" />
        <rect x="86" y="160" width="8" height="26" rx="4" fill="#FFFFFF" />
        <rect x="104" y="160" width="8" height="26" rx="4" fill="#FFFFFF" />
        <ellipse cx="119.5" cy="185" rx="6" ry="3.5" fill="#F5F0E8" />
        <ellipse cx="90" cy="186" rx="5" ry="3" fill="#F5F0E8" />
        <ellipse cx="108" cy="186" rx="5" ry="3" fill="#F5F0E8" />
        <path d="M138 152 Q158 142 162 130 Q166 120 160 124" stroke="#2D2D3A" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M78 102 Q100 110 122 102" stroke="#E86A33" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="107" r="3" fill="#D4AF37" />
        {/* 小愛心 */}
        <path d="M140 55 Q140 50 145 50 Q150 50 150 55 Q150 62 145 65 Q140 62 140 55" fill="#E86A33" opacity="0.8" />
      </svg>
    ),
    sleeping: (
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="148" rx="46" ry="30" fill="#2D2D3A" />
        <ellipse cx="100" cy="148" rx="28" ry="18" fill="#F5F0E8" />
        <ellipse cx="100" cy="140" rx="18" ry="12" fill="#FFFFFF" />
        <ellipse cx="85" cy="108" rx="30" ry="26" fill="#2D2D3A" />
        <path d="M85 88 L85 120" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        <ellipse cx="85" cy="110" rx="12" ry="14" fill="#FFFFFF" />
        <path d="M74 104 Q77 101 80 104" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M90 104 Q93 101 96 104" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="85" cy="116" rx="4" ry="2.5" fill="#E86A33" />
        <path d="M60 92 L54 74 L50 82 Q48 88 56 92" fill="#2D2D3A" />
        <path d="M55 142 Q100 154 145 142" stroke="#2D2D3A" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M60 144 Q100 152 140 144" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
        <rect x="66" y="164" width="8" height="18" rx="4" fill="#FFFFFF" />
        <rect x="94" y="164" width="8" height="18" rx="4" fill="#FFFFFF" />
        <rect x="122" y="164" width="8" height="18" rx="4" fill="#FFFFFF" />
        <ellipse cx="70" cy="181" rx="5" ry="3" fill="#F5F0E8" />
        <ellipse cx="98" cy="181" rx="5" ry="3" fill="#F5F0E8" />
        <ellipse cx="126" cy="181" rx="5" ry="3" fill="#F5F0E8" />
        <path d="M62 102 Q85 108 108 102" stroke="#E86A33" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="85" cy="106" r="2.5" fill="#D4AF37" />
        {/* Zzz */}
        <text x="125" y="88" fontSize="18" fontWeight="bold" fill="#8b7d6b" opacity="0.6">Z</text>
        <text x="135" y="76" fontSize="14" fontWeight="bold" fill="#8b7d6b" opacity="0.5">z</text>
        <text x="143" y="66" fontSize="10" fontWeight="bold" fill="#8b7d6b" opacity="0.4">z</text>
      </svg>
    ),
    pointing: (
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="135" rx="40" ry="34" fill="#2D2D3A" />
        <ellipse cx="100" cy="135" rx="24" ry="20" fill="#F5F0E8" />
        <ellipse cx="100" cy="125" rx="16" ry="14" fill="#FFFFFF" />
        <ellipse cx="100" cy="72" rx="34" ry="30" fill="#2D2D3A" />
        <path d="M100 50 L100 92" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        <ellipse cx="100" cy="76" rx="14" ry="16" fill="#FFFFFF" />
        <ellipse cx="88" cy="70" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="89" cy="71" r="4.5" fill="#E86A33" />
        <circle cx="90" cy="70" r="2" fill="#1a1a2e" />
        <ellipse cx="112" cy="70" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="111" cy="71" r="4.5" fill="#E86A33" />
        <circle cx="110" cy="70" r="2" fill="#1a1a2e" />
        <ellipse cx="100" cy="84" rx="5" ry="3.5" fill="#E86A33" />
        <path d="M96 88 Q100 91 104 88" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 54 L60 28 L78 46" fill="#2D2D3A" />
        <path d="M132 54 L140 28 L122 46" fill="#2D2D3A" />
        <rect x="78" y="158" width="9" height="28" rx="4.5" fill="#FFFFFF" />
        <rect x="113" y="158" width="9" height="28" rx="4.5" fill="#FFFFFF" />
        <rect x="86" y="160" width="8" height="26" rx="4" fill="#FFFFFF" />
        <rect x="104" y="160" width="8" height="26" rx="4" fill="#FFFFFF" />
        <ellipse cx="82.5" cy="185" rx="6" ry="3.5" fill="#F5F0E8" />
        <ellipse cx="117.5" cy="185" rx="6" ry="3.5" fill="#F5F0E8" />
        <ellipse cx="90" cy="186" rx="5" ry="3" fill="#F5F0E8" />
        <ellipse cx="108" cy="186" rx="5" ry="3" fill="#F5F0E8" />
        <path d="M138 152 Q158 142 162 130 Q166 120 160 124" stroke="#2D2D3A" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M78 102 Q100 110 122 102" stroke="#E86A33" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="107" r="3" fill="#D4AF37" />
        {/* 指向的鼻子 */}
        <ellipse cx="100" cy="80" rx="7" ry="4" fill="#E86A33" />
        <path d="M97 76 L100 70 L103 76" fill="#E86A33" />
      </svg>
    ),
    stretching: (
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="145" rx="42" ry="30" fill="#2D2D3A" />
        <ellipse cx="100" cy="145" rx="26" ry="18" fill="#F5F0E8" />
        <ellipse cx="100" cy="138" rx="18" ry="12" fill="#FFFFFF" />
        <ellipse cx="100" cy="85" rx="34" ry="28" fill="#2D2D3A" />
        <path d="M100 65 L100 100" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        <ellipse cx="100" cy="88" rx="14" ry="16" fill="#FFFFFF" />
        <ellipse cx="88" cy="82" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="89" cy="83" r="4.5" fill="#E86A33" />
        <circle cx="90" cy="82" r="2" fill="#1a1a2e" />
        <ellipse cx="112" cy="82" rx="8" ry="9" fill="#FFFFFF" />
        <circle cx="111" cy="83" r="4.5" fill="#E86A33" />
        <circle cx="110" cy="82" r="2" fill="#1a1a2e" />
        <ellipse cx="100" cy="95" rx="5" ry="3.5" fill="#E86A33" />
        <path d="M96 99 Q100 102 104 99" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 66 L60 40 L78 58" fill="#2D2D3A" />
        <path d="M132 66 L140 40 L122 58" fill="#2D2D3A" />
        {/* 前爪伸展 */}
        <rect x="55" y="120" width="10" height="28" rx="5" fill="#FFFFFF" transform="rotate(-35 60 134)" />
        <ellipse cx="48" cy="112" rx="6" ry="4" fill="#F5F0E8" transform="rotate(-35 48 112)" />
        <rect x="135" y="120" width="10" height="28" rx="5" fill="#FFFFFF" transform="rotate(35 140 134)" />
        <ellipse cx="152" cy="112" rx="6" ry="4" fill="#F5F0E8" transform="rotate(35 152 112)" />
        <rect x="86" y="168" width="8" height="24" rx="4" fill="#FFFFFF" />
        <rect x="106" y="168" width="8" height="24" rx="4" fill="#FFFFFF" />
        <ellipse cx="90" cy="191" rx="5" ry="3" fill="#F5F0E8" />
        <ellipse cx="110" cy="191" rx="5" ry="3" fill="#F5F0E8" />
        <path d="M138 160 Q158 150 162 138 Q166 128 160 132" stroke="#2D2D3A" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M78 112 Q100 120 122 112" stroke="#E86A33" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="117" r="3" fill="#D4AF37" />
      </svg>
    ),
  }

  return poses[pose] || poses.sitting
}
