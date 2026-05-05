# CLAUDE.md — Firebase 文字雲（huasheng-mt）

本檔案提供 Claude Code 在此專案工作時的操作指引。

## 專案概述

教學用即時文字雲工具。學生在提交頁輸入關鍵字，展示頁透過 Firestore `onSnapshot` 即時更新並依出現次數放大字級。

**技術棧：** 純 HTML + Firebase JS SDK 11（ESM CDN）+ d3-cloud · Cloud Firestore · Firebase Hosting

**線上網址：**
- 提交頁：`https://huasheng-mt.web.app/`
- 展示頁：`https://huasheng-mt.web.app/display.html`

## 常用指令

```bash
# 部署全部（hosting + Firestore 規則）
npx firebase-tools deploy

# 僅部署網站
npx firebase-tools deploy --only hosting

# 僅部署 Firestore 規則
npx firebase-tools deploy --only firestore:rules
```

## 架構

```
public/
├── index.html           # 學生提交頁
├── display.html         # 文字雲展示頁
└── firebase-config.js   # 共用 Firebase 初始化（兩頁共用）
firestore.rules          # 安全規則（wordcloud_words 開放讀寫）
firebase.json            # Hosting + Firestore 設定
.firebaserc              # 預設專案：huasheng-mt
```

## Firestore 集合

`wordcloud_words`：每筆文件含 `text`（string）與 `created_at`（timestamp）。

## 新增工具的流程

1. 在 `firestore.rules` 加新集合的讀寫規則
2. 在 `public/` 新增對應 HTML 檔
3. `npx firebase-tools deploy`
