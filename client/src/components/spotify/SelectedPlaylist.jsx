import React, { Component } from "react";
import { PlaylistContainer } from "./Spotify.Style";
import { connect } from "react-redux";
import { selectedPlaylist } from "../../actions";

class SelectedPlaylist extends Component {
  componentDidMount() {
    this.props.selectedPlaylist();
  }
  render() {
    const { playlist } = this.props;
    if (!playlist) {
      return <div> Loading ... </div>;
    }
    console.log("selected playlist at render =>", playlist);
    const results = playlist.playlists ? playlist.playlists.items : "";
    console.log("selected items =>", results);
    return (
      <div>
        {results
          ? results.map((item, index) => {
              console.log("selected playlist item map=>", item);
              const track = item.track ? item.track : "";
              console.log(track);
              const album = track.album ? track.album : "";
              console.log(album);
              const trackImg = album.images[0].url;
              return (
                <div key={index}>
                  <div>
                    {track.name}
                    <img
                      src={trackImg}
                      alt="song"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
//   render() {
//     return <div>{this.renderPlaylistSongs()}</div>;
//   }
// }

const mapStateToProps = ({ playlist }) => {
  return {
    playlist
  };
};

export default connect(mapStateToProps, { selectedPlaylist })(SelectedPlaylist);
