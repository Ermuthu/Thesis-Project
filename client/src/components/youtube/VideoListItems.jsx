import React from "react";
import PropTypes from "prop-types";
import { ArtistContainer } from "./YouTube.Style";

const VideoListItems = ({ video }) => {
  if (!video) {
    return <div> Loading...</div>;
  }
  return (
    <ArtistContainer>
      <iframe src={video.url} title="youtube" />
      <div>{video.title}</div>
      <div>{video.description}</div>
    </ArtistContainer>
  );
};

VideoListItems.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListItems;
