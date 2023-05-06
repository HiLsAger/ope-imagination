import { StyleSheet, TouchableOpacity, Image } from "react-native";
import SaveIcon from "../../../assets/save.png";
const styles = StyleSheet.create({
  saveButton: {
    position: "absolute",
    top: 35,
    right: 15,
    height: 50,
    width: 50,
    borderRadius: Math.floor(50 / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
});
interface SavePreviewButtonProps {
  onPress: () => void;
}
export default function SavePreviewButton({ onPress }: SavePreviewButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.saveButton}>
      <Image source={SaveIcon} style={{ width: 25, height: 25 }} />
    </TouchableOpacity>
  );
}
