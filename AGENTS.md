# 專案開發規範

## 一、專案目標
- 使用 JavaScript、React 和 Next.js（App Router） 開發個人作品集網站。
- 使用 JSX 撰寫 React 元件。
- 網站必須支援桌面、平板與手機。
- 優先確保程式碼可維護性與元件重用性。

## 二、開發前檢查
- 開始修改前，先檢查現有專案結構。
- 開發前必須閱讀 docs/portfolio-spec.md。
- 如果存在 docs/design-spec.md，也必須一併閱讀。
- 不得自行虛構個人經歷、作品內容或技術能力。

## 三、程式碼規範
- 優先使用函式元件與 React Hooks。
- 將可重用的使用者介面拆分為獨立元件。
- 適當分離資料、畫面與樣式。
- 優先使用語意化 HTML。
- 避免不必要的套件與重複程式碼。

## 四、驗收與測試
- 修改首頁視覺素材時，須以 `docs/design-spec.md` 指定的核定概念圖為準。先提交同尺寸的整景對照預覽，經使用者確認後，才可拆分圖層與替換網站素材。接入後須以網站截圖再次比對核定稿，通過視覺驗收後才清理被取代的素材。建置、功能測試與像素比對不能代替視覺驗收。
- 僅修改文件或圖表（例如 `.md`、`.canvas`）時，只做與交付物相關的檢查，例如確認格式、連結和畫布呈現。除非使用者明確要求，否則跳過 `npm run lint` 和 `npm run build`。
- 修改網站程式碼、相依套件或建置設定時，依變更範圍執行適用的 lint、建置與功能測試。
- 修正本次修改造成的錯誤。
- 不得宣稱尚未實際執行的測試已經通過。
- 回報修改檔案、測試結果及已知問題。

## 五、修改限制
- 只修改目前任務所需的範圍。
- 未經要求，不得部署網站或發布外部版本。
- 不得擅自刪除既有素材或進行無關重構。

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
