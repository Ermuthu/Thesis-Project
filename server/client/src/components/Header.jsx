import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
          <div>
              <a>Login with Google</a>
              <a>Login with Spotify</a>
        </div>
      </nav>
    );
  }
}

export default Header;
