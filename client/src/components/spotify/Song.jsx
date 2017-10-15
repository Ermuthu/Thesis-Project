import React, { Component } from "react";
// import { bindActionCreators } from "redux";
// import * as actions from "../../actions";
import { fetchSong, clearSearch } from "../../actions/spotify";
import { connect } from "react-redux";
import { SongContainer, Inner } from "./Spotify.Style";

class SpotifySong extends Component {
  state = { playUrl: "", audio: null, playing: false };
  componentWillUnmount() {
    this.props.clearSearch();
  }

  // i did not write this playing method on my own
  playSong(url) {
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

  render() {
    const { song } = this.props;
    if (!song) {
      return <div> Loading ... </div>;
    }
    console.log(song);
    const tracks = song.items;
    console.log(tracks);
    return (
      <SongContainer>
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div key={index} onClick={() => this.playSong(track.preview_url)}>
              <div>{track.name}</div>
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
  // render() {
  // const { song } = this.props;
  // return <div>{this.renderSong()}</div>;
  // }
}

const mapStateToProps = ({ song }) => {
  return {
    song
  };
};

export default connect(mapStateToProps, { fetchSong, clearSearch })(
  SpotifySong
);
