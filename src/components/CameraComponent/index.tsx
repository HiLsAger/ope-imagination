import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync,
  CameraType,
  FlashMode,
  Camera,
} from "expo-camera";
import { Video } from "expo-av";
import axios from "axios";

import RefreshIcon from "../../assets/refresh.png";
import SaveIcon from "../../assets/save.png";
import VideoRecordIndicator from "./VideoRecordIndicator";
import VideoPlayer from "./VideoPlayer";
import CancelPreviewButton from "./CancelPreviewButton";
import SavePreviewButton from "./SavePreviewButton";
import CaptureControl from "./CaptureControl";
import SetCaptionVideo from "./SetCaptionVideo";

export default function AddContent() {
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState("");
  const [isSavePreview, setSavePreview] = useState(false);
  const cameraRef = useRef<Camera>();
  useEffect(() => {
    (async () => {
      const { status: camera } = await requestCameraPermissionsAsync();
      const { status: micro } = await requestMicrophonePermissionsAsync();
      setHasPermission(camera === "granted" && micro === "granted");
    })();
  }, []);
  useEffect(() => {
    console.log(`isSavePreview: ${isSavePreview}`);
  }, [isSavePreview]);
  const onCameraReady = React.useCallback(() => {
    setIsCameraReady(true);
  }, []);
  const recordVideo = React.useCallback(async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          setIsVideoRecording(false);
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log("video source", source);
            setVideoSource(source);
          }
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }, [cameraRef.current]);
  const stopVideoRecording = React.useCallback(() => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
    }
  }, [cameraRef.current]);
  const switchCamera = React.useCallback(() => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === CameraType.back ? CameraType.front : CameraType.back
    );
  }, [isPreview]);
  const cancelPreview = React.useCallback(() => {
    cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  }, [cameraRef.current]);
  const startOrStop = React.useCallback(() => {
    if (isVideoRecording) {
      stopVideoRecording();
    } else {
      recordVideo();
    }
  }, [isVideoRecording]);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>Нет доступа к камере</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        flashMode={FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
      <View style={styles.container}>
        {isVideoRecording && <VideoRecordIndicator />}
        {videoSource && <VideoPlayer source={videoSource} />}
        {isPreview && (
          <>
            <CancelPreviewButton onPress={cancelPreview} />
            <SavePreviewButton
              onPress={() => {
                setSavePreview(true);
              }}
            />
          </>
        )}
        {!videoSource && !isPreview && (
          <CaptureControl
            ready={isCameraReady}
            onSwitch={switchCamera}
            onPress={startOrStop}
          />
        )}
        {isSavePreview && <SetCaptionVideo />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
  },

  text: {
    color: "#fff",
  },
});
