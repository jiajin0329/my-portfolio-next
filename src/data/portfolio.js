export const portfolio = {
  profile: {
    displayName: 'Jia-Jin Chen',
    introduction: '你好，我是Jia-Jin Chen',
    skills: ['Unity', 'C#', 'Git', 'Codex'],
    contact: {
      email: 'chenjiajin0329@gmail.com',
    },
  },
  navigation: [
    { label: '關於我', href: '#about' },
    { label: '技能', href: '#skills' },
    { label: '精選專案', href: '#projects' },
    { label: '工作經驗', href: '#experience' },
    { label: '聯絡方式', href: '#contact' },
  ],
  experience: [],
  projects: [
    {
      id: 'sandwich-tycoon',
      order: '01',
      name: 'Sandwich Tycoon',
      videoUrl: 'https://www.youtube.com/watch?v=u_GdUsjH4_s',
      description:
        '搬運閒置3D遊戲，玩家可以經營自己的三明治店，賺取金錢並擴大店面，並雇用員工來自動化餐廳運作。',
      responsibilities: [
        '核心玩法與系統開發：包含玩家搬運機制、NPC (客人) 行為邏輯、經濟循環 (販賣/解鎖/升級)，並建構完整的存檔系統、關卡切換與新手教學引導，確保流暢的遊玩體驗。',
        '商業化與變現系統整合：維護應用內購買 (IAP) 商店機制，並串接 ironSource SDK 整合激勵廣告與插入式廣告，利用廣告 Buff 道具系統有效提升玩家觀看廣告意願與遊戲進程。',
        '第三方 SDK 整合與數據追蹤：獨立完成多項關鍵 SDK 串接，包含多語系系統 (Localization)、GameAnalytics 與 Facebook SDK (玩家行為數據分析)，以及 Firebase (遠端推播與崩潰錯誤追蹤)，提供營運團隊精準的數據決策基礎。',
        '跨平台發布與上架維護：負責 Android 與 iOS 雙平台打包與商店更新流程。',
        '產品營運：負責遊戲上線後的長期維護，包含新增 IAP 禮包商品、擴充遊戲功能以及持續的 Bug 修復，確保產品穩定運行。',
      ],
      technologies: ['Unity', 'C#', 'Git'],
      availabilityNotes: ['Google Play商店(前公司已下架)'],
      storeLinks: [
        {
          label: 'App Store 商店連結',
          url: 'https://apps.apple.com/tw/app/sandwich-tycoon/id6475956767',
        },
      ],
    },
    {
      id: 'elevator-rescue',
      order: '02',
      name: 'Elevator Rescue',
      videoUrl: 'https://www.youtube.com/watch?v=-ecvLspJ9g8',
      description:
        '電梯益智3D遊戲，拖動電梯讓角色順利逃脫，其中有許多讓角色死亡的機制需要小心應對。',
      responsibilities: [
        '實作所有遊戲邏輯與核心機制。',
        '整合美術素材。',
        'Android上架處理(上架美國地區)。',
      ],
      technologies: ['Unity', 'C#', 'Git'],
      availabilityNotes: [],
      storeLinks: [],
    },
    {
      id: 'toilet-rescue',
      order: '03',
      name: 'Toilet Rescue',
      videoUrl: 'https://youtu.be/vZOccs6hvBU',
      description:
        '畫線益智2D遊戲，玩家透過畫線產生實體，線會受地心引力影響。最後要利用線引導衛生紙到達角色身上或是阻擋水防止角色淋濕而失敗。',
      responsibilities: [
        '實作所有遊戲邏輯與核心機制。',
        '整合美術素材。',
        'Android上架處理(上架美國地區)。',
      ],
      technologies: ['Unity', 'C#', 'Git'],
      availabilityNotes: [],
      storeLinks: [],
    },
    {
      id: 'emoji-choice',
      order: '04',
      name: 'Emoji Choice',
      videoUrl: 'https://youtu.be/YwO-dVlFBEk',
      description:
        '情境選擇2D遊戲，依照玩家的互動的結果給予不同劇情演出。',
      responsibilities: [
        '實作所有遊戲邏輯與核心機制。',
        '使用免費素材與製作動畫演出。',
        'Android上架處理(上架美國地區)。',
      ],
      technologies: ['Unity', 'C#', 'Git'],
      availabilityNotes: [],
      storeLinks: [],
    },
  ],
}
