import { Video } from "expo-av";
import { StyleSheet, View } from "react-native";
interface VideoPlayerProps {
  source: string;
}
export default function VideoPlayer({ source }: VideoPlayerProps) {
  return (
    <View style={styles.renderVideoBox}>
      <Video source={{ uri: source }} shouldPlay={true} style={styles.media} />
    </View>
  );
}

const styles = StyleSheet.create({
  media: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#1f1f1f",
  },
  renderVideoBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    left: 0,
    top: 0,
    zIndex: 2,
  },
});
