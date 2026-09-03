export interface Technique {
  id: string;
  name: string;
  category: string;
  description: string;
  steps: string[];
  bestFor: string[];
  difficulty: "easy" | "medium" | "hard";
  duration: string;
  tools: string[];
}

export const techniques: Technique[] = [
  {
    id: "clicker-training",
    name: "響片訓練 (Clicker Training)",
    category: "基礎溝通",
    description: "使用響片建立精確的行為標記，加速學習效率。",
    steps: [
      "先進行充電：按響片後立即給零食，重複10-20次直到貓咪聽到聲音就期待食物",
      "在貓咪做出目標行為的瞬間按下響片",
      "響片後立即給予零食（1秒內）",
      "逐步將行為連結到指令詞",
      "最終淡出響片與零食，改為間歇性獎勵"
    ],
    bestFor: ["aggression", "hyperactivity", "attention", "social", "escaping"],
    difficulty: "easy",
    duration: "1-2週基礎建立",
    tools: ["響片", "高價值零食"]
  },
  {
    id: "target-training",
    name: "目標棒訓練 (Target Training)",
    category: "基礎溝通",
    description: "教導貓咪觸碰或跟隨目標棒，用於引導位置與轉移注意力。",
    steps: [
      "將目標棒（或手指）放在貓咪面前5公分處",
      "當貓咪靠近或觸碰目標時，立即標記並獎勵",
      "逐步增加距離與高度，引導貓咪移動",
      "加入指令詞碰或目標",
      "應用於引導貓咪離開禁止區域或前往指定位置"
    ],
    bestFor: ["aggression", "destructive", "escaping", "hyperactivity"],
    difficulty: "easy",
    duration: "3-7天",
    tools: ["目標棒/手指", "零食"]
  },
  {
    id: "stationing",
    name: "指定位置訓練 (Stationing)",
    category: "行為管理",
    description: "教導貓咪在特定地點待命，用於門口管理與訪客應對。",
    steps: [
      "選擇一個貓咪喜歡的高處平台或墊子作為指定位置",
      "引導貓咪跳上平台，標記並獎勵",
      "逐步增加待在平台上的時間",
      "加入指令詞上去或待命",
      "在門鈴響或開門時，先引導貓咪前往指定位置再處理門口事務"
    ],
    bestFor: ["escaping", "social", "intercat", "aggression"],
    difficulty: "medium",
    duration: "1-2週",
    tools: ["貓跳台/墊子", "零食", "響片"]
  },
  {
    id: "desensitization",
    name: "減敏訓練 (Desensitization)",
    category: "情緒調節",
    description: "以極低強度反覆呈現恐懼源，讓貓咪逐漸習慣並降低反應。",
    steps: [
      "確定貓咪的恐懼閾值（剛好不會害怕的距離/強度）",
      "在閾值以下呈現觸發物1-2秒",
      "觀察貓咪反應：應保持放鬆（耳朵向前、尾巴自然）",
      "重複多次，每次結束後給予獎勵",
      "當貓咪完全無反應時，逐步增加強度（縮短距離、提高音量）"
    ],
    bestFor: ["fear", "social", "aggression", "intercat"],
    difficulty: "medium",
    duration: "數週至數月",
    tools: ["觸發物（錄音/圖片/實物）", "高價值零食", "計時器"]
  },
  {
    id: "counter-conditioning",
    name: "反制約 (Counter-Conditioning)",
    category: "情緒調節",
    description: "將負面聯結轉化為正面聯結，讓貓咪對恐懼源產生好感。",
    steps: [
      "確認恐懼源（如吸塵器、陌生人）",
      "在恐懼源出現的同時，給予貓咪最喜愛的食物或遊戲",
      "恐懼源消失時，立即停止零食/遊戲",
      "重複配對直到貓咪聽到/看到恐懼源就期待好事",
      "逐步增加恐懼源強度，同時維持正面聯結"
    ],
    bestFor: ["fear", "aggression", "social", "intercat"],
    difficulty: "medium",
    duration: "2-8週",
    tools: ["高價值零食", "恐懼源（可控版本）"]
  },
  {
    id: "extinction",
    name: "消退法 (Extinction)",
    category: "行為矯正",
    description: "完全移除問題行為的強化物，讓行為自然消失。",
    steps: [
      "確定問題行為的強化物（如：喵叫->獲得食物、抓門->主人開門）",
      "徹底且一致地移除強化物",
      "預期消退爆發：行為在改善前可能暫時惡化",
      "堅持不懈，全家統一執行",
      "同時教導貓咪替代行為（如：安靜時才給食物）"
    ],
    bestFor: ["vocalization", "attention", "destructive"],
    difficulty: "hard",
    duration: "2-6週",
    tools: ["耐心", "全家一致性", "替代行為計畫"]
  },
  {
    id: "differential-reinforcement",
    name: "差別增強 (Differential Reinforcement)",
    category: "行為矯正",
    description: "獎勵與問題行為不相容的替代行為，同時忽略問題行為。",
    steps: [
      "選擇一個與問題行為互斥的替代行為（如：安靜躺臥 vs 過度喵叫）",
      "在替代行為出現時立即給予高價值獎勵",
      "完全忽略問題行為（不看不說不摸）",
      "逐步延長替代行為所需的持續時間",
      "在不同情境中練習，達到泛化"
    ],
    bestFor: ["attention", "vocalization", "hyperactivity", "destructive"],
    difficulty: "medium",
    duration: "2-4週",
    tools: ["高價值零食", "響片", "觀察記錄表"]
  },
  {
    id: "shaping",
    name: "塑形法 (Shaping)",
    category: "進階訓練",
    description: "逐步獎勵接近目標行為的小步驟，最終達成複雜行為。",
    steps: [
      "確定最終目標行為（如：自願進入外出籠）",
      "將目標分解為微小步驟：看籠子->走向籠子->靠近籠子->頭進籠子->前腳進籠子->全身進籠子",
      "從第一步開始，只獎勵當前步驟",
      "當貓咪穩定完成當前步驟後，提高標準至下一步",
      "每個小步驟都給予獎勵，最終連結成完整行為"
    ],
    bestFor: ["fear", "social", "aggression", "escaping"],
    difficulty: "hard",
    duration: "數週至數月",
    tools: ["響片", "零食", "分解計畫表"]
  },
  {
    id: "lure-reward",
    name: "誘導獎勵法 (Lure & Reward)",
    category: "基礎訓練",
    description: "使用零食引導貓咪做出目標動作，快速建立新行為。",
    steps: [
      "手持高價值零食，放在貓咪鼻前讓其聞到",
      "緩慢移動零食引導貓咪跟隨（如：向上引導坐下，向側引導轉身）",
      "當貓咪完成目標動作時，立即給予該零食",
      "重複5-10次後，嘗試加入手勢或口令",
      "逐步減少零食引導，改為手勢/口令+隨機獎勵"
    ],
    bestFor: ["hyperactivity", "attention", "social", "destructive"],
    difficulty: "easy",
    duration: "1-3天/動作",
    tools: ["高價值零食", "安靜環境"]
  },
  {
    id: "capturing",
    name: "捕捉法 (Capturing)",
    category: "基礎訓練",
    description: "等待並標記貓咪自然出現的好行為，強化其發生頻率。",
    steps: [
      "隨身攜帶零食與響片",
      "觀察貓咪自然出現的目標行為（如：安靜躺臥、自己玩玩具）",
      "在行為出現的瞬間按下響片",
      "立即給予零食獎勵",
      "加入指令詞，讓貓咪將詞語與行為連結"
    ],
    bestFor: ["attention", "hyperactivity", "destructive", "compulsive"],
    difficulty: "easy",
    duration: "持續進行",
    tools: ["響片", "隨身零食袋"]
  },
  {
    id: "interactive-play",
    name: "互動式遊戲治療 (Interactive Play Therapy)",
    category: "行為管理",
    description: "透過結構化遊戲滿足捕獵需求，改善多種問題行為。",
    steps: [
      "每日固定時間進行2-3次遊戲",
      "使用逗貓棒模擬獵物：地面爬行->空中飛舞->躲藏",
      "讓貓咪多次成功撲擊，避免挫折",
      "遊戲結尾讓貓咪殺死獵物，給予滿足感",
      "結束後立即提供小餐點，完成捕獵-進食-睡眠循環"
    ],
    bestFor: ["hyperactivity", "aggression", "destructive", "attention"],
    difficulty: "easy",
    duration: "每日進行，持續終身",
    tools: ["逗貓棒", "踢踢玩具", "零食"]
  },
  {
    id: "food-puzzle",
    name: "益智餵食 (Food Puzzles)",
    category: "環境豐富化",
    description: "使用益智玩具餵食，延長進食時間並提供心理刺激。",
    steps: [
      "從簡單的益智球或漏食玩具開始",
      "將每日部分乾糧放入益智玩具",
      "觀察貓咪使用情況，調整難度",
      "逐步引入更複雜的益智玩具（滑動拼圖、旋轉盤）",
      "輪流使用不同玩具，保持新鮮感"
    ],
    bestFor: ["hyperactivity", "destructive", "attention", "separation", "compulsive"],
    difficulty: "easy",
    duration: "持續進行",
    tools: ["益智餵食玩具", "乾糧/零食"]
  },
  {
    id: "scent-swapping",
    name: "氣味交換 (Scent Swapping)",
    category: "多貓管理",
    description: "交換貓咪的氣味物品，讓彼此習慣對方氣味，降低敵意。",
    steps: [
      "收集每隻貓的氣味（用毛巾擦拭臉頰與身側）",
      "將A貓的毛巾放在B貓的環境中（遠處開始）",
      "觀察B貓反應：若放鬆則給予獎勵；若緊張則放更遠",
      "隔天交換，將B貓毛巾放在A貓環境",
      "逐步將氣味物品靠近貓咪的休息與進食區"
    ],
    bestFor: ["intercat", "social", "fear"],
    difficulty: "easy",
    duration: "1-2週",
    tools: ["乾淨毛巾", "零食"]
  },
  {
    id: "barrier-feeding",
    name: "隔離餵食 (Barrier Feeding)",
    category: "多貓管理",
    description: "讓貓咪在視線阻隔但可聽到/聞到對方的情況下同時進食。",
    steps: [
      "使用門或柵欄將衝突貓咪分隔",
      "在門的兩側同時放置食物",
      "剛開始距離較遠，逐步靠近門縫",
      "若任何一方表現緊張，增加距離",
      "當雙方都能在門前放鬆進食時，嘗試開門縫讓彼此看到"
    ],
    bestFor: ["intercat", "aggression"],
    difficulty: "medium",
    duration: "2-4週",
    tools: ["嬰兒門/柵欄", "食物碗"]
  },
  {
    id: "time-out",
    name: "暫停隔離 (Time-Out)",
    category: "行為矯正",
    description: "在攻擊或過度興奮時，將貓咪短暫移至無趣環境冷靜。",
    steps: [
      "選擇一個安全但無趣的房間（無玩具、無景觀、無人陪伴）",
      "在攻擊行為發生瞬間，平靜地將貓咪抱至冷靜房間",
      "隔離時間1-2分鐘（不可過長，否則貓咪會忘記原因）",
      "釋放時保持低調，不給予額外關注",
      "重複直到貓咪學會控制攻擊衝動"
    ],
    bestFor: ["aggression", "hyperactivity", "intercat"],
    difficulty: "medium",
    duration: "1-3週",
    tools: ["冷靜房間", "計時器"]
  },
  {
    id: "jackpot-reward",
    name: "大獎獎勵 (Jackpot Reward)",
    category: "進階訓練",
    description: "在貓咪做出特別困難或重要的好行為時，給予超大獎勵。",
    steps: [
      "準備大獎零食（如雞肉泥、鮪魚）",
      "平時使用普通零食訓練",
      "當貓咪在困難情境中做出正確選擇（如：訪客來訪時保持冷靜）",
      "給予連續多口大獎零食，並搭配興奮的語氣讚美",
      "讓貓咪明確知道這個行為特別值得"
    ],
    bestFor: ["fear", "social", "aggression", "escaping"],
    difficulty: "easy",
    duration: "即時應用",
    tools: ["大獎零食（雞肉泥/鮪魚）"]
  },
  {
    id: "habituation",
    name: "習慣化 (Habituation)",
    category: "情緒調節",
    description: "讓貓咪長時間低強度接觸刺激物，直到自然習慣。",
    steps: [
      "選擇貓咪輕微敏感的刺激（如門鈴錄音、外出籠）",
      "以極低強度持續呈現（如門鈴音量調至最小）",
      "不給予任何反應（不安慰也不責罵），讓貓咪自行適應",
      "每天重複15-30分鐘",
      "當貓咪完全無反應時，逐步增加強度"
    ],
    bestFor: ["fear", "social", "vocalization"],
    difficulty: "easy",
    duration: "1-4週",
    tools: ["錄音/實物", "計時器"]
  },
  {
    id: "mat-training",
    name: "墊子訓練 (Mat Training)",
    category: "行為管理",
    description: "教導貓咪在特定墊子上休息，用於訪客接待與餐桌禮儀。",
    steps: [
      "選擇一塊專用墊子或毛巾",
      "將墊子放在貓咪常休息處，當貓咪踏上時標記獎勵",
      "逐步將墊子移動到目標位置（如餐桌旁、門口）",
      "加入指令詞墊子或去你的床",
      "在需要貓咪離開某處時，引導至墊子並獎勵"
    ],
    bestFor: ["attention", "social", "destructive", "escaping"],
    difficulty: "easy",
    duration: "1週",
    tools: ["專用墊子/毛巾", "零食"]
  },
  {
    id: "incompatible-behavior",
    name: "不相容行為訓練 (Incompatible Behavior)",
    category: "行為矯正",
    description: "教導貓咪一個無法同時進行問題行為的替代動作。",
    steps: [
      "確定問題行為（如：抓沙發）",
      "選擇不相容行為（如：抓貓抓板——貓無法同時抓沙發與抓板）",
      "在貓咪可能抓沙發的情境前，引導至抓板",
      "在抓板上給予大量獎勵",
      "讓抓板比沙發更有吸引力（位置、材質、貓草）"
    ],
    bestFor: ["destructive", "aggression", "attention", "toileting"],
    difficulty: "medium",
    duration: "2-4週",
    tools: ["替代物品", "零食", "貓草"]
  },
  {
    id: "systematic-desensitization",
    name: "系統性減敏 (Systematic Desensitization)",
    category: "情緒調節",
    description: "結合減敏與放鬆訓練，專門用於深度恐懼與焦慮。",
    steps: [
      "先教導貓咪一個放鬆信號（如：在特定墊子上=放鬆時間）",
      "在貓咪完全放鬆時，以最低強度呈現恐懼源",
      "若貓咪保持放鬆，持續並逐步增加強度",
      "若貓咪緊張，立即降低強度並回到放鬆狀態",
      "每次訓練以成功維持放鬆結束"
    ],
    bestFor: ["fear", "aggression", "social", "separation"],
    difficulty: "hard",
    duration: "數週至數月",
    tools: ["放鬆墊子", "恐懼源", "零食", "費洛蒙"]
  },
  {
    id: "behavioral-adjustment",
    name: "行為調整計畫 (Behavior Adjustment Plan)",
    category: "綜合方案",
    description: "針對複雜問題行為制定的多管齊下方案，通常需專業行為師指導。",
    steps: [
      "完整記錄問題行為的ABC（前因-行為-後果）",
      "識別所有強化物與觸發因子",
      "同時執行環境管理、行為矯正與情緒調節",
      "設定可量化的階段性目標",
      "每週檢視進度並調整策略",
      "必要時與獸醫行為師合作，評估藥物輔助"
    ],
    bestFor: ["aggression", "compulsive", "separation", "intercat"],
    difficulty: "hard",
    duration: "數月",
    tools: ["行為記錄表", "專業諮詢", "可能的藥物輔助"]
  },
  {
    id: "pheromone-therapy",
    name: "費洛蒙療法 (Pheromone Therapy)",
    category: "環境管理",
    description: "使用人工合成的貓咪費洛蒙，營造安全與放鬆的環境氛圍。",
    steps: [
      "選擇適合的費洛蒙產品（擴散器、噴霧、項圈）",
      "擴散器應覆蓋貓咪主要活動區域（每50-70平方公尺一個）",
      "持續使用至少4週才能評估效果",
      "在預期壓力事件前，於特定區域噴灑噴霧型費洛蒙",
      "可與其他行為治療並行使用"
    ],
    bestFor: ["fear", "intercat", "separation", "compulsive", "toileting"],
    difficulty: "easy",
    duration: "持續使用",
    tools: ["費洛蒙擴散器/噴霧", "電源插座"]
  },
  {
    id: "environmental-enrichment",
    name: "環境豐富化 (Environmental Enrichment)",
    category: "環境管理",
    description: "透過優化居住環境，滿足貓咪的生理與心理需求。",
    steps: [
      "設置垂直空間：貓跳台、書架、窗台床",
      "提供隱蔽處：紙箱、隧道、高處平台",
      "設置觀景窗：餵鳥器、魚缸、戶外貓帳篷",
      "輪流替換玩具，每週引入新刺激",
      "確保有充足的抓撓出口與獨處空間"
    ],
    bestFor: ["hyperactivity", "destructive", "attention", "compulsive", "separation"],
    difficulty: "easy",
    duration: "持續進行",
    tools: ["貓跳台", "紙箱", "玩具", "窗台床"]
  },
  {
    id: "litter-box-optimization",
    name: "砂盆優化方案 (Litter Box Optimization)",
    category: "環境管理",
    description: "系統性優化砂盆設置，解決排泄相關問題。",
    steps: [
      "遵循N+1原則設置砂盆數量",
      "測試不同貓砂類型（凝結、礦砂、豆腐砂、松木砂）",
      "砂盆尺寸應為貓咪身長1.5倍",
      "放置於安靜、通風、易達且遠離食物的位置",
      "每日清理，每週徹底清洗",
      "開放式與封閉式並存，觀察貓咪偏好"
    ],
    bestFor: ["toileting"],
    difficulty: "easy",
    duration: "1-2週測試期",
    tools: ["多種貓砂", "大尺寸砂盆", "酵素清潔劑"]
  },
  {
    id: "medical-workup",
    name: "醫療排查 (Medical Workup)",
    category: "基礎排查",
    description: "優先排除生理疾病導致的行為問題，是所有行為治療的第一步。",
    steps: [
      "預約獸醫進行全面健康檢查",
      "根據症狀進行針對性檢查（尿液分析、血液檢查、X光、超音波）",
      "詳細記錄行為問題的時間、頻率與情境，提供獸醫參考",
      "若確診疾病，優先治療生理問題",
      "治療後追蹤行為是否改善"
    ],
    bestFor: ["toileting", "aggression", "vocalization", "compulsive"],
    difficulty: "easy",
    duration: "1-2週",
    tools: ["獸醫預約", "行為記錄", "醫療報告"]
  },
  {
    id: "progressive-relaxation",
    name: "漸進式放鬆訓練 (Progressive Relaxation)",
    category: "情緒調節",
    description: "教導貓咪在特定信號下進入放鬆狀態，用於焦慮管理。",
    steps: [
      "選擇一個安靜房間與專用墊子",
      "在貓咪已經放鬆時，輕輕撫摸並給予零食，建立墊子=放鬆的聯結",
      "加入放鬆信號（如輕柔音樂、特定口令）",
      "每天固定時間進行5-10分鐘放鬆練習",
      "在壓力事件前，引導貓咪至放鬆墊子並播放信號"
    ],
    bestFor: ["fear", "separation", "compulsive", "social"],
    difficulty: "medium",
    duration: "2-4週",
    tools: ["放鬆墊子", "輕柔音樂", "零食"]
  },
  {
    id: "response-substitution",
    name: "反應替代 (Response Substitution)",
    category: "行為矯正",
    description: "在觸發情境出現時，立即引導貓咪做出替代反應。",
    steps: [
      "確定觸發情境（如：門鈴響）",
      "預先教導一個替代行為（如：聽到門鈴->去指定位置）",
      "在觸發情境發生前，準備好引導工具",
      "觸發出現瞬間，立即引導貓咪執行替代行為",
      "成功執行後給予大獎獎勵"
    ],
    bestFor: ["escaping", "aggression", "vocalization", "fear"],
    difficulty: "medium",
    duration: "2-4週",
    tools: ["目標棒", "零食", "響片"]
  },
  {
    id: "calm-holding",
    name: "冷靜抱持法 (Calm Holding)",
    category: "基礎護理",
    description: "教導貓咪接受溫和約束，降低護理與醫療過程的壓力。",
    steps: [
      "從極短時間開始（1秒），輕輕固定貓咪後立即放開並獎勵",
      "逐步延長固定時間",
      "在固定期間輕聲說話並給予零食",
      "配合毛巾包裹技巧（貓咪捲餅），限制活動但保持舒適",
      "與日常正面互動穿插進行，避免只有護理時才固定"
    ],
    bestFor: ["aggression", "fear", "social"],
    difficulty: "medium",
    duration: "2-4週",
    tools: ["毛巾", "零食", "安靜環境"]
  },
  {
    id: "settle-on-cue",
    name: "安靜指令訓練 (Settle on Cue)",
    category: "行為管理",
    description: "教導貓咪在指令下安靜躺下，用於過度興奮與焦慮情境。",
    steps: [
      "觀察並捕捉貓咪自然趴下的時刻，標記並獎勵",
      "加入指令詞安靜或趴下",
      "逐步延長維持趴下的時間",
      "在不同情境中練習（遊戲後、訪客來訪前）",
      "當貓咪過度興奮時，用安靜指令引導冷靜"
    ],
    bestFor: ["hyperactivity", "attention", "aggression", "separation"],
    difficulty: "medium",
    duration: "2-3週",
    tools: ["響片", "零食", "墊子"]
  },
  {
    id: "premack-principle",
    name: "普馬克原則 (Premack Principle)",
    category: "進階訓練",
    description: "用貓咪喜歡的行為作為獎勵，強化不喜歡但必要的行為。",
    steps: [
      "確定貓咪喜歡的行為（如：抓貓抓板、玩逗貓棒）",
      "確定需要強化的行為（如：被摸肚子、進外出籠）",
      "要求貓咪先完成目標行為，才能進行喜歡的行為",
      "例如：進外出籠->才能出門散步；被摸肚子->才能玩最愛的玩具",
      "讓貓咪理解先完成A，才能做B"
    ],
    bestFor: ["aggression", "fear", "escaping", "social"],
    difficulty: "hard",
    duration: "2-4週",
    tools: ["貓咪喜歡的活動", "目標行為設置"]
  },
  {
    id: "choice-training",
    name: "選擇權訓練 (Choice Training)",
    category: "進階訓練",
    description: "讓貓咪在訓練中保有選擇權，提升合作意願與自信心。",
    steps: [
      "提供兩個選項（如：A.被摸頭 B.自己玩玩具）",
      "觀察貓咪的選擇，尊重其決定",
      "若選擇互動，進行短暫正面互動後再給予下一個選擇",
      "若選擇獨處，完全尊重並稍後再提供選擇",
      "讓貓咪理解你有選擇，而且選擇互動會有好事發生"
    ],
    bestFor: ["fear", "social", "aggression", "attention"],
    difficulty: "medium",
    duration: "持續進行",
    tools: ["選項設置", "零食", "玩具"]
  }
];

export function getTechniquesForBehavior(behaviorId: string): Technique[] {
  return techniques.filter((t) => t.bestFor.includes(behaviorId));
}

export function getTechniquesByCategory(category: string): Technique[] {
  return techniques.filter((t) => t.category === category);
}

export function searchTechniques(query: string): Technique[] {
  const q = query.toLowerCase();
  return techniques.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.steps.some((s) => s.toLowerCase().includes(q))
  );
}

export const categories = [
  "基礎溝通",
  "基礎訓練",
  "行為管理",
  "行為矯正",
  "情緒調節",
  "環境管理",
  "多貓管理",
  "進階訓練",
  "基礎排查",
  "綜合方案",
  "基礎護理",
];
