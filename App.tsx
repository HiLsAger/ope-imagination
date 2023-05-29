import { NativeRouter } from "react-router-native";
import Main from "./src";
import { Provider } from "react-redux";
import { store } from "./src/Reducer";

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </Provider>
  );
}
