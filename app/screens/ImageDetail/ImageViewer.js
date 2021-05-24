import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { Image } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
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

const ImageViewer = ({ route }) => {
  const navigation = useNavigation();
  const [loading, isLoading] = useState(false);
  const [image, setImage] = useState();
  const [imageObject, setImageObject] = useState(
    route.params.initialParams.ImageObject
  );

  const share = async () => {
    isLoading(true);
    FileSystem.downloadAsync(image, FileSystem.documentDirectory + ".jpeg")
      .then(async ({ uri }) => {
        await Sharing.shareAsync(uri);
        isLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (imageObject === imagePlaceholder) {
      setImage(imagePlaceholder);
    } else {
      setImage(imageObject);
    }
  }, []);

  return (
    <AppScreen style={{ flex: 1, backgroundColor: "#fff" }}>
      <LinearGradient
        colors={["white", "white"]}
        style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
      >
        <View style={styles.oval}>
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
        </View>
      </LinearGradient>
      <Image
        PlaceholderContent={<ActivityIndicator size="large" color="#00ff00" />}
        style={styles.photo}
        source={{
          uri: image,
        }}
      />
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
  oval: {
    height: 70,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  photo: {
    marginTop: 5,
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 1.3,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default ImageViewer;
