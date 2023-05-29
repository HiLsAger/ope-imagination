import axios from "axios";
import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { requests } from "../../utils/requests";
import { useAppSelector } from "../../Reducer";

const styles = StyleSheet.create({
  videosContainer: {
    width: "100%",
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  videos: {},
});
interface Video {
  id: string;
  link: string;
  description: string;
}
export default function Videos() {
  const User = useAppSelector((state) => state.User);
  const [videos, setVideos] = React.useState<Video[]>([]);

  const getVideos = React.useCallback(async () => {
    const videosData = await requests.get("videos/my").then((videos) => {
      return videos.data;
    });
    setVideos(videosData);
  }, []);

  React.useEffect(() => {
    getVideos();
  }, [User]);

  return (
    <View style={styles.videosContainer}>
      <Text style={styles.title}>Мои видео</Text>
      <View style={styles.videos}>
        {videos.map((video) => {
          return (
            <Text key={video.id}>
              {video.id}:{video.description}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
