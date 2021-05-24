import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Native elements
import { Header } from "react-native-elements";

// Screens.
import DashboardNavigator from "../screens/Dashboard";

// Model SCreen.
import ImageViewer from "../screens/ImageDetail/ImageViewer";
import ImageVideo from "../screens/ImageDetail/ImageVideo";

// Navigation.
import AboutTabNavigator from "../screens/About/";

// Components.
import AppText from "../components/AppText";
import ImageDetail from "../screens/ImageDetail/ImageDetail";
import WavyHeader from "../components/WavyHeader";

// Create stack hook.
const Stack = createStackNavigator();

const windowWidth = Dimensions.get("window").width;
const iconSize = 24;

// Header to be used on stack.
const HeaderTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.headerTitle} numberOfLines={1}>
        {title}
      </AppText>
    </View>
  );
};

// Header logo with icon.
const HeaderLogo = () => {
  const navigation = useNavigation();
  return (
    <MaterialCommunityIcons
      name="menu"
      size={iconSize}
      style={styles.icon}
      onPress={() => navigation.openDrawer()}
    />
  );
};

const HeaderAction = () => {
  const navigation = useNavigation();
  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff",
        onPress: () => navigation.openDrawer(),
      }}
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
      containerStyle={{
        backgroundColor: "#3D6DCC",
        justifyContent: "space-around",
      }}
      barStyle="light-content" // or directly
    />
  );
};

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

const HeaderBackAction = () => {
  const navigation = useNavigation();
  return (
    <Header
      leftComponent={
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
      }
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
      containerStyle={{
        backgroundColor: "#3D6DCC",
        justifyContent: "space-around",
      }}
      barStyle="light-content" // or directly
    />
  );
};

// Create home stack.
const Dashboard = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          headerTitle: () => <HeaderTitle title="Dashboard" />,
          headerLeft: () => <HeaderLogo />,
        }}
      />
    </Stack.Navigator>
  );
};

// Create about stack.
const AboutStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   header: <HeaderActionCustom />,
    // }}
    >
      <Stack.Screen
        name="AboutProfile"
        component={AboutTabNavigator}
        options={{
          headerShown: false,
        }}
        // options={{
        //   headerTitle: () => <HeaderAction />,
        //   // headerLeft: () => <HeaderLogo />,
        // }}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetail}
        options={{
          headerShown: false,
        }}
        // options={{
        //   header: () => <HeaderActionCustom />,
        // }}
      />
      <Stack.Screen
        name="ImageViewer"
        component={ImageViewer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ImageVideo"
        component={ImageVideo}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Styles.
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "20%",
  },
  headerTitle: {
    color: "black",
    fontSize: 24,
    letterSpacing: 1,
    overflow: "hidden",
    width: windowWidth - iconSize * 2 - 20,
    textAlign: "center",
  },
  icon: {
    marginLeft: 10,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 35,
  },
});

export { Dashboard, AboutStack };
