// Firebase App import
import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// Firebase Authentication import
import { getAuth } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Firebase Console se mila hua code yahan ayega
const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_BUCKET",

messagingSenderId: "YOUR_ID",

appId: "YOUR_APP_ID"

};


// Firebase start karna
const app = initializeApp(firebaseConfig);


// Login system activate karna
const auth = getAuth(app);


// Dusri files me use karne ke liye export
export { auth };
