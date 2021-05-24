import React from "react";
import { StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

const Menu = () => {
  return (
    <AppScreen style={styles.container}>
      <AppText>Menu screen</AppText>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Menu;
