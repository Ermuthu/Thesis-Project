import React from "react";
import { Nav, SpL, YtL, SpI, YtI } from "./Home.Style";
import { Link } from "react-router-dom";

const HomeSpotify = () => (
  <Nav>
    <Link to={"/spotify"}>Search Spotify</Link>
    <SpI />
    <YtL to={"/youtube"}>Search Youtube</YtL>
    <YtI />
  </Nav>
);
export default HomeSpotify;
