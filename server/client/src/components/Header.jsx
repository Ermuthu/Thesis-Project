import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Stripe from "./Stripe";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
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
          </div>
        );
      default:
        return [
          <li key="1">
            <Stripe />
          </li>,
          <li key="3" style={{ margin: "0 10px" }} />,
          <li key="2">
            <a href="/api/logout">
              <i className="large material-icons right">exit_to_app</i>Logout
            </a>
          </li>
        ];
    }
  }
  render() {
    // console.log(this.props.auth);
    return (
      <nav>
        <div className="container">
          <Link to={this.props.auth ? "/home" : "/"}>App</Link>
          <ul className="right">{this.renderContent()}</ul>
          {/* {console.log(this.props.auth)} */}
          <b className="left">
            {this.props.auth ? (
              `Welcome, ${this.props.auth.spotifyId ||
                this.props.auth.googleId}`
            ) : (
              ""
            )}
          </b>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps(state) {
//     return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
