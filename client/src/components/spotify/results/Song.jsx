import React from "react";
import { connect } from "react-redux";
import { playSong, playSpotify, pauseSpotify } from "../../../actions/spotify";
import { TrackHeader, PositionHeader } from "../containers/Headers";
import { PlayButton } from "../containers/images";
import SpotifyPlayer from "react-spotify-player";

const SpotifySong = ({ song, player, playSong, playSpotify, pauseSpotify }) => {
  return (
    <div>
      {song.items.map(songs => {
        return (
          <div key={songs.id}>
            {/* <div onClick={() => playSong(songs.uri)}> */}
            <img src={songs.trackImg} />
            <SpotifyPlayer
              uri={songs.uri}
              size={{ width: "90%", height: "300" }}
              view={"list"}
              theme={"black"}
            />
            <div onClick={() => playSpotify(songs.preview_url)}>
              {songs.name}
            </div>
            <div onClick={() => pauseSpotify(songs.preview_url)}>
              {songs.name}
            </div>

            <TrackHeader
              name={
                <a href={`${songs.preview_url}`} target="_blank">
                  {songs.name}
                </a>
              }
            />
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = ({ song, player }) => ({ song, player });

export default connect(mapStateToProps, {
  pauseSpotify,
  playSong,
  playSpotify
})(SpotifySong);
