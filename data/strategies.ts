export interface StrategyStep {
  phase: '安全管理' | '核心訓練' | '日常管理'
  title: string
  description: string
  techniques: number[]
  priority: 'required' | 'recommended' | 'optional'
}

export interface BehaviorStrategy {
  behaviorId: string
  defaultStrategies: StrategyStep[]
  byFunction: Record<string, StrategyStep[]>
}

export const behaviorStrategies: BehaviorStrategy[] = [
  // === 排泄問題 (toileting) ===
  {
    behaviorId: 'toileting',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '醫療排查與環境管理',
        description: '先排除泌尿系統疾病，限制活動範圍預防失誤，徹底清除氣味。',
        techniques: [1, 23, 34],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '砂盆評估與偏好建立',
        description: '檢視砂盆位置、數量、大小、砂材、清潔度，建立貓咪喜歡的排泄環境。',
        techniques: [22, 23],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '壓力管理與多貓資源分散',
        description: '檢視是否有焦慮、標記因素或多貓資源競爭，增加資源分散度。',
        techniques: [2, 25, 26],
        priority: 'recommended',
      },
    ],
    byFunction: {
      anxiety: [
        { phase: '安全管理', title: '安全區域', description: '建立讓貓咪感到安全的排泄區域，減少壓力源。', techniques: [1, 19], priority: 'required' },
        { phase: '核心訓練', title: '減敏感', description: '對引發焦慮的線索進行減敏感。', techniques: [11, 12], priority: 'required' },
        { phase: '日常管理', title: '壓力源移除', description: '找出並減少環境中的壓力源，檢視壓力堆疊。', techniques: [2], priority: 'recommended' },
      ],
      control: [
        { phase: '安全管理', title: '管理標記區域', description: '限制進入標記區域，使用圍欄，徹底清除氣味。', techniques: [1, 34], priority: 'required' },
        { phase: '核心訓練', title: '建立新習慣', description: '在新的固定地點建立排泄習慣，使用喜歡的砂材。', techniques: [3, 22], priority: 'required' },
        { phase: '日常管理', title: '絕育考量', description: '與獸醫討論絕育對標記行為的影響。', techniques: [], priority: 'optional' },
      ],
    },
  },

  // === 破壞行為 (destructive) ===
  {
    behaviorId: 'destructive',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '保護家具與提供合法出口',
        description: '暫時保護沙發，在貓咪喜歡抓的位置附近提供合適抓板。',
        techniques: [1, 17, 2],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '抓撓訓練與替代行為',
        description: '教導貓咪使用抓板，嘗試不同材質、高度、方向與位置。',
        techniques: [7, 9, 17],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '環境豐富化與氣味管理',
        description: '確保貓咪有足夠的身心活動，尊重氣味標記需求。',
        techniques: [2, 34],
        priority: 'recommended',
      },
    ],
    byFunction: {
      'self-reinforce': [
        { phase: '安全管理', title: '保護家具 + 合法出口', description: '暫時保護沙發，在原本喜歡抓的位置放置合適抓板。', techniques: [1, 17], priority: 'required' },
        { phase: '核心訓練', title: '抓板獎勵與材質匹配', description: '當貓使用抓板時標記並獎勵，嘗試不同材質與方向。', techniques: [3, 4, 17], priority: 'required' },
        { phase: '日常管理', title: '伸展與氣味需求', description: '確保抓板能滿足伸展與氣味標記需求，定期更新抓板。', techniques: [2, 34], priority: 'recommended' },
      ],
      control: [
        { phase: '安全管理', title: '保留氣味標記點', description: '不要完全洗掉貓咪的氣味標記，在新位置建立合法標記。', techniques: [1, 34], priority: 'required' },
        { phase: '核心訓練', title: '新位置標記建立', description: '在新抓板上使用貓草或費洛蒙吸引貓咪標記。', techniques: [7, 9, 17], priority: 'required' },
        { phase: '日常管理', title: '領域安全感', description: '確保貓咪對環境有足夠的控制感與領域安全感。', techniques: [2, 18, 19], priority: 'recommended' },
      ],
    },
  },

  // === 攻擊行為 (aggression) ===
  {
    behaviorId: 'aggression',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '立即安全防護與醫療排查',
        description: '攻擊行為具有高度危險性，必須先確保人貓安全，排除疼痛因素。',
        techniques: [1, 13, 33],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '區分攻擊類型並建立替代行為',
        description: '區分玩耍攻擊、撫摸誘發攻擊、轉移性攻擊或恐懼防禦，針對類型處理。',
        techniques: [9, 10, 14, 28, 29],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '專業協助與長期計畫',
        description: '嚴重攻擊行為建議尋求獸醫行為醫學或合格行為專業人員協助。',
        techniques: [2, 35],
        priority: 'recommended',
      },
    ],
    byFunction: {
      'self-reinforce': [
        { phase: '安全管理', title: '停止人體遊戲', description: '立即停止用手腳與貓玩耍，避免強化玩耍攻擊。', techniques: [1, 10], priority: 'required' },
        { phase: '核心訓練', title: '遠距離玩具與掠食遊戲', description: '使用互動玩具模擬完整掠食序列，讓貓有捕獲滿足感。', techniques: [15, 29], priority: 'required' },
        { phase: '日常管理', title: '日常節律與豐富化', description: '建立固定遊戲時間，確保貓咪有足夠的合法掠食出口。', techniques: [2, 20], priority: 'recommended' },
      ],
      escape: [
        { phase: '安全管理', title: '給予空間與選擇權', description: '恐懼性攻擊需要距離管理，絕對不可懲罰。', techniques: [1, 14, 19], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與自主接觸', description: '從極遠距離開始，讓貓控制接觸程度，建立「人靠近=好事」。', techniques: [11, 12, 14], priority: 'required' },
        { phase: '日常管理', title: '信任重建', description: '透過合作照護與預測性互動重建信任。', techniques: [13], priority: 'recommended' },
      ],
    },
  },

  // === 過度發聲 (vocalization) ===
  {
    behaviorId: 'vocalization',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '醫療排查與需求確認',
        description: '先排除疾病、疼痛、老化認知或感官退化，確認不是真正需求表達。',
        techniques: [1, 30],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '調整互動模式與替代行為',
        description: '安靜時主動獎勵，教導更適當的溝通方式，調整作息與食物安排。',
        techniques: [3, 5, 9, 20, 31],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '環境豐富化與日常節律',
        description: '降低整體焦慮與無聊，建立可預測的生活節奏。',
        techniques: [2, 16, 20],
        priority: 'recommended',
      },
    ],
    byFunction: {
      attention: [
        { phase: '安全管理', title: '移除關注獎勵', description: '確定喵叫功能為求關注後，調整為安靜時主動獎勵。', techniques: [3, 5, 31], priority: 'required' },
        { phase: '核心訓練', title: '教導安靜替代行為', description: '教導「坐下看主人」或「去指定位置」來取得關注。', techniques: [7, 8, 9], priority: 'required' },
        { phase: '日常管理', title: '預防性關注', description: '在貓咪安靜時主動給予關注，減少牠用喵叫求關注的需求。', techniques: [5, 2], priority: 'recommended' },
      ],
      anxiety: [
        { phase: '安全管理', title: '安全空間', description: '建立讓貓咪感到安全的區域，減少環境壓力。', techniques: [1, 19], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與反制約', description: '對引發焦慮的線索進行減敏感，讓刺激與好事連結。', techniques: [11, 12], priority: 'required' },
        { phase: '日常管理', title: '壓力管理', description: '檢視壓力堆疊，給予充分恢復時間與安靜空間。', techniques: [2], priority: 'recommended' },
      ],
    },
  },

  // === 多貓衝突 (intercat) ===
  {
    behaviorId: 'intercat',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '立即分離與安全防護',
        description: '多貓衝突具有高度危險性，先確保所有貓咪安全，避免進一步傷害。',
        techniques: [1, 25, 26],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '資源分散與視覺阻隔',
        description: '使用 N+1 原則分散所有資源，建立視覺與氣味阻隔，找出觸發物。',
        techniques: [25, 26, 34],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '重新介紹與長期管理',
        description: '從極低強度開始重新介紹，必要時尋求貓科行為專業協助。',
        techniques: [11, 12, 25],
        priority: 'recommended',
      },
    ],
    byFunction: {
      escape: [
        { phase: '安全管理', title: '資源分散與躲藏處', description: '確保每隻貓都能安全、獨立地使用資源，不被另一隻阻擋。', techniques: [1, 26, 19], priority: 'required' },
        { phase: '核心訓練', title: '視覺阻隔與重新介紹', description: '使用門欄或紗門讓貓咪逐步重新適應彼此氣味與存在。', techniques: [25, 11, 12], priority: 'required' },
        { phase: '日常管理', title: '領域安全感', description: '增加垂直空間與多個休息區，讓每隻貓都有專屬安全區域。', techniques: [18, 2], priority: 'recommended' },
      ],
      control: [
        { phase: '安全管理', title: '氣味管理與資源分散', description: '不要完全洗掉原有氣味標記，使用費洛蒙輔助，分散資源。', techniques: [1, 26, 34], priority: 'required' },
        { phase: '核心訓練', title: '建立新領域秩序', description: '透過環境設計讓每隻貓都有足夠的領域控制感。', techniques: [18, 19, 25], priority: 'required' },
        { phase: '日常管理', title: '監控與調整', description: '持續觀察互動模式，隨時調整資源配置與空間設計。', techniques: [35, 2], priority: 'recommended' },
      ],
    },
  },

  // === 恐懼與逃避 (fear) ===
  {
    behaviorId: 'fear',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '安全空間與距離管理',
        description: '建立安全區域，讓貓咪有地方可以退避，避免強迫接觸。',
        techniques: [1, 14, 19],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '減敏感與反制約',
        description: '從極低強度開始，讓刺激與好事連結，讓貓主動接近。',
        techniques: [11, 12, 14],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '自主接觸與信任重建',
        description: '讓貓控制互動程度，透過預測性互動重建信任。',
        techniques: [13, 20, 35],
        priority: 'recommended',
      },
    ],
    byFunction: {
      escape: [
        { phase: '安全管理', title: '給予空間與躲藏處', description: '恐懼性反應需要距離管理，絕對不可強迫抓抱。', techniques: [1, 14, 19], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與自主接觸', description: '從極遠距離開始，讓貓控制接觸程度，建立安全感。', techniques: [11, 12, 14], priority: 'required' },
        { phase: '日常管理', title: '信任重建', description: '透過合作照護與預測性互動重建信任。', techniques: [13, 20], priority: 'recommended' },
      ],
      anxiety: [
        { phase: '安全管理', title: '安全空間與可預測性', description: '建立安全區域，保持日常節律的可預測性。', techniques: [1, 19, 20], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與放鬆訓練', description: '對引發焦慮的線索進行減敏感，教導自我調節。', techniques: [11, 12], priority: 'required' },
        { phase: '日常管理', title: '壓力管理', description: '檢視壓力堆疊，給予充分恢復時間與安靜空間。', techniques: [2], priority: 'recommended' },
      ],
    },
  },

  // === 分離焦慮 (separation) ===
  {
    behaviorId: 'separation',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '建立安全獨處空間',
        description: '確保貓咪獨處時有安全、舒適、有豐富化的環境。',
        techniques: [1, 19, 2],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '漸進式獨處訓練',
        description: '從極短時間開始，逐步延長獨處時間，建立「離開=會回來」的信任。',
        techniques: [3, 5, 20],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '環境豐富化與日常節律',
        description: '增加益智餵食與環境刺激，建立可預測的離開/返回儀式。',
        techniques: [2, 16, 20],
        priority: 'recommended',
      },
    ],
    byFunction: {
      anxiety: [
        { phase: '安全管理', title: '安全空間與費洛蒙', description: '建立讓貓咪感到安全的獨處區域，使用費洛蒙輔助。', techniques: [1, 19], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與反制約', description: '對離開線索（拿鑰匙、穿外套）進行減敏感，讓離開預告與好事連結。', techniques: [11, 12], priority: 'required' },
        { phase: '日常管理', title: '壓力管理', description: '檢視壓力堆疊，增加環境豐富化與合法出口。', techniques: [2, 16], priority: 'recommended' },
      ],
      attention: [
        { phase: '安全管理', title: '移除過度關注', description: '調整互動模式，避免只在貓咪焦慮時給予關注。', techniques: [3, 31], priority: 'required' },
        { phase: '核心訓練', title: '教導獨處替代行為', description: '教導貓咪在獨處時有適當的活動，如益智餵食。', techniques: [7, 8, 16], priority: 'required' },
        { phase: '日常管理', title: '預防性關注', description: '在貓咪安靜獨處時主動給予獎勵，強化獨處的正面經驗。', techniques: [5, 2], priority: 'recommended' },
      ],
    },
  },

  // === 強迫行為 (compulsive) ===
  {
    behaviorId: 'compulsive',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '醫療排查與皮膚保護',
        description: '先排除皮膚疾病、過敏、疼痛或內分泌問題，保護已受損皮膚。',
        techniques: [1, 13, 33],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '壓力源移除與減敏感',
        description: '找出並減少環境壓力源，對引發焦慮的線索進行減敏感。',
        techniques: [11, 12, 19],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '環境豐富化與替代活動',
        description: '增加環境豐富化與替代活動，讓貓咪有其他出口釋放壓力。',
        techniques: [2, 15, 16],
        priority: 'recommended',
      },
    ],
    byFunction: {
      anxiety: [
        { phase: '安全管理', title: '安全空間與壓力源移除', description: '建立讓貓咪感到安全的區域，找出並移除壓力源。', techniques: [1, 19], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與放鬆訓練', description: '對引發焦慮的線索進行減敏感，教導替代的自我安撫行為。', techniques: [11, 12], priority: 'required' },
        { phase: '日常管理', title: '壓力管理與豐富化', description: '檢視壓力堆疊，增加環境豐富化與合法出口。', techniques: [2, 15, 16], priority: 'recommended' },
      ],
      'self-reinforce': [
        { phase: '安全管理', title: '保護皮膚與分散注意', description: '使用保護衣或伊莉莎白頸圈暫時保護，增加替代活動。', techniques: [1, 10], priority: 'required' },
        { phase: '核心訓練', title: '替代行為與捕捉', description: '捕捉並獎勵非舔毛行為，提供其他自我照護出口。', techniques: [5, 9], priority: 'required' },
        { phase: '日常管理', title: '環境調整', description: '增加玩耍與探索機會，減少無聊與重複行為的機會。', techniques: [2, 15], priority: 'recommended' },
      ],
    },
  },

  // === 精力過盛/玩耍攻擊 (hyperactivity) ===
  {
    behaviorId: 'hyperactivity',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '環境管理與合法出口',
        description: '確保貓咪有足夠的合法活動空間與玩具，避免破壞家具。',
        techniques: [1, 2, 15],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '結構化遊戲與掠食序列',
        description: '每日固定時間進行完整掠食遊戲，滿足捕獵需求並建立冷靜儀式。',
        techniques: [15, 4, 20],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '環境豐富化與尋食行為',
        description: '增加益智餵食與環境刺激，讓貓咪有持續的合法活動出口。',
        techniques: [2, 16, 18],
        priority: 'recommended',
      },
    ],
    byFunction: {
      'self-reinforce': [
        { phase: '安全管理', title: '提供合法掠食出口', description: '確保貓咪有足夠的互動玩具與自主玩耍機會。', techniques: [1, 15], priority: 'required' },
        { phase: '核心訓練', title: '掠食遊戲與冷靜儀式', description: '模擬完整掠食序列，遊戲結束後給予食物與休息。', techniques: [15, 4, 20], priority: 'required' },
        { phase: '日常管理', title: '日常節律與豐富化', description: '建立固定遊戲時間，增加環境豐富化與垂直空間。', techniques: [2, 18, 20], priority: 'recommended' },
      ],
      tangible: [
        { phase: '安全管理', title: '環境管理', description: '保護易碎物品，提供足夠的合法活動區域。', techniques: [1, 2], priority: 'required' },
        { phase: '核心訓練', title: '替代行為與益智餵食', description: '教導貓咪使用益智玩具，將精力導向合法活動。', techniques: [9, 16], priority: 'required' },
        { phase: '日常管理', title: '環境豐富化', description: '增加探索與感官刺激機會，輪流替換玩具保持新鮮感。', techniques: [2, 16], priority: 'recommended' },
      ],
    },
  },

  // === 衝門/逃跑 (escaping) ===
  {
    behaviorId: 'escaping',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '門口管理與環境控制',
        description: '使用圍欄、雙門系統或指定房間，防止貓咪反覆成功衝門。',
        techniques: [1, 21],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '指定位置與響片訓練',
        description: '教導貓咪在門開啟時留在指定位置，使用響片標記正確行為。',
        techniques: [4, 7, 8, 21],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '環境豐富化與探索滿足',
        description: '確保貓咪有足夠的室內探索與感官刺激，減少對門外的渴望。',
        techniques: [2, 16],
        priority: 'recommended',
      },
    ],
    byFunction: {
      'self-reinforce': [
        { phase: '安全管理', title: '絕對避免衝門成功', description: '一旦衝門成功，行為會被極度強化。使用雙門系統或圍欄。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: '指定位置與逐步增加難度', description: '門關閉->指定位置->獎勵。逐步增加開門難度。', techniques: [4, 7, 8, 21], priority: 'required' },
        { phase: '日常管理', title: '合法探索出口', description: '提供窗邊觀察點、嗅聞墊等安全替代探索活動。', techniques: [2, 16], priority: 'recommended' },
      ],
      tangible: [
        { phase: '安全管理', title: '減少門外誘惑', description: '遮蔽窗戶或門縫，減少貓咪看到外部刺激。', techniques: [1, 34], priority: 'required' },
        { phase: '核心訓練', title: 'Premack 原則', description: '「先留在指定位置 -> 再獲得獎勵或互動」。', techniques: [3, 8, 21], priority: 'required' },
        { phase: '日常管理', title: '室內豐富化', description: '確保貓咪有足夠的室內活動與感官刺激。', techniques: [2], priority: 'recommended' },
      ],
    },
  },

  // === 社交不適 (social) ===
  {
    behaviorId: 'social',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '安全空間與自主接觸',
        description: '建立安全區域，讓貓咪可以自主選擇是否與人互動，避免強迫接觸。',
        techniques: [1, 14, 19],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '減敏感與反制約',
        description: '從極低強度開始，讓陌生人/情境與好事連結，讓貓主動接近。',
        techniques: [11, 12, 14],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '信任重建與日常節律',
        description: '透過預測性互動重建信任，保持穩定的生活節奏降低壓力。',
        techniques: [13, 20, 35],
        priority: 'recommended',
      },
    ],
    byFunction: {
      escape: [
        { phase: '安全管理', title: '給予空間與躲藏處', description: '社交不適需要距離管理，絕對不可強迫互動。', techniques: [1, 14, 19], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與自主接觸', description: '從極遠距離開始，讓貓控制接觸程度，建立安全感。', techniques: [11, 12, 14], priority: 'required' },
        { phase: '日常管理', title: '信任重建', description: '透過合作照護與預測性互動重建信任。', techniques: [13, 20], priority: 'recommended' },
      ],
      anxiety: [
        { phase: '安全管理', title: '安全空間與可預測性', description: '建立安全區域，保持日常節律的可預測性。', techniques: [1, 19, 20], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與放鬆訓練', description: '對引發焦慮的社交線索進行減敏感，教導自我調節。', techniques: [11, 12], priority: 'required' },
        { phase: '日常管理', title: '壓力管理', description: '檢視壓力堆疊，給予充分恢復時間與安靜空間。', techniques: [2], priority: 'recommended' },
      ],
    },
  },

  // === 過度尋求關注 (attention) ===
  {
    behaviorId: 'attention',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '調整互動模式',
        description: '確認不是真正需求後，調整為安靜時主動獎勵，而非只在貓咪討拍時回應。',
        techniques: [3, 5, 31],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '教導安靜替代行為',
        description: '教導「坐下看主人」或「去指定位置」來取得關注，取代推蹭與叫聲。',
        techniques: [7, 8, 9],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '預防性關注與環境豐富化',
        description: '在貓咪安靜時主動給予關注，增加環境豐富化減少無聊。',
        techniques: [5, 2, 16],
        priority: 'recommended',
      },
    ],
    byFunction: {
      attention: [
        { phase: '安全管理', title: '移除不當關注獎勵', description: '調整為只在貓咪安靜時給予關注，忽略過度討拍行為。', techniques: [3, 5, 31], priority: 'required' },
        { phase: '核心訓練', title: '教導適當的溝通方式', description: '教導貓咪用安靜坐下或去指定位置來取得關注。', techniques: [7, 8, 9], priority: 'required' },
        { phase: '日常管理', title: '預防性關注', description: '在貓咪安靜時主動給予高品質互動，減少討拍需求。', techniques: [5, 2], priority: 'recommended' },
      ],
      tangible: [
        { phase: '安全管理', title: '管理獎勵時機', description: '確保只在適當行為後給予獎勵，避免無意中強化討拍。', techniques: [3, 5], priority: 'required' },
        { phase: '核心訓練', title: '替代行為與益智餵食', description: '教導貓咪使用益智玩具，將注意力需求導向合法活動。', techniques: [9, 16], priority: 'required' },
        { phase: '日常管理', title: '環境豐富化', description: '增加環境刺激與自主活動機會，減少對人類關注的過度依賴。', techniques: [2, 16], priority: 'recommended' },
      ],
    },
  },
]

export function getStrategies(behaviorId: string, functionId?: string): StrategyStep[] {
  const behavior = behaviorStrategies.find(b => b.behaviorId === behaviorId)
  if (!behavior) return []

  if (functionId && behavior.byFunction[functionId]) {
    return behavior.byFunction[functionId]
  }

  return behavior.defaultStrategies
}
