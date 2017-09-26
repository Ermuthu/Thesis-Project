import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { hMain, Div, H4, UL, LI, LIL, Logout } from "./Header.Style";

class Header extends Component {
  renderHeader() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <hMain>
            <UL>
              <LI>
                <a href="/auth/google">
                  Login with google<i className="material-icons right">face</i>
                </a>
              </LI>
              <LI>
                <a href="/auth/spotify">
                  Login with Spotify<i className="material-icons right">
                    account_circle
                  </i>
                </a>
              </LI>
            </UL>
          </hMain>
        );
      default:
        const { auth } = this.props;
        return [
          <Div key="1">
            <Logout key="1">
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
              Welcome, {auth.spotifyId}
              {auth.displayName}
            </H4>
          </Div>
        ];
    }
  }
  render() {
    return <div>{this.renderHeader()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
