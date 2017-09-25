import React from "react";
import { connect } from "react-redux";
import { ytc } from "./YouTube.Style";

const VideoListItem = ({ youtube, video }) => {
  const videoId = video.id.videoId;
  const url = `https:www.youtube.com/embed/${videoId}`;
  const imageUrl = video.snippet.thumbnails.default.url;
  // console.log(youtube);
  // console.log(video);
  // console.log(url);
  // console.log(videoId);
  return (
    <div>
      <div>
        <div className="media-heading">{video.snippet.title}</div>
        <iframe className="embed-responsive-item" src={url} />
      </div>
      {video.snippet.description}
    </div>
  );
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoListItem);
