import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const imageLogo = require("../assets/splash2.png");

const TabButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <View style={styles.container}> */}
      <Image source={imageLogo} style={StyleSheet.image}></Image>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: 40,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 10,
    borderRadius: 40,
    height: 80,
    justifyContent: "center",
    width: 80,
    elevation: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default TabButton;
