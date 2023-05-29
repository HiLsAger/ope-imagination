import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import RefreshIcon from "../../../assets/refresh.png";

interface CaptureControlProps {
  ready: boolean;
  onSwitch: () => void;
  onPress: () => void;
}
export default function CaptureControl({
  ready,
  onSwitch,
  onPress,
}: CaptureControlProps) {
  return (
    <View style={styles.control}>
      <TouchableOpacity disabled={!ready} onPress={onSwitch}>
        <Image source={RefreshIcon} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!ready}
        onPress={onPress}
        style={styles.capture}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#f5f6f5",
    height: 50,
    width: 50,
    borderRadius: Math.floor(50 / 2),
    marginHorizontal: 31,
  },
});