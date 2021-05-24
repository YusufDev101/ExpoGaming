import React from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components.
import AppText from "../../components/AppText";

// Config.
import colors from "../../config/colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CardStat = ({ arrColors, IconComponent, title, value }) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <LinearGradient
        colors={arrColors}
        style={styles.cardStat}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.cardView}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {IconComponent && <IconComponent />}

            <View style={styles.cardView}>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: colors.white,
                  }}
                >
                  {value}
                </AppText>
                <AppText
                  style={{
                    color: colors.white,
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </AppText>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: windowHeight / 3,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardStat: {
    borderRadius: 10,
    height: 70,
    width: 130,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default CardStat;
