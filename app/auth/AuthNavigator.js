import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

// Screens.
import Login from "./screens/Login";
import Register from "./screens/Login/Register";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
