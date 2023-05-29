import React from "react";
import { useAppDispatch, useAppSelector } from "./Reducer";
import { loginUser } from "./Reducer/User";
import Pages from "./pages";
import { requests } from "./utils/requests";
import { upload } from "./api/upload";

export default function Main() {
  const token = useAppSelector((state) => state.User.authKey);
  const User = useAppSelector((state) => state.User);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (token) {
      requests.defaults.headers["authkey"] = token;
      requests.get("profile").then((res) => {
        dispatch(loginUser(res.data));
      });
    }
  }, [token]);
  React.useEffect(() => {
    console.log(User);
  }, [User]);
  return (
    <>
      <Pages />
    </>
  );
}
