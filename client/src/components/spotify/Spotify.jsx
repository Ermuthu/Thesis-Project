import React from "react";
import SpotifyField from "./Field/FieldExport";
import PropTypes from "prop-types";

const Spotify = ({ clearSearch, handleSubmit, history, children }) => (
  <div>
    <SpotifyField>{children}</SpotifyField>
    <button
      onSubmit={handleSubmit(clearSearch)}
      onClick={() => history.push("/spotify")}
    >
      Clear Your Search
    </button>
  </div>
);

Spotify.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.any,
  clearSearch: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default Spotify;
