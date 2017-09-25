import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { SongContainer, Inner } from "./Spotify.Style";

class SpotifyPlaylist extends Component {
  componentDidMount() {
    this.props.actions.clearSearch();
  }

  // i did not write this playing method on my own
  playPlaylist(url) {
    let audio = new Audio(url);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playUrl: url,
        audio
      });
    } else {
      if (this.state.playUrl === url) {
        this.state.audio.pause();
        this.setState({
          playing: false
        });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playUrl: url,
          audio
        });
      }
    }
  }

  renderPlaylist() {
    const { playlist } = this.props;
    const list = playlist.playlists.items;
    // console.log("playlist at render", list);
    return (
      <SongContainer>
        {list.map((item, index) => {
          const trackImg = item.images[0].url;
          return (
            <div
              key={index}
              onClick={() => this.playPlaylist(item.preview_url)}
            >
              <div>{item.name}</div>
              <Inner>
                {this.state.playing ? (
                  <span>
                    <i className="material-icons">pause</i>
                  </span>
                ) : (
                  <span>&#9654;</span>
                )}
              </Inner>
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
    return <div>{this.renderPlaylist()}</div>;
  }
}

function mapStateToProps({ auth, playlist, playUrl, audio, playing }) {
  return {
    auth,
    playlist,
    playUrl,
    audio,
    playing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyPlaylist);
