import { AVPlaybackStatusSuccess, Video } from "expo-av";
import React from "react";

import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import server from "../../utils/server";
import Comments from "./Comments";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const FONT_SIZE = 14;
const VIDEO_CONTAINER_HEIGHT = DEVICE_HEIGHT - FONT_SIZE * 6;
interface PlayerProps {
  url: string;
  id: number;
}
const address = server();
export default function Player({ url, id }: PlayerProps) {
  const video = React.useRef<Video>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatusSuccess>();
  const [isComments, setIsComments] = React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.commentsButton}
        onPress={() => {
          setIsComments(!isComments);
        }}
      >
        <Text style={styles.commentButton}>✉</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          status?.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        <Video
          onError={(e) => {
            console.log(e);
          }}
          shouldPlay
          isLooping
          ref={video}
          style={styles.video}
          source={{ uri: `${address}/clips/${url}` }}
          onPlaybackStatusUpdate={(status) =>
            setStatus(() => status as AVPlaybackStatusSuccess)
          }
        />
      </TouchableOpacity>
      {isComments && (
        <>
          <Comments id={id} />
          <TouchableOpacity
            onPress={() => {
              setIsComments(!isComments);
            }}
            style={styles.closeComments}
          >
            <Text style={styles.textWhite}>✖</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  video: { width: DEVICE_WIDTH, height: VIDEO_CONTAINER_HEIGHT },
  container: { maxWidth: DEVICE_WIDTH, backgroundColor: "#1f1f1f" },
  commentsButton: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    right: 0,
  },
  closeComments: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2,
    backgroundColor: "#1f1f1f",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textWhite: {
    color: "#f1f1f1",
  },
  commentButton: {
    fontSize: 64,
    color: "#f1f1f1",
    paddingRight: 10,
  },
});
