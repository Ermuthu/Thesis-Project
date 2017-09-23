import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";

class SpotifySong extends Component {
  componentWillMount() {
    this.props.actions.clearSearch();
  }

  renderSong() {
    const { song } = this.props;
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
