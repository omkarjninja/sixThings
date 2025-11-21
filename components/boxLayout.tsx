// BoxLayout.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import RoundedGrid from "./roundedgrid";
import { tasksByDate } from "../data/tasksbyDate";

// Firebase + local async storage helpers
import { ensureAnonAuth, auth } from "../firebase/config";
import { markCompletedCloud, getCompletionsForDate } from "../firebase/completions";
import { saveLocalCompletion, getLocalCompletions } from "../storage/localAsync";

// helper to get ISO date YYYY-MM-DD (local date)
function isoDateLocal(d: Date) {
  const tzOffset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tzOffset).toISOString().slice(0, 10);
}

// pretty day/month text, e.g. "18 Nov"
function prettyDayMonth(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export default function BoxLayout() {
  // default to Nov 19, 2025 (or use new Date() for today)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dayCompletions, setDayCompletions] = useState<Record<string, boolean>>({});
  const [uid, setUid] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("idle");

  const key = isoDateLocal(selectedDate);
  const dayTasks = tasksByDate[key];

  // stats array (unchanged UI)
  const stats = [
    { key: "physical", bg: "#ee90fe", icon: "barbell" as const, tagline: "Push past the limit you thought you had." },
    { key: "intelligence", bg: "#03ffb4", icon: "bulb" as const, tagline: "Solve what others don’t even see." },
    { key: "mind", bg: "#FFFFFF", icon: "shield-checkmark" as const, special: true, tagline: "Sharpen the way you think, choose, and improve." },
    { key: "creation", bg: "#ee90fe", icon: "color-palette" as const, tagline: "Make something today that didn’t exist yesterday." },
    { key: "money", bg: "#03ffb4", icon: "cash-outline" as const, tagline: "Build the habits that make your future richer." },
    { key: "charisma", bg: "#FFFFFF", icon: "sparkles" as const, special: true, tagline: "Shift the energy of any room you enter." },
  ] as const;

  // ensure anon auth on mount and store uid
  useEffect(() => {
    let mounted = true;
    (async () => {
      setStatus("authenticating");
      try {
        await ensureAnonAuth();
        const u = auth.currentUser?.uid ?? null;
        if (mounted) {
          setUid(u);
          setStatus("authenticated");
          console.log("[BoxLayout] authenticated uid=", u);
        }
      } catch (e) {
        console.warn("[BoxLayout] ensureAnonAuth failed:", e);
        if (mounted) setStatus("auth-failed");
      }
    })();
    return () => { mounted = false; };
  }, []);

  // load completions for the selected date whenever it changes
  // WAIT for auth above then try cloud, otherwise fallback to local
  useEffect(() => {
    let mounted = true;
    (async () => {
      setStatus("loading");
      try {
        // ensure auth ready before cloud read
        await ensureAnonAuth();
        const user = auth.currentUser;
        console.log("[BoxLayout] attempting cloud read for", key, "uid=", user?.uid);
        if (user) {
          try {
            const cloud = await getCompletionsForDate(user.uid, key);
            console.log("[BoxLayout] cloud read:", key, cloud);
            if (mounted && cloud && Object.keys(cloud).length) {
              setDayCompletions(cloud);
              // save cloud locally for offline fallback
              for (const k of Object.keys(cloud)) {
                try { await saveLocalCompletion(key, k); } catch (e) { /* ignore */ }
              }
              setStatus("loaded-cloud");
              return;
            }
          } catch (cloudErr) {
            console.warn("[BoxLayout] cloud read error:", cloudErr);
          }
        } else {
          console.warn("[BoxLayout] no auth user available for cloud read");
        }
      } catch (authErr) {
        console.warn("[BoxLayout] ensureAnonAuth (in load) failed:", authErr);
      }

      // fallback to local if cloud didn't return anything
      try {
        const local = await getLocalCompletions(key);
        console.log("[BoxLayout] local read:", key, local);
        if (mounted) setDayCompletions(local || {});
        setStatus("loaded-local");
      } catch (localErr) {
        console.warn("[BoxLayout] local read failed", localErr);
        if (mounted) setDayCompletions({});
        setStatus("loaded-failed");
      }
    })();
    return () => { mounted = false; };
  }, [key]);

  // called when a RoundedGrid signals completion (long press confirm)
  const handleComplete = async (statKey: string) => {
    try {
      // optimistic UI update
      setDayCompletions(prev => ({ ...prev, [statKey]: true }));

      // persist locally immediately (AsyncStorage)
      try {
        await saveLocalCompletion(key, statKey);
        console.log("[BoxLayout] saved locally", key, statKey);
      } catch (e) {
        console.warn("[BoxLayout] Local save failed:", e);
      }

      // attempt cloud push (best effort) and re-read cloud on success
      try {
        await ensureAnonAuth();
        const uidLocal = auth.currentUser?.uid;
        if (uidLocal) {
          const res = await markCompletedCloud(uidLocal, key, statKey);
          console.log("[BoxLayout] markCompletedCloud result:", res);
          // After a successful cloud push, re-fetch cloud completions to sync UI exactly
          const cloud = await getCompletionsForDate(uidLocal, key);
          console.log("[BoxLayout] post-write cloud read:", cloud);
          setDayCompletions(cloud || {});
        } else {
          console.warn("[BoxLayout] no uid; skipped cloud write");
        }
      } catch (e) {
        console.warn("[BoxLayout] Cloud save failed (will rely on local):", e);
      }
    } catch (e) {
      console.warn("handleComplete failed", e);
    }
  };

  // small debug helper to force a cloud write and immediate reload
  const testPushCloud = async () => {
    try {
      await ensureAnonAuth();
      const u = auth.currentUser?.uid;
      console.log("[TEST] uid:", u, "key:", key);
      if (!u) return;
      const r = await markCompletedCloud(u, key, "physical");
      console.log("[TEST] markCompletedCloud:", r);
      const cloud = await getCompletionsForDate(u, key);
      console.log("[TEST] cloud after test write:", cloud);
      setDayCompletions(cloud || {});
    } catch (e) {
      console.error("[TEST] failed", e);
    }
  };

  return (
    <>
      {/* debug status (won't disturb UI) */}
      {/* <View style={{ padding: 8 }}>
        <Text style={{ color: "#000" }}>UID: {uid ?? "null"}</Text>
        <Text style={{ color: "#000" }}>Status: {status}</Text>
        <View style={{ flexDirection: "row", gap: 8, marginTop: 6 }}>
          <Button title="TEST PUSH CLOUD" onPress={testPushCloud} />
        </View>
      </View> */}

      <View style={styles.grid}>
        {stats.map((s) => (
          <RoundedGrid
            key={s.key}
            label={s.tagline}
            bgColor={s.bg}
            icon={s.icon}
            special={true}
            task={dayTasks ? dayTasks[s.key as keyof typeof dayTasks] : "No task available"}
            completed={!!dayCompletions[s.key]}
            onComplete={() => handleComplete(s.key)}
          />
        ))}
      </View>

      <View style={styles.box}>
        <Button
          title="◀"
          onPress={() =>
            setSelectedDate(d => { const n = new Date(d); n.setDate(n.getDate() - 1); return n; })
          }
        />
        <Text style={styles.dateText}>{prettyDayMonth(selectedDate)}</Text>
        <Button
          title="▶"
          onPress={() =>
            setSelectedDate(d => { const n = new Date(d); n.setDate(n.getDate() + 1); return n; })
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginBottom: 8 },
  dateText: { color: "#000", fontWeight: "700", fontSize: 16 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", padding: 20, height: "100%",width: "100%" },
  box: { width: "88%", height: "7.5%", borderRadius: 20, backgroundColor: "#03ffb4", color: "#000", position: "absolute", display: "flex", bottom: 0, left: "4%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: "2%" },
  arrow: {},
});
