export type ScoreValue = 0 | 1 | 2 | 3 | 4 | 5;

export interface Question {
  id: number;
  text: string;
  categoryId: string;
  reverse?: boolean; // true 表示反向計分（如可訓練性：高分=好，需反轉為問題分數）
}

export interface QuestionSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const sections: QuestionSection[] = [
  {
    id: "activity",
    title: "第一部分：活動/玩耍性",
    description: "評估貓咪在日常生活中的活躍度和玩耍表現。",
    questions: [
      { id: 1, text: "快速學會如何玩新引入的玩具。", categoryId: "hyperactivity" },
      { id: 2, text: "好奇心強：積極調查/探索新物體、景象或環境變化。", categoryId: "hyperactivity" },
      { id: 3, text: "用嘴攜帶小物件/玩具進行互動。", categoryId: "hyperactivity" },
      { id: 4, text: "奔跑並跳躍到空中。", categoryId: "hyperactivity" },
      { id: 5, text: "活躍地跳躍和攀爬到高處、家具或窗簾上。", categoryId: "hyperactivity" },
      { id: 6, text: "在一天中的特定時段出現突然的奔跑或攀爬爆發。", categoryId: "hyperactivity" },
      { id: 7, text: "在玩耍活動中表現出突然的跳躍和奔跑。", categoryId: "hyperactivity" },
      { id: 8, text: "在玩耍活動中潛行、追逐或撲向移動物體（繩子、球、柔軟玩具等）。", categoryId: "hyperactivity" },
      { id: 9, text: "追逐和伏擊看不見/想像的獵物/物體。", categoryId: "hyperactivity" },
      { id: 10, text: "嬉戲地追逐和伏擊其他家庭成員（包括寵物）。", categoryId: "hyperactivity" },
      { id: 11, text: "追逐或跟隨影子或光點。", categoryId: "hyperactivity" },
      { id: 12, text: "通過在屋內從一個房間跑到另一個房間來發起相互追逐。", categoryId: "hyperactivity" },
      { id: 13, text: "發起與家人的互動遊戲（例如帶來玩具、繩子或小物件玩耍）。", categoryId: "hyperactivity" },
      { id: 14, text: "與其他家庭貓玩耍（如果這是家中唯一的貓，請勾選「未知」）。", categoryId: "intercat" },
    ],
  },
  {
    id: "human-social",
    title: "第二部分：對人的社交性",
    description: "評估貓咪在與不同人互動時的舒適度和友好程度。",
    questions: [
      { id: 15, text: "在社交聚會中對人感到舒適和放鬆。", categoryId: "social", reverse: true },
      { id: 16, text: "被不熟悉（非家庭成員）的人撫摸時感到舒適和放鬆。", categoryId: "social", reverse: true },
      { id: 17, text: "友好地問候來訪的陌生成年人（嗅聞、磨蹭、發出呼嚕聲、躺在地板上）。", categoryId: "social", reverse: true },
      { id: 18, text: "友好地問候來訪的陌生兒童（嗅聞、磨蹭、發出呼嚕聲、躺在地板上）。", categoryId: "social", reverse: true },
      { id: 19, text: "與熟悉的兒童玩耍時顯得舒適（自信、放鬆）。", categoryId: "social", reverse: true },
      { id: 20, text: "與陌生的兒童玩耍時顯得舒適（自信、放鬆）。", categoryId: "social", reverse: true },
      { id: 21, text: "與陌生的成年人玩耍時顯得舒適（自信、放鬆）。", categoryId: "social", reverse: true },
    ],
  },
  {
    id: "vocal-directed",
    title: "第三部分：定向叫聲/發聲",
    description: "評估貓咪使用叫聲與人溝通和表達需求的情況。",
    questions: [
      { id: 22, text: "用叫聲/發聲與人「交談」（例如，當人對它說話時會回應）。", categoryId: "vocalization" },
      { id: 23, text: "要求（發聲、走向門、發出聲音）到外面或進出房間。", categoryId: "vocalization" },
      { id: 24, text: "飢餓時要求（發聲、走向它的碗或食物源、發出聲音）食物。", categoryId: "vocalization" },
      { id: 25, text: "在任何關閉的門前大聲喵喵叫。", categoryId: "vocalization" },
    ],
  },
  {
    id: "purring",
    title: "第四部分：呼嚕聲",
    description: "評估貓咪在不同情境下發出呼嚕聲的頻率。",
    questions: [
      { id: 26, text: "被撫摸時發出呼嚕聲。", categoryId: "attention", reverse: true },
      { id: 27, text: "坐在/躺在別人腿上時發出呼嚕聲。", categoryId: "attention", reverse: true },
    ],
  },
  {
    id: "attention-seeking",
    title: "第五部分：尋求關注",
    description: "評估貓咪主動尋求與人進行身體接觸和互動的程度。",
    questions: [
      { id: 28, text: "當您或其他家庭成員坐著或躺下時用頭輕推和/或輕蹭您。", categoryId: "attention" },
      { id: 29, text: "當您或其他家庭成員坐著或躺下時尋求身體接觸。", categoryId: "attention" },
    ],
  },
  {
    id: "cat-social",
    title: "第六部分：對貓的社交性",
    description: "評估貓咪與其他貓咪互動時的友好程度。",
    questions: [
      { id: 30, text: "友好地問候來訪的陌生（非家庭）貓（嗅聞、碰鼻子、磨蹭）。", categoryId: "intercat", reverse: true },
      { id: 31, text: "友好地接近戶外陌生的成年貓（嗅聞、碰鼻子、磨蹭）。", categoryId: "intercat", reverse: true },
      { id: 32, text: "友好地接近戶外陌生的小貓（嗅聞、碰鼻子、磨蹭）。", categoryId: "intercat", reverse: true },
    ],
  },
  {
    id: "stranger-aggression",
    title: "第七部分：對陌生人攻擊性",
    description: "評估貓咪對不熟悉的人表現出的威脅或敵意行為。",
    questions: [
      { id: 33, text: "當陌生人試圖觸摸或撫摸它時咆哮/發出嘶嘶聲。", categoryId: "aggression" },
      { id: 34, text: "對來訪家中的陌生兒童咆哮/發出嘶嘶聲。", categoryId: "aggression" },
      { id: 35, text: "對來訪家中的陌生成年人咆哮/發出嘶嘶聲。", categoryId: "aggression" },
    ],
  },
  {
    id: "owner-aggression",
    title: "第八部分：對主人攻擊性/觸摸敏感度",
    description: "評估貓咪在被觸摸或撫摸時，對熟悉的人表現出的攻擊性或敏感反應。",
    questions: [
      { id: 36, text: "在被撫摸肚子時抓撓/咬或試圖咬（以非玩耍的方式）。", categoryId: "aggression" },
      { id: 37, text: "在沿著背部或脊柱被撫摸時咆哮、發出嘶嘶聲、抓撓或咬。", categoryId: "aggression" },
      { id: 38, text: "在被撫摸時出乎意料地猛擊（抓撓、咬）。", categoryId: "aggression" },
      { id: 39, text: "追逐、抓住或攻擊移動中的人的腿或腳（以非玩耍的方式）。", categoryId: "aggression" },
    ],
  },
  {
    id: "restraint",
    title: "第九部分：抗拒約束",
    description: "評估貓咪在進行護理或醫療程序時對約束的抵抗行為。",
    questions: [
      { id: 40, text: "在被熟悉的人餵藥時咆哮、發出嘶嘶聲、抓撓或咬。", categoryId: "aggression" },
      { id: 41, text: "在洗澡時咆哮、發出嘶嘶聲、抓撓或咬。", categoryId: "aggression" },
      { id: 42, text: "在梳毛時咆哮、發出嘶嘶聲、抓撓或咬。", categoryId: "aggression" },
      { id: 43, text: "在修剪指甲/爪子時咆哮、發出嘶嘶聲、抓撓或咬。", categoryId: "aggression" },
    ],
  },
  {
    id: "familiar-cat-aggression",
    title: "第十部分：對熟悉貓的攻擊性",
    description: "評估貓咪對同住貓咪表現出的敵意行為（如果家中只有一隻貓，請勾選「未知」）。",
    questions: [
      { id: 44, text: "在進食時被熟悉的（同住）貓接近時咆哮/發出嘶嘶聲。", categoryId: "intercat" },
      { id: 45, text: "在喜歡的休息處被熟悉的（同住）貓接近時咆哮/發出嘶嘶聲。", categoryId: "intercat" },
      { id: 46, text: "被熟悉的（同住）貓凝視、咆哮或發出嘶嘶聲時咆哮/發出嘶嘶聲。", categoryId: "intercat" },
      { id: 47, text: "被熟悉的（同住）貓凝視、咆哮或發出嘶嘶聲時攻擊（抓撓/咬/試圖咬）。", categoryId: "intercat" },
    ],
  },
  {
    id: "dog-aggression",
    title: "第十一部分：對狗的攻擊性",
    description: "評估貓咪對熟悉和陌生狗的攻擊行為（如果是室內貓且不與狗同住，可對部分項目勾選「未知」）。",
    questions: [
      { id: 48, text: "對熟悉的狗咆哮/發出嘶嘶聲。", categoryId: "aggression" },
      { id: 49, text: "攻擊（抓撓/咬/試圖咬）熟悉的狗。", categoryId: "aggression" },
      { id: 50, text: "當陌生的狗來訪其家或進入其院子/花園時咆哮/發出嘶嘶聲。", categoryId: "aggression" },
      { id: 51, text: "當陌生的狗來訪其家或進入其院子/花園時攻擊（抓撓/咬/試圖咬）。", categoryId: "aggression" },
      { id: 52, text: "如果有機會，在街上追逐或抓撓陌生的狗。", categoryId: "escaping" },
    ],
  },
  {
    id: "fear-stranger",
    title: "第十二部分：對陌生狗/貓的恐懼",
    description: "評估貓咪對不熟悉的狗或貓的恐懼反應。",
    questions: [
      { id: 53, text: "當陌生（非家庭）貓來訪其家或進入其院子/花園時逃跑和/或躲藏。", categoryId: "fear" },
      { id: 54, text: "當陌生的狗來訪其家或進入其院子/花園時逃跑和/或躲藏。", categoryId: "fear" },
    ],
  },
  {
    id: "fear-novelty",
    title: "第十三部分：對新事物的恐懼",
    description: "評估貓咪對環境中新奇事物或變化的警惕和不安反應。",
    questions: [
      { id: 55, text: "當其休息區域被改動時（例如，物品從常放的位置移開、更換織物/床單等），表現出不安（積極調查）。", categoryId: "fear" },
      { id: 56, text: "當家中引入陌生物件時，表現出不安（積極調查）或高度警覺（持續的耳朵動作和戒備狀態）。", categoryId: "fear" },
    ],
  },
  {
    id: "separation",
    title: "第十四部分：分離相關行為",
    description: "評估貓咪在主人準備離開或離開後表現出的焦慮或異常行為。",
    questions: [
      { id: 57, text: "當您或其他家庭成員準備離家時，表現出不安、激動和/或來回踱步。", categoryId: "separation" },
      { id: 58, text: "當您或其他家庭成員準備離家時，生氣、躲藏和/或偷偷溜走。", categoryId: "separation" },
      { id: 59, text: "當您或其他家庭成員準備離家時，在入口門附近躺下或靜止不動。", categoryId: "separation" },
      { id: 60, text: "獨自在家時，表現出不安（積極調查）。", categoryId: "separation" },
      { id: 61, text: "獨自在家時，保持靜止和警覺/高度警覺（持續的耳朵動作和戒備的眼睛）。", categoryId: "separation" },
      { id: 62, text: "獨自在家時，發出哭叫或喵喵叫。", categoryId: "separation" },
    ],
  },
  {
    id: "trainability",
    title: "第十五部分：可訓練性",
    description: "評估貓咪對指令的反應和學習意願。",
    questions: [
      { id: 63, text: "叫它時會過來。", categoryId: "trainability", reverse: true },
      { id: 64, text: "對簡單指令（出去、進來、安靜、下去、上來、不行、躺下等）能迅速反應。", categoryId: "trainability", reverse: true },
      { id: 65, text: "密切關注並傾聽您所說或所做的每一件事。", categoryId: "trainability", reverse: true },
    ],
  },
  {
    id: "predation",
    title: "第十六部分：捕食行為",
    description: "評估貓咪的獵食本能和對小動物的興趣。",
    questions: [
      { id: 66, text: "有機會時，會將獵物動物（囓齒動物、鳥類、爬行動物、青蛙、昆蟲、蠕蟲等）帶回家。", categoryId: "hyperactivity" },
      { id: 67, text: "有機會時，會追逐囓齒動物、鳥類、爬行動物、松鼠、兔子或其他小動物。", categoryId: "hyperactivity" },
      { id: 68, text: "對家中其他小寵物（囓齒動物、鳥類、爬行動物、魚類等）的活動著迷。", categoryId: "hyperactivity" },
    ],
  },
  {
    id: "prey-interest",
    title: "第十七部分：獵物興趣",
    description: "評估貓咪在觀察外部獵物時的特定身體語言和發聲。",
    questions: [
      { id: 69, text: "在觀察戶外的鳥類或其他小動物時，發出吱吱叫或咯咯聲。", categoryId: "hyperactivity" },
      { id: 70, text: "透過窗戶看鳥類或其他動靜時，尾巴猛烈擺動、皮膚波動和/或身體緊繃。", categoryId: "hyperactivity" },
    ],
  },
  {
    id: "sleep-preference",
    title: "第十八部分：睡覺地點偏好",
    description: "評估貓咪選擇休息或睡覺地點的偏好。",
    questions: [
      { id: 71, text: "傾向於在高處休息/睡覺（架子、書櫃、衣櫃或櫥櫃頂部等）。", categoryId: "sleep-preference" },
      { id: 72, text: "傾向於在溫暖的器具（DVD播放器、電視、打印機、電腦、散熱器等）上睡覺/休息。", categoryId: "sleep-preference" },
      { id: 73, text: "傾向於在櫥櫃、衣服抽屜、洗衣籃等裡面睡覺/休息。", categoryId: "sleep-preference" },
    ],
  },
  {
    id: "overgrooming",
    title: "第十九部分：過度/強迫自我理毛",
    description: "評估貓咪過度理毛或導致自我損傷的行為。",
    questions: [
      { id: 74, text: "表現出過度和密集的理毛（例如，一天多次，持續很長時間）。", categoryId: "compulsive" },
      { id: 75, text: "表現出自我殘害、毛髮修剪（用牙齒拉扯毛皮、猛烈啃咬和/或舔舐身體部位）。", categoryId: "compulsive" },
      { id: 76, text: "表現出突然的瘋狂舔舐或咀嚼。", categoryId: "compulsive" },
    ],
  },
  {
    id: "other-compulsive",
    title: "第二十部分：其他強迫行為",
    description: "評估貓咪重複性的、看似無目的的刻板行為。",
    questions: [
      { id: 77, text: "專注地凝視人。", categoryId: "compulsive" },
      { id: 78, text: "靜止不動並專注地凝視看不見的東西。", categoryId: "compulsive" },
      { id: 79, text: "表現出奇怪的重複動作（踱步、行走），從一個地方到另一個地方（短距離）。", categoryId: "compulsive" },
    ],
  },
  {
    id: "inappropriate-elimination",
    title: "第二十一部分：不當排泄",
    description: "評估貓咪在貓砂盆外或不適當的地方排尿或排便的行為。",
    questions: [
      { id: 80, text: "在貓砂盆外或其他不適當的室內區域排尿（蹲姿）。", categoryId: "toileting" },
      { id: 81, text: "在貓砂盆外或其他不適當的室內區域排便。", categoryId: "toileting" },
    ],
  },
  {
    id: "elimination-preference",
    title: "第二十二部分：排泄偏好",
    description: "評估貓咪對排便地點和底物的特定偏好。",
    questions: [
      { id: 82, text: "顯示出對如廁地點的偏好（例如，安靜、高處或隱蔽的地方）。", categoryId: "toileting" },
      { id: 83, text: "顯示出對如廁底物的偏好（例如，貓砂類型、沙粒、草、報紙、床上用品、洗衣物）。", categoryId: "toileting" },
    ],
  },
  {
    id: "crepuscular",
    title: "第二十三部分：晨昏活動性",
    description: "評估貓咪在黃昏和清晨的活躍程度。",
    questions: [
      { id: 84, text: "在黃昏/日落時分或深夜表現出活動增加。", categoryId: "hyperactivity" },
      { id: 85, text: "在黎明/日出時分的清晨表現出活動增加；可能一大早就吵醒家庭成員。", categoryId: "hyperactivity" },
    ],
  },
  {
    id: "misc",
    title: "第二十四部分：雜項行為",
    description: "評估其他常見但未歸入上述類別的行為。",
    questions: [
      { id: 86, text: "當您或其他家庭成員對另一個人、貓或動物表示親近時，表現出激動、不安或發聲。", categoryId: "intercat" },
      { id: 87, text: "在白天或夜晚突然發出大聲的叫聲（喵喵叫、嚎叫）（視線內沒有其他貓或動物）。", categoryId: "vocalization" },
      { id: 88, text: "在貓砂盆外或其他表面和物體（例如，家具、牆壁、人的腿等）上噴尿（站立姿勢，尾巴垂直抬起）。", categoryId: "toileting" },
      { id: 89, text: "當被抱起/抱在懷裡和/或坐在腿上時，顯得不舒服（顫抖、變得僵硬/緊繃、掙扎）。", categoryId: "fear" },
      { id: 90, text: "在佔有偷來的食物或獵物時被接近，會咆哮、發出嘶嘶聲、抓撓或咬。", categoryId: "aggression" },
      { id: 91, text: "玩「你丟我撿」；喜歡撿回被扔出的物體或玩具。", categoryId: "hyperactivity" },
      { id: 92, text: "能輕鬆適應日常生活的變化（時間表、物品和家具的更換或重新安排）。", categoryId: "social", reverse: true },
      { id: 93, text: "在被獸醫檢查或治療時咆哮、發出嘶嘶聲、抓撓或咬。", categoryId: "aggression" },
      { id: 94, text: "對突然或巨大的噪音（例如，吸塵器、汽車回火、道路鑽孔、物品掉落、樂器聲、門鈴或有人敲門）產生逃跑和/或躲藏的反應。", categoryId: "fear" },
      { id: 95, text: "如果有機會，會從家中或院子/花園逃跑或試圖逃跑。", categoryId: "escaping" },
      { id: 96, text: "在室內不適當的物體或表面（家具、地毯、窗簾、牆紙等）上抓撓爪子。", categoryId: "destructive" },
      { id: 97, text: "傾向於躺在紙張、書籍或人們正在使用的物品上。", categoryId: "attention" },
      { id: 98, text: "追逐自己的尾巴/後端。", categoryId: "compulsive" },
      { id: 99, text: "揉捏、吮吸、啃咬和/或騎乘柔軟的玩具、織物、枕頭等。", categoryId: "compulsive" },
      { id: 100, text: "獨自在家時，啃咬或破壞不適當的物體（破壞性行為）。", categoryId: "destructive" },
    ],
  },
];

export const scoreLabels: Record<number, string> = {
  0: "未知",
  1: "從不",
  2: "很少",
  3: "有時",
  4: "經常",
  5: "總是",
};

export const scoreColors: Record<number, string> = {
  0: "bg-slate-500 text-white border-slate-500 shadow-md",
  1: "bg-emerald-500 text-white border-emerald-500 shadow-md",
  2: "bg-green-500 text-white border-green-500 shadow-md",
  3: "bg-amber-500 text-white border-amber-500 shadow-md",
  4: "bg-orange-500 text-white border-orange-500 shadow-md",
  5: "bg-red-500 text-white border-red-500 shadow-md",
};

export const scoreHoverColors: Record<number, string> = {
  0: "hover:bg-slate-100 hover:text-slate-600 hover:border-slate-300",
  1: "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300",
  2: "hover:bg-green-50 hover:text-green-600 hover:border-green-300",
  3: "hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300",
  4: "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300",
  5: "hover:bg-red-50 hover:text-red-600 hover:border-red-300",
};

export const scoreBarColors: Record<number, string> = {
  0: "bg-slate-400",
  1: "bg-emerald-400",
  2: "bg-green-400",
  3: "bg-amber-400",
  4: "bg-orange-400",
  5: "bg-red-400",
};
