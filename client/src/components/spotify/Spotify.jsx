import React from "react";
import SpotifyField from "./FieldExport";

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

export default Spotify;
