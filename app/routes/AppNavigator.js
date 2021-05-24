import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
// Custom.
import AppDrawerContent from "../components/AppDrawerContent";
import WavyHeader from "../components/WavyHeader";
// Screens.
import { AboutStack } from "./AppStackNavigator";
import StartupScreen from "../auth/screens/Startup/StartupScreen";

const HeaderActionCustom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={320}
        customTop={260}
        customBgColor="#00cba9"
        customWavePattern="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,218.7C672,245,768,267,864,277.3C960,288,1056,288,1152,266.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <Ionicons
        style={{
          marginTop: 30,
          left: 5,
          top: 5,
        }}
        name="md-menu"
        size={50}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Screen Two</Text>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Startup"
      screenOptions={{
        headerMode: "none",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Startup" component={StartupScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeBackgroundColor: "orange",
        activeTintColor: "#ffffff",
      }}
      drawerContent={(props) => <AppDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-circle";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Drawer.Screen name="Home" component={AboutStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
