// storage/localAsync.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
const PREFIX = "completions:";

export async function saveLocalCompletion(dateIso: string, statKey: string) {
  const key = PREFIX + dateIso;
  const raw = await AsyncStorage.getItem(key);
  const obj = raw ? JSON.parse(raw) : {};
  obj[statKey] = true;
  await AsyncStorage.setItem(key, JSON.stringify(obj));
  return obj;
}

export async function getLocalCompletions(dateIso: string) {
  const raw = await AsyncStorage.getItem(PREFIX + dateIso);
  return raw ? JSON.parse(raw) : {};
}
