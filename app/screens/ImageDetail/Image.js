import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PropTypes from "prop-types";

//import productData from "./image.json";

//import PhotoButton from "./ImageButton";
//import ProductStyles from "./style";

//const styles = StyleSheet.create({ ...ProductStyles });

const ImageScreen = (props) => {
  // const propTypes = {
  //   img: PropTypes.string.isRequired,
  //   detail: PropTypes.string.isRequired,
  //   containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  // };

  // const defaultProps = {
  //   containerStyle: {},
  // };

  // const renderDetail = () => {
  //   return (
  //     <View>
  //       <Text style={styles.detailText}>For Sale Property Details</Text>
  //       <Text style={styles.subDetailText}>{props.detail}</Text>
  //     </View>
  //   );
  // };

  // const renderDescription = () => {
  //   return (
  //     <View>
  //       <Text style={styles.priceText}>$175,000</Text>
  //       <Text style={styles.descriptionText}>1 Bed, 2 Bath, 1088 soft</Text>
  //       <Text style={styles.descriptionText}>Condo, 342 Days on Trulia</Text>
  //       <Text style={styles.descriptionText}>Est. Mortgage $52,604</Text>
  //     </View>
  //   );
  // };

  // const renderNavigator = () => {
  //   return (
  //     <View style={{ flexDirection: "row" }}>
  //       <TouchableOpacity style={[styles.navigatorButton, { flex: 2 }]}>
  //         <Text style={styles.navigatorText}>DIRECTIONS</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={[styles.navigatorButton, { flex: 2 }]}>
  //         <Text style={styles.navigatorText}>STREET VIEW</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={[styles.navigatorButton, { flex: 1 }]}>
  //         <Text style={styles.navigatorText}>MAP</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  // const renderContactHeader = () => {
  //   return (
  //     <View style={styles.headerContainer}>
  //       <View style={styles.coverContainer}>
  //         <ImageBackground
  //           source={{ uri: props.img }}
  //           style={styles.coverImage}
  //         >
  //           <PhotoButton />
  //         </ImageBackground>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.mainViewStyle}>
      {/* <ScrollView style={styles.scroll}>
        <View style={[styles.container, props.containerStyle]}>
          <View style={styles.cardContainer}></View>
        </View> */}
      {/* <View style={styles.productRow}>{renderDescription()}</View>
        {/* <View style={styles.productRow}>{renderNavigator()}</View> 
        <View style={styles.productRow}>{renderDetail()}</View> */}
      {/* </ScrollView> */}
      {/* <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonFooter}>
          <Text style={styles.textFooter}>CALL</Text>
        </TouchableOpacity>
        <View style={styles.borderCenter} />
        <TouchableOpacity style={styles.buttonFooter}>
          <Text style={styles.textFooter}>EMAIL</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default ImageScreen;
