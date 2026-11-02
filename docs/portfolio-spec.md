# 個人作品集網站規格需求（Portfolio Website Specification）

## 1. 目標（Objective）
建立一個個人作品集網站，用於展示個人專案、技術技能、工作經驗及聯絡資訊。

## 2. 目標受眾（Target Audience）
- 潛在雇主
- 招募人員
- 客戶與合作夥伴

## 3. 技術需求（Technology）
- JavaScript
- React
- Next.js（App Router）
- CSS
- 除非另有指定，否則採用靜態前端網站架構。

## 4. 頁面區塊（Page Sections）
使用portfolio-content.md中的內容。
- 導覽列（Navbar）
- 主視覺區塊（Hero）
- 關於我（About Me）
- 技能與技術（Skills and Technologies）
- 精選專案（Featured Projects）
- 工作經驗（Experience）
- 聯絡資訊（Contact）
- 頁尾（Footer）

## 5. 功能需求（Functional Requirements）
- 導覽列中的連結必須能正確捲動至對應的頁面區塊。
- 專案卡片必須顯示各專案的詳細資訊。
- 外部連結必須能正確開啟指定的目的地。
- 電子郵件聯絡功能必須使用有效的 `mailto` 連結。
- 網站導覽功能必須能在行動裝置上正常運作。
- 所有可見的互動控制項都必須能正常運作，且符合預期。
- 點擊標題超連結會補間移動。
### 精選專案（Featured Projects）
    - 初始顯示 YouTube 縮圖與播放按鈕。
    - 點擊縮圖後，在原位置替換成 YouTube iframe 並自動開始播放。
    - 播放中的影片必須提供關閉按鈕；點擊後卸載 YouTube iframe、停止播放並回復為縮圖與播放按鈕。
    - 影片仍由 YouTube 提供與播放，使用者不需離開作品集網站。
    - 保留「在 YouTube 開啟」作為額外選項，而不是主要流程。
    - 在src/styles/typography.css新增變數控制網頁樣式。

## 6. 響應式設計需求（Responsive Requirements）
- 桌上型電腦
- 平板裝置
- 行動裝置
- 不得出現非預期的水平溢位。

## 視覺風格（Visual Style）
- 適合遊戲開發者的視覺風格。
- 像素風格。
- 暖色系配色方案。

## 7. 無障礙設計（Accessibility）
- 使用具語意化的 HTML 標籤。
- 為圖片提供具有描述性的替代文字（alt text）。
- 導覽功能必須支援鍵盤操作。
- 提供清楚可見的焦點狀態（Focus States）。
- 文字與背景之間必須具有足夠的對比度。

## 8. 驗收標準（Acceptance Criteria）
- 應用程式必須能成功啟動。
- 正式環境建置（Production Build）必須成功。
- 瀏覽器主控台不得存在已知的重大錯誤。
- 主要導覽功能與專案連結必須正常運作。
- 網站版面配置必須能在行動裝置與桌上型電腦上正常使用。
- 不得捏造缺失的個人資訊或內容。
