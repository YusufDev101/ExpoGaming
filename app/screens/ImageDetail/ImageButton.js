import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-elements";

import ProductStyles from "./style";

const styles = StyleSheet.create({ ...ProductStyles });

const PhotoButton = () => (
  <View style={styles.coverMetaContainer}>
    <Button
      color="white"
      title="22 Photos"
      textStyle={{
        fontSize: 16,
        fontWeight: "400",
      }}
      buttonStyle={{
        backgroundColor: "#0CC5F2",
        borderRadius: 5,
        borderWidth: 0,
        elevation: 0,
        paddingLeft: 10,
      }}
      containerStyle={{
        marginBottom: 15,
        marginRight: 15,
        padding: 0,
      }}
    />
  </View>
);

export default PhotoButton;
