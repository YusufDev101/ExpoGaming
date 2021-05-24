import React, { useEffect, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../api";
import AppScreen from "../../components/AppScreen";
import WavyHeader from "../../components/WavyHeader";
import Spinner from "react-native-loading-spinner-overlay";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppText from '../../components/AppText'

const { width } = Dimensions.get("window");
import ImageCarousel from "./testCarousel";

import StatsHorizontalScrollView from "../Dashboard/Stats";

import Games from './Game'
import Stats from './Stats'

const Dashboard = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [platforms, setPlaforms] = useState();
  const [state, setState] = useState({
    platformData: [],
    activeIndex: 0,
  });

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    startLoading();
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
          <Text style={styles.headerText}>Dashboard</Text>
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
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />

<ScrollView
        style={styles.containerBottomRounded}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

      <View
          style={{
            flexDirection: "row",
            marginTop: Dimensions.get("window").height / 17,
          }}
        >
          <AppText style={{ marginLeft: 40, fontSize: 30, fontWeight: "bold" }}>
            Generations
          </AppText>
          <View style={{ flex: 1 }}></View>
          <AppText style={{ marginHorizontal: 40 }}></AppText>
        </View>


      <Stats dataObject={state.platformData} />

      <View
          style={{
            flexDirection: "row",
            marginTop: Dimensions.get("window").height / 12,
          }}
        >
          <AppText style={{ marginLeft: 40, fontSize: 30, fontWeight: "bold" }}>
            Regions
          </AppText>
          <View style={{ flex: 1 }}></View>
          <AppText style={{ marginHorizontal: 40 }}></AppText>
        </View>
      <Games dataObject={state.platformData} navigation={navigation}/>

     
      </ScrollView>
      
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
    flex: 1,
    marginTop: 70,
    alignContent: "center",
    //width: Dimensions.get("window").width / 1.5,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "white"
  },
  list: {
    flex: 1,
  },
  listContainer: {
    width: Dimensions.get("window").width,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    marginLeft: 40,
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
  containerBottomRounded: {
    marginTop: 70,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.8,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default Dashboard;

// const data = [
//   {
//     id: 1,
//     name: "Mark Doe",
//     position: "CEO",
//     image: "https://bootdey.com/img/Content/avatar/avatar7.png",
//   },
//   {
//     id: 1,
//     name: "John Doe",
//     position: "CTO",
//     image: "https://bootdey.com/img/Content/avatar/avatar1.png",
//   },
//   {
//     id: 2,
//     name: "Clark Man",
//     position: "Creative designer",
//     image: "https://bootdey.com/img/Content/avatar/avatar6.png",
//   },
//   {
//     id: 3,
//     name: "Jaden Boor",
//     position: "Front-end dev",
//     image: "https://bootdey.com/img/Content/avatar/avatar5.png",
//   },
//   {
//     id: 4,
//     name: "Srick Tree",
//     position: "Backend-end dev",
//     image: "https://bootdey.com/img/Content/avatar/avatar4.png",
//   },
//   {
//     id: 5,
//     name: "John Doe",
//     position: "Creative designer",
//     image: "https://bootdey.com/img/Content/avatar/avatar3.png",
//   },
//   {
//     id: 6,
//     name: "John Doe",
//     position: "Manager",
//     image: "https://bootdey.com/img/Content/avatar/avatar2.png",
//   },
//   {
//     id: 8,
//     name: "John Doe",
//     position: "IOS dev",
//     image: "https://bootdey.com/img/Content/avatar/avatar1.png",
//   },
//   {
//     id: 9,
//     name: "John Doe",
//     position: "Web dev",
//     image: "https://bootdey.com/img/Content/avatar/avatar4.png",
//   },
//   {
//     id: 9,
//     name: "John Doe",
//     position: "Analyst",
//     image: "https://bootdey.com/img/Content/avatar/avatar7.png",
//   },
// ];

// state.platformData[0].games_count,
// state.platformData[1].games_count,
// state.platformData[2].games_count,
// state.platformData[3].games_count,
// state.platformData[4].games_count,
// state.platformData[12].games_count,
// state.platformData[11].games_count,
// state.platformData[7].games_count,
// state.platformData[6].games_count,
