import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Dashboard Components.
import Stats from "./Stats";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const TrendingStats = ({ dataObject, navigation }) => {
  const [state, setState] = useState({
    TrendingData: [],
  });

  const Card_Click = (item) => {
    // navigation.navigate("Pokemon", {
    //   screen: "Pokemon",
    //   initialParams: {
    //     PokemonObject: item,
    //   },
    // });
  };

  useEffect(() => {
    setState({
      ...state,
      TrendingData: dataObject,
    });
  }, [dataObject]);

  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        numColumns={100}
        data={state.TrendingData}
        keyExtractor={(item) => {
          return item.toString();
        }}
        renderItem={({ item }) => {
          return (
            <Stats
              title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              image={item.image_background}
              onPress={() => Card_Click(item)}
            />
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrendingStats;
