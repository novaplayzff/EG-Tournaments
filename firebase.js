import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6842PdiIFSU_H_jF_LXIIYI9IfqvsB80",
  authDomain: "eg-tournaments-c5bff.firebaseapp.com",
  databaseURL: "https://eg-tournaments-c5bff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eg-tournaments-c5bff",
  storageBucket: "eg-tournaments-c5bff.firebasestorage.app",
  messagingSenderId: "491069840745",
  appId: "1:491069840745:web:bb9ca9027e8289ffbaf1f8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Global variables
window.db = database;
window.dbRef = ref;
window.dbPush = push;
