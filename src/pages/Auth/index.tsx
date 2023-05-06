import { Outlet, Route, Routes, useNavigate } from "react-router-native";
import Login from "./Login";
import Register from "./Register";
import { Button } from "react-native";

export default function Auth() {
  const nav = useNavigate();
  return (
    <>
      <Outlet />
      <Button onPress={() => nav("login")} title="Авторизация" />
      <Button onPress={() => nav("register")} title="Регистрация" />
    </>
  );
}
