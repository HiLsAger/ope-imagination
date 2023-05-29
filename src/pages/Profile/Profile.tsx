import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../Reducer";
import Videos from "./Videos";

const styles = StyleSheet.create({
  profileHeader: {
    width: "100%",
    height: 100,
    backgroundColor: "#1f1f1f",
  },
  profileContainer: {
    height: "100%",
    width: "100%",
  },
  colorWhite: {
    color: "#f1f1f1",
  },
});
export default function Profile() {
  const User = useAppSelector((state) => state.User);
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Text style={styles.colorWhite}> {User.name}</Text>
      </View>
      <Videos />
    </View>
  );
}
