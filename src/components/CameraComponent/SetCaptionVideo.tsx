import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
const styles = StyleSheet.create({
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
export default function SetCaptionVideo() {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.captionTitle}>Введите описание для видео:</Text>
      <TextInput
        style={styles.captionDescription}
        onChangeText={(text) => console.log(text)}
        placeholder="Описание"
        placeholderTextColor="#AFAFAF"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.captionSubmit}>
        <Text>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
}
