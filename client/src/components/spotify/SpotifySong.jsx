import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";

class SpotifySong extends Component {
  state = { playUrl: "", audio: null, playing: false };
  componentWillMount() {
    this.props.actions.clearSearch();
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

  renderSong() {
    const { song } = this.props;
    const tracks = song.tracks.items;
    // console.log("song", song);
    // console.log("tracks", tracks[0]);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          textAlign: "center"
        }}
      >
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div key={index} onClick={() => this.playSong(track.preview_url)}>
              <div>{track.name}</div>
              <div>
                <div
                  className="inner"
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: "2em",
                    backgroundColor: "black",
                    borderRadius: "30px",
                    width: "60px",
                    height: "60px",
                    color: "white",
                    paddingTop: "13px",
                    marginLeft: "80px",
                    marginTop: "80px",
                    opacity: "0"
                  }}
                >
                  {this.state.playing ? (
                    <span>
                      <i class="material-icons">pause</i>
                    </span>
                  ) : (
                    <span>&#9654;</span>
                  )}
                </div>
              </div>
              <img
                src={trackImg}
                alt="track"
                style={{ width: "200px", height: "200px" }}
              />
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
  const { auth, song } = state;
  return {
    auth,
    song
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotifySong);
