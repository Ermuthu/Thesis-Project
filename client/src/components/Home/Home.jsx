import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import { Nav, SpL, YtL, Img, SpI, YtI } from "./Home.Style";

class Home extends Component {
  renderHeader() {
    switch (this.props.auth) {
      case null:
        return "loading...";
      default:
        return (
          <div>
            <Header />
            <a href="/api/logout">
              <i className="large material-icons right">exit_to_app</i>Logout
            </a>
          </div>
        );
    }
  }
  render() {
    return (
      <div>
        {this.props.auth ? (
          <Nav>
            <div>
              <SpI>
                <SpL to={"/spotify"}>Search Spotify</SpL>
              </SpI>
              <YtI>
                <YtL to={"/youtube"}>Search Youtube</YtL>
              </YtI>
            </div>
          </Nav>
        ) : (
          <Img />
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
