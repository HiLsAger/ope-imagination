import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../Reducer";
import { loginUser, setToken } from "../../Reducer/User";
import getAuthKey from "../../api/getAuthKey";
export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const data = useAppSelector((state) => state.User);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text style={styles.title}>Авторизация</Text>
      <Text style={styles.labelText}>Логин:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={setUsername}
        placeholder="Логин"
        maxLength={40}
        value={username}
      />
      -<Text style={styles.labelText}>Пароль:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={setPassword}
        placeholder="Пароль"
        maxLength={40}
        value={password}
        secureTextEntry={true}
      />
      <Button
        onPress={() => {
          getAuthKey(username, password).subscribe((res) =>
            dispatch(setToken(res))
          );
        }}
        title="Авторизоваться"
        color="#0099FF"
      />
    </View>
  );
}
