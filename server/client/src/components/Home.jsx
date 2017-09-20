import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";

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
        Welcome to your #1 ~ meditation destination ~
        <div className="waves-effect waves-light">
          <Link to="/spotify">Spotify Search</Link>
          <Link to="/surveys">
            Surveys
            <i className="material-icons">event_note</i>
          </Link>
          <Link to="/youtube">Search Youtube</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
