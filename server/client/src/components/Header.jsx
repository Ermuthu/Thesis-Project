import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <ul><li>
              <a href="/auth/google">Login with google</a></li>
              <li><a href="/auth/spotify">Login with Spotify</a></li>
              </ul>
              </div>
        );
      default:
      return <a href="/api/logout">logout</a>
    }
  }
  render() {
    // console.log(this.props.auth);
    return (
      <nav>
        <div>
          <Link to={this.props.auth ? "/home" : "/"}>App</Link>
          {/* <ul> */}
            {this.renderContent()}
            {/* {console.log(this.props.auth)} */}
            {(this.props.auth) ?  (this.props.auth.spotifyId) || (this.props.auth.googleId) : ''}
          {/* `${this.props.auth.spotifyId}, you are signed in with Spotify!` || */}
          {/* `${this.props.auth.googleId}, you are signed in with Google!` */}
            {/* </ul>/ */}
          {/* {this. props.auth === 'spotifId' ? this.props.auth.spotifyId : this.props.auth.googleId}} */}
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
