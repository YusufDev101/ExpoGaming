import React from "react";
import PropTypes from "prop-types";

import productData from "./image.json";

import { NavAbsolute } from "../../components/NavHeader";
import Product from "./Image";

const ProductScreen = (props) => {
  props.navigation.setOptions({
    header: ({ navigation }) => (
      <NavAbsolute
        navigation={navigation}
        title={productData.title}
        subTitle={productData.address}
      />
    ),
  });

  return <Product {...productData} {...props} />;
};

export default ProductScreen;
