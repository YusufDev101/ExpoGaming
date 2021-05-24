import React, { useRef } from "react";
import styled from "styled-components/native";
import { Transition, Transitioning } from "react-native-reanimated";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import Images from "../assets";

const bgColors = {
  home: "#219AEF",
  logger: "#219AEF",
  documents: "#219AEF",
  menu: "#219AEF",
};

const textColors = {
  home: "#c56b14",
  logger: "#f37ff3",
  documents: "#4b458c",
  menu: "#2d9cdb",
};

const Container = styled.TouchableWithoutFeedback``;

const Background = styled(Transitioning.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  height: 30px;
  width: 30px;
`;

const Label = styled.Text`
  color: black;
  margin-bottom: 10px;
  font-size: 17px;
`;

function Tab({ label, accessibilityState, onPress }) {
  const focused = accessibilityState.selected;
  const icon = Images.icons[label];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}
    >
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}
      >
        <Icon source={icon} />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
}

export default Tab;

// ${(props) => textColors[props.label]};
