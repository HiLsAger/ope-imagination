import React from "react";

import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import server from "../../utils/server";
import getComments from "../../api/getComments";
import addComment from "../../api/addComment";
import { Comment } from "../../Schemas/Comment";
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const FONT_SIZE = 14;
const address = server();
interface CommentsProps {
  id: number;
}
export default function Comments({ id }: CommentsProps) {
  const [text, onChange] = React.useState<string>("");
  const [comments, setComments] = React.useState<Comment[]>([]);
  React.useEffect(() => {
    getComments(id).subscribe(setComments);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.commentsContainer}>
        {comments.map((comment) => (
          <View key={comment.id} style={styles.commentContainer}>
            <Text style={styles.commentName}>{comment.User?.name}</Text>
            <Text style={styles.commentText}>{comment.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.commentForm}>
        <TextInput
          style={styles.captionDescription}
          onChangeText={onChange}
          placeholder="Описание"
          placeholderTextColor="#AFAFAF"
          value={text}
          multiline={true}
          numberOfLines={10}
        />
        <TouchableOpacity
          style={styles.captionSubmit}
          onPress={() => {
            addComment(id, text).subscribe();
          }}
        >
          <Text style={styles.textWhite}>Отправить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 2,
    height: "100%",
    width: "100%",
    backgroundColor: "#f1f1f1",
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
  commentContainer: {
    backgroundColor: "#e1e1e1",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  commentName: {
    fontSize: 16,
    fontWeight: "600",
  },
  commentText: {},
  captionDescription: {
    backgroundColor: "#f1f1f1",
    borderColor: "#1f1f1f",
    color: "#1f1f1f",
    borderTopColor: "#1f1f1f",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 15,
  },
  captionSubmit: {
    margin: "auto",
    backgroundColor: "#1f1f1f",
    color: "#f1f1f1",
    width: 125,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  commentForm: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#f1f1f1",
    marginTop: "auto",
  },
  textWhite: {
    color: "#f1f1f1",
    textAlign: "center",
  },
  commentsContainer: {
    overflow: "scroll",
    maxHeight: DEVICE_HEIGHT,
  },
});
