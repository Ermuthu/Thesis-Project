import React from "react";
import { Song, Artist, Playlist, Genre } from "./Inputs";

const SpotifyField = ({ submitting, history, actions, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit(actions.requestArtist)}>
      {Artist()}
      <button
        disabled={submitting}
        onClick={() => history.push("/spotify/artist")}
      />
    </form>
    <form onSubmit={handleSubmit(actions.requestSong)}>
      {Song()}
      <button
        disabled={submitting}
        onClick={() => history.push("/spotify/song")}
      />
    </form>
    <form onSubmit={handleSubmit(actions.requestGenre)}>
      {Genre()}
      <button
        disabled={submitting}
        onClick={() => history.push("/spotify/genre")}
      />
    </form>
    <form onSubmit={handleSubmit(actions.requestPlaylist)}>
      {Playlist()}
      <button
        disabled={submitting}
        onClick={() => history.push("/spotify/playlist")}
      />
    </form>
  </div>
);

export default SpotifyField;
