import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { requests } from "../../utils/requests";
import { styles } from "./styles";
interface AuthData {
  authKey: string;
}
export default function Login() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View>
      <Text style={styles.title}>Авторизация</Text>
      <Text style={styles.labelText}>Логин:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={setLogin}
        placeholder="Логин"
        maxLength={40}
        value={login}
      />
      <Text style={styles.labelText}>Пароль:</Text>
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
          requests
            .post<AuthData>("/web/api/login", {
              username: login,
              password,
            })
            .then((response) => {
              requests.defaults.headers["authKey"] = response.data.authKey;
            })
            .catch((error) => {
              console.log(error.message);
            });
        }}
        title="Авторизоваться"
        color="#0099FF"
      />
    </View>
  );
}
