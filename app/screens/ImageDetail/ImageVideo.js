import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { Video } from "expo-av";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

// Components.
import AppScreen from "../../components/AppScreen";

// Sharing.
import * as Sharing from "expo-sharing";

let imagePlaceholder =
  "https://www.slumbersac.com.au/pub/media/lof/lazyload/default/loader.gif";

const ImageVideo = ({ route }) => {
  const navigation = useNavigation();
  const [loading, isLoading] = useState(false);
  const [video, setVideo] = useState();
  const [videoObject, setVideoObject] = useState(
    route.params.initialParams.ImageObject
  );
  const [state, setState] = useState({
    mute: false,
    fullScreen: false,
    shouldPlay: true,
  });

  const share = async () => {
    isLoading(true);

    FileSystem.downloadAsync(video, FileSystem.documentDirectory + ".mp4")
      .then(async ({ uri }) => {
        await Sharing.shareAsync(uri);

        isLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePlayAndPause = () => {
    setState((prevState) => ({
      ...state,
      shouldPlay: !prevState.shouldPlay,
    }));
  };

  const handleVolume = () => {
    setState((prevState) => ({
      ...state,
      mute: !prevState.mute,
    }));
  };

  useEffect(() => {
    if (videoObject === imagePlaceholder) {
      setVideo(imagePlaceholder);
    } else {
      setVideo(videoObject);
    }
  }, []);

  return (
    <AppScreen style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={{
              margin: 10,
            }}
            name="ios-arrow-back"
            size={50}
            color="black"
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }}></View>
        <ActivityIndicator
          animating={loading}
          style={{
            margin: 10,
          }}
          size="large"
          color="#00ff00"
        />
        <TouchableOpacity onPress={() => share()}>
          <MaterialCommunityIcons
            style={{
              margin: 10,
            }}
            name="share-variant"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Video
        style={styles.photo}
        rate={1.0}
        volume={1.0}
        isMuted={state.mute}
        resizeMode="cover"
        shouldPlay={state.shouldPlay}
        isLooping
        source={{
          uri: video,
        }}
      />
      <View style={styles.controlBar}>
        <MaterialIcons
          name={state.mute ? "volume-mute" : "volume-up"}
          size={45}
          color="black"
          onPress={handleVolume}
          style={{ margin: 10 }}
        />
        <MaterialIcons
          name={state.shouldPlay ? "pause" : "play-arrow"}
          size={45}
          color="black"
          onPress={handlePlayAndPause}
          style={{ margin: 10 }}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
  },
  photo: {
    marginTop: 10,
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 1.3,
    marginLeft: 10,
    marginRight: 10,
  },
  controlBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#219AEF",
  },
});

export default ImageVideo;
