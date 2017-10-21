import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeSpotify from "./HomeSpotify";
import HomeYoutube from "./HomeYoutube";
import { fetchUser } from "../../actions/auth";

class Home extends Component {
  componentDidMount = () => this.props.fetchUser();
  render = () => {
    const { auth } = this.props;
    return auth.spotify ? <HomeSpotify /> : <HomeYoutube />;
  };
}

Home.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapState = ({ auth }) => ({ auth });

export default connect(mapState, { fetchUser })(Home);
