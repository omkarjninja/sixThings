// firebase/completions.ts
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./config";

/**
 * Mark a stat as completed for a specific user + date.
 * Uses merge so only that stat is set to true.
 *
 * @param uid - Firebase uid (string)
 * @param dateIso - "YYYY-MM-DD"
 * @param statKey - e.g. "physical"
 */
export async function markCompletedCloud(uid: string, dateIso: string, statKey: string) {
  const ref = doc(db, "users", uid, "completions", dateIso);
  await setDoc(
    ref,
    {
      date: dateIso,
      completed: { [statKey]: true },
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

/**
 * Read completions for a specific user+date.
 * Returns an object like { physical: true, intelligence: true }
 */
export async function getCompletionsForDate(uid: string, dateIso: string) {
  const ref = doc(db, "users", uid, "completions", dateIso);
  const snap = await getDoc(ref);
  if (!snap.exists()) return {};
  const data = snap.data();
  return (data && data.completed) || {};
}
