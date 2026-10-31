# Running on Treadmill Analysis

瀏覽器端單鏡頭 2D 跑步機步態分析工具。使用 BlazePose GHUM Heavy、時間平滑及實際影片顯示區域對齊，讓直式跑步影片的骨架覆疊更穩定。重播、拖曳或逐格檢查時，右側步頻、踝軌跡、質心代理軌跡與左右髖膝角度都會依影片時間同步更新。

## 新增分析

- 肚臍附近 Center of Mass 代理點、影像軌跡與垂直晃動圖。
- 左右踝路徑長度、垂直振幅，以及左右髖膝每一步活動範圍與不對稱提示。
- 輸入身高後提供公分估計；未輸入時顯示身高百分比。

## 隱私與限制

- 影片保留在瀏覽器，不會上傳到 Firebase。
- 第一次分析需連線下載 MediaPipe 姿態模型。
- 所有數值都是單鏡頭 2D 推估，適合訓練觀察與人工複核，不是醫療診斷或實驗室金標準。
- 公分數是以使用者身高校正的單鏡頭估計；Center of Mass 是軀幹代理點，不是依體節質量計算的全身質心。
- 跑步機影片無法從人體位移直接估算真實速度或步幅。

## 本機執行

```bash
npm test
npm run serve
```

開啟 `http://localhost:4173`。也可直接雙擊 `index.html`；已發布的 `app.bundle.js` 支援本機 `file://` 影片匯入。

## 方法來源與授權

本工具的足部高度正規化、由向下穿越閾值辨識觸地，以及使用同腳 stride interval 計算 cadence 的概念，參考 Jeremy Park 的 Apache-2.0 專案 [`vision-demos/running`](https://github.com/jeremyipark/vision-demos/tree/main/running)。本專案以瀏覽器端 MediaPipe Pose Landmarker 重新實作，並未複製其 VLM Run API 或 Python 執行架構。

## 品牌資訊

資助單位：臺灣運動健康科技學會  
版本更新：2026 年 11 月
