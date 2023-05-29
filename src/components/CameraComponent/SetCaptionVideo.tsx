import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { upload } from "../../api/upload";
import React from "react";
interface videoProps {
  path: string;
}

export default function SetCaptionVideo(videoSource: videoProps) {
  const [description, setDescription] = React.useState("");
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.captionTitle}>Введите описание для видео:</Text>
      <TextInput
        style={styles.captionDescription}
        onChangeText={setDescription}
        placeholder="Описание"
        placeholderTextColor="#AFAFAF"
        value={description}
        multiline={true}
        numberOfLines={10}
      />
      <TouchableOpacity
        style={styles.captionSubmit}
        onPress={() => {
          upload(videoSource.path, description);
        }}
      >
        <Text style={styles.submitButtonText}>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    color: "#1f1f1f",
    borderTopColor: "#1f1f1f",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
  },
  captionSubmit: {
    margin: "auto",
    backgroundColor: "#1f1f1f",
    color: "#f1f1f1",
    width: 125,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: "#f1f1f1",
    textAlign: "center",
  },
});
