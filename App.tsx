import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import axios from "axios";

import Authentication from "./src/pages/Authentication";
import Feed from "./src/pages/Feed";
import CameraComponent from "./src/components/CameraComponent";
import PageNotFound from "./src/pages/PageNotFound";

import HomeIcon from "./assets/nav/home.png";
import ProfileIcon from "./assets/nav/profile.png";
import AddIcon from "./assets/nav/add.png";

export default function App() {
  const [showAuthentication, setShowAuthentication] = useState(false);
  const [showFeed, setShowFeed] = useState(true);
  const [showAddContent, setShowAddContent] = useState(false);
  useEffect(() => {
    console.log(`**************************`);
    console.log(`Страница авторизации: ${showAuthentication}`);
    console.log(`Лента: ${showFeed}`);
    console.log(`Добавить контент: ${showAddContent}`);
    console.log(`**************************`);
  }, [showAuthentication, showFeed, showAddContent]);

  return (
    <View style={styles.container}>
      {showAuthentication ? (
        <Authentication />
      ) : showFeed ? (
        <Feed />
      ) : showAddContent ? (
        <CameraComponent />
      ) : (
        <PageNotFound />
      )}
      <StatusBar style="auto" />
      <View style={styles.navMenu}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            setShowFeed(true);
            setShowAddContent(false);
            setShowAuthentication(false);
          }}
        >
          <Image source={HomeIcon} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            setShowFeed(false);
            setShowAddContent(false);
            setShowAuthentication(true);
          }}
        >
          <Image source={ProfileIcon} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            setShowFeed(false);
            setShowAddContent(true);
            setShowAuthentication(false);
          }}
        >
          <Image source={AddIcon} style={{ width: 35, height: 35 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  navMenu: {
    backgroundColor: "#1f1f1f",
    height: 75,
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  navButton: {
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    marginHorizontal: 30,
  },
});
