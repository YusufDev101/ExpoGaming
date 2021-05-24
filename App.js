import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

// Auth.
import AuthContext from "./app/auth/authContext";
import authStorage from "./app/auth/authStorage";
import Login from "./app/auth/screens/Login";
import AuthNavigator from "./app/auth/AuthNavigator";

// Navigation.
import AppNavigator from "./app/routes/AppNavigator";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  //    {user ? <AppNavigator /> : <AuthNavigator />}

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
