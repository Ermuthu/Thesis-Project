import React, { Component } from "react";
import { connect } from "react-redux";

class SpotifySong extends Component {
  renderSong() {
    const { song, items } = this.props;
    // console.log("spotify after render", spotify.artists.items[0]);
    // console.log("spotify images", spotify.artists.items[0].images);
    const track = song.tracks.items;
    console.log("song", song);
    console.log("track", track);
    return <div className="row" />;
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
