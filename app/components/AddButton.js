import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import ActionButton from "react-native-circular-action-menu";

const AddButton = () => {
  return (
    <View style={styles.container}>
      {/*Rest of App come ABOVE the action button component!*/}
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log("notes tapped!")}
        >
          <FontAwesome5 name="plus" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}
        >
          <FontAwesome5 name="plus" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}
        >
          <FontAwesome5 name="plus" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  container: {
    alignItems: "center",
    bottom: 40,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 40,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#7F58FF",
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "white",
    elevation: 10,
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#7F58FF",
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    bottom: -80,
  },
});

export default AddButton;
