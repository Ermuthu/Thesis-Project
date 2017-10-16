import React from "react";
import VideoListItem from "./Items";
import { SongContainer } from "./YouTube.Style";

const VideoList = ({ youtube }) => {
  if (!youtube) {
    return <div> Loading...</div>;
  }
  console.log(youtube);
  const videoResults = youtube.map(video => {
    return <VideoListItem youtube={youtube} key={video.etag} video={video} />;
  });

  return <SongContainer>{videoResults}</SongContainer>;
};

export default VideoList;
