import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Player from "./Player";
import getRandomVideos from "../../api/getRandomVideos";
import { VideoData } from "../../Schemas/Video";
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const FONT_SIZE = 14;
const VIDEO_CONTAINER_HEIGHT = DEVICE_HEIGHT - FONT_SIZE * 6;
export default function VideoComponent() {
  const [videos, setVideos] = React.useState<VideoData[]>([]);
  const [current, setCurrent] = React.useState(0);
  const fetchVideos = React.useCallback((count: number) => {
    getRandomVideos(count).subscribe((res) => {
      setVideos((old) => [...old, ...res]);
    });
  }, []);
  const onChange = React.useCallback((index) => {
    setCurrent(index);
  }, []);
  React.useEffect(() => {
    fetchVideos(3);
  }, [fetchVideos]);
  return (
    <View style={{ height: VIDEO_CONTAINER_HEIGHT }}>
      <Carousel
        removeClippedSubviews
        firstItem={0}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        windowSize={2}
        decelerationRate={"fast"}
        sliderHeight={VIDEO_CONTAINER_HEIGHT}
        itemHeight={VIDEO_CONTAINER_HEIGHT}
        vertical
        onSnapToItem={onChange}
        onEndReached={() => {
          fetchVideos(3);
        }}
        data={videos}
        renderItem={({ item, index }) =>
          current === index && <Player url={item.link} id={item.id} />
        }
      />
    </View>
  );
}
