export interface Technique {
  id: number;
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
    name: "合作照護 (Cooperative Care)",
    category: "基礎護理",
    description: "教導貓咪主動參與醫療與護理過程，降低壓力。",
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
    id: 14,
    name: "自主接觸 (Choice & Control)",
    category: "進階訓練",
    description: "讓貓咪控制互動程度，提升自信心與信任感。",
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
  },
  {
    id: 15,
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
    id: 16,
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
    id: 17,
    name: "貓抓板訓練 (Scratching Post Training)",
    category: "基礎訓練",
    description: "教導貓咪使用合法抓撓出口，保護家具。",
    steps: [
      "在家中各區域設置不同材質的抓板（直立式、水平式、斜面）",
      "抓板位置應靠近貓咪常抓撓的家具或睡眠區",
      "使用貓草或貓薄荷吸引貓咪使用抓板",
      "在不被允許抓撓的家具上覆蓋雙面膠、鋁箔或塑膠墊",
      "每當貓咪使用抓板時給予零食獎勵，建立正向聯結"
    ],
    bestFor: ["destructive", "aggression", "attention", "toileting"],
    difficulty: "easy",
    duration: "1-2週",
    tools: ["貓抓板", "貓草", "零食"]
  },
  {
    id: 18,
    name: "垂直空間設置 (Vertical Space)",
    category: "環境管理",
    description: "設置貓跳台與高處平台，滿足貓咪的領域與安全感需求。",
    steps: [
      "設置多層貓跳台與空中走道，鼓勵垂直活動",
      "提供隱蔽處：紙箱、隧道、高處平台",
      "確保每隻貓都有獨立的躲藏處",
      "使用費洛蒙擴散器降低整體環境緊張度",
      "暫時使用嬰兒門或柵欄創造視線阻隔但可氣味交換的空間"
    ],
    bestFor: ["intercat", "fear", "aggression", "hyperactivity"],
    difficulty: "easy",
    duration: "持續進行",
    tools: ["貓跳台", "紙箱", "費洛蒙"]
  },
  {
    id: 19,
    name: "安全空間建立 (Safe Space)",
    category: "環境管理",
    description: "建立讓貓咪感到安全的專屬區域，用於壓力管理。",
    steps: [
      "選擇一個安靜房間與專用墊子",
      "在貓咪已經放鬆時，輕輕撫摸並給予零食，建立墊子=放鬆的聯結",
      "加入放鬆信號（如輕柔音樂、特定口令）",
      "每天固定時間進行5-10分鐘放鬆練習",
      "在壓力事件前，引導貓咪至放鬆墊子並播放信號"
    ],
    bestFor: ["fear", "separation", "compulsive", "social"],
    difficulty: "easy",
    duration: "1-2週",
    tools: ["放鬆墊子", "輕柔音樂", "零食"]
  },
  {
    id: 20,
    name: "日常節律 (Daily Routine)",
    category: "行為管理",
    description: "建立可預測的日常節律，降低貓咪的焦慮與不確定感。",
    steps: [
      "固定餵食時間表，避免貓咪將發聲與獲食連結",
      "每日固定3-4個短暫互動時段（每次5-10分鐘高品質陪伴）",
      "建立可預測的離開/返回儀式",
      "睡前進行充足遊戲+餵食，減少夜間因飢餓或無聊而叫",
      "使用自動餵食器定時供餐，移除「人=食物來源」的聯結"
    ],
    bestFor: ["vocalization", "separation", "hyperactivity", "attention"],
    difficulty: "easy",
    duration: "持續進行",
    tools: ["計時器", "自動餵食器", "行事曆"]
  },
  {
    id: 21,
    name: "門口禮儀 (Door Manners)",
    category: "行為管理",
    description: "教導貓咪在門開啟時保持冷靜，防止衝門逃跑。",
    steps: [
      "在遠離門口處設置高價值零食點，練習「聽到門聲→去零食點」",
      "從模擬開門聲開始，逐步增加真實度",
      "只有在貓咪留在指定位置時才開門",
      "若貓咪衝向門口，立即關門並等待冷靜後再嘗試",
      "全家人必須一致執行：開門前先確認貓咪位置"
    ],
    bestFor: ["escaping", "aggression", "hyperactivity"],
    difficulty: "medium",
    duration: "2-4週",
    tools: ["零食", "目標棒", "響片"]
  },
  {
    id: 22,
    name: "砂盆優化 (Litter Box Setup)",
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
    id: 23,
    name: "氣味管理 (Scent Management)",
    category: "環境管理",
    description: "使用費洛蒙與氣味標記管理，降低環境壓力。",
    steps: [
      "選擇適合的費洛蒙產品（擴散器、噴霧、項圈）",
      "擴散器應覆蓋貓咪主要活動區域（每50-70平方公尺一個）",
      "持續使用至少4週才能評估效果",
      "在預期壓力事件前，於特定區域噴灑噴霧型費洛蒙",
      "可與其他行為治療並行使用"
    ],
    bestFor: ["toileting", "intercat", "fear", "compulsive"],
    difficulty: "easy",
    duration: "持續使用",
    tools: ["費洛蒙擴散器/噴霧", "電源插座"]
  },
  {
    id: 24,
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
    id: 25,
    name: "重新介紹 (Reintroduction)",
    category: "多貓管理",
    description: "將衝突貓咪完全隔離後，從極低強度開始重新介紹。",
    steps: [
      "將衝突貓咪完全隔離於不同房間，進行氣味交換1-2週",
      "交換床單、毛巾讓雙方習慣彼此氣味",
      "隔門餵食：讓雙方在門的兩側同時進食，建立正向聯結",
      "逐步開門縫隙，讓貓咪在可控距離內看到對方",
      "只有在雙方都放鬆時才增加互動時間與空間",
      "整個過程可能需要數週至數月，不可急躁"
    ],
    bestFor: ["intercat", "aggression"],
    difficulty: "hard",
    duration: "數週至數月",
    tools: ["嬰兒門/柵欄", "食物碗", "毛巾"]
  },
  {
    id: 26,
    name: "資源分散 (Resource Dispersal)",
    category: "多貓管理",
    description: "分散食物、水、砂盆等資源，減少多貓間的競爭。",
    steps: [
      "食物、水、貓砂盆、睡眠區全部採用N+1原則，並分散於不同房間",
      "使用貓跳台、書架創造垂直空間，讓貓咪可以錯開視線",
      "確保每隻貓都有獨立的躲藏處（紙箱、貓窩、高處平台）",
      "使用費洛蒙擴散器降低整體環境緊張度",
      "暫時使用嬰兒門或柵欄創造「視線阻隔但可氣味交換」的空間"
    ],
    bestFor: ["intercat", "aggression", "attention"],
    difficulty: "easy",
    duration: "持續進行",
    tools: ["多個食物碗", "貓跳台", "費洛蒙"]
  },
  {
    id: 27,
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
    id: 28,
    name: "安靜指令 (Settle on Cue)",
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
    id: 29,
    name: "掠食遊戲 (Predatory Play)",
    category: "行為管理",
    description: "模擬完整掠食序列的遊戲，滿足貓咪的捕獵本能。",
    steps: [
      "每日至少2次、每次15-20分鐘的互動式遊戲（早晨與睡前各一次）",
      "使用逗貓棒模擬完整捕獵過程：潛行->追逐->撲擊->啃咬",
      "遊戲結尾必須讓貓咪成功「捕獲」玩具，避免挫折累積",
      "遊戲後立即提供小餐點，模擬「捕獵後進食」的自然流程",
      "晨昏時段增加遊戲強度，配合貓咪的天然活躍週期"
    ],
    bestFor: ["hyperactivity", "aggression", "destructive", "attention"],
    difficulty: "easy",
    duration: "每日進行",
    tools: ["逗貓棒", "踢踢玩具", "零食"]
  },
  {
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
    name: "專業諮詢 (Professional Consultation)",
    category: "綜合方案",
    description: "尋求獸醫行為醫學或合格貓科行為專業人員的協助。",
    steps: [
      "尋找具備資格的獸醫行為醫學專家或 IAABC 認證行為顧問",
      "準備完整的行為歷史記錄（影片、日誌、醫療報告）",
      "配合專業人員進行完整的行為評估",
      "遵循專業建議的訓練計畫與可能的藥物治療",
      "定期回診追蹤進度並調整方案"
    ],
    bestFor: ["aggression", "compulsive", "separation", "intercat"],
    difficulty: "hard",
    duration: "數月",
    tools: ["專業諮詢預約", "行為記錄", "醫療報告"]
  },
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
