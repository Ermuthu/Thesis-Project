import React from "react";
import { connect } from "react-redux";
import HeaderLogin from "./HeaderLogin";
import HeaderLogout from "./HeaderLogout";

const Header = ({ auth }) => {
  switch (auth.loggedIn) {
    case null:
      return "Loading...";
    case false:
      return <HeaderLogin />;
    default:
      return <HeaderLogout />;
  }
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
