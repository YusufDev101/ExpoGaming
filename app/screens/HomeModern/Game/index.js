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
import Game from "./Game";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const PokemonTypes = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

const SetImage = (name) => {
  switch (name) {
    case "Bug":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/bug.svg";
    case "Dark":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/dark.svg";
    case "Dragon":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/dragon.svg";
    case "Electric":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/electric.svg";
    case "Fairy":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/fairy.svg";
    case "Fighting":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/fighting.svg";
    case "Fire":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/fire.svg";
    case "Flying":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/flying.svg";
    case "Ghost":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/ghost.svg";
    case "Grass":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/grass.svg";
    case "Ground":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/ground.svg";
    case "Ice":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/ice.svg";
    case "Normal":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/normal.svg";
    case "Poison":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/poison.svg";
    case "Psychic":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/psychic.svg";
    case "Rock":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/rock.svg";
    case "Steel":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/steel.svg";
    case "Water":
      return "https://duiker101.github.io/pokemon-type-svg-icons/icons/water.svg";
  }
};

const SetColor = (name) => {
  switch (name) {
    case "Bug":
      return "#92bc2c";
    case "Dark":
      return "#595761";
    case "Dragon":
      return "#0c69c8";
    case "Electric":
      return "#f2d94e";
    case "Fairy":
      return "#ee90e6";
    case "Fighting":
      return "#d3425f";
    case "Fire":
      return "#fba54c";
    case "Flying":
      return "#a1bbec";
    case "Ghost":
      return "#5f6dbc";
    case "Grass":
      return "#5fbd58";
    case "Ground":
      return "#da7c4d";
    case "Ice":
      return "#75d0c1";
    case "Normal":
      return "#a0a29f";
    case "Poison":
      return "#b763cf";
    case "Psychic":
      return "#fa8581";
    case "Rock":
      return "#c9bb8a";
    case "Steel":
      return "#5695a3";
    case "Water":
      return "#539ddf";
  }
};

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
            <Game
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
