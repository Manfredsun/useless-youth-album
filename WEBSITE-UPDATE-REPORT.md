# 專輯網站三頁改版交付報告

## 本機交付範圍

- 工作副本：`codex/website-three-pages`
- 本機路徑：`06_進行中宣傳計畫/06_Website/.worktrees/website`
- 頁面：`index.html`（新專輯）、`previous-album.html`（第一張專輯）、`merch.html`（周邊商品）
- 這次只建立本機提交，沒有合併 `main`、推送 GitHub、建立 PR 或部署。

## 已完成內容

- 新專輯首頁保留完整海報構圖，三章依 01–03、04–07、08–10 編排；〈下雨〉已移至 Chapter 2。
- 〈雙面人〉與〈就算我們未曾抵達〉已依 Album Brief 更新簡介。
- 第一張專輯保留 12 軌；11 首歌詞以原始檔案的段落與換行呈現，使用原生可展開區塊。
- 第一張專輯加入 2023 演出資訊與 5 張指定照片；主圖為 `DSC00622`，其餘照片可放大。
- 周邊頁集中展示 5 款商品素材，桌面雙欄、手機單欄，並保留 Threads／Instagram 追蹤入口。
- 三頁共用導覽、圖片閱讀視窗、鍵盤焦點、Escape 關閉、減少動態效果與響應式版面。
- 舊首頁的 `#chapter-1`、`#chapter-2`、`#chapter-3`、`#discography`、`#merch` 錨點仍可使用。

## 第一張專輯 Spotify 對照

| 曲序 | 網站顯示歌名 | Spotify 顯示名稱 | Spotify 演出者 | Spotify 單曲 |
|---:|---|---|---|---|
| 01 | Prelude | Prelude | 我們就是沒有用的年輕人、Manfred Sun | https://open.spotify.com/track/6ez5j1OmObEOVssdnIsDJm |
| 02 | 如果世上沒有聚光 | 如果世上沒有聚光 | 我們就是沒有用的年輕人、王嘉文 | https://open.spotify.com/track/22qIi3CxxVovvpZhdUaK9H |
| 03 | 在十字路口的我如果沒有迷失 | 在十字路口的我如果沒有迷失 | 我們就是沒有用的年輕人、符績揚 | https://open.spotify.com/track/0UwzAmYgXE0Opr4IW6lsEa |
| 04 | 樹下的我找著如果 | 樹下的我找著如果 | 我們就是沒有用的年輕人、袁凱瑩 | https://open.spotify.com/track/1tEaHGJOMwedTZrtOqARd7 |
| 05 | 孤獨的旋律 | 孤獨的旋律 | 我們就是沒有用的年輕人、Z.EN | https://open.spotify.com/track/2cgr0KfeTToNPqnyQ1BBMH |
| 06 | 不害怕 | 不害怕 | 我們就是沒有用的年輕人、Z.EN | https://open.spotify.com/track/2e8vme8DIF7PqlEg9DVZ2L |
| 07 | 碎了的我 | 碎了的我 | 我們就是沒有用的年輕人、袁凱瑩 | https://open.spotify.com/track/0YHwl3jCDNwp53Z0WpOBs8 |
| 08 | 遺憾一定會過去 | 遺憾一定會過去 | 我們就是沒有用的年輕人、Rick Pong | https://open.spotify.com/track/4Us9xNwBL3atA63YpxPwpQ |
| 09 | 是你讓我變得更加溫柔 | 是你讓我變得更加溫柔 | 我們就是沒有用的年輕人、王嘉文、Rick Pong | https://open.spotify.com/track/2Qd2UlalgPiaFGDnLR6oN6 |
| 10 | 放肆的自我 | 放肆的自我 | 我們就是沒有用的年輕人、袁凱瑩 | https://open.spotify.com/track/72KM4GUDiviqjYTVFHjUrD |
| 11 | 直至我們失去的一刻 | 直至我們逝去的一刻 | 我們就是沒有用的年輕人、符績揚 | https://open.spotify.com/track/7mke5psnPBCnbKacy5aXGx |
| 12 | 願所有的我們都能找到 | 願所有的我們都能找到 | 我們就是沒有用的年輕人 | https://open.spotify.com/track/4sqD8FoKUXRH0uyW82OTay |

Spotify 目前顯示第 11 首為「直至我們逝去的一刻」，網站顯示名稱依歌詞檔案保留為「直至我們失去的一刻」，按鈕開啟上述正確單曲。

## 驗收結果

- HTML 結構解析：三頁通過。
- JavaScript 語法檢查：`site.js` 通過。
- 圖片與站內路徑：三頁引用的資產均存在，演出照片含 640／1280／1920 WebP。
- 響應式：已檢查 375、768、1440 寬度及手機橫向，未發現橫向溢出或文字重疊。
- 互動：歌詞展開、Spotify 連結、商品／歌曲圖片放大、Escape 關閉與焦點返回已在本機瀏覽器檢查。
- JavaScript 關閉時：核心文字、歌詞、站內連結與原生 `details` 仍可使用。
- `git diff --check`：通過。

## 本機預覽

啟動本機靜態伺服器後可開啟：

- `http://127.0.0.1:8765/index.html`
- `http://127.0.0.1:8765/previous-album.html`
- `http://127.0.0.1:8765/merch.html`
