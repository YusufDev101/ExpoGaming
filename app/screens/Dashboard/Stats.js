import React, { useEffect, useState, useLayoutEffect } from "react";
import { Dimensions, StyleSheet, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Api.
import api from "../../api";

// Config.
import colors from "../../config/colors";

// Dashboard Components.
import CardStat from "./StatsCard";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Stats = (props) => {
  const [state, setState] = useState({
    platformData: [],
  });

  useLayoutEffect(() => {
    getPlatforms();
  }, []);

  useEffect(() => {
    getPlatforms();
  }, []);

  const getPlatforms = async () => {
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
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <CardStat
        title="Computer"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[0].games_count
        }
        arrColors={["#85EAD7", "#85EAD7"]}
        IconComponent={() => (
          <Ionicons
            name="logo-windows"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />
      <CardStat
        title="Xbox S/X"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[4].games_count
        }
        arrColors={["#C5A3FF", "#C5A3FF"]}
        IconComponent={() => (
          <Ionicons
            name="logo-xbox"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />
      <CardStat
        title="Xbox One"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[2].games_count
        }
        arrColors={["#C5A3FF", "#C5A3FF"]}
        IconComponent={() => (
          <Ionicons
            name="logo-xbox"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />
      <CardStat
        title="PlayStation 5"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[1].games_count
        }
        arrColors={["#67d3dd", "#67d3dd"]}
        IconComponent={() => (
          <Ionicons
            name="logo-playstation"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />
      <CardStat
        title="PlayStation 4"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[3].games_count
        }
        arrColors={["#67d3dd", "#67d3dd"]}
        IconComponent={() => (
          <Ionicons
            name="logo-playstation"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />

      <CardStat
        title="Switch"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[5].games_count
        }
        arrColors={["#85E3FF", "#85E3FF"]}
        IconComponent={() => (
          <MaterialCommunityIcons
            name="nintendo-switch"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />
      <CardStat
        title="Android"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[7].games_count
        }
        arrColors={["#feab7d", "#feab7d"]}
        IconComponent={() => (
          <Ionicons
            name="logo-android"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />
      <CardStat
        title="iOS"
        value={
          state.platformData.length === 0
            ? 0
            : state.platformData[6].games_count
        }
        arrColors={["#f6739f", "#f6739f"]}
        IconComponent={() => (
          <Ionicons
            name="logo-apple"
            size={30}
            color={colors.white}
            style={{ marginLeft: 10 }}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Stats;
