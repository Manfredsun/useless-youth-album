# 專案上架資訊 (GitHub Pages Deployment Info)

## 專案基本資料
- **專案名稱**：我們就是沒有用的年輕人 — 專輯企劃官網
- **託管平台**：GitHub Pages
- **GitHub Repository**：[Manfredsun/useless-youth-album](https://github.com/Manfredsun/useless-youth-album)
- **正式線上網址**：[https://manfredsun.github.io/useless-youth-album/](https://manfredsun.github.io/useless-youth-album/)

---

## 部署與更新說明

### 部署配置
- **預設分支 (Default Branch)**：`main`
- **發布來源 (Publishing Source)**：`Deploy from a branch` (Branch: `main` / Folder: `/ (root)`)
- **配置檔案**：已新增 `.nojekyll`（跳過 Jekyll 建構，加速純 HTML/CSS/JS 靜態網頁發布）
- **認證方式**：SSH Key (ed25519)

### 未來更新網站流程
每次更新 `index.html` 或新增/修改圖片等靜態資源後，在本機終端機執行以下指令即可自動更新上線內容：

```bash
git add .
git commit -m "更新網站內容"
git push
```

*注意：`git push` 後約需要 1~2 分鐘，GitHub Pages 即可完成自動部署並顯示最新內容。*

---

## 🕒 最近更新紀錄 (Update Log)
- **2026-08-02 (v1.2)**：手機版排版修復 + 全站效能優化
  - 修復 Chapter 1 / 3 側欄在手機版因 `sticky` 定位導致文字重疊問題 (改為 `lg:sticky lg:top-24`)
  - 所有 16 張圖片轉換為 WebP 格式 (總圖片體積從 ~30 MB 降至 ~5 MB，減少 83%)
  - 加入 `loading="lazy"` 延遲載入所有非首屏圖片
  - 完成 Commit `8bc9723` 並成功推送至 GitHub Pages
- **2026-08-02 (v1.1)**：全專輯 10 首曲目視覺圖片補全
  - 使用 Magnific MCP 生成 Tracks 04、05、06、09、10 頹廢日系暗黑電影感概念圖片
  - 調整 Chapter 2 (3 欄卡片內嵌 16:9 圖片) 與 Chapter 3 (21:9 寬螢幕 Banner) 排版
  - 完成 Commit `089d08d` 並成功推送至 GitHub Pages

