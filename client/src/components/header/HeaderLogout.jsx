import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Login, Home, StyledP } from "./Children.Style";
import { logOut } from "../../actions/auth";

const HeaderLogout = ({ auth, logOut }) => (
  <Menu>
    <Login href="/api/logout" onClick={logOut}>
      Logout
    </Login>
    <Home to={auth ? "/home" : "/"}>Home</Home>
    {auth.spotifyId ? (
      <StyledP nowrap>Welcome, {auth.spotifyId}</StyledP>
    ) : (
      <StyledP> Welcome, {auth.displayName} </StyledP>
    )}
  </Menu>
);

HeaderLogout.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logOut })(HeaderLogout);
