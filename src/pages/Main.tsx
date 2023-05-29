import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import HomeIcon from "../../assets/nav/home.png";
import ProfileIcon from "../../assets/nav/profile.png";
import AddIcon from "../../assets/nav/add.png";
import { Outlet, useNavigate } from "react-router-native";
import { useEffect } from "react";

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
export default function MainPage() {
  const nav = useNavigate();
  useEffect(() => {
    nav("feed");
  }, []);
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Outlet />
        <View style={styles.navMenu}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              nav("feed");
            }}
          >
            <Image source={HomeIcon} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              nav("auth");
            }}
          >
            <Image source={ProfileIcon} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              nav("camera");
            }}
          >
            <Image source={AddIcon} style={{ width: 35, height: 35 }} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
