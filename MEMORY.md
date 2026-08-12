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
| 05 | 雙面人 | Chapter 2 |
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
- **圖片格式**：全站統一使用 WebP (原始 PNG/JPG 備份保留，網站僅引用 `.webp`)
- **圖片載入**：Hero 圖片 eager load；其餘所有圖片 `loading="lazy"`

### 頁面區塊 (Section)
1. **Hero** - 主視覺 + 手寫標題 + 核心文案（`h1` 放主標，SEO 用）
2. **Prologue** - 前言獨白
3. **Chapter 1** - 成長的代價 (Track 01-03) · 錨點 `#chapter-1`
4. **Chapter 2** - 雙面人 (Track 04-06) · 錨點 `#chapter-2`
5. **Chapter 3** - 對自己的溫柔 (Track 07-10) · 錨點 `#chapter-3`
6. **Discography** - 前作 2023《我們就是沒有用的年輕人》12 首 + 串流連結 · 錨點 `#discography`
7. **Merch** - 宣傳周邊展示 · 錨點 `#merch`
8. **Footer** - 頁尾版權 + Threads／IG 連結

錨點是給宣傳貼文直接導到指定段落用的，改動時不要刪掉 `id`。

### SEO／GEO
- `<head>` 有 meta description、canonical、Open Graph、Twitter Card
- 兩組 JSON-LD：新專輯《如何長大又沒變壞》10 首、前作《我們就是沒有用的年輕人》12 首（含 Spotify／YouTube Music／KKBOX 的 `sameAs`）
- `robots.txt` 明確允許 GPTBot、ChatGPT-User、OAI-SearchBot、PerplexityBot、ClaudeBot、anthropic-ai、Google-Extended
- `sitemap.xml` 指向站台根路徑

### 前作區塊的用途
新專輯 2027 年才發行，站上沒有任何能立刻聽的東西。前作是唯一「現在就聽得完」的作品，
也是行銷鋪墊期（發行前那段長跑）的導流終點——宣傳貼文講 2023 的歌，連結指到 `#discography`，
再由這裡導去串流。同時讓 AI 搜尋引擎回答「我們就是沒有用的年輕人是誰」時有實體可引用。

---

## 🎨 視覺素材清單

### 主要圖片 (`images/` 資料夾)
| 檔名 | 用途 | 格式 |
|------|------|------|
| `poster.webp` | 專輯主視覺海報 (Hero 背景) | WebP |
| `title_handwritten.webp` | 手寫字標題 | WebP |
| `Pocketwatch.webp` | Track 01 (倒數) 配圖 | WebP |
| `city_background.webp` | Track 02 (2973 公里) 配圖 (Magnific MCP 重設) | WebP |
| `Crossroad.webp` | Track 03 (捨棄) 配圖 (Magnific MCP 重設) | WebP |
| `track04_memory.webp` | Track 04 (笨拙的記憶) 配圖 (Magnific MCP 生成) | WebP |
| `track05_mask.webp` | Track 05 (面具人) 配圖 (Magnific MCP 生成) | WebP |
| `track06_void.webp` | Track 06 (會有所不同嗎) 配圖 (Magnific MCP 生成) | WebP |
| `Gemini_Generated_Image_nn0ewtnn0ewtnn0e.webp` | Chapter 2 概念大圖 | WebP |
| `notebook.webp` | Track 07 (渺小) 配圖 | WebP |
| `pexels-strannik-sk-35368202.webp` | Track 08 (就在我們相遇的一刻) 配圖 (Magnific MCP 重設) | WebP |
| `track09_reprise.webp` | Track 09 (直至我們逝去的一刻 Reprise) 配圖 (Magnific MCP 生成) | WebP |
| `track10_outro.webp` | Track 10 (Outro) 配圖 (Magnific MCP 生成) | WebP |

### 周邊商品圖片
| 檔名 | 商品 | 格式 |
|------|------|------|
| `十字路口 歌詞壓克力.webp` | 歌詞壓克力板 | WebP |
| `壓克力設計.webp` | 壓克力鑰匙圈 | WebP |
| `布條.webp` | 刺繡布條鑰匙圈 | WebP |
| `tshirt_sleepless_nights.webp` | 起來復健 T-Shirt | WebP |
| `tshirt_zuishengmengsi.webp` | 醉生夢死 T-Shirt | WebP |

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
| Chapter 3 | 對自己的溫柔 | 即便外在世界再糟糕、道路再多棘手，只要能找到屬於自己的避風港，一切都是值的。 |

### 頁尾金句
`<我們就是沒有用的年輕人> 倒數`

---

## ⚠️ 重要注意事項

### macOS TextEdit 相容性問題
- **問題**：macOS TextEdit 預設會將 HTML 存為 Rich Text 格式 (`.rtfd`)
- **解決方案**：編輯 HTML 時請使用純文字編輯器 (VS Code, Sublime Text 等)
- **若不幸發生**：刪除 `.rtfd` 資料夾後重新導出 `index.html`

### 圖片路徑
- 所有圖片使用**相對路徑** (如 `images/poster.webp`)
- 絕對不可使用本地絕對路徑 (如 `file:///Users/...`)，否則瀏覽器會因安全機制而拒絕加載
- 原始 PNG/JPG 備份保留在 `images/` 資料夾中，未來替換圖片時只需重新轉換為 WebP

### 手機版注意
- Chapter 側欄必須使用 `lg:sticky lg:top-24`，**禁止**使用 `sticky top-24`（會在手機版造成重疊）

---

## 📋 待辦事項 (TODO)
- [x] 新增所有 10 首曲目的視覺概念插圖
- [x] 重設 Track 02、03、08 封面圖片 (Magnific MCP)
- [x] 修復手機版 Chapter 文字重疊問題
- [x] 全站圖片轉換為 WebP 並加入 lazy loading
- [x] 宣傳周邊新增 2 款 T-Shirt (起來復健 / 醉生夢死)
- [x] 補上分享預覽、結構化資料與站內轉換入口
- [x] 加上章節與周邊區塊的錨點 id
- [x] 新增前作區塊與 2023 專輯 JSON-LD
- [ ] 確認所有圖片在不同裝置上的顯示效果
- [ ] 考慮加入響應式導航列 (若內容持續增加)
- [ ] 考慮加入音樂試聽播放器 (若有需求)
- [ ] 前作區塊目前沒有專輯封面圖，之後補一張會更完整

---

## 📅 最後更新
- **日期**：2026-08-12
- **版本**：新增前作 (Discography) 區塊與 2023 專輯結構化資料
