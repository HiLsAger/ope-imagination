import { Outlet, Route, Routes, useNavigate } from "react-router-native";
import { Button, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useAppSelector } from "../../Reducer";
import Profile from "../Profile/Profile";

export default function Auth() {
  const nav = useNavigate();
  const User = useAppSelector((state) => state.User);
  return User.login ? (
    <Profile />
  ) : (
    <>
      <Outlet />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          nav("login");
        }}
      >
        <Text style={styles.InputButtonText}>Авторизоваться</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          nav("register");
        }}
      >
        <Text style={styles.InputButtonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </>
  );
}
