# 港鐵・輕鐵點對點 PWA v0.1

## 功能
- 港鐵 + 輕鐵點對點路線搜尋
- 自動顯示轉綫／轉乘
- 起終點交換
- 最近搜尋（localStorage）
- PWA manifest + Service Worker
- iPhone / Android 可加入主畫面
- app shell 可離線開啟

## 資料基準
路線資料按 2026-09-07 港鐵官方系統圖及輕鐵行車時間表整理。
2026-07-05 起「屯門泳池站」已改名為「海皇路站」。

## GitHub Pages
1. 新建 repository
2. 將本資料夾所有檔案上傳到 repository 根目錄
3. Settings → Pages
4. Build and deployment → Deploy from a branch
5. Branch 選 main / (root)
6. Save
7. 等 GitHub Pages 網址出現後，用 Safari 開啟
8. iPhone：分享 → 加入主畫面

## v0.1 限制
目前路線排序以站數 + 轉乘懲罰作簡化權重。
未加入實時候車時間、車費、頭尾班車、月台及臨時服務調整。

## 建議 v0.2
- MTR / Light Rail 官方實時到站 API
- 港鐵／輕鐵最新車費
- 實際估算時間
- 常用路線收藏
- 首／尾班車
- 轉乘月台提示
