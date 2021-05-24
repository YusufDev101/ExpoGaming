import React, { useState, useEffect } from "react";
import { Dimensions, Image, View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import PropTypes from "prop-types";

// Demo Data.
import Items from "../../data";
import GamingItems from "../../data/gamingData";

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
  },
  date: {
    color: "gray",
    fontSize: 12.5,
  },
  postRow: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    width: Dimensions.get("window").width * 1,
  },
  postImage: {
    backgroundColor: "rgba(0, 0, 0, 0.075)",
    height: 200,
  },
  userImage: {
    marginRight: 12,
  },
  wordRow: {
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  wordText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
  },
});

const Post = ({ dataTest }) => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    // var itemdata = GamingItems.map((results) => ({
    //   data: results.results,
    // }));
    console.log("demo, ", dataTest);
    setState({ ...state, data: dataTest });
    console.log("state", state.data);
    //console.log("1 -- ", dataTest);
  }, []);

  const BuildObject = () => {
    try {
      var itemdata = GamingItems.map((results) => ({
        data: results.results,
      }));
    } catch (error) {}
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.postRow}>
        {/* <View style={styles.userImage}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: state.data.background_image,
            }}
          />
        </View> */}
        <View>
          {/* <Text>{state.data.name}</Text> */}
          <Text style={styles.date}>{"2020-11-12"}</Text>
        </View>
      </View>
      {/* <View style={styles.wordRow}>
        <Text style={styles.wordText}>{sentences}</Text>
      
      {image && <Image style={styles.postImage} source={{ uri: image }} />} 
      </View> */}
    </View>
  );
};

Post.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  image: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  createdDate: PropTypes.string.isRequired,
  sentences: PropTypes.string.isRequired,
};

Post.defaultProps = {
  containerStyle: {},
  image: null,
};

export default Post;
