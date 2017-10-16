import React from "react";
import { connect } from "react-redux";
import VideoListItem from "./Items";
import { SongContainer } from "./YouTube.Style";

const VideoList = ({ youtube }) => {
  if (!youtube) {
    return <div> Loading...</div>;
  }
  console.log(youtube);
  const videoResults = youtube.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <SongContainer>{videoResults}</SongContainer>;
};

const mapStateToProps = ({ youtube }) => ({ youtube });

export default connect(mapStateToProps)(VideoList);
