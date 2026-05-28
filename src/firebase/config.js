/*------------------------------------------------------------*/
//                    firebase
/*------------------------------------------------------------*/

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"

const config = {
  apiKey: "AIzaSyAJtVoX0FR-Z6Vy-hWigyuFxA8aw-Tpjc0",
  authDomain: "hotel-el-dorado-1c58e.firebaseapp.com",
  databaseURL: "https://hotel-el-dorado-1c58e-default-rtdb.firebaseio.com",
  projectId: "hotel-el-dorado-1c58e",
  storageBucket: "hotel-el-dorado-1c58e.firebasestorage.app",
  messagingSenderId: "329324951596",
  appId: "1:329324951596:web:98ff2f7624ee0fac5b3989"
}

const app = initializeApp(config)
const auth = getAuth(app)
const db = getFirestore(app)
const rtdb = getDatabase(app)

export { auth, db, rtdb }
