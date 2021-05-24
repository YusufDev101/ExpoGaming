import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

export default function WavyHeader({
  customStyles,
  customHeight,
  customTop,
  customWavePattern,
}) {
  return (
    <View style={customStyles}>
      <LinearGradient
        colors={["#076585", "#26a0da"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ height: customHeight }}>
          <Svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: "absolute", top: customTop }}
          >
            <Path d={customWavePattern} />
          </Svg>
        </View>
      </LinearGradient>
    </View>
  );
}
