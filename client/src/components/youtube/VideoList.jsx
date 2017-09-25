import React from "react";
import { connect } from "react-redux";
import VideoListItem from "./VideoListItem";

const VideoList = ({ youtube }) => {
  console.log(youtube);

  const videoResults = youtube.videos.map(video => {
    return <VideoListItem video={video} />;
  });

  return <ul className="col-md-4 list-group">{videoResults}</ul>;
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoList);
