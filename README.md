# Running on Treadmill Analysis

瀏覽器端單鏡頭 2D 跑步機步態分析工具。匯入側面跑步影片後，在本機執行姿態辨識，估算左右腳觸地事件、步頻、步時、接觸時間與觸地膝角，並提供骨架覆疊、事件表、JSON 與 CSV 匯出。完成分析後，重播、拖曳或逐格檢查影片會依目前時間同步重算右側指標，並從頭累積繪製左右踝軌跡。

## 隱私與限制

- 影片保留在瀏覽器，不會上傳到 Firebase。
- 第一次分析需連線下載 MediaPipe 姿態模型。
- 所有數值都是單鏡頭 2D 推估，適合訓練觀察與人工複核，不是醫療診斷或實驗室金標準。
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
