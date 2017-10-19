import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeaderLogin from "./HeaderLogin";
import HeaderLogout from "./HeaderLogout";

const Header = ({ auth }) => {
  switch (auth.loggedIn) {
    case null:
      return "Loading...";
    case false:
      return <HeaderLogin />;
    default:
      return <HeaderLogout auth={auth} />;
  }
};

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
