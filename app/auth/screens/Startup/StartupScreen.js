import * as Device from "expo-device";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

// Api.
import api from "../../../api";

// Components.
import AppText from "../../../components/AppText";
import colors from "../../../config/colors";

// Auth.
import useAuth from "../../useAuth";

const StartupScreen = ({ navigation }) => {
  const auth = useAuth();
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

  const Continue_Click = () => {
    navigation.navigate("Drawer");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Image
          source={require("../../../assets/undraw_old_day_6x25.png")}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => Continue_Click()}
        >
          <Text style={styles.text}>{"Continue"}</Text>
        </TouchableOpacity>

        <AppText style={styles.title}>v 1.0</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#219AEF",
    elevation: 10,
  },
  logo: {
    height: Dimensions.get("window").height / 1.2,
    width: Dimensions.get("window").width,
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
  title: {
    color: colors.medium,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#219AEF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    margin: 20,
    elevation: 5,
    marginTop: Dimensions.get("window").height / 50,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default StartupScreen;
