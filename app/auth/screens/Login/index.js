import * as Device from "expo-device";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

// Api.
import api from "../../../api/";
import AppButton from "../../../components/AppButton";

// Components.
import AppScreen from "../../../components/AppScreen";
import AppText from "../../../components/AppText";
import AppTextInput from "../../../components/AppTextInput";
import ErrorMessage from "../../../components/ErrorMessage";
import colors from "../../../config/colors";

// Auth.
import useAuth from "../../useAuth";

const Login = ({ navigation }) => {
  const auth = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {}, []);

  const handleLogin = () => {
    // Set user details and device information.
    const params = {
      username: username,
      password: password,
      deviceId: Device.osBuildId,
      deviceName: Device.modelName,
      deviceModel: Device.osVersion,
    };

    api
      .login(params)
      .then(async function (response) {
        if (response.success) {
          setLoginFailed(false);
          auth.logIn(response.token);
        } else {
          setLoginFailed(true);
        }
      })
      .catch(function (error) {
        setLoginFailed(true);
        console.log("handleLogin error: ", error);
      });
  };

  return (
    <AppScreen style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/undraw_welcome_cats_thqn.png")}
          style={styles.logo}
        />

        <AppTextInput
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => {
            setUsername(text);
          }}
          placeholder="Your Username"
          value={username}
        />

        <AppTextInput
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Your Password"
          secureTextEntry
          value={password}
        />

        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />

        <AppButton title="Login" onPress={handleLogin} />
        <AppButton
          title="Register"
          onPress={() => navigation.push("Register")}
        />

        <AppText style={styles.title}>v 1.0</AppText>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: colors.medium,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});

export default Login;
