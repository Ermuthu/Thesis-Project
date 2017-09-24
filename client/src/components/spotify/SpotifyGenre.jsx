import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { SongContainer, Inner } from "./Spotify.Style";

class SpotifyGenre extends Component {
  state = { playUrl: "", audio: null, playing: false };
  componentWillMount() {
    this.props.actions.clearSearch();
  }

  // i did not write this playing method on my own
  playGenre(url) {
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

  renderGenre() {
    const { song } = this.props;
    const tracks = song.tracks.items;
    // console.log("song", song);
    // console.log("tracks", tracks[0]);
    return (
      <SongContainer>
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div key={index} onClick={() => this.playGenre(track.preview_url)}>
              <div>{track.name}</div>
              <Inner>
                {this.state.playing ? (
                  <span>
                    <i class="material-icons">pause</i>
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
    return <div>{this.renderGenre()}</div>;
  }
}

function mapStateToProps(state) {
  const { auth, genre } = state;
  return {
    auth,
    genre
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyGenre);
