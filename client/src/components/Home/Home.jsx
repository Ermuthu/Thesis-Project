import React, { Component } from "react";
import { connect } from "react-redux";
// import Profile from "./Profile";
import { Nav, SpL, YtL, Img, SpI, YtI } from "./Home.Style";

class Home extends Component {
  renderProfile() {
    // const { auth } = this.props;
    // const profile = auth._json;
    // console.log(auth);
    // console.log(profile);
    // console.log(auth);
    // console.log(auth);
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        {/* <Profile />; */}
        {auth ? (
          <Nav>
            {this.renderProfile()}
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
  // console.log(auth);
  return {
    auth
  };
}

export default connect(mapStateToProps)(Home);
