import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "./Icon";

export default function Navbar() {
  return (
    <View style={{ padding: 20,marginTop:20, width: "100%" ,flexDirection:"row",justifyContent:"space-between", alignItems:"center" }}>
      <Text style={{ color: "#fff",fontSize: 24, fontWeight: "bold" }}>Discover</Text>
      {/* <Ionicons name={"infinite-outline"} size={22} color="#fff" style={{marginRight: 20}}/> */}
      <Icon name={'infinite-outline'} size={22} color="#fff" style={{marginRight: 20}}/>
    </View>
  );
}
