# 首頁場景素材製作紀錄

- 日期：2026-11-04
- 工具：內建 imagegen（以本機參考圖編輯，非 CLI）
- 參考圖：`docs/design/portfolio-map-960x540.png`
- 採用素材：`public/images/adventure-map.png`
- 用途：HTML 首屏面板、文字與導覽背後的場景。
- 場景保留原生輸出大小，版面以 960 × 540 邏輯單位定位；不宣稱符合嚴格一致的原生像素網格。
- 櫥窗的真實作品縮圖由 HTML 疊加；素材中的抽象海報為裝飾。

## 第一輪提示詞

```text
Use case precise-object-edit. Prepare this exact selected pixel game portfolio concept as a production website BACKGROUND ART asset, landscape 16:9, designed on 960x540 logical grid. Preserve the composition, positions, architecture, character, mailbox, roads, mountains, sunset, forest and stone bridge of this reference very closely. Warm detailed crisp pixel art, brown outlines, orange scarf character unchanged. Remove ALL WRITING and interactive UI from the background so we can overlay accessible real HTML. Specific edits: remove the entire top navigation strip (top 8%) and continue the sky / branches behind it. Remove the entire large left parchment hero panel including its buttons and text, and replace its rectangle with quiet softly lit cream/gold sky and distant hills/forest meadow, low contrast low detail, suitable behind a NEW HTML parchment panel positioned there. Keep left frame tree at edge. At upper-middle keep the full-body character and the SMALL FRAMED CHARACTER CARD next to it, keep the head portrait at top of card but remove all text and horizontal separator lines underneath portrait, leaving clean blank cream lower card area. Remove the three small ABOUT PROJECTS CONTACT label plaques and diamond map markers entirely, fill their places with natural dirt path/grass. At exhibition gallery remove the text EXHIBITION GALLERY from sign, leave blank wood sign. Keep window displays as abstract symbolic art not actual games. Keep all paths seamlessly connected, SINGLE approach path ending at mailbox, NO redundant loop/extra branch. No new elements. No words, no letters, no numbers anywhere. Preserve relative destination locations: character group centered x50% y30%; gallery x85% y31%; mailbox x73% y79%. Maintain 16:9 framing and coherent pixel grid, no smoothing. Output full scene only, no mockup.
```

## 第二輪：修復展示館支路（採用結果）

```text
Precise localized road repair only in this no-text production pixel-art background. Restore the missing dirt branch to the exhibition gallery. From the winding CENTRAL MAIN ROAD junction around (980,600) in this 1672x941 image, draw a continuous peach dirt branch gently up-right across the grassy strip beneath the broadleaf tree toward the gallery entry around (1400,475). Where the grassy ledge rises, add a short natural stone stair linking the branch to the gallery front steps. Path must be visibly continuous, not vanish into cliff. Keep existing main north-south route from character to mailbox, bridge approach, mailbox path ending, all structures, character, blank character card, blank gallery sign, left scenery, sky and dimensions exactly as before. Do not add any text, labels, plaques or UI. Only add gallery branch and tiny stair connection. Match original pixel density and road color. Preserve left open area for HTML panel.
```

## 字體

VT323 英數像素字體及 SIL OFL 授權自 Google Fonts 官方儲存庫取得，保存在 `public/fonts/`。中文與長內文使用系統字體，無執行時外部字體請求。
