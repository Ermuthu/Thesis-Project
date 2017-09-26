import React from "react";
import { connect } from "react-redux";
import { ArtistContainer } from "./YouTube.Style";

const VideoListItem = ({ youtube, video }) => {
  console.log(youtube);
  if (!video) {
    return <div> Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https:www.youtube.com/embed/${videoId}`;
  // const imageUrl = video.snippet.thumbnails.default.url;
  // console.log(youtube);
  // console.log(video);
  // console.log(url);
  // console.log(videoId);
  return (
    <ArtistContainer>
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </ArtistContainer>
  );
};

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(VideoListItem);
