import React from "react";
import { hMain, UL, LI } from "./Header.Style";

const HeaderLogin = () => (
  <hMain>
    <UL>
      <LI href="/auth/google">
        Login with google<i className="material-icons right">face</i>
      </LI>
      <LI href="/auth/spotify">
        Login with Spotify<i className="material-icons right">account_circle</i>
      </LI>
    </UL>
  </hMain>
);

export default HeaderLogin;
