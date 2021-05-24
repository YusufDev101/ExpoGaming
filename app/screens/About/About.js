import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image } from "react-native-elements";
import { Searchbar } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

// api.
import api from "../../api";
// Components.
import AppScreen from "../../components/AppScreen";
import WavyHeader from "../../components/WavyHeader";

const About = ({ route, navigation }) => {
  const [gamingData, setGamingData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState({
    value: "",
  });

  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const getPlatforms = () => {
    api
      .gameToday()
      .then(async function (response) {
        if (response.count > 0) {
          var objData = [];
          response.results.map(function (item) {
            objData.push(item);
          });
          setState({
            ...state,
            data: objData,
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

  const updateSearch = (filter) => {
    setSearch({
      value: filter,
    });
    GetData();
  };

  const GetData = async () => {
    api
      .gameSearch(search.value)
      .then(async function (response) {
        if (response.count > 0) {
          var objData = [];
          response.results.map(function (item) {
            objData.push(item);
          });
          setState({
            ...state,
            data: objData,
          });
        } else {
          console.log("--> Error");
        }
      })
      .catch(function (error) {
        console.log("handleLogin error: ", error);
      });
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    getPlatforms();
    setRefreshing(false);
    ToastAndroid.show("refreshed", ToastAndroid.LONG);
  }, [refreshing]);

  useEffect(() => {
    startLoading();
    getPlatforms();
    //ToastAndroid.show("Loading", ToastAndroid.LONG);
  }, []);

  const ListItemCard = ({ image, title, released, onPress }) => {
    return (
      <View style={styles.containerC}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Image
                style={styles.profileImg}
                source={{ uri: image }}
                PlaceholderContent={
                  <ActivityIndicator size="large" color="#00ff00" />
                }
              />
              <Text style={{ fontWeight: "bold", fontSize: 18, padding: 20 }}>
                {title}
              </Text>
            </View>
            <Text style={{ color: "gray", width: "90%", paddingLeft: 20 }}>
              {" Release Date: "} {released}
            </Text>
          </View>
        </TouchableOpacity>
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
      <Searchbar
        placeholder="Search"
        onChangeText={updateSearch}
        value={setSearch.value}
        style={{
          width: Dimensions.get("window").width - 20,
          alignSelf: "center",
          marginTop: 10,
        }}
      />
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.bodyContainer}>
        <FlatList
          style={styles.list}
          data={state.data}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageDetail", {
                    screen: "ImageDetail",
                    initialParams: {
                      ImageObject: item,
                    },
                  });
                }}
              >
                <View style={styles.card}>
                  <Image
                    PlaceholderContent={
                      <ActivityIndicator size="large" color="#00ff00" />
                    }
                    style={styles.cardImage}
                    source={{ uri: item.background_image }}
                  />
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.time}>{item.released}</Text>
                    </View>

                    <View style={styles.cardFooter}>
                      {/*
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri:
                                  "https://img.icons8.com/color/70/000000/filled-like.png",
                              }}
                            />
                            <Text style={styles.socialBarLabel}>78</Text>
                          </TouchableOpacity>
                        </View>

                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri:
                                  "https://img.icons8.com/ios-glyphs/75/ffffff/comments.png",
                              }}
                            />
                            <Text style={styles.socialBarLabel}>25</Text>
                          </TouchableOpacity>
                        </View>

                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri:
                                  "https://img.icons8.com/material/50/ffffff/retweet.png",
                              }}
                            />
                            <Text style={styles.socialBarLabel}>13</Text>
                          </TouchableOpacity>
                        </View>
                      </View>*/}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        {/* <ScrollView>
          <View>
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              data={state.data}
              renderItem={({ item, index }) => (
                <ListItemCard
                  title={item.name}
                  image={item.background_image}
                  released={item.released}
                  onPress={() => {
                    navigation.navigate("ImageDetail", {
                      screen: "ImageDetail",
                      initialParams: {
                        ImageObject: item,
                      },
                    });
                  }}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </ScrollView> */}
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  bodyContainer: {
    width: "100%",
    height: "100%",
    marginLeft: 8,
    elevation: 5,
  },
  bodyText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },
  bodyBelowContainer: {
    width: "100%",
    height: 100,
    margin: 20,
    elevation: 5,
  },
  list: {
    backgroundColor: "transparent",
    marginTop: 5,
    marginLeft: 2,
    width: Dimensions.get("window").width - 22,
    marginBottom: 160,
  },
  separator: {
    marginTop: 0,
  },
  /******** card **************/
  card: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
    elevation: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 100,
    width: null,
    position: "absolute",
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0,
  },
  cardImage: {
    flex: 1,
    height: 180,
    width: "100%",
  },
  /******** card components **************/
  title: {
    fontSize: 22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight: "bold",
  },
  time: {
    fontSize: 13,
    color: "#ffffff",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-start",
    justifyContent: "center",
    color: "#ffffff",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default About;

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "1 days a go",
    image: "https://via.placeholder.com/400x200/FFB6C1/000000",
  },
  {
    id: 2,
    title: "Sit amet, consectetuer",
    time: "2 minutes a go",
    image: "https://via.placeholder.com/400x200/48D1CC/000000",
  },
  {
    id: 3,
    title: "Dipiscing elit. Aenean ",
    time: "3 hour a go",
    image: "https://via.placeholder.com/400x200/AFEEEE/000000",
  },
  {
    id: 4,
    title: "Commodo ligula eget dolor.",
    time: "4 months a go",
    image: "https://via.placeholder.com/400x200/FFEFD5/000000",
  },
  {
    id: 5,
    title: "Aenean massa. Cum sociis",
    time: "5 weeks a go",
    image: "https://via.placeholder.com/400x200/FFC0CB/000000",
  },
  {
    id: 6,
    title: "Natoque penatibus et magnis",
    time: "6 year a go",
    image: "https://via.placeholder.com/400x200/DDA0DD/000000",
  },
  {
    id: 7,
    title: "Dis parturient montes, nascetur",
    time: "7 minutes a go",
    image: "https://via.placeholder.com/400x200/B0E0E6/000000",
  },
  {
    id: 8,
    title: "Ridiculus mus. Donec quam",
    time: "8 days a go",
    image: "https://via.placeholder.com/400x200/87CEEB/000000",
  },
  {
    id: 9,
    title: "Felis, ultricies nec, pellentesque",
    time: "9 minutes a go",
    image: "https://via.placeholder.com/400x200/4682B4/000000",
  },
];
