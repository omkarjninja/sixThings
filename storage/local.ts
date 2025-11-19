// storage/local.ts  (replace existing)
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

// Simple in-memory fallback
const memoryStore: Record<string, any> = {};
const PREFIX = "completions:";

let AsyncStorage: any = null;
if (!isWeb) {
  try {
    // AsyncStorage is a native dependency — ensure it's installed via expo install
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    AsyncStorage = require("@react-native-async-storage/async-storage").default;
  } catch (e) {
    console.warn("AsyncStorage not available:", e);
    AsyncStorage = null;
  }
}

async function getRaw(key: string) {
  const full = PREFIX + key;
  if (!isWeb && AsyncStorage) {
    try {
      const raw = await AsyncStorage.getItem(full);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn("AsyncStorage getItem failed", e);
    }
  }

  if (isWeb) {
    try {
      // dynamic localforage require to avoid native bundling issues
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const localforage = require("localforage");
      const val = await localforage.getItem(full);
      return val ?? null;
    } catch (e) {
      // fallback to localStorage
      try {
        const raw = (global as any).localStorage?.getItem(full);
        return raw ? JSON.parse(raw) : null;
      } catch (err) {
        console.warn("localforage/localStorage failed", err);
      }
    }
  }

  // memory fallback
  return memoryStore[full] ?? null;
}

async function setRaw(key: string, value: any) {
  const full = PREFIX + key;
  if (!isWeb && AsyncStorage) {
    try {
      await AsyncStorage.setItem(full, JSON.stringify(value));
      return;
    } catch (e) {
      console.warn("AsyncStorage setItem failed", e);
    }
  }

  if (isWeb) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const localforage = require("localforage");
      await localforage.setItem(full, value);
      return;
    } catch (e) {
      try {
        (global as any).localStorage?.setItem(full, JSON.stringify(value));
        return;
      } catch {}
    }
  }

  // memory fallback
  memoryStore[full] = value;
}

export async function saveLocalCompletion(dateIso: string, statKey: string) {
  const existing = (await getRaw(dateIso)) || {};
  existing[statKey] = true;
  await setRaw(dateIso, existing);
  // small debug log so you can see in console
  console.log("[storage] saved completion", dateIso, statKey);
  return existing;
}

export async function getLocalCompletions(dateIso: string) {
  const res = (await getRaw(dateIso)) || {};
  console.log("[storage] loaded completions for", dateIso, res);
  return res;
}

export async function removeLocalCompletion(dateIso: string, statKey: string) {
  const existing = (await getRaw(dateIso)) || {};
  delete existing[statKey];
  await setRaw(dateIso, existing);
  return existing;
}
