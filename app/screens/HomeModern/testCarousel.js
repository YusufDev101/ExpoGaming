import React, { useEffect, useState, useRef } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import { LinearGradient } from "expo-linear-gradient";

import api from "../../api";

const data = [
  {
    uri: "https://i.imgur.com/GImvG4q.jpg",
    title: "Lorem ipsum dolor sit amet",
    content: "Neque porro quisquam est qui dolorem ipsum quia ",
  },
  {
    uri: "https://i.imgur.com/Pz2WYAc.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum ",
  },
  {
    uri: "https://i.imgur.com/IGRuEAa.jpg",
    title: "Lorem ipsum dolor",
    content: "Neque porro quisquam est qui",
  },
  {
    uri: "https://i.imgur.com/fRGHItn.jpg",
    title: "Lorem ipsum dolor",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
  {
    uri: "https://i.imgur.com/WmenvXr.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor ",
  },
];

let numberCarousel;

const ImageCarousel = () => {
  const [state, setState] = useState({
    platformData: [],
    activeIndex: 0,
  });
  const carouselRef = useRef(null);

  useEffect(() => {
    getPlatforms();
  }, []);

  const getPlatforms = () => {
    api
      .platforms()
      .then(async function (response) {
        if (response.count > 0) {
          var objData = [];
          response.results.map(function (item) {
            objData.push(item);
          });
          setState({
            ...state,
            platformData: objData,
          });
        } else {
          console.log("--> Error");
        }
      })
      .catch(function (error) {
        console.log("handleLogin error: ", error);
      });
  };

  const renderItem = ({ item, index }) => {
    const { image_background, name, games_count } = item;
    return (
      <LinearGradient
        colors={["white", "white"]}
        style={styles.cardStat}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.item}
          onPress={() => {
            Alert.alert("In Progress... Feature coming in version 2");
          }}
        >
          <ImageBackground
            source={{ uri: image_background }}
            style={styles.imageBackground}
          >
            <View style={styles.rightTextContainer}>
              <Text style={styles.rightText}>{name}</Text>
            </View>
          </ImageBackground>
          <View style={styles.lowerContainer}>
            <Text style={styles.titleText}>{"Platform: " + name}</Text>
            <Text style={styles.contentText}>
              {"There are currently " +
                games_count +
                " released games on " +
                name}
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  return (
    <Carousel
      style={styles.carousel}
      data={state.platformData}
      renderItem={renderItem}
      itemWidth={Dimensions.get("window").width / 1.2}
      inActiveOpacity={0.3}
      containerWidth={Dimensions.get("window").width}
    />
  );
};

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: "transparent",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: -10,
    marginVertical: 10,
    marginLeft: 5,
    height: 80,
  },
  item: {
    backgroundColor: "transparent",
    height: Dimensions.get("window").height / 3,
  },
  imageBackground: {
    flex: 4,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  rightTextContainer: {
    marginLeft: "auto",
    marginRight: -1,
    backgroundColor: "rgba(49, 49, 51,0.5)",
    padding: 7,
    marginTop: 3,
  },
  rightText: { color: "white" },
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  contentText: {
    fontSize: 12,
  },
});

export default ImageCarousel;
