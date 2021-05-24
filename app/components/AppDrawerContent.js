import React, { useContext } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
  Button,
} from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

// Auth.
import useAuth from "../auth/useAuth";

const AppDrawerContent = (props) => {
  const auth = useAuth();

  // Log user out.
  const ButtonSignOut_Click = () => {
    auth.logOut();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Image
              style={styles.image}
              source={require("../assets/undraw_video_game_night_8h8m.png")}
            />
            {/* <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                }}
              >
                <Text style={styles.title}>Username</Text>
                {/* <Text style={styles.caption}>Organisation</Text> 
              </View> */}
          </View>
          <View style={styles.drawerSection}>
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="gamepad-circle"
              color={color}
              size={size}
            />
          )}
          label="V1.0"
          // onPress={() => {
          //   ButtonSignOut_Click();
          // }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: "#d9d6d4",
    // paddingLeft: 20,
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 2,
    flex: 1,
    // margin: 10,
    //elevation: 10,
  },
  image: {
    flex: 1,
    width: Dimensions.get("window").width / 1.5,
  },
  title: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 2,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    borderTopColor: "#f4f4f4",
    backgroundColor: "#f2f1f0",
    margin: 15,
    elevation: 10,
  },
});

export default AppDrawerContent;
