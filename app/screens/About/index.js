import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";

// Custom.
import TabComponent from "../../components/AppTab";

// Screens.
import About from "./About";
import ProfileForm from "./ProfileForm";
import Profile from "./Profile";
import Dashboard from "../Dashboard";
import Test from "../HomeModern/Home"
//import TabPageButton from "../../components/TabPageButton";

//import AddButton from "../../components/AddButton";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AboutTabNavigator = ({ navigation }) => {
  const ProfileStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerMode: "none",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileForm" component={ProfileForm} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerMode: "none",
        headerShown: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Games") {
            iconName = "gamepad-variant-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = "account-circle-outline";
          } else if (route.name === "Test") {
            iconName = "account-circle-outline";
          } else if (route.name === "Dashboard") {
            iconName = "steam";
          } else if (route.name === "AddButton") {
            iconName = "steam";
          }

          // You can return any component that you like epichere!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "#D0D7D8",
        keyboardHidesTabBar: true,
        style: {
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#26a0da",
          position: "absolute",
          padding: 7,
          width: Dimensions.get("window").width,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Test}
        options={{
          tabBarButton: (props) => <TabComponent label="home" {...props} />,
        }}
        screenOptions={{
          headerMode: "none",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Games"
        component={Dashboard}
        options={{
          tabBarButton: (props) => (
            <TabComponent label="Platforms" {...props} />
          ),
        }}
        screenOptions={{
          headerMode: "none",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Test"
        component={About}
        options={{
          tabBarButton: (props) => <TabComponent label="Games" {...props} />,
        }}
        screenOptions={{
          headerMode: "none",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarButton: (props) => <TabComponent label="Profile" {...props} />,
        }}
        screenOptions={{
          headerMode: "none",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AboutTabNavigator;
