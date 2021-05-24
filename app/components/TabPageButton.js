import * as React from "react";
import { StyleSheet, Animated, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, Feather } from "@expo/vector-icons";

const imageLogo = require("../../assets/splash.png");

const TabPageButton = ({ onPress }) => {
  const mode = new Animated.Value(0);
  const buttonSize = new Animated.Value(1);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true, // Add This line
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true, // Add This line
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: true, // Add This line
      }),
    ]).start();
  };

  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -100],
  });

  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const timeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -24],
  });

  const timeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -150],
  });

  const pulseX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 50],
  });

  const pulseY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  return (
    <Animated.View>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <FontAwesome5
          style={StyleSheet.image}
          name="plus"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: 40,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 40,
    height: 80,
    justifyContent: "center",
    width: 80,
    overflow: "hidden",
    elevation: 12,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});

export default TabPageButton;
