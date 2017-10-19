import React from "react";
import VideoListItems from "./VideoListItems";
import PropTypes from "prop-types";
import { SongContainer } from "./YouTube.Style";
import { connect } from "react-redux";

const YouTubeList = ({ youtube }) => {
  const YTResults = youtube.items.map(video => {
    return <VideoListItems youtube={youtube} key={video.etag} video={video} />;
  });
  return <SongContainer>{YTResults}</SongContainer>;
};

const mapStateToProps = ({ youtube }) => ({ youtube });

YouTubeList.propTypes = {
  youtube: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(YouTubeList);
