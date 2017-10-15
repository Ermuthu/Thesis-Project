import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Div, Logout, LIL, H4, LI } from "./Header.Style";

const HeaderLogout = ({ auth }) => (
  <Div>
    <Logout>
      <LI href="/api/logout">
        <i className="large material-icons">exit_to_app</i>
      </LI>
      <LIL>
        <Link to={auth ? "/home" : "/"}>
          <i className="large material-icons">home</i>
        </Link>
      </LIL>
    </Logout>
    <H4>
      {auth.spotifyId ? (
        <p>Welcome, {auth.spotifyId}</p>
      ) : (
        <p> Welcome, {auth.displayName} </p>
      )}
    </H4>
  </Div>
);

HeaderLogout.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(HeaderLogout);