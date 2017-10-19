import React from "react";
import PropTypes from "prop-types";
import YouTubeField from "./FieldExport";

const YouTube = ({ children, history }) => (
  <YouTubeField history={history}>{children}</YouTubeField>
);

YouTube.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.any
};

export default YouTube;
