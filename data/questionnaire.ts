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
    title: "第一部分：活動與玩耍",
    description: "了解貓咪日常有多活潑、愛不愛玩，以及玩耍時的表現。",
    questions: [
      { id: 1, text: "拿到新玩具時，很快就能搞懂怎麼玩。", categoryId: "hyperactivity" },
      { id: 2, text: "對新東西充滿好奇，會主動靠近聞聞、碰碰看。", categoryId: "hyperactivity" },
      { id: 3, text: "會叼著小東西（如玩具、橡皮筋）跑來跑去。", categoryId: "hyperactivity" },
      { id: 4, text: "會突然衝刺、跳起來撲東西，像瘋了一樣。", categoryId: "hyperactivity" },
      { id: 5, text: "喜歡跳上高處，如書架、櫃子頂、窗簾桿。", categoryId: "hyperactivity" },
      { id: 6, text: "每天特定時段會突然暴衝、跑來跑去（俗稱「貓咪跑酷」）。", categoryId: "hyperactivity" },
      { id: 7, text: "玩逗貓棒或玩具時，會突然跳起來撲抓。", categoryId: "hyperactivity" },
      { id: 8, text: "玩逗貓棒時會先蹲下、屁股扭動，然後撲上去。", categoryId: "hyperactivity" },
      { id: 9, text: "會追著空氣中看不見的東西跑，或對著牆壁撲抓。", categoryId: "hyperactivity" },
      { id: 10, text: "會偷偷埋伏，然後突然跳出來嚇人或其他動物（玩鬧性質）。", categoryId: "hyperactivity" },
      { id: 11, text: "會追著雷射筆光點或自己的影子跑。", categoryId: "hyperactivity" },
      { id: 12, text: "會主動邀請人或其他貓來玩追逐遊戲，從一個房間衝到另一個房間。", categoryId: "hyperactivity" },
      { id: 13, text: "會主動叼玩具過來，或用頭頂玩具示意要人陪牠玩。", categoryId: "hyperactivity" },
      { id: 14, text: "家中有其他貓時，會主動找牠們一起玩。（單貓家庭請選「未知」）", categoryId: "intercat" },
    ],
  },
  {
    id: "human-social",
    title: "第二部分：與人的互動",
    description: "了解貓咪面對不同人時，是親人還是怕生。",
    questions: [
      { id: 15, text: "家裡有客人來時，能自在地待在客廳，不會躲起來。", categoryId: "social", reverse: true },
      { id: 16, text: "陌生人摸牠時，不會緊張或躲開，表現放鬆。", categoryId: "social", reverse: true },
      { id: 17, text: "有陌生大人來訪時，會主動靠近聞聞、磨蹭對方。", categoryId: "social", reverse: true },
      { id: 18, text: "有陌生小孩來訪時，會主動靠近聞聞、磨蹭對方。", categoryId: "social", reverse: true },
      { id: 19, text: "和認識的小孩玩耍時，表現得輕鬆自在。", categoryId: "social", reverse: true },
      { id: 20, text: "和陌生小孩玩耍時，表現得輕鬆自在。", categoryId: "social", reverse: true },
      { id: 21, text: "和陌生大人玩耍時，表現得輕鬆自在。", categoryId: "social", reverse: true },
    ],
  },
  {
    id: "vocal-directed",
    title: "第三部分：對人喵喵叫",
    description: "了解貓咪會不會用叫聲跟人溝通、表達需求。",
    questions: [
      { id: 22, text: "人跟牠說話時，牠會回應喵喵叫，像對話一樣。", categoryId: "vocalization" },
      { id: 23, text: "想進出房間或去陽台時，會對著門喵喵叫或抓門。", categoryId: "vocalization" },
      { id: 24, text: "肚子餓時，會對著人喵喵叫，或跑到飼料碗旁邊示意。", categoryId: "vocalization" },
      { id: 25, text: "看到關著的門，會在門前大聲喵喵叫要求開門。", categoryId: "vocalization" },
    ],
  },
  {
    id: "purring",
    title: "第四部分：呼嚕聲",
    description: "了解貓咪在哪些情境下會發出呼嚕聲。",
    questions: [
      { id: 26, text: "被人摸或抓下巴時，會發出呼嚕呼嚕的聲音。", categoryId: "attention", reverse: true },
      { id: 27, text: "趴在人的腿上或肚子上時，會發出呼嚕聲。", categoryId: "attention", reverse: true },
    ],
  },
  {
    id: "attention-seeking",
    title: "第五部分：撒嬌討摸",
    description: "了解貓咪主動討人關注、討摸的頻率。",
    questions: [
      { id: 28, text: "人坐著或躺著時，會用頭去頂人、磨蹭人的手或臉。", categoryId: "attention" },
      { id: 29, text: "人坐著或躺著時，會主動跳上來討摸、討抱。", categoryId: "attention" },
    ],
  },
  {
    id: "cat-social",
    title: "第六部分：與其他貓的相處",
    description: "了解貓咪遇到其他貓時，是友善還是敵對。",
    questions: [
      { id: 30, text: "有陌生貓來家裡時，會友善地靠近聞聞、碰鼻子。（單貓家庭請選「未知」）", categoryId: "intercat", reverse: true },
      { id: 31, text: "在戶外遇到不認識的成貓時，會友善地靠近互動。（室內貓請選「未知」）", categoryId: "intercat", reverse: true },
      { id: 32, text: "在戶外遇到不認識的小貓時，會友善地靠近互動。（室內貓請選「未知」）", categoryId: "intercat", reverse: true },
    ],
  },
  {
    id: "stranger-aggression",
    title: "第七部分：對陌生人的防衛",
    description: "了解貓咪面對不認識的人時，會不會出現威嚇或攻擊行為。",
    questions: [
      { id: 33, text: "陌生人想摸牠時，會哈氣、低吼或出爪。", categoryId: "aggression" },
      { id: 34, text: "有陌生小孩來家裡時，會對他們哈氣或低吼。", categoryId: "aggression" },
      { id: 35, text: "有陌生大人來家裡時，會對他們哈氣或低吼。", categoryId: "aggression" },
    ],
  },
  {
    id: "owner-aggression",
    title: "第八部分：被摸時的不耐煩",
    description: "了解貓咪被主人摸或抱時，會不會突然翻臉、出爪或咬人。",
    questions: [
      { id: 36, text: "摸牠肚子時，會突然抓人或咬人（不是玩鬧的那種）。", categoryId: "aggression" },
      { id: 37, text: "摸牠背部或尾巴根部時，會低吼、哈氣、出爪或咬人。", categoryId: "aggression" },
      { id: 38, text: "被摸得好好的，突然毫無預警地出爪抓人或咬人。", categoryId: "aggression" },
      { id: 39, text: "會追著人的腳或手咬、抓（不是玩逗貓棒的那種）。", categoryId: "aggression" },
    ],
  },
  {
    id: "restraint",
    title: "第九部分：抗拒照護",
    description: "了解貓咪在洗澡、剪指甲、餵藥等照護時，會不會激烈反抗。",
    questions: [
      { id: 40, text: "餵藥或點藥時，會對主人哈氣、低吼、出爪或咬人。", categoryId: "aggression" },
      { id: 41, text: "洗澡時，會對人哈氣、低吼、出爪或咬人。", categoryId: "aggression" },
      { id: 42, text: "梳毛時，會對人哈氣、低吼、出爪或咬人。", categoryId: "aggression" },
      { id: 43, text: "剪指甲時，會對人哈氣、低吼、出爪或咬人。", categoryId: "aggression" },
    ],
  },
  {
    id: "familiar-cat-aggression",
    title: "第十部分：與家中貓咪的衝突",
    description: "了解貓咪對同住的貓咪會不會有敵意或爭執。（單貓家庭請全部選「未知」）",
    questions: [
      { id: 44, text: "吃飯時，有其他貓靠近會哈氣或低吼。", categoryId: "intercat" },
      { id: 45, text: "在喜歡的睡覺位置，有其他貓靠近會哈氣或低吼。", categoryId: "intercat" },
      { id: 46, text: "被家中其他貓瞪著或哈氣時，會回敬哈氣或低吼。", categoryId: "intercat" },
      { id: 47, text: "被家中其他貓瞪著或哈氣時，會主動出爪攻擊對方。", categoryId: "intercat" },
    ],
  },
  {
    id: "dog-aggression",
    title: "第十一部分：與狗的互動",
    description: "了解貓咪對狗（認識的或陌生的）會不會有攻擊行為。",
    questions: [
      { id: 48, text: "對家裡認識的狗會哈氣或低吼。", categoryId: "aggression" },
      { id: 49, text: "會主動出爪抓或咬家裡認識的狗。", categoryId: "aggression" },
      { id: 50, text: "有陌生的狗來家裡或進到院子時，會哈氣或低吼。", categoryId: "aggression" },
      { id: 51, text: "有陌生的狗來家裡或進到院子時，會出爪抓或試圖咬對方。", categoryId: "aggression" },
      { id: 52, text: "有機會的話，會追著外面的狗跑或出爪攻擊。（室內貓請選「未知」）", categoryId: "escaping" },
    ],
  },
  {
    id: "fear-stranger",
    title: "第十二部分：害怕陌生動物",
    description: "了解貓咪遇到不認識的貓或狗時，會不會嚇到躲起來。",
    questions: [
      { id: 53, text: "有不認識的貓來家裡或院子時，會嚇得逃跑或躲起來。", categoryId: "fear" },
      { id: 54, text: "有不認識的狗來家裡或院子時，會嚇得逃跑或躲起來。", categoryId: "fear" },
    ],
  },
  {
    id: "fear-novelty",
    title: "第十三部分：對新事物的反應",
    description: "了解貓咪對環境變化或新東西，是好奇還是緊張。",
    questions: [
      { id: 55, text: "家裡東西換位置（如搬家俱、換床單）時，會顯得緊張不安，一直東聞西聞。", categoryId: "fear" },
      { id: 56, text: "家裡出現新東西（如新買的電器、箱子）時，會顯得警覺，耳朵一直轉來轉去。", categoryId: "fear" },
    ],
  },
  {
    id: "separation",
    title: "第十四部分：獨處時的表現",
    description: "了解主人準備出門或不在家時，貓咪會不會焦慮或出現異常行為。",
    questions: [
      { id: 57, text: "看到主人拿鑰匙、穿鞋子準備出門時，會顯得焦躁不安、來回走動。", categoryId: "separation" },
      { id: 58, text: "看到主人準備出門時，會生氣地躲起來或想跟著溜出去。", categoryId: "separation" },
      { id: 59, text: "看到主人準備出門時，會守在門口不動，像在等主人回來。", categoryId: "separation" },
      { id: 60, text: "獨自在家時，會顯得坐立不安，一直東走西走。", categoryId: "separation" },
      { id: 61, text: "獨自在家時，會一直豎著耳朵、瞪大眼睛，處於高度警戒狀態。", categoryId: "separation" },
      { id: 62, text: "獨自在家時，會一直喵喵叫或發出哭叫聲。", categoryId: "separation" },
    ],
  },
  {
    id: "trainability",
    title: "第十五部分：學習與配合度",
    description: "了解貓咪聽不聽得懂人話、願不願意配合。",
    questions: [
      { id: 63, text: "叫牠名字時，會回頭看或跑過來。", categoryId: "trainability", reverse: true },
      { id: 64, text: "對簡單指令（如「過來」、「下去」、「不行」）能很快理解並照做。", categoryId: "trainability", reverse: true },
      { id: 65, text: "會專心看著人，注意人的一舉一動，像在想「你要幹嘛」。", categoryId: "trainability", reverse: true },
    ],
  },
  {
    id: "predation",
    title: "第十六部分：狩獵本能",
    description: "了解貓咪的捕獵天性有多強，會不會抓小動物回家。",
    questions: [
      { id: 66, text: "有機會出門或到陽台時，會抓老鼠、鳥、蜥蜴、蟲子等帶回家。", categoryId: "hyperactivity" },
      { id: 67, text: "看到老鼠、鳥、松鼠等小動物時，會追著跑或試圖捕捉。", categoryId: "hyperactivity" },
      { id: 68, text: "對家裡的小動物（如倉鼠、鳥、魚缸裡的魚）非常著迷，一直盯著看。", categoryId: "hyperactivity" },
    ],
  },
  {
    id: "prey-interest",
    title: "第十七部分：看獵物時的興奮反應",
    description: "了解貓咪看到窗外小動物時，會出現哪些激動的身體語言。",
    questions: [
      { id: 69, text: "看著窗外的鳥或小動物時，會發出「嘎嘎嘎」或「嘰嘰」的顫抖叫聲。", categoryId: "hyperactivity" },
      { id: 70, text: "看著窗外小動物時，尾巴會快速甩動、背部皮膚抽動，全身緊繃像要衝出去。", categoryId: "hyperactivity" },
    ],
  },
  {
    id: "sleep-preference",
    title: "第十八部分：睡覺地點偏好",
    description: "了解貓咪喜歡在哪裡睡覺、休息。",
    questions: [
      { id: 71, text: "喜歡在高處睡覺，如書架頂、衣櫃上、冰箱上。", categoryId: "sleep-preference" },
      { id: 72, text: "喜歡躺在會發熱的東西上睡覺，如電腦主機、電視、暖氣機旁。", categoryId: "sleep-preference" },
      { id: 73, text: "喜歡鑽進櫃子、抽屜、洗衣籃或紙箱裡面睡覺。", categoryId: "sleep-preference" },
    ],
  },
  {
    id: "overgrooming",
    title: "第十九部分：過度舔毛",
    description: "了解貓咪會不會舔毛舔到過頭，甚至舔到禿毛或受傷。",
    questions: [
      { id: 74, text: "舔毛的頻率很高，一天舔很多次，每次舔很久。", categoryId: "compulsive" },
      { id: 75, text: "會一直啃咬或拉扯自己的毛，導致某塊地方禿毛或紅腫。", categoryId: "compulsive" },
      { id: 76, text: "會突然瘋狂地舔某個部位，像停不下來一樣。", categoryId: "compulsive" },
    ],
  },
  {
    id: "other-compulsive",
    title: "第二十部分：重複性的怪異行為",
    description: "了解貓咪有沒有做出一些重複、看起來沒有意義的刻板動作。",
    questions: [
      { id: 77, text: "會一直盯著人看，眼神固定不移開，像在看獵物一樣。", categoryId: "compulsive" },
      { id: 78, text: "會對著空氣或牆壁某個點，一直盯著看，好像那裡有東西。", categoryId: "compulsive" },
      { id: 79, text: "會在同一個小範圍內來回走動，像在做固定路線的巡邏。", categoryId: "compulsive" },
    ],
  },
  {
    id: "inappropriate-elimination",
    title: "第二十一部分：亂大小便",
    description: "了解貓咪有沒有在貓砂盆以外的地方尿尿或便便。",
    questions: [
      { id: 80, text: "會在貓砂盆以外的地方（如床、沙發、地板）蹲下尿尿。", categoryId: "toileting" },
      { id: 81, text: "會在貓砂盆以外的地方（如床、沙發、地板）便便。", categoryId: "toileting" },
    ],
  },
  {
    id: "elimination-preference",
    title: "第二十二部分：上廁所的偏好",
    description: "了解貓咪對上廁所的地點和貓砂種類有沒有特別的堅持。",
    questions: [
      { id: 82, text: "對上廁所的地點有明顯偏好，例如一定要安靜、隱蔽或高處。", categoryId: "toileting" },
      { id: 83, text: "對貓砂的種類很挑，換了砂就不願意上或上在旁邊。", categoryId: "toileting" },
    ],
  },
  {
    id: "crepuscular",
    title: "第二十三部分：清晨與傍晚的活力",
    description: "了解貓咪在清晨和傍晚（貓咪的黃金獵食時段）會不會特別活躍。",
    questions: [
      { id: 84, text: "傍晚或深夜時特別活躍，跑來跑去、玩東西。", categoryId: "hyperactivity" },
      { id: 85, text: "清晨天還沒亮就開始活動，會跑來跑去或叫人起床。", categoryId: "hyperactivity" },
    ],
  },
  {
    id: "misc",
    title: "第二十四部分：其他行為",
    description: "一些常見但不容易歸類的行為。",
    questions: [
      { id: 86, text: "看到主人摸其他貓或動物時，會顯得激動、不安或對著叫。", categoryId: "intercat" },
      { id: 87, text: "白天或半夜會突然發出很大聲的喵喵叫或嚎叫，附近沒有其他貓。", categoryId: "vocalization" },
      { id: 88, text: "會站著、尾巴豎直，對著家具、牆壁或人的腳噴尿（標記行為）。", categoryId: "toileting" },
      { id: 89, text: "被抱起來或放在腿上時，會發抖、身體僵硬、一直想掙脫。", categoryId: "fear" },
      { id: 90, text: "在吃偷來的食物或獵物時，有人靠近會哈氣、低吼或出爪。", categoryId: "aggression" },
      { id: 91, text: "會玩「你丟我撿」的遊戲，把丟出去的東西叼回來。", categoryId: "hyperactivity" },
      { id: 92, text: "對生活作息的改變（如搬家、換家具、主人作息改變）能很快適應。", categoryId: "social", reverse: true },
      { id: 93, text: "看獸醫或被打針時，會對獸醫或助理哈氣、低吼、出爪或咬人。", categoryId: "aggression" },
      { id: 94, text: "聽到突然的巨響（如吸塵器、打雷、東西掉落、鞭炮聲）會嚇得逃跑或躲起來。", categoryId: "fear" },
      { id: 95, text: "有機會的話，會想從家裡或陽台逃跑出去。（室內貓請選「未知」）", categoryId: "escaping" },
      { id: 96, text: "會在沙發、地毯、窗簾等不該抓的地方磨爪子。", categoryId: "destructive" },
      { id: 97, text: "喜歡躺在人正在看的書、正在用的電腦鍵盤，或任何人正在用的東西上。", categoryId: "attention" },
      { id: 98, text: "會追著自己的尾巴轉圈圈，或咬自己的後腳。", categoryId: "compulsive" },
      { id: 99, text: "會對著柔軟的毯子、枕頭或玩具做出揉捏、吸吮、啃咬的動作（像小貓吸奶）。", categoryId: "compulsive" },
      { id: 100, text: "獨自在家時，會啃咬或破壞東西（如電線、鞋子、植物）。", categoryId: "destructive" },
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
