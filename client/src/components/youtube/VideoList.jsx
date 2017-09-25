import React from "react";
import { connect } from "react-redux";
import VideoListItem from "./VideoListItem";

const VideoList = () => {
  return <ul className="col-md-4 list-group" />;
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoList);
