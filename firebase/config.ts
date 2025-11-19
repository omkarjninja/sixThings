
// firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIfgi_kMtujIQx5TtZELVQ_P0U67_nTls",
  authDomain: "thing-6336c.firebaseapp.com",
  projectId: "thing-6336c",
  storageBucket: "thing-6336c.firebasestorage.app",
  messagingSenderId: "95263775726",
  appId: "1:95263775726:web:af5820b4b3b07e610dccff",
  measurementId: "G-YVS1MXM286"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// enable web IndexedDB persistence (works for web builds/PWA)
if (typeof window !== "undefined") {
  enableIndexedDbPersistence(db).catch((err) => {
    console.warn("Firestore persistence not enabled:", err && err.message ? err.message : err);
  });
}

/**
 * Ensure anonymous auth. Call this before making Firestore writes/reads.
 * Returns a promise that resolves once we have a user.
 */
export function ensureAnonAuth(): Promise<void> {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsubscribe();
        resolve();
      } else {
        // sign in anonymously
        signInAnonymously(auth).catch((err) => {
          unsubscribe();
          reject(err);
        });
      }
    }, (err) => {
      unsubscribe();
      reject(err);
    });
  });
}
