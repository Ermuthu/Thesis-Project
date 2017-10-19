import React from "react";
import PropTypes from "prop-types";
import { YouTube } from "./Inputs";

const YouTubeField = ({ submitting, history, reqYT, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit(reqYT)}>
      {YouTube()}
      <button
        disabled={submitting}
        onClick={() => history.push("/youtube/search")}
      >
        Search
      </button>
    </form>
  </div>
);

YouTubeField.propTypes = {
  submitting: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  reqYT: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default YouTubeField;
