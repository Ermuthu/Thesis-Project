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
      <div style={{ paddingTop: "100px", color: "white" }}>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          {this.props.auth ? (
            <div>
              <Link
                style={{
                  fontSize: "3em",
                  color: "#2DCD90",
                  padding: "40px"
                }}
                to="/spotify"
              >
                <b className="spotify">Spotify Search</b>
              </Link>
              <Link
                style={{
                  fontSize: "3em",
                  color: "rgb(255, 75, 75)",
                  padding: "40px"
                }}
                to="/youtube"
              >
                <b className="youtube">Search Youtube</b>
              </Link>
            </div>
          ) : (
            <h1 style={{ paddingTop: "100px", textAlign: "center" }}>
              Welcome to your #1 ~ meditation destination{" "}
            </h1>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
