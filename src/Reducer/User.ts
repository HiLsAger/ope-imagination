import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  username?: string;
  authKey?: string;
  name?: string;
  avatar?: string;
  login: boolean;
}
interface UserPayload {
  username: string;
  authKey: string;
  name: string;
  avatar: string;
}
const initialState: UserState = { login: false };
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserPayload>) => {
      const data = action.payload;
      state.name = data.name;
      state.avatar = data.avatar;
      state.username = data.username;
      state.login = true;
    },
    setToken: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      state.authKey = data;
    },
  },
});
export const { loginUser, setToken } = userSlice.actions;
export default userSlice.reducer;
