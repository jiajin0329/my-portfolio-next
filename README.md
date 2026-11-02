# Jia-Jin Chen 的個人作品集

從 `/Users/logy/React/my-portfolio` 的 React + Vite 專案遷移至 Next.js App Router，保留 JavaScript、JSX、CSS、作品內容與響應式設計。

## 開發

需要 Node.js 20.9 以上版本與 pnpm。

```sh
pnpm install
pnpm dev
```

開啟 http://localhost:3000。

```sh
pnpm lint
pnpm build
pnpm start
```

首頁會在建置時預先產生靜態內容；`pnpm start` 啟動 Next.js 正式環境伺服器。

## 結構

- `src/app/layout.jsx`：語系、metadata、全域樣式。
- `src/app/page.jsx`：首頁入口。
- `src/components/PortfolioApp.jsx`：頁面區塊，使用 Server Component。
- `src/components/Navbar.jsx`：手機導覽，使用 Client Component。
- `src/components/ProjectCard.jsx`：YouTube 播放與關閉、縮圖備援，使用 Client Component。
- `src/data/portfolio.js`：個人資料、導覽與作品。
- `src/styles/typography.css`：保留原始字級、色彩、間距與影片寬度變數。
- `docs/`：需求、設計規格及原始作品內容。

## 保留的功能

單頁錨點與平滑捲動、手機選單、四個專案、原地播放及關閉 YouTube 影片、原生職責展開、Email 與外部連結，以及鍵盤焦點與減少動態偏好。

影片與縮圖依賴 YouTube；自動播放受瀏覽器限制。工作經歷沿用待補充狀態，沒有新增個人經歷。尚未設定正式網址或部署。

框架參考：[Next.js 安裝與 App Router](https://nextjs.org/docs/app/getting-started/installation)。
