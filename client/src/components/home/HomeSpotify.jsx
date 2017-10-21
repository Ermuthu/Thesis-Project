import React from "react";
import { Nav, YtL, SpI, YtI } from "./Home.Style";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const HomeSpotify = () => (
  <Nav>
    <Profile />
    <Link to={"/spotify"}>Search Spotify</Link>
    <SpI />
    <YtL to={"/youtube"}>Search Youtube</YtL>
    <YtI />
  </Nav>
);

export default HomeSpotify;
