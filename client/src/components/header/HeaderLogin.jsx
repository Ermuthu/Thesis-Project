import React from "react";
import { hMain, UL, LI } from "./Header.Style";
import { connect } from "react-redux";
import { loginRequest } from "../../actions/auth";

const HeaderLogin = () => (
  <hMain>
    <UL>
      <LI href="/auth/google" onClick={loginRequest}>
        Login with google<i className="material-icons right">face</i>
      </LI>
      <LI href="/auth/spotify" onClick={loginRequest}>
        Login with Spotify<i className="material-icons right">account_circle</i>
      </LI>
    </UL>
  </hMain>
);

export default connect(null, { loginRequest })(HeaderLogin);
