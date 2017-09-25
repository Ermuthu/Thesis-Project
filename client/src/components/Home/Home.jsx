import React, { Component } from "react";
import { connect } from "react-redux";
import { Nav, SpL, YtL, Img, SpI, YtI } from "./Home.Style";

class Home extends Component {
  renderProfile() {
    const { auth } = this.props;
    // const profile = auth.playlists;
    console.log(auth);
    // conso;
    //   {
    //     auth.map((item, index) => {
    //       return (
    //         <div key={index}>
    //           <div>
    //             <div>{item.name}</div>
    //             <img src={item.images[0].url} alt="" />
    //           </div>
    //         </div>
    //       );
    //     });
  }
  // }
  render() {
    const { auth } = this.props;
    return (
      <div>
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
  return { auth };
}

export default connect(mapStateToProps)(Home);
