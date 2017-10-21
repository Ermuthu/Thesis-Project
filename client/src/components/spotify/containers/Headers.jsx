import React from "react";
import SpotifyPlayer from "react-spotify-player";
import { SongContainer, Inner, Image } from "../Spotify.Style";

export const SongsDisplay = props => (
  <SongContainer>
    <img src={props.trackImg} alt="" />
    <div>{props.name}</div>
    <SpotifyPlayer
      uri={props.uri}
      size={{ width: "90%", height: "300" }}
      view={"list"}
      theme={"black"}
    />
  </SongContainer>
);

export const Artist = props => (
  <div>
    <a href={props.externalUrl}>
      <h1>
        {props.name} {props.message}
      </h1>
    </a>
    <img src={props.img} alt="" />
  </div>
);