import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components.
import AppText from "../../../components/AppText";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Stats = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 10,
        marginLeft: 30,
        borderRadius: 20,
        elevation: 10,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          alignSelf: "flex-end",
          padding: 10,
          backgroundColor: "#26a0da",
          width: 50,
          height: 30,
          overflow: "hidden",
          borderTopEndRadius: 30,
          borderBottomLeftRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            position: "absolute",
            zIndex: 1,
            color: "white",
            shadowColor: "blue",
            alignSelf: "flex-end",
            fontWeight: "bold",
            paddingTop: 5,
          }}
        >
          {title == null ? "Loading ..." : title}
        </Text>
      </View>
      <Image
        resizeMode={"cover"}
        style={{
          backgroundColor: "transparent",
          width: windowWidth / 3,
          height: 90,
          overflow: "hidden",
          borderRadius: 20,
        }}
        source={{uri: image}}
      ></Image>
    </TouchableOpacity>
  );
};

export default Stats;
