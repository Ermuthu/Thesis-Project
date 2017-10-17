import React from "react";
import { connect } from "react-redux";
import { Menu, Login } from "./Children.Style";
import { loginRequest } from "../../actions/auth";

const HeaderLogin = () => (
  <Menu>
    <Login href="/auth/google" onClick={loginRequest}>
      Login with Google
    </Login>
    <Login href="/auth/spotify" onClick={loginRequest}>
      Login with Spotify
    </Login>
  </Menu>
);

export default connect(null, { loginRequest })(HeaderLogin);
