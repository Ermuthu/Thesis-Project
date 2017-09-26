import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { SongContainer, Inner } from "./Spotify.Style";

class SpotifyPlaylist extends Component {
  state = { selected: "" };
  componentDidMount() {
    this.props.actions.clearSearch();
  }

  getPlaylist() {
    this.props.actions.selectedPlaylist(
      this.state.selcted,
      this.state.accessToken
    );
  }

  renderPlaylist() {
    const { playlist, auth } = this.props;
    const list = playlist.playlists.items;
    // console.log("playlist at render", list);
    return (
      <SongContainer>
        {list.map((item, index) => {
          const trackImg = item.images[0].url;
          console.log(item.tracks.href);
          return (
            <div
              key={index}
              onChange={event =>
                this.setState({
                  accessToken: this.props.auth,
                  selected: item.tracks.href
                })}
              onClick={() => this.getPlaylist()}
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
    return <div>{this.renderPlaylist()}</div>;
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
