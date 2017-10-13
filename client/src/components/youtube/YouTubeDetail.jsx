import React from "react";
import { connect } from "react-redux";

const VideoDetail = ({ youtube }) => {
  if (!youtube) return <div>Loading...</div>;
  const videos = youtube.map(video => {
    const videoId = youtube.id.videoId;
    // const url = `https://www.video.com/embed/${videoId}`;
    return (
      //   <div>
      <div key={youtube}>
        <div>{videoId}</div>
        {videos}
      </div>
      /* 
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-reponsive-16by9">
            <iframe className="embed-responsive-item" src={url} />
          </div>
          <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.title.description}</div>
          </div>
        </div> */
      //   </div>
    );
  });
};

const mapStateToProps = ({ youtube }) => {
  return { youtube };
};

export default connect(mapStateToProps)(VideoDetail);
// export default VideoDetail;
