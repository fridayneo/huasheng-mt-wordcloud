# huasheng-mt · 即時文字雲

教學用的即時文字雲工具。學生在提交頁輸入關鍵字，展示頁即時更新並依出現次數放大字級。

## 線上網址

- 提交頁：<https://huasheng-mt.web.app/>
- 展示頁：<https://huasheng-mt.web.app/display.html>

## 技術棧

- 前端：純 HTML + Firebase JS SDK 11（ESM CDN）+ d3-cloud
- 資料庫：Cloud Firestore（集合 `wordcloud_words`）
- 即時更新：`onSnapshot`
- 部署：Firebase Hosting

## 結構

```
.
├── firebase.json        # Firestore + Hosting 設定
├── firestore.rules      # 安全規則（白名單）
├── .firebaserc          # 預設專案：huasheng-mt
└── public/
    ├── index.html       # 學生提交頁
    ├── display.html     # 文字雲展示頁
    └── firebase-config.js  # 共用 Firebase 初始化
```

## Firestore 集合

`wordcloud_words` 每筆文件：

| 欄位 | 型別 | 說明 |
|------|------|------|
| `text` | string | 關鍵字（1-20 字） |
| `created_at` | timestamp | 伺服器時間戳 |

## 開發 / 部署指令

```bash
# 部署 Firestore 規則
npx firebase-tools deploy --only firestore:rules

# 部署網站
npx firebase-tools deploy --only hosting

# 全部
npx firebase-tools deploy
```

## 安全性

- Firestore 規則對 `wordcloud_words` 開放讀寫（測試用，無認證）
- 其他集合預設禁止
- Web SDK 的 apiKey 是設計給前端用的，可以公開

## 後續工具

要新增其他工具（投票、IRS 等）：

1. 編輯 `firestore.rules`，加新的 `match /集合/{document} { allow read, write: if true; }`
2. 在 `public/` 新增對應 HTML 檔
3. `npx firebase-tools deploy`
