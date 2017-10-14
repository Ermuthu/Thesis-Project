import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import HeaderLogout from "./HeaderLogout";

const Header = ({ auth }) => {
  switch (auth) {
    case null:
      return "Loading...";
    case false:
      return <HeaderLogin />;
    default:
      return <HeaderLogout />;
  }
  return <Header />;
};

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
