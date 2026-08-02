# 專案記憶文件：我們就是沒有用的年輕人 — 專輯企劃官網

## 📁 專案位置
`/Users/manfredsun/Documents/11. 年輕人 2/7. Website/`

## 🎯 專案目標
為專輯《我們就是沒有用的年輕人》建立一個單頁式概念網站，呈現專輯企劃的核心理念與周邊商品。

---

## 🎵 專輯核心概念
**社會化生存的雙軌機制：外在的現實妥協與內在的極端防守**

若第一張專輯是「拒絕長大」的無效防禦，這張專輯則是客觀紀錄了這群人「如何成為大人，且同時確保自己沒有徹底壞掉」的實務過程。

### 三個推進階段：
1. **成長的客觀代價**：從「拒絕」轉向「交易」
2. **雙面人的生存策略**：日夜與順逆的極端割裂
3. **微觀價值的重塑**：在廢墟中建立綠洲

---

## 🎼 曲目清單 (Tracklist)

| # | 曲名 | 所屬章節 |
|---|------|----------|
| 01 | 倒數 | Chapter 1 |
| 02 | 2973 公里 | Chapter 1 |
| 03 | 捨棄 | Chapter 1 |
| 04 | 笨拙的記憶 | Chapter 2 |
| 05 | 面具人 | Chapter 2 |
| 06 | 會有所不同嗎 | Chapter 2 |
| 07 | 渺小 | Chapter 3 |
| 08 | 就在我們相遇的一刻 | Chapter 3 |
| 09 | 直至我們逝去的一刻 (Reprise) | Chapter 3 |
| 10 | Outro | Chapter 3 |

---

## 🌐 網站架構

### 技術棧
- **框架**：純 HTML5 + Tailwind CSS (CDN)
- **字體**：Google Fonts - Noto Serif TC (標題) + Noto Sans TC (內文)
- **圖片**：本地相對路徑 (`images/` 資料夾)

### 視覺風格
- **主題**：頹廢日式簡約 (Decadent Japanese Minimalism)
- **主色調**：深黑 `#0b0b0b` + 灰階中性色
- **特效**：膠片顆粒感 (Film Grain)、滾動漸顯 (Scroll Reveal)
- **手寫標題**：使用 CSS `filter: invert(1) contrast(1.4)` + `mix-blend-mode: screen` 將白底黑字轉為透明背景白字

### 頁面區塊 (Section)
1. **Hero** - 主視覺 + 手寫標題 + 核心文案
2. **Prologue** - 前言獨白
3. **Chapter 1** - 成長的代價 (Track 01-03)
4. **Chapter 2** - 雙面人 (Track 04-06)
5. **Chapter 3** - 對自己的溫柔 (Track 07-10)
6. **Merch** - 宣傳周邊展示
7. **Footer** - 頁尾版權

---

## 🎨 視覺素材清單

### 主要圖片 (`images/` 資料夾)
| 檔名 | 用途 |
|------|------|
| `poster.png` | 專輯主視覺海報 (Hero 背景) |
| `title_handwritten.png` | 手寫字標題 |
| `Pocketwatch.jpg` | Track 01 (倒數) 配圖 |
| `city_background.jpeg` | Track 02 (2973 公里) 配圖 |
| `Crossroad.png` | Track 03 (捨棄) 配圖 |
| `track04_memory.jpg` | Track 04 (笨拙的記憶) 配圖 (Magnific MCP 生成) |
| `track05_mask.jpg` | Track 05 (面具人) 配圖 (Magnific MCP 生成) |
| `track06_void.jpg` | Track 06 (會有所不同嗎) 配圖 (Magnific MCP 生成) |
| `Gemini_Generated_Image_nn0ewtnn0ewtnn0e.png` | Chapter 2 概念大圖 |
| `notebook.jpg` | Track 07 (渺小) 配圖 |
| `pexels-strannik-sk-35368202.jpg` | Track 08 (就在我們相遇的一刻) 配圖 |
| `track09_reprise.jpg` | Track 09 (直至我們逝去的一刻 Reprise) 配圖 (Magnific MCP 生成) |
| `track10_outro.jpg` | Track 10 (Outro) 配圖 (Magnific MCP 生成) |

### 周邊商品圖片
| 檔名 | 商品 |
|------|------|
| `十字路口 歌詞壓克力.png` | 歌詞壓克力板 |
| `壓克力設計.png` | 壓克力鑰匙圈 |
| `布條.png` | 刺繡布條鑰匙圈 |

---

## ✏️ 文案定稿

### 首頁 Hero
- **手寫標題**：images/title_handwritten.png
- **主標題**：如何長大又沒變壞
- **副標題**：Album Concept Proposal

### 各章節標題與描述
| 區塊 | 標題 | 描述 |
|------|------|------|
| Chapter 1 | 成長的代價 | 為了在社會中存活是有代價的，這僅僅是為了換取一刻喘息的空間 |
| Chapter 2 | 雙面人 | 要好好珍惜所有能喘息的瞬間 |
| Chapter 3 | 對自己的溫柔 | 即便外在世界再糟糕、道路再多棘手，只要能找到屬於自己的避風港，一切都是值得的。 |

### 頁尾金句
`<我們就是沒有用的年輕人> 倒數`

---

## ⚠️ 重要注意事項

### macOS TextEdit 相容性問題
- **問題**：macOS TextEdit 預設會將 HTML 存為 Rich Text 格式 (`.rtfd`)
- **解決方案**：編輯 HTML 時請使用純文字編輯器 (VS Code, Sublime Text 等)
- **若不幸發生**：刪除 `.rtfd` 資料夾後重新導出 `index.html`

### 圖片路徑
- 所有圖片使用**相對路徑** (如 `images/poster.png`)
- 絕對不可使用本地絕對路徑 (如 `file:///Users/...`)，否則瀏覽器會因安全機制而拒絕加載

---

## 📋 待辦事項 (TODO)
- [x] 新增所有 10 首曲目的視覺概念插圖
- [ ] 確認所有圖片在不同裝置上的顯示效果
- [ ] 考慮加入響應式導航列 (若內容持續增加)
- [ ] 測試手機版排版效果
- [ ] 考慮加入音樂試聽播放器 (若有需求)

---

## 📅 最後更新
- **日期**：2026-08-02
- **版本**：v1.1 全曲目概念圖片補全版
