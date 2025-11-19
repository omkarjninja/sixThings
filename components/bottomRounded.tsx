import { View, Text,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RoundedBtmButton() {
    const dateStr = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
});
  return (
    <View style={styles.box}>
        <Text style={{ color: "#000",fontSize: 24, fontWeight: "300" }}>{dateStr}</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  box: {
    width: "88%", // two in each row (space between)
    height: "7.5%",
    // backgroundColor: "#222",
    borderRadius: 20,
    backgroundColor: "#03ffb4",
    position: "absolute",
    bottom: 20,
    left: "4%",
    alignItems: "center",
    justifyContent: "center",
    margin: "2%",   // equal spacing
  },
  circle: {
    position: "absolute",
    top: 15,  
    left: "45%",              // moves the circle above the card
    backgroundColor: "#444",
    width: 40,
    height: 40,
    borderRadius: 20,        // perfect circle
    alignItems: "center",
    justifyContent: "center",
  },
});