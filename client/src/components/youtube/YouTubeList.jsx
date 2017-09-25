import React from "react";
import { connect } from "react-redux";
import VideoListItem from "./YouTubeItems";
import { ytc } from "./YouTube.Style";

const VideoList = ({ youtube }) => {
  const videoResults = youtube.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <div>{videoResults}</div>;
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoList);
