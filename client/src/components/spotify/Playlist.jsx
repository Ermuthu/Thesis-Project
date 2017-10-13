import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { PlaylistContainer } from "./Spotify.Style";

class SpotifyPlaylist extends Component {
  renderPlaylistSongs() {
    const { playlist } = this.props;
    // console.log(playlist);
    const results = playlist.items;
    console.log(results);
    return (
      <div key="3">
        {results.map((item, index) => {
          /* console.log(item); */
          /* console.log(item.track.album); */
          const trackImg = item.track.album.images[0].url;
          return (
            <PlaylistContainer key={index}>
              <div>{item.track.name}</div>
              <img
                src={trackImg}
                alt="track"
                style={{ width: "200px", height: "200px" }}
              />
            </PlaylistContainer>
          );
        })}
      </div>
    );
  }

  renderPlaylist() {
    const { playlist } = this.props;
    const list = playlist.playlists.items;
    console.log("playlist at render", list);
    return (
      <div>
        {list.map((item, index) => {
          const trackImg = item.images[0].url;
          const url = item.tracks.href;
          return (
            <PlaylistContainer
              key={index}
              onClick={() => this.props.actions.selectedPlaylist(url)}
            >
              <div>{item.name}</div>
              <img
                src={trackImg}
                alt="track"
                style={{ width: "200px", height: "200px" }}
              />
            </PlaylistContainer>
          );
        })}
      </div>
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

const mapStateToProps = ({ playlist }) => {
  return {
    playlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyPlaylist);
