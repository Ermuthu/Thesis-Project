import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderHeaderFiller() {
    return (
      <div>
        {
          <h3
            style={{
              paddingTop: "50px",
              color: "white"
              // display: "flex",
              // alignItems: "center"
            }}
          >
            Welcome, please log in for good times
          </h3>
        }
      </div>
    );
  }
  renderHeader() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <ul>
              <li>
                <a href="/auth/google">
                  Login with google<i className="material-icons right">face</i>
                </a>
              </li>
              <li>
                <a href="/auth/spotify">
                  Login with Spotify<i className="material-icons right">
                    account_circle
                  </i>
                </a>
              </li>
            </ul>
            {this.renderHeaderFiller()}
          </div>
        );
      default:
        return [
          <div key="1">
            <ul>
              <li key="2">
                <a href="/api/logout">
                  <i className="large material-icons right">
                    exit_to_app
                  </i>Logout
                </a>
              </li>
              <li className="center">
                <Link to={this.props.auth ? "/home" : "/"}>
                  <i className="large material-icons">home</i>
                </Link>
              </li>
            </ul>
          </div>
        ];
    }
  }
  render() {
    // console.log("props.auth in header", this.props.auth);
    return (
      <nav className="green accent-2">
        <div className="container">
          {this.renderHeader()}
          {/*console.log(this.props.auth)*/}
          <h5 className="right">
            {this.props.auth
              ? `Welcome, ${this.props.auth.spotifyId ||
                  this.props.auth.displayName}`
              : ""}
          </h5>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }
// same thing
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
