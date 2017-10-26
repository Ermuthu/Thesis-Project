import React from "react";
import { Nav, YtL, SpI, YtI } from "./Home.Style";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export const HomeSpotify = () => (
  <Nav>
    <Profile />
    <Link to={"/spotify"}>Search Spotify</Link>
    <SpI />
    <YtL to={"/youtube"}>Search Youtube</YtL>
    <YtI />
  </Nav>
);

export const HomeYoutube = () => (
  <Nav>
    <YtI />
    <YtL to={"/youtube"}>Search Youtube</YtL>
  </Nav>
);
