import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";

class SpotifySong extends Component {
  componentWillMount() {
    this.props.actions.clearSearch();
  }
  playSong(url) {
    let audio = new Audio(url);
    audio.play();
  }

  renderSong() {
    const { song } = this.props;
    const tracks = song.tracks.items;
    console.log("song", song);
    console.log("tracks", tracks[0]);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          textAlign: "center"
        }}
      >
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div key={index} onClick={() => this.playSong(track.preview_url)}>
              <p>{track.name}</p>
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
