import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FloatingAction } from "react-native-floating-action";
import {
  Dimensions,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Components.
import AppScreen from "../../components/AppScreen";
import WavyHeader from "../../components/WavyHeader";

const Profile = ({ route }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [imageObject, setImageObject] = useState();

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
        {/* <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Games</Text>
        </View> */}
      </View>
    );
  };

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <AppScreen style={{ flex: 1 }}>
      <View
        style={{
          height: Dimensions.get("window").height / 2,
          marginBottom: 20,
        }}
      >
        <Image
          style={styles.avatar}
          source={require("../../assets/undraw_gaming_6oy3.png")}
        />
      </View>

      <ScrollView style={{ marginBottom: 70 }}>
        <View
          style={[
            styles.card,
            { marginTop: Dimensions.get("window").height / 50 },
          ]}
        >
          <Text style={styles.cardTittle}>Coming Soon</Text>
          <Text> -...</Text>
          <Text> -...</Text>
          <Text> -...</Text>
        </View>

        <View
          style={[
            styles.card,
            { marginTop: Dimensions.get("window").height / 50 },
          ]}
        >
          <Text style={styles.cardTittle}>Coming Soon</Text>
          <Text> -...</Text>
          <Text> -...</Text>
          <Text> -...</Text>
        </View>
        <View
          style={[
            styles.card,
            { marginTop: Dimensions.get("window").height / 50 },
          ]}
        >
          <Text style={styles.cardTittle}>Coming Soon</Text>
          <Text> -...</Text>
          <Text> -...</Text>
          <Text> -...</Text>
        </View>
        <View
          style={[
            styles.card,
            { marginTop: Dimensions.get("window").height / 50 },
          ]}
        >
          <Text style={styles.cardTittle}>Coming Soon</Text>
          <Text> -...</Text>
          <Text> -...</Text>
          <Text> -...</Text>
        </View>
      </ScrollView>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.5,
    marginRight: 7,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    margin: 10,
    elevation: 10,
  },

  name: {
    marginTop: 10,
    fontSize: 22,
    color: "#808080",
    padding: 10,
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
  },
  button: {
    width: Dimensions.get("window").width - 12,
    elevation: 10,
    margin: 10,
    backgroundColor: "green",
    height: 50,
  },
});

export default Profile;
