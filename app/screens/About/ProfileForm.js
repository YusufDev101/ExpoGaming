import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Components.
import AppScreen from "../../components/AppScreen";

const ProfileForm = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log("Jello");
  }, []);

  return (
    <AppScreen style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={{
              margin: 10,
            }}
            name="ios-arrow-back"
            size={50}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", marginLeft: 20, fontSize: 22 }}>
          {"Profile"}
        </Text>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    elevation: 10,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#219AEF",
    elevation: 10,
  },
});

export default ProfileForm;
