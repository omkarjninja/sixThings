// roundedgrid.tsx  — updated (drop-in replace)
import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  Alert,
  Platform,
  Vibration,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "./Icon";

type Props = {
  label?: string;
  task?: string;
  bgColor?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  special?: boolean;
  completed?: boolean; // show check if true
  onComplete?: () => void; // call when user confirms completion
  longPressDelay?: number; // optional override for delay in ms
};

export default function RoundedGrid({
  label = "",
  bgColor = "#222",
  icon = "sparkles",
  special = false,
  task = "Complete this challenge.",
  completed = false,
  onComplete,
  longPressDelay = 450,
}: Props) {
  const animated = useRef(new Animated.Value(0)).current;
  const [flipped, setFlipped] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(!!completed);

  // keep internal state in sync with parent prop
  useEffect(() => {
    setIsCompleted(!!completed);
  }, [completed]);

  const frontInterpolate = animated.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const backInterpolate = animated.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = (e?: GestureResponderEvent) => {
    const toValue = flipped ? 0 : 180;
    Animated.spring(animated, {
      toValue,
      friction: 8,
      tension: 120,
      useNativeDriver: true,
    }).start(() => setFlipped(!flipped));
  };

  // ---- long-press state + helpers ----
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTriggered = useRef(false);

  const startLongPress = (e?: GestureResponderEvent | any) => {
    // On web, when pointerdown/touchstart begins, prevent selection & context menu interference
    if (Platform.OS === "web" && e && e.nativeEvent) {
      try {
        // prevent default selection or context menu starting (best-effort)
        e?.preventDefault?.();
      } catch (err) {
        // ignore
      }
    }

    cancelLongPress();
    longPressTriggered.current = false;
    longPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true;

      // haptic/vibration feedback
      try {
        if (Platform.OS === "web") {
          (navigator as any)?.vibrate?.(40);
        } else {
          Vibration.vibrate(40);
        }
      } catch (err) {
        // ignore
      }

      handleLongPress();
    }, longPressDelay);
  };

  const cancelLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  // Long press: confirm completion
  const handleLongPress = () => {
    Alert.alert(
      "Complete?",
      "Mark this task as completed?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Complete",
          onPress: () => {
            setIsCompleted(true);
            onComplete?.();
          },
        },
      ],
      { cancelable: true }
    );
  };

  // If long press fired, skip tap flip
  const handlePress = () => {
    if (longPressTriggered.current) {
      longPressTriggered.current = false;
      return;
    }
    flipCard();
  };

  // web-only props spread (typed as any to avoid TS errors)
  const webProps = Platform.OS === "web"
    ? ({
        // block the right-click/long-press context menu interfering
        onContextMenu: (e: any) => e.preventDefault(),
        // pointer events for extra safety on web
        onPointerDown: (e: any) => startLongPress(e),
        onPointerUp: () => cancelLongPress(),
        onPointerLeave: () => cancelLongPress(),
      } as any)
    : {};

  return (
    <Pressable
      onPressIn={startLongPress}
      onPressOut={cancelLongPress}
      onPress={handlePress}
      style={[
        styles.container,
        // prevent text selection on web
        Platform.OS === "web"
          ? {
              userSelect: "none" as any,
              WebkitUserSelect: "none" as any,
              MozUserSelect: "none" as any,
            }
          : {},
      ]}
      {...webProps}
    >
      {/* Front */}
      <Animated.View
        style={[
          styles.box,
          { backgroundColor: bgColor },
          special && styles.xyzStyle,
          { transform: [{ perspective: 1000 }, { rotateY: frontInterpolate }] },
        ]}
      >
        {/* make the icon area pressable independently (optional) */}
        <Pressable
          onPress={flipCard}
          onPressIn={startLongPress}
          onPressOut={cancelLongPress}
          style={[styles.circle, special && styles.xyzCircle]}
        >
          <Icon name={icon as string} size={22} color="#fff" />
        </Pressable>

        <Text
          style={[styles.boxText, special && styles.xyzText]}
          numberOfLines={3}
          selectable={false}
        >
          {label}
        </Text>

        {/* completed overlay (small check) */}
        {isCompleted && (
          <View style={styles.completedBadge}>
            <Icon name="checkmark" size={18} color="#fff" />
          </View>
        )}
      </Animated.View>

      {/* Back */}
      <Animated.View
        style={[
          styles.box,
          styles.back,
          { transform: [{ perspective: 1000 }, { rotateY: backInterpolate }] },
        ]}
      >
        <Text style={styles.backTitle} selectable={false}>
          Task
        </Text>
        <Text style={styles.backText} numberOfLines={6} selectable={false}>
          {task}
        </Text>

        {/* completed overlay also on back */}
        {isCompleted && (
          <View style={styles.completedBadgeBack}>
            <Icon name="checkmark" size={18} color="#fff" />
            <Text style={styles.completedText}>Completed</Text>
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: "23%",
    margin: "1%",
  },
  box: {
    // position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backfaceVisibility: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  circle: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#444",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    textAlign: "left",
  },

  // back side styling
  back: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 10,
    position: "absolute",
  },
  backTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
  },
  backText: {
    color: "#ddd",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },

  // completed badge (front)
  completedBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#1abc9c",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  // completed badge for back (w/ text)
  completedBadgeBack: {
    position: "absolute",
    bottom: 12,
    alignSelf: "center",
    backgroundColor: "#1abc9c",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  completedText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "700",
    fontSize: 12,
  },

  // special overrides
  xyzStyle: {
    borderWidth: 2,
    borderColor: "#0000000",
  },
  xyzCircle: {
    backgroundColor: "#ff5a5a",
  },
  xyzText: {
    color: "#111",
  },
});
