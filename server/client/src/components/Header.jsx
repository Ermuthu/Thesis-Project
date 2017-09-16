import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "...";
      case false:
        return (
          <ul>
            <li>
              <a href="/auth/google">Login with google</a>
            </li>
            <li>
              <a href="/auth/spotify">Login with Spotify</a>
            </li>
          </ul>
        );
      default:
        return (
          `${this.props.auth.spotifyId}, you are signed in with Spotify!` ||
          `${this.props.auth.googleId}, you are signed in with Google!`
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div>
          <ul className="right">{this.renderContent()}</ul>
          {this.props.auth ? <a href="/logout">logout</a> : ""}
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
