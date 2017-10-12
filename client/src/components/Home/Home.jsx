import React, { Component } from "react";
import { connect } from "react-redux";
import { Nav, SpL, YtL, SpI, YtI } from "./Home.Style";

class Home extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        {auth.spotifyId ? (
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
          <Nav alignItems="center" flexDirection="column">
            <b style={{ textAlign: "center", padding: 50 }}>
              You're logged in with your google account, you can only search
              youtube, if you want to search both youtube and spotify, please
              log in with your spotify account
            </b>
            <div>
              <YtI>
                <YtL to={"/youtube"}>Search Youtube</YtL>
              </YtI>
            </div>
          </Nav>
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Home);
