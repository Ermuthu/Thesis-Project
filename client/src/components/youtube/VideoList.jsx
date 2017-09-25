import React from "react";
import { connect } from "react-redux";
import VideoListItem from "./VideoListItem";

const VideoList = ({ youtube }) => {
  // const { videos } = this.props;
  // console.log("videos", videos);
  console.log("youtube", youtube);

  const videoResults = youtube.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <ul className="col-md-4 list-group">{videoResults}</ul>;
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoList);
