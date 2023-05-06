import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";
import React from "react";
import { requests } from "../../utils/requests";

export default function Register() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  return (
    <View>
      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.labelText}>Псевдоним:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={setLogin}
        placeholder="Псевдоним"
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
      <Text style={styles.labelText}>Почта:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={setEmail}
        placeholder="Почта"
        maxLength={40}
        value={email}
      />
      <Text style={styles.labelText}>Полное имя:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={setName}
        placeholder="Полное имя"
        maxLength={40}
        value={name}
      />
      <Button
        onPress={() => {
          requests
            .post<boolean>("http://192.168.1.9/web/api/registration", {
              username: login,
              password: password,
              email: email,
              name: name,
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }}
        title="Зарегистрировать"
        color="#0099FF"
      />
    </View>
  );
}
