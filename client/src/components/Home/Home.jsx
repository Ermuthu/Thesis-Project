import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Nav, SpL, YtL, SpI, YtI } from "./Home.Style";
import { fetchUser } from "../../actions/auth";

class Home extends Component {
  componentDidMount = () => this.props.fetchUser();
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

Home.propTypes = {
  fetchUser: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { fetchUser })(Home);
