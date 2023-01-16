// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions } from 'firebase/app'
import * as Env from '@/constants/env'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: Env.FIREBASE_API_KEY,
  authDomain: Env.FIREBASE_AUTH_DOMAIN,
  projectId: Env.FIREBASE_PROJECT_ID,
  storageBucket: Env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Env.FIREBASE_MESSAGING_SENDER_ID,
  appId: Env.FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
