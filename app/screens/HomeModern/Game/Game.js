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

const Game = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 10,
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
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          width: 120,
          height: 30,
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 40,
          borderTopRightRadius: 10,
          overflow: "hidden",
          marginTop: 20,
        }}
      >
        <Text        
        numberOfLines={1}
        ellipsizeMode='tail'
          style={{
            fontSize: 20,
            position: "absolute",
            zIndex: 1,
            color: "white",
            shadowColor: "blue",
            alignSelf: "flex-end",
            fontWeight: "bold",
            paddingEnd: 30,
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
          width: windowWidth / 1.8,
          height: windowHeight / 3.5,
          overflow: "hidden",
          borderRadius: 30,
        }}
        source={{uri: image}}
      ></Image>
    </TouchableOpacity>
  );
};

export default Game;
