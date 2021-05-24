import React from "react";
import PropTypes from "prop-types";

import contactData from "../../data/MockData..json";

import Profile from "./Dashboard";

const ProfileScreen = () => <Profile {...contactData} />;

ProfileScreen.navigationOptions = () => ({
  header: null,
});

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileScreen;
