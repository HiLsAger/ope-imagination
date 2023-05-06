import { StyleSheet, View, Text } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
  },
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
    left: 0,
    top: 0,
    zIndex: 2,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
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
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
  captionContainer: {
    height: "50%",
    width: "100%",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#f1f1f1",
    zIndex: 3,
  },
  captionTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  captionDescription: {
    backgroundColor: "#f1f1f1",
    borderColor: "#1f1f1f",
  },
  captionSubmit: {
    margin: "auto",
    backgroundColor: "#1f1f1f",
    color: "#f1f1f1",
  },
});
export default function VideoRecordIndicator() {
  return (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Запись..."}</Text>
    </View>
  );
}
