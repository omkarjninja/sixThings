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
  TouchableWithoutFeedback,
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
  longPressDelay?: number;
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

  // web action menu state
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuX, setMenuX] = useState<number>(0);
  const [menuY, setMenuY] = useState<number>(0);

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

  // ---- long-press helpers ----
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTriggered = useRef(false);

  const showWebMenu = (pageX: number, pageY: number) => {
    // set position and show menu
    setMenuX(pageX);
    setMenuY(pageY);
    setMenuVisible(true);
  };

  const hideWebMenu = () => {
    setMenuVisible(false);
  };

  const completeFromUI = () => {
    setIsCompleted(true);
    onComplete?.();
    hideWebMenu();
  };

  const startLongPress = (e?: GestureResponderEvent | any) => {
    // Only attempt to preventDefault on web if event says it's cancelable
    if (Platform.OS === "web" && e && e.nativeEvent) {
      try {
        const ev = e.nativeEvent;
        if (ev.cancelable) {
          e.preventDefault?.();
        }
      } catch (err) {
        // ignore
      }
    }

    cancelLongPress();
    longPressTriggered.current = false;
    longPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true;

      // feedback
      try {
        if (Platform.OS === "web") {
          (navigator as any)?.vibrate?.(40);
        } else {
          Vibration.vibrate(40);
        }
      } catch (err) {}

      // If web -> show our custom menu, positioned at pointer
      if (Platform.OS === "web" && e && e.nativeEvent) {
        // pageX/pageY will position menu relative to viewport
        const pageX = e.nativeEvent.pageX ?? e.nativeEvent.clientX ?? 0;
        const pageY = e.nativeEvent.pageY ?? e.nativeEvent.clientY ?? 0;
        showWebMenu(pageX, pageY);
      } else {
        // native: keep using Alert dialog
        handleLongPress();
      }
    }, longPressDelay);
  };

  const cancelLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  // native alert (keeps previous behavior)
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

  // if long-press fired, skip normal tap flip
  const handlePress = () => {
    if (longPressTriggered.current) {
      longPressTriggered.current = false;
      return;
    }
    flipCard();
  };

  // web-only props spread (prevents default context menu and adds pointer handlers)
  const webProps = Platform.OS === "web"
    ? ({
        onContextMenu: (e: any) => {
          e.preventDefault();
          // Optionally show menu on contextmenu (right click) as well
          // position from e.pageX/Y
          const px = e.pageX ?? e.clientX ?? 0;
          const py = e.pageY ?? e.clientY ?? 0;
          showWebMenu(px, py);
        },
        onPointerDown: (e: any) => startLongPress(e),
        onPointerUp: () => cancelLongPress(),
        onPointerLeave: () => cancelLongPress(),
      } as any)
    : {};

  return (
    <>
      {/* Overlay that closes menu when clicking outside (web only) */}
      {Platform.OS === "web" && menuVisible && (
        <TouchableWithoutFeedback onPress={hideWebMenu}>
          <View style={styles.webOverlay} />
        </TouchableWithoutFeedback>
      )}

      <Pressable
        onPressIn={startLongPress}
        onPressOut={cancelLongPress}
        onPress={handlePress}
        style={[
          styles.container,
          Platform.OS === "web"
            ? {
                userSelect: "none" as any,
                WebkitUserSelect: "none" as any,
                MozUserSelect: "none" as any,
                touchAction: "manipulation" as any,
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

          {isCompleted && (
            <View style={styles.completedBadgeBack}>
              <Icon name="checkmark" size={18} color="#fff" />
              <Text style={styles.completedText}>Completed</Text>
            </View>
          )}
        </Animated.View>
      </Pressable>

      {/* Web floating action menu */}
      {Platform.OS === "web" && menuVisible && (
        <View
          style={[
            styles.webMenu,
            {
              top: menuY + 8, // small offset so it doesn't sit exactly under finger
              left: Math.max(8, menuX - 90), // attempt to center-ish and keep on-screen
            },
          ]}
        >
          <Pressable style={styles.webMenuItem} onPress={completeFromUI}>
            <Text style={styles.webMenuText}>Complete</Text>
          </Pressable>
          <Pressable style={styles.webMenuItem} onPress={hideWebMenu}>
            <Text style={[styles.webMenuText, { color: "#888" }]}>Cancel</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: "23%",
    margin: "1%",
  },
  box: {
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

  back: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
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

  // web overlay (transparent view that sits behind the menu to capture outside clicks)
  webOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },

  // web menu styling
  webMenu: {
    position: "absolute",
    zIndex: 1000,
    backgroundColor: "#111",
    paddingVertical: 6,
    borderRadius: 8,
    minWidth: 160,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },
  webMenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  webMenuText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
