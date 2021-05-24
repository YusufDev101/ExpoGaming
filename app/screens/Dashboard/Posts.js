import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

// Components.
import AppButton from "../../components/AppButton";
import { ListItemDashboard } from "../../components/lists/";

import GamingItems from "../../data/gamingDataDashboard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  postContainer: {
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
    borderWidth: 0,
  },
});

const Posts = (props) => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    var itemdata = GamingItems.map((results) => ({
      data: results.results,
    }));
    setState({ ...state, data: itemdata[0].data });
  }, []);

  const BuildObject = ({ navigation }) => {
    try {
      var itemdata = GamingItems.map((results) => ({
        data: results.results,
      }));
    } catch (error) {}
  };
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        removeClippedSubviews={false}
        contentContainerStyle={[styles.container, props.containerStyle]}
        data={state.data}
        renderItem={({ item, index }) => (
          <ListItemDashboard
            key={item.id.toString()}
            title={item.name}
            subTitle={item.released}
            image={item.background_image}
            // onPress={() => {
            //   navigation.navigate("ImageDetail", {
            //     screen: "ImageDetail",
            //     initialParams: {
            //       ImageObject: item,
            //     },
            //   });
            //}}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <AppButton
        title={"View More"}
        style={{
          padding: 10,
          margin: 10,
        }}
      ></AppButton>
    </View>
  );
};

export default Posts;
