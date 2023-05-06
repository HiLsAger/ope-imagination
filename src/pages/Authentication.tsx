import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function Authentication() {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const [email, onChangeEmail] = useState("");
  const [name, onChangeName] = useState("");
  const [isLogin, onFormLogin] = useState(true);
  const [isRegistration, onFormRegistration] = useState(false);

  useEffect(() => {
    console.log(`Ввод в поле логин: ${username}`);
  }, [username]);
  useEffect(() => {
    console.log(`Ввод в поле пароль: ${password}`);
  }, [password]);
  useEffect(() => {
    console.log(`Ввод в поле логин: ${email}`);
  }, [email]);
  useEffect(() => {
    console.log(`Ввод в поле пароль: ${name}`);
  }, [name]);

  const renderLogin = () => (
    <View>
      <Text style={styles.title}>Авторизация</Text>
      <Text style={styles.labelText}>Логин:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => onChangeUsername(text)}
        placeholder="Логин"
        maxLength={40}
        value={username}
      />
      <Text style={styles.labelText}>Пароль:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => onChangePassword(text)}
        placeholder="Пароль"
        maxLength={40}
        value={password}
        secureTextEntry={true}
      />
      <Button
        onPress={() => {
          axios
            .post("http://192.168.1.9/web/api/login", {
              LoginForm: {
                username: username,
                password: password,
              },
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error.message);
            });
        }}
        title="Авторизоваться"
        color="#0099FF"
      />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          onFormRegistration(true);
          onFormLogin(false);
          axios
            .post("http://192.168.1.9/web/api/username", {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }}
      >
        <Text style={styles.InputButtonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );

  const renderRegistration = () => (
    <View>
      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.labelText}>Псевдоним:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => onChangeUsername(text)}
        placeholder="Псевдоним"
        maxLength={40}
        value={username}
      />
      <Text style={styles.labelText}>Пароль:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => onChangePassword(text)}
        placeholder="Пароль"
        maxLength={40}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.labelText}>Почта:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => onChangeEmail(text)}
        placeholder="Почта"
        maxLength={40}
        value={email}
      />
      <Text style={styles.labelText}>Полное имя:</Text>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => onChangeName(text)}
        placeholder="Полное имя"
        maxLength={40}
        value={name}
      />
      <Button
        onPress={() => {
          axios
            .post(
              "http://192.168.1.9/web/api/registration",
              {
                Registration: {
                  username: username,
                  password: password,
                  email: email,
                  name: name,
                },
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
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
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          onFormRegistration(false);
          onFormLogin(true);
        }}
      >
        <Text style={styles.InputButtonText}>Авторизоваться</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      {isLogin && renderLogin()}
      {isRegistration && renderRegistration()}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
  },
  labelText: {
    fontSize: 16,
    textAlign: "left",
  },
  navButton: {},
  InputText: {
    backgroundColor: "#f1f1f1",
    width: 250,
  },
  InputButtonText: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#f1f1f1",
    marginTop: 10,
    fontSize: 16,
  },
});
