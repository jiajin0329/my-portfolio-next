# 首頁場景素材製作紀錄

早期整景、去背、網站截圖與兩輪補景研究的附件已清理，下方保留各輪製作與驗證紀錄。現行網站驗收圖見[完整首頁審稿](native-homepage-review/README.md#實際網頁驗收圖)。

## 製作流程

依[視覺設計規格](../design-spec.md#16-畫布與像素製作要求)製作，入口與響應式驗收見同一份規格的第 1.4 與 1.7 節。

1. 在同一張 480 × 270 原生畫布繪製地景、三個地標及場景裝飾。
2. 交付 1× 母稿與最近鄰 2× 預覽，檢查各區像素尺度一致，且每個原稿像素在 2× 預覽對應同色的 2 × 2 方格。
3. 依設計規格第 1.1 節的核定稿及地景來源製作。提交同尺寸的完整首頁對照，記錄差異與審核狀態。經使用者確認後，按原尺寸裁出三張透明地標圖，記錄整數座標。底圖補齊地形，再以 1× 原位合成，確認地標與道路銜接。
4. 接入網站後以桌面截圖比對核定稿，另檢查手機裁切與操作。視覺驗收通過後才清理被取代的素材。

## 整景審稿

完整首頁概念圖以 480 × 270 整數格線配置介面。已逐像素確認，2× 預覽中每個 1× 像素都對應同色的 2 × 2 方格。

- [完整首頁概念圖 1×（480 × 270）](adventure-homepage-concept-480x270.png)
- [完整首頁概念圖 2×（960 × 540）](adventure-homepage-concept-960x540.png)

網站場景以同一張原生整景製作。四張圖層按下方座標合成後，已確認每個像素都與 1× 母稿一致，2× 預覽也通過逐像素比對。

## 修正版整景（懸停製作前）

- 參考採用上方核定的完整首頁概念圖，地景取自[對應的 1× 來源圖](adventure-map-concept-480x270.png)。
- 色階方向已確認。本輪在 480 × 270 格線上修整角色與資料牌、展示館與階梯、信箱及地景的低對比孤立像素，保留高對比輪廓、主要光影與介面位置。仍可見細微色階差異，主要在天空、植被與石壁。
- 同尺寸對照，左為核定稿，右為修正版 · 完整首頁 1× · 完整首頁 2× · [修正版地景 1×](../../public/images/adventure/scene-preview.png)
- 此節記錄懸停功能製作前的版本，當時使用完整地景預覽圖 `public/images/adventure/scene-preview.png`，並以 HTML 疊上地標連結、文字與櫥窗縮圖。當時已逐像素驗證 2× 放大，並在 320 至 1440 px 檢查三個入口。本輪分層接入見下方紀錄。

## 地標懸停原生整景

- 2026-11-12 使用者確認生圖試稿的動作方向，包含信箱平常完全關蓋、開蓋後信封多伸出一點。2026-11-17 使用者確認本節原生整景，授權拆圖及接入網頁。
- 以現行 `scene-preview.png` 及修正版完整首頁的 480 × 270 圖為底稿，依已確認的生圖參考，在原生格線逐格修整手臂、窗框及信箱。這次的新增筆觸以整數像素繪製。沿用底稿的地景、介面與文字，仍有上一輪修正版相對核定稿的細微色階差異。
- 平常狀態將信箱前蓋完全關閉，遮住信封。懸停狀態將蓋子往下翻開，米白色信封伸出箱口並露出封口折線，角色抬手、展示館窗框與窗台亮起暖金色。
- 腳底、階梯底端、信箱柱腳及名稱位置沿用底稿。兩張姿態預覽均以地標原尺寸呈現。104% 放大及約 150 ms 轉場於網站接入時驗收。
- 懸停整景同時展示三處姿態供審稿。實際網頁依滑鼠所在的圖片範圍切換各自的狀態。櫥窗內的既有示意畫面沿用底稿，網站接入仍由 HTML 疊上真實作品縮圖。

### 審稿檔案

| 檔案 | 用途 |
| --- | --- |
| 平常地景 1× | 480 × 270 完整地景，信箱關蓋 |
| 懸停地景 1× | 480 × 270 完整地景，三處懸停姿態 |
| 平常完整首頁 1× | 疊加既有介面的 480 × 270 審稿圖 |
| 懸停完整首頁 1× | 疊加既有介面的 480 × 270 審稿圖 |
| 平常完整首頁 2× | 960 × 540 最近鄰放大稿 |
| 懸停完整首頁 2× | 960 × 540 最近鄰放大稿 |
| 核定稿、平常、懸停整景對照 | 三張各 960 × 540 的並排比較 |

### 本輪檢查

- 四張 1× 整景皆為 480 × 270、不透明，PNG 重新讀取後與繪製像素一致。
- 兩張 2× 首頁皆為 960 × 540，已逐格確認每個原生像素完整對應同色的 2 × 2 方格。
- 對照圖中的核定稿與原始核定稿逐像素一致。
- 相對現行地景底稿，平常狀態更動信箱前蓋範圍共 288 像素，懸停狀態共更動 1,139 像素。更動限於右手臂及其原位置補景、三處窗框與窗台、信箱前蓋及信封的範圍。
- 已目視檢查 2× 平常及懸停完整首頁，並經使用者確認。網站接入後的驗收另見下節。

## 網站接入與待驗收

### 圖層與互動

以下圖層從已確認的 480 × 270 整景按原尺寸裁出，共用整數座標。每個地標都有平常與懸停兩張透明 PNG，使用相同畫布範圍。背景在地標輪廓內以鄰近的原生地景補齊，並保留姿態切換時露出的原稿補景。

| 素材（位於 `public/images/adventure/`） | 尺寸（px） | 左上角座標 |
| --- | --- | --- |
| `background-clean-native.png` | 480 × 270 | (0, 0) |
| `about-idle-clean.png`、`about-hover-clean.png` | 101 × 72 | (173, 55) |
| `projects-idle-clean.png`、`projects-hover-clean.png` | 155 × 98 | (319, 43) |
| `contact-idle-clean.png`、`contact-hover-clean.png` | 48 × 59 | (291, 183) |

- 以透明輪廓原位合成，平常與懸停兩種整景皆與各自已確認的 1× 母稿逐像素一致。
- 固定圖片的感應範圍，僅縮放內層視覺，避免名稱位移及放大後感應邊界反覆跳動。感應區以輪廓多邊形排除屋頂旁、信箱旁的大塊留白。
- 滑鼠懸停圖片範圍時換圖，於 150 ms 內以底部為原點放大至 104%。懸停名稱時，圖片維持平常姿態，名稱變色並顯示箭頭。
- 鍵盤焦點可切換姿態並顯示焦點框。觸控入口可直接前往對應區塊，懸停樣式限定於支援懸停及精細指標的裝置。
- 櫥窗縮圖的第二、第三張位置微調至亮框內側，避免遮住新增的窗框亮光。

### 網站截圖與可見差異

- 完整首頁平常狀態 · 完整首頁信箱聚焦狀態 · 手機版
- 地圖平常狀態 960 × 540 · 地圖信箱聚焦狀態 960 × 540
- 同尺寸比較，左為核定概念圖，中為網站地圖平常狀態，右為信箱聚焦狀態。每欄為 960 × 540。中、右兩欄由相同取景範圍裁出地圖區及疊加的介紹面板，再以最近鄰等比例縮至 960 × 540。當時的完整首頁原始截圖含頂部導覽與鍵盤焦點提示。
- 地標原位構圖沿用已確認的整景，網頁以 HTML 呈現介紹、名稱、資料牌文字與真實作品縮圖。相對概念圖，可見字體、面板內距、標籤尺寸及位置的差異，頂部導覽位於地圖外。這些既有 HTML 排版差異可在截圖中核對。
- 狀態為**已接入本機網頁，待使用者視覺驗收**。舊整景與舊分層素材皆保留。

### 接入後檢查

- `npm run lint`、`npm run build`、`git diff --check` 通過。
- 在正式建置的本機預覽中，逐一以滑鼠確認三個地標換圖，縮放矩陣為 1.04。三個名稱的座標與尺寸於懸停前後完全一致，僅懸停名稱時圖片不縮放且顯示平常姿態。
- 三個地標的圖片範圍與名稱共六個點擊入口，皆前往存在的對應區塊。鍵盤聚焦、Tab 順序及 Enter 導覽可用。
- 在 320、390、768、1440 CSS px 視窗檢查，皆無水平溢位，三組地標與名稱完整可見，名稱高度至少 44px。手機版的信箱入口點擊及導覽選單開啟、點選後收合正常。本輪使用瀏覽器尺寸與點擊測試，未進行實體觸控裝置測試。
- 既有 Sandwich Tycoon 影片按鈕能掛載 iframe，關閉後卸載 iframe 並恢復縮圖。職責展開正常，Email 連結保留有效的 `mailto`。本輪未驗證 YouTube 實際播放。
- 正式建置預覽未擷取到應用程式主控台錯誤。開發階段的首頁圖片延遲載入提示已透過明確設定 `loading="eager"` 修正。
- 已檢查減少動態的 CSS 優先序，縮放與轉場皆有取消規則。瀏覽器測試介面未提供系統偏好模擬，本輪未實測切換 `prefers-reduced-motion`。
- `next dev` 自動將 `AGENTS.md` 的框架提示區塊更新為英文。啟動時框架另提示目前 Next.js 版本有已知安全弱點，依賴套件升級需另行處理。

## 去背修正

> 此版本於 2026-11-18 因地標邊緣破碎及背景殘留，未通過使用者視覺驗收。以下為當時的實作與數值檢查紀錄，後續依文末的重做流程處理。

首次拆圖的多邊形輪廓仍包含地景。使用者指出問題後，本輪重新清理六張地標的透明遮罩，更新底圖及首頁的素材引用。原生畫布尺寸、地標落點和互動參數沿用核定版本。

### 原生像素與背景分工

- 內建 imagegen 提供物件去背參考，再將透明輪廓對回原生格線。最後交付素材的不透明像素均直接取自既有地標 PNG，已逐像素確認 RGB 一致。生成參考中的重繪色彩未接入網站。
- 清除角色與資料牌間、腿間及牌子下方的地景、煙囪旁的天空與樹木、花台底部草地，以及信箱周圍的地景。建築的屋頂藤蔓、花台植物、階梯及信箱的蓋子、旗子、柱子與信封屬於保留範圍。
- 每張圖的透明度只有 0 或 255，保留硬邊。兩種姿態的資料牌及建築等共用部位使用一致遮罩。
- 從地標移除的背景像素補回固定底圖。平常狀態原位合成與核定整景逐像素一致。懸停狀態與原核定稿有 46 個背景像素差異，皆位於透明範圍，以平常底圖呈現，避免同一位置的背景隨姿態切換。
- 原始六張地標和 `background-hover-native.png` 皆保留，供視覺驗收時比較。

| 修正版素材 | 從首次拆圖移除的不透明像素 |
| --- | --- |
| `about-idle-clean.png` | 1,068 |
| `about-hover-clean.png` | 927 |
| `projects-idle-clean.png` | 1,059 |
| `projects-hover-clean.png` | 1,059 |
| `contact-idle-clean.png` | 249 |
| `contact-hover-clean.png` | 222 |

### 去背與網站審稿

- 三種底色去背檢查圖由左至右為棋盤格、淺色及深色底，由上至下為關於我、展示館與信箱，每組左側為平常、右側為懸停，採最近鄰 2× 展示。
- 同尺寸整景比較由左至右為核定平常整景、修正版平常整景及修正版懸停整景，每欄 960 × 540，介面沿用核定預覽。
- 平常地景 1× · 平常地景 2× · 懸停地景 1× · 懸停地景 2×
- 網站實際截圖包含平常狀態、角色懸停、展示館懸停、信箱懸停及手機版。此組為修正後的正式建置本機預覽。
- 已目視檢查三種底色的獨立素材與三個地標懸停截圖。網站素材已更新，待使用者視覺驗收。

### 本輪驗證

- 六張地標尺寸及落點與原版一致，保留像素的 RGB 全數一致，透明度全為 0／255。
- 平常整景合成與核定稿一致，懸停稿的 46 個差異全為背景像素。兩張最近鄰 2× 整景均逐格確認同色 2 × 2 方格。
- `npm run lint`、`npm run build`、`git diff --check` 通過。
- 瀏覽器確認六張新圖均成功載入。三個地標懸停時各自換圖並放大至 104%，三個名稱的座標和尺寸皆固定。僅懸停名稱時，圖片為平常狀態且不縮放。
- 三個名稱點擊皆前往正確區塊，鍵盤聚焦信箱可顯示懸停姿態與焦點。320、390、768 CSS px 視窗皆無水平溢位，名稱完整可見且高度 44px。正式建置預覽未擷取到主控台錯誤。
- 本輪未進行實體觸控裝置及系統減少動態偏好切換測試。

### 去背工具與提示詞

本輪使用內建 imagegen 的 `background-extraction`。每個參考輸入包含同一地標的兩種姿態，以最近鄰放大供辨識。三次呼叫共用下列提示詞，將 `{subject}` 替換為各地標的文字。

```text
Use case background-extraction. Precise alpha matte cleanup of the supplied transparent sprite sheet. {subject} Preserve both poses exactly, their positions, spacing, size, warm colors and sharp native pixel-art boundaries. Preserve the entire input canvas and each subject's framing. Only delete landscape pixels to fully transparent alpha. No new shadows, objects, text, recoloring or antialiasing. The result must be true RGBA transparency.
```

- 關於我使用 `Keep the two character-and-profile-sign sprites. Remove every remaining patch of green grass, shrubs, blue/green background, including between the legs, between the character and board, below the board's bottom crossbar and around the feet. Keep wooden posts and every character pixel.`
- 展示館使用 `Keep the two building sprites with their roof ivy, flowers, stone flower planters, entrance stairs and chimney. Remove the residual yellow-green grass strip below the planters, and the purple sky / green trees in the rectangular area to the RIGHT of each chimney. Closely follow the brick chimney's actual right edge.`
- 信箱使用 `Keep the two red mailbox sprites, flag, wooden post, open door and envelope. Remove all green, yellow and blue landscape fringes along the flag, body, wooden post and bottom. Preserve the black/dark-brown object outline.`

## 2026-11-18 重做審稿

使用者同意先完成純背景與一組地標，確認畫面品質後再推進。這次先處理「關於我」，以獨立審稿交付。

### 純背景補景稿

- 補景原始生成稿為 1672 × 941，使用內建 imagegen 從 `scene-preview.png` 移除三組地標，重建樹林、草地及展示館原址的平台。
- 960 × 540 審稿縮圖與同尺寸比較供構圖審核。比較由左至右為原始整景、上一版有殘影的背景，以及新的補景稿。
- 已目視檢查三組物件原址，新的補景稿消除了上一版的直立殘邊與重複樹林拼貼。生成稿的樹林形狀、道路線形與部分地形細節有變化，仍須使用者確認。
- 此檔是**生成補景審稿**。960 × 540 為縮圖，尚未完成第 1.6 節要求的 480 × 270 原生逐格製作，原生背景素材驗收待後續完成。

本次生成提示詞如下。

```text
Use case precise-object-edit. Create a coherent clean background plate from the supplied warm sunset pixel-art adventure map. Remove ALL THREE landmark groups completely, including their dark outlines, attached props, feet, posts, flowers, stairs and contact shadows: the adventurer AND portrait/profile board around native x173–274 y55–127; the entire display building including chimney, roof, planters and stairs around x319–474 y43–141; the red mailbox, flag and wooden post around x291–339 y183–242. Reconstruct the terrain and distant forest behind them as naturally connected scenery. At the former building location, preserve a believable empty grassy plateau and the cliff edge below it. Preserve the main path and mailbox branch, river, stone bridge, waterfalls, mountains, sky, sunset, lighting, perspective, framing and warm pixel-art visual language from the target. Trace existing features smoothly into reconstructed regions, with no repeated copied tree strips, rectangular patches, object fragments or leftover shadows. The output is the entire 16:9 scene, background only, without UI, buildings, people, boards, mailbox, labels or text. Aim at the same 480x270 visual pixel scale, hard square pixel clusters.
```

### 關於我逐行遮罩

- 原生畫布維持 101 × 72，整景原點為 (173, 55)。直接依兩張核定 1× 整景的像素格，逐行記錄角色、髮絲、手指、靴底與資料牌木框的輪廓，像素取自原圖。
- 平常及抬手姿態各交付一張 PNG 與一份可編輯遮罩。遮罩每行 101 格、共 72 行，`#` 表示保留，`.` 表示透明。
- 原圖與兩種姿態的 4× 對照由左至右為含背景的原始裁圖、平常去背圖與抬手去背圖。
- 三種底色的 4× 檢查圖左右為平常及抬手姿態，由上至下為棋盤格、淺色及深色。
- 原位放置研究將兩種姿態放入補景稿供觀察落地位置。背景為生成縮圖，這張研究圖與正式 480 × 270 原生背景的驗收分開處理。
- 已檢查畫布、遮罩行列數及 0／255 透明度，保留像素與來源 RGB 一致。另確認選取的髮絲尖角、靴底及木框像素保留，腿間、木框下方及角色與木框間隙透明。上述檢查供視覺審核參考，使用者驗收仍待完成。

### 本輪範圍與檢查

- 更新設計規格與本紀錄，新增審稿圖片及兩張原生像素遮罩，網站程式及網站素材引用沿用上一版。
- 本輪執行審稿檔案尺寸、遮罩格式及文件連結檢查，`git diff --check` 通過。依專案規範，本輪未執行 `npm run lint` 或 `npm run build`。

## 保留的舊分層素材

2026-11-18 使用者要求開始下一輪修正後，新增第二輪背景研究與審稿紀錄。新背景已另存，未替換網站；生成輪廓試稿因重繪物件而未採用。此輪仍為研究稿，480 × 270 原生背景、三組地標最終遮罩及完整首頁視覺驗收均未完成。

下表記錄預覽前的分層素材。這些檔案保留至新版視覺驗收完成。

| 素材（位於 `public/images/adventure/`） | 尺寸（px） | 左上角座標 |
| --- | --- | --- |
| `background-native.png` | 480 × 270 | (0, 0) |
| `about.png` | 95 × 66 | (194, 63) |
| `projects.png` | 124 × 77 | (343, 73) |
| `contact.png` | 37 × 60 | (312, 191) |

資料牌文字、展示館名稱、真實作品縮圖及地標名稱由 HTML 疊加。

## 原生地景第一階段審稿

[本輪審稿](native-pixel-review/README.md)提供 480 × 270 純背景的新舊對照，以及「關於我」平常和抬手的原位合成與遮罩。待確認後再處理展示館與信箱，並提交完整首頁對照。網站沿用現行素材。

## 完整首頁原生整景審稿

純背景及角色已確認。[完整首頁審稿](native-homepage-review/README.md)提供三欄 480 × 270 整景、展示館與信箱兩組去背檢查及可編輯遮罩。完整首頁經使用者確認後，已輸出正式圖層並接入本機網站。

## 正式圖層與網站驗收

- 素材位於 `public/images/adventure/native/`。背景為 480 × 270，關於我為 101 × 72、原點 (173, 55)，展示館為 156 × 97、原點 (317, 43)，信箱為 48 × 59、原點 (291, 183)。兩套圖層加上審稿用介面後，均可逐像素重現已確認的整景。
- 背景與地標共用 16:9 場景尺度。展示館的名稱、窗位縮圖與感應區按新圖框重新定位。懸停及鍵盤焦點沿用底部為基準的 104% 放大，標籤位置固定。
- [網站同尺寸對照與桌面、平板、手機截圖](native-homepage-review/README.md#實際網頁驗收圖)來自本機正式建置。桌面對照使用網站的 960 × 540 地圖區塊，另附含導覽列的完整首屏截圖。
- `npm run lint`、`npm run build`、`git diff --check` 通過。Brave 確認 320、390、700、701、768、960、1440 CSS px 的地圖比例與地標位置，測試地標懸停、鍵盤焦點與 Enter、減少動態、手機觸控模擬、開關導覽、影片嵌入與關閉、職責展開及 `mailto`。未實測實體手機或 YouTube 實際播放。
- 待使用者驗收實際網頁畫面，舊分層素材保留。
