import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/spotify";
import SpotifyField from "./FieldExport";

const Spotify = ({ handleSubmit, clearSearch, history }) => {
  return (
    <div>
      <SpotifyField />
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
