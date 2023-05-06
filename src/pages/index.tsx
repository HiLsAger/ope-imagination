import { NativeRouter, Route, Routes } from "react-router-native";
import Auth from "./Auth";
import Feed from "./Feed";
import CameraComponent from "../components/CameraComponent";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import MainPage from "./Main";
export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="feed" element={<Feed />} />
        <Route path="camera" element={<CameraComponent />} />
      </Route>
    </Routes>
  );
}
