import React, { Component } from "react";
import { connect } from "react-redux";

class SpotifySong extends Component {
  renderSong() {
    const { song, items } = this.props;
    // console.log("spotify after render", spotify.artists.items[0]);
    // console.log("spotify images", spotify.artists.items[0].images);
    const tracks = song.tracks.items;
    console.log("song", song);
    console.log("tracks", tracks[0]);
    return (
      <div className="column">
        ;
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div key={index}>
              <img src={trackImg} alt="track" />
              <p>{track.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return <div>{this.renderSong()}</div>;
  }
}

function mapStateToProps(state) {
  // console.log("spotifyresult", state.spotify);
  return {
    auth: state.auth,
    song: state.song
  };
}

export default connect(mapStateToProps)(SpotifySong);
