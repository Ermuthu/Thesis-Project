import React, { Component } from "react";
import { Link } from "react-router-dom";
import { selectedPlaylist } from "../../actions/spotify";
import { connect } from "react-redux";
import { PlaylistContainer } from "./Spotify.Style";

class SpotifyPlaylist extends Component {
  renderPlaylist() {
    const { playlist } = this.props;
    const list = playlist.items;
    // console.log("playlist at render", list);
    return (
      <div>
        {list.map((item, index) => {
          const trackImg = item.images[0].url;
          const url = item.tracks.href;
          return (
            <PlaylistContainer
              key={item.id}
              onClick={() => this.props.selectedPlaylist(url)}
            >
              <Link to={`/spotify/playlist/${item.id}`}>
                <div>{item.name}</div>
                <img
                  src={trackImg}
                  alt="track"
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </PlaylistContainer>
          );
        })}
      </div>
    );
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) {
      return <div> Loading ... </div>;
    }
    return <div>{this.renderPlaylist()}</div>;
  }
}

const mapStateToProps = ({ playlist }) => {
  return {
    playlist
  };
};

export default connect(mapStateToProps, { selectedPlaylist })(SpotifyPlaylist);
