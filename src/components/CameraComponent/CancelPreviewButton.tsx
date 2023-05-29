import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
interface CancelPreviewButtonProps {
  onPress: () => void;
}
export default function CancelPreviewButton({
  onPress,
}: CancelPreviewButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.closeButton}>
      <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 35,
    left: 15,
    height: 50,
    width: 50,
    borderRadius: Math.floor(50 / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
});