import React, { useEffect, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../api";
import AppScreen from "../../components/AppScreen";
import WavyHeader from "../../components/WavyHeader";
import Posts from "./Posts";
import { Image } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";

const Dashboard = (props) => {
  const navigation = useNavigation();
  const [platforms, setPlaforms] = useState();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    platformData: [],
  });

  useEffect(() => {
    startLoading();
    getPlatforms();
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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

  renderScene = ({ route: { key } }) => {
    const { posts } = props;

    return <Posts containerStyle={styles.sceneContainer} posts={posts} />;
  };

  const HeaderActionCustom = () => {
    return (
      <View>
        <WavyHeader
          customStyles={styles.svgCurve}
          customHeight={Dimensions.get("window").height / 5}
          customTop={Dimensions.get("window").height / 6}
          customBgColor="#219AEF"
          customWavePattern="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,218.7C672,245,768,267,864,277.3C960,288,1056,288,1152,266.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Platforms</Text>
        </View>
      </View>
    );
  };

  renderContactHeader = () => {
    const { avatar, name, bio } = props;

    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.userRow}>
            <Image style={styles.userImage} source={{ uri: avatar }} />
            <View style={styles.userNameRow}>
              <Text style={styles.userNameText}>{name}</Text>
            </View>
            <View style={styles.userBioRow}>
              <Text style={styles.userBioText}>{bio}</Text>
            </View>
          </View>
          <View style={styles.socialRow}>
            <View style={styles.socialIcon}>
              <MaterialCommunityIcons name="steam" size={40} color="black" />
            </View>
            <View style={styles.socialIcon}>
              <MaterialCommunityIcons name="xbox" size={40} color="black" />
            </View>
            <View style={styles.socialIcon}>
              <MaterialCommunityIcons
                name="playstation"
                size={40}
                color="black"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <AppScreen style={styles.container}>
      <HeaderActionCustom />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons
          style={{
            marginTop: 10,
            left: 12,
            top: 5,
          }}
          name="md-menu"
          size={50}
          color="black"
        />
      </TouchableOpacity>
      <Spinner
        //visibility of Overlay Loading Spinner
        visible={loading}
        //Text with the Spinner
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={state.platformData}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  Alert.alert("In Progress... Feature coming in version 2");
                }}
              >
                <Image
                  style={styles.userImage}
                  source={{ uri: item.image_background }}
                  PlaceholderContent={
                    <ActivityIndicator size="large" color="#00ff00" />
                  }
                />
                <View style={styles.cardFooter}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{"Games: "}</Text>
                    <TouchableOpacity
                      style={styles.followButton}
                      onPress={() => alert("In Progress... v2 release")}
                    >
                      <Text style={styles.followButtonText}>
                        {" "}
                        {item.games_count}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  bodyContainer: {
    width: Dimensions.get("window").width / 1.2,
  },
  list: {
    flex: 1,
  },
  listContainer: {
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  /******** card **************/
  card: {
    elevation: 12,
    marginVertical: 2,
    backgroundColor: "white",
    marginHorizontal: 2,
    width: Dimensions.get("window").width / 2,
  },
  cardFooter: {
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    height: 180,
    width: Dimensions.get("window").width,
    //borderRadius: 60,
    alignSelf: "center",
    borderColor: "#DCDCDC",
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#008080",
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
  followButton: {
    marginTop: 5,
    height: 35,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#648dae",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default Dashboard;

const data = [
  {
    id: 1,
    name: "Mark Doe",
    position: "CEO",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png",
  },
  {
    id: 1,
    name: "John Doe",
    position: "CTO",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  },
  {
    id: 2,
    name: "Clark Man",
    position: "Creative designer",
    image: "https://bootdey.com/img/Content/avatar/avatar6.png",
  },
  {
    id: 3,
    name: "Jaden Boor",
    position: "Front-end dev",
    image: "https://bootdey.com/img/Content/avatar/avatar5.png",
  },
  {
    id: 4,
    name: "Srick Tree",
    position: "Backend-end dev",
    image: "https://bootdey.com/img/Content/avatar/avatar4.png",
  },
  {
    id: 5,
    name: "John Doe",
    position: "Creative designer",
    image: "https://bootdey.com/img/Content/avatar/avatar3.png",
  },
  {
    id: 6,
    name: "John Doe",
    position: "Manager",
    image: "https://bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: 8,
    name: "John Doe",
    position: "IOS dev",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  },
  {
    id: 9,
    name: "John Doe",
    position: "Web dev",
    image: "https://bootdey.com/img/Content/avatar/avatar4.png",
  },
  {
    id: 9,
    name: "John Doe",
    position: "Analyst",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png",
  },
];

// state.platformData[0].games_count,
// state.platformData[1].games_count,
// state.platformData[2].games_count,
// state.platformData[3].games_count,
// state.platformData[4].games_count,
// state.platformData[12].games_count,
// state.platformData[11].games_count,
// state.platformData[7].games_count,
// state.platformData[6].games_count,
