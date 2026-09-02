'use client'

import { cn } from '@/lib/utils'
import type { Behavior } from '@/data/behaviors'
import CatSVG from '@/components/CatSVG'

interface Props {
  behavior: Behavior
  selected: boolean
  onToggle: () => void
}

const dangerConfig = {
  low: {
    border: 'border-l-forest-400',
    bg: 'bg-forest-50',
    text: 'text-forest-600',
    label: '低',
    dot: 'bg-forest-400',
  },
  medium: {
    border: 'border-l-warm-400',
    bg: 'bg-warm-50',
    text: 'text-warm-600',
    label: '中',
    dot: 'bg-warm-400',
  },
  high: {
    border: 'border-l-red-400',
    bg: 'bg-red-50',
    text: 'text-red-600',
    label: '高',
    dot: 'bg-red-400',
  },
}

export default function BehaviorCard({ behavior, selected, onToggle }: Props) {
  const danger = dangerConfig[behavior.dangerLevel]

  return (
    <button
      onClick={onToggle}
      className={cn(
        'w-full text-left rounded-xl border p-4 transition-all duration-200 relative overflow-hidden group',
        'hover:shadow-md active:scale-[0.98] card-hover',
        danger.border,
        selected
          ? 'bg-cat-50 border-cat-400 shadow-sm ring-2 ring-cat-200'
          : 'bg-white border-earth-200 hover:border-cat-300'
      )}
    >
      {selected && (
        <div className="absolute top-2 right-2 opacity-10">
          <CatSVG size={60} pose="waving" />
        </div>
      )}

      <div className="flex items-start gap-3 relative z-10">
        <div className={cn(
          'w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform group-hover:scale-110',
          danger.bg
        )}>
          {behavior.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-earth-500">{behavior.name}</h3>
              <span className={cn(
                'text-[10px] px-1.5 py-0.5 rounded-full font-bold',
                danger.bg,
                danger.text
              )}>
                {danger.label}
              </span>
            </div>
            <div
              className={cn(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all',
                selected
                  ? 'border-cat-500 bg-cat-500 scale-110'
                  : 'border-earth-300'
              )}
            >
              {selected && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <p className="text-sm text-earth-400 mt-1 leading-relaxed">{behavior.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {behavior.commonCauses.slice(0, 3).map((cause) => (
              <span
                key={cause}
                className="text-xs px-2 py-0.5 rounded-full bg-earth-100 text-earth-500 border border-earth-200/50"
              >
                {cause}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  )
}
