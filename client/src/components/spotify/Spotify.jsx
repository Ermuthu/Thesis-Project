import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/spotify";

const Spotify = ({
  requestArtist,
  requestSong,
  requestGenre,
  requestPlaylist,
  handleSubmit,
  clearSearch,
  history
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit(requestArtist)}>
        <Field
          name="artist"
          type="input"
          component="input"
          label="search by artist"
        />
        <button onClick={() => history.push("/spotify/artist")} />
      </form>
      <form onSubmit={handleSubmit(requestSong)}>
        <Field
          name="song"
          type="input"
          component="input"
          label="search by song"
        />
        <button onClick={() => history.push("/spotify/song")} />
      </form>
      <form onSubmit={handleSubmit(requestGenre)}>
        <Field
          name="genre"
          type="input"
          component="input"
          label="search by genre"
        />
        <button onClick={() => history.push("/spotify/genre")} />
      </form>
      <form onSubmit={handleSubmit(requestPlaylist)}>
        <Field
          name="playlist"
          type="input"
          component="input"
          label="search by playlist"
        />
        <button onClick={() => history.push("/spotify/playlist")} />
      </form>
      <button
        onSubmit={handleSubmit(clearSearch)}
        onClick={() => history.push("/spotify")}
      >
        Clear Your Search
      </button>
    </div>
  );
};

export default reduxForm({
  form: "SpotifyForm"
})(connect(null, actions)(withRouter(Spotify)));
