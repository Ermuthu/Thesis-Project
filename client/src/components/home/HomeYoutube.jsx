import React from "react";
import { Nav, YtL, YtI } from "./Home.Style";

const HomeYoutube = () => (
  <Nav>
    <YtI />
    <YtL to={"/youtube"}>Search Youtube</YtL>
  </Nav>
);

export default HomeYoutube;
