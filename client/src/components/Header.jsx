import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderHeaderFiller() {
    return <div>{<h1 style={{ color: "black" }}> Welcome </h1>}</div>;
  }
  renderHeader() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <div>
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
            {/* {this.renderHeaderFiller()} */}
          </div>
        );
      default:
        return [
          <div key="1">
            <ul>
              <li>
                <Link to={this.props.auth ? "/home" : "/"}>Home</Link>
              </li>
              <li key="2">
                <a href="/api/logout">
                  <i className="large material-icons right">
                    exit_to_app
                  </i>Logout
                </a>
              </li>
            </ul>
          </div>
        ];
    }
  }
  render() {
    // console.log("props.auth in header", this.props.auth);
    return (
      <nav>
        <div className="container">
          <ul className="right">{this.renderHeader()}</ul>
          {/* {console.log(this.props.auth)} */}
          <b className="left">
            {this.props.auth ? (
              `Welcome, ${this.props.auth.spotifyId ||
                this.props.auth.displayName}`
            ) : (
              ""
            )}
          </b>
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
