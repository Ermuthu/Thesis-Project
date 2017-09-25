import React from "react";
import { connect } from "react-redux";
import VideoListItem from "./YouTubeItems";

const VideoList = ({ youtube }) => {
  if (!youtube) {
    return <div> Loading...</div>;
  }
  console.log(youtube);
  const videoResults = youtube.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <div>{videoResults}</div>;
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoList);
