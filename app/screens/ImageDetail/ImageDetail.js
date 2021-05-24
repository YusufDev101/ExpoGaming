import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-native-elements";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Screen.
import AppScreen from "../../components/AppScreen";

// Components.
import WavyHeader from "../../components/WavyHeader";

let imageClip = "";
let imagePlaceholder =
  "https://www.slumbersac.com.au/pub/media/lof/lazyload/default/loader.gif";

const ImageDetail = ({ route }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imageObject, setImageObject] = useState(
    route.params.initialParams.ImageObject
  );

  const HeaderActionCustom = () => {
    return (
      <View style={styles.container}>
        <WavyHeader
          customStyles={styles.svgCurve}
          customHeight={150}
          customTop={120}
          customBgColor="#219AEF"
          customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Games</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    if (imageObject.clip != null) {
      imageClip = imageObject.clip.clip;
    }
  }, []);

  return (
    <AppScreen style={{ flex: 1 }}>
      <HeaderActionCustom />
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
        <Text style={{ alignSelf: "center", marginLeft: 20, fontSize: 22 }}>
          {imageObject.name}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileCard}>
            <Image
              style={styles.avatar}
              source={{
                uri: imageObject.background_image,
              }}
            />
          </View>

          <View
            style={[
              styles.card,
              { marginTop: Dimensions.get("window").height / 50 },
            ]}
          >
            <Text style={styles.cardTittle}>About</Text>

            <View style={styles.cardRow}>
              <MaterialCommunityIcons
                name="update"
                size={24}
                color="black"
                style={{ padding: 5 }}
              />
              <Text> - {imageObject.released}</Text>
            </View>

            <View style={styles.cardRow}>
              <MaterialCommunityIcons
                name="format-title"
                size={24}
                color="black"
                style={{ padding: 5 }}
              />
              <Text> - {imageObject.genres[0].name}</Text>
            </View>
            <View style={styles.cardRow}>
              <MaterialCommunityIcons
                name="star"
                size={24}
                color="black"
                style={{ padding: 5 }}
              />
              <Text> - {imageObject.rating}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Platform(s)</Text>
            <View style={styles.cardRow}>
              <MaterialCommunityIcons
                name="gamepad-circle-up"
                size={20}
                color="black"
                style={{ padding: 5 }}
              />
              <Text> - {imageObject.platforms[0].platform.name}</Text>
            </View>

            <View style={styles.cardRow}>
              <MaterialCommunityIcons
                name="gamepad-circle-down"
                size={20}
                color="black"
                style={{ padding: 5 }}
              />
              <Text>
                -{" "}
                {imageObject.platforms.length > 1
                  ? imageObject.platforms[1].platform.name
                  : "None"}
              </Text>
            </View>

            <View style={styles.cardRow}>
              <MaterialCommunityIcons
                name="gamepad-circle-left"
                size={20}
                color="black"
                style={{ padding: 5 }}
              />
              <Text>
                -{" "}
                {imageObject.platforms.length > 1
                  ? imageObject.platforms.length > 2
                    ? imageObject.platforms[2].platform.name
                    : "None"
                  : "None"}
              </Text>
            </View>
          </View>

          <View style={styles.photosCard}>
            <View style={styles.photosContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageViewer", {
                    screen: "ImageViewer",
                    initialParams: {
                      ImageObject: imageObject.short_screenshots[0].image,
                    },
                  });
                }}
              >
                <Image
                  style={styles.photo}
                  source={{
                    uri: imageObject.short_screenshots[0].image,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageViewer", {
                    screen: "ImageViewer",
                    initialParams: {
                      ImageObject:
                        imageObject.short_screenshots.length > 1
                          ? imageObject.short_screenshots[1].image
                          : imagePlaceholder,
                    },
                  });
                }}
              >
                <Image
                  PlaceholderContent={
                    <ActivityIndicator size="large" color="#00ff00" />
                  }
                  style={styles.photo}
                  source={{
                    uri:
                      imageObject.short_screenshots.length > 1
                        ? imageObject.short_screenshots[1].image
                        : imagePlaceholder,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageViewer", {
                    screen: "ImageViewer",
                    initialParams: {
                      ImageObject:
                        imageObject.short_screenshots.length > 2
                          ? imageObject.short_screenshots[2].image
                          : imagePlaceholder,
                    },
                  });
                }}
              >
                <Image
                  PlaceholderContent={
                    <ActivityIndicator size="large" color="#00ff00" />
                  }
                  style={styles.photo}
                  source={{
                    uri:
                      imageObject.short_screenshots.length > 2
                        ? imageObject.short_screenshots[2].image
                        : imagePlaceholder,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageViewer", {
                    screen: "ImageViewer",
                    initialParams: {
                      ImageObject:
                        imageObject.short_screenshots.length > 3
                          ? imageObject.short_screenshots[3].image
                          : imagePlaceholder,
                    },
                  });
                }}
              >
                <Image
                  PlaceholderContent={
                    <ActivityIndicator size="large" color="#00ff00" />
                  }
                  style={styles.photo}
                  source={{
                    uri:
                      imageObject.short_screenshots.length > 3
                        ? imageObject.short_screenshots[3].image
                        : imagePlaceholder,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageViewer", {
                    screen: "ImageViewer",
                    initialParams: {
                      ImageObject:
                        imageObject.short_screenshots.length > 4
                          ? imageObject.short_screenshots[4].image
                          : imagePlaceholder,
                    },
                  });
                }}
              >
                <Image
                  PlaceholderContent={
                    <ActivityIndicator size="large" color="#00ff00" />
                  }
                  style={styles.photo}
                  source={{
                    uri:
                      imageObject.short_screenshots.length > 4
                        ? imageObject.short_screenshots[4].image
                        : imagePlaceholder,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageViewer", {
                    screen: "ImageViewer",
                    initialParams: {
                      ImageObject:
                        imageObject.short_screenshots.length > 4
                          ? imageObject.short_screenshots[4].image
                          : imagePlaceholder,
                    },
                  });
                }}
              >
                <Image
                  PlaceholderContent={
                    <ActivityIndicator size="large" color="#00ff00" />
                  }
                  style={styles.photo}
                  source={{
                    uri:
                      imageObject.short_screenshots.length > 5
                        ? imageObject.short_screenshots[5].image
                        : imagePlaceholder,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Button
        style={{
          backgroundColor: "#219AEF",
        }}
        icon={
          <Ionicons
            name="ios-videocam"
            size={20}
            color="#219AEF"
            style={{
              padding: 10,
            }}
          />
        }
        iconRight
        raised={true}
        title="View Video"
        backgroundColor="#219AEF"
        onPress={() => {
          navigation.navigate("ImageVideo", {
            screen: "ImageVideo",
            initialParams: {
              ImageObject: imageClip,
            },
          });
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
  cardTittle: {
    color: "blue",
    fontSize: 22,
    marginBottom: 5,
  },
  avatar: {
    width: Dimensions.get("window").width - 12,
    height: Dimensions.get("window").height / 3,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    margin: 10,
    elevation: 10,
  },
  profileCard: {
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    color: "#808080",
    padding: 10,
  },
  photosContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  photosCard: {
    width: Dimensions.get("window").width,
    elevation: 10,
    flex: 1,
  },
  photo: {
    marginTop: 10,
    width: Dimensions.get("window").width / 2 - 10,
    height: Dimensions.get("window").height / 5,
    margin: 5,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    width: Dimensions.get("window").width - 12,
    elevation: 10,
    margin: 10,
    backgroundColor: "green",
    height: 50,
  },
  centeredView: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  cardRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default ImageDetail;
