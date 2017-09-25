import React from "react";
import { connect } from "react-redux";

const VideoListItem = ({ youtube, video }) => {
  const videoId = video.id.videoId;
  const url = `https:www.youtube.com/embed/${videoId}`;
  const imageUrl = video.snippet.thumbnails.default.url;
  // console.log(youtube);
  // console.log(video);
  // console.log(url);
  // console.log(videoId);
  return (
    <li className="container">
      <iframe className="embed-responsive-item" src={url} />
      <div>
        <div className="media-heading">
          {video.snippet.title}
          {video.snippet.description}
        </div>
      </div>
    </li>
  );
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoListItem);
