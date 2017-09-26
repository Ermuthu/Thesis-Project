import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { SongContainer } from "./Spotify.Style";

class SpotifyPlaylist extends Component {
  renderPlaylistSongs() {
    const { playlist } = this.props;
    const songs = playlist.items;
    return (
      <div key="3">
        {songs.map((item, index) => {
          console.log(item);
          return (
            <div key={index}>
              <div>{item.track.name}</div>
            </div>
          );
        })}
      </div>
    );
  }

  renderPlaylist() {
    const { playlist, auth } = this.props;
    const list = playlist.playlists.items;
    const accessToken = auth.accessToken;
    // console.log("playlist at render", list);
    return (
      <SongContainer>
        {list.map((item, index) => {
          const trackImg = item.images[0].url;
          console.log(item.tracks.href);
          const url = item.tracks.href;
          return (
            <div
              key={index}
              onClick={() =>
                this.props.actions.selectedPlaylist(url, accessToken)}
            >
              <div>{item.name}</div>
              <img
                src={trackImg}
                alt="track"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          );
        })}
      </SongContainer>
    );
  }
  render() {
    const { playlist } = this.props;
    // const songs = playlist.url;
    // console.log(songs);
    return (
      <div>
        {playlist.playlists ? this.renderPlaylist() : ""}
        {playlist.href ? this.renderPlaylistSongs() : ""}
      </div>
    );
  }
}

function mapStateToProps({ auth, playlist }) {
  return {
    auth,
    playlist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyPlaylist);
