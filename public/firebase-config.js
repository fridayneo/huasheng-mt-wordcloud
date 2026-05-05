// Firebase Web SDK config — 公開可放於前端（apiKey 是設計給瀏覽器用）
// 安全性由 Firestore Security Rules 控制
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYU3OriPGePqht43RWPJI9ZZte1M99r7U",
  authDomain: "huasheng-mt.firebaseapp.com",
  projectId: "huasheng-mt",
  storageBucket: "huasheng-mt.firebasestorage.app",
  messagingSenderId: "999416378089",
  appId: "1:999416378089:web:6652662aec9a7b70c13678",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
};
