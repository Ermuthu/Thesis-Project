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
    const results = playlist.items;
    console.log("selected items =>", results);
    return (
      <div key="3">
        {results.map((item, index) => {
          console.log("selected playlist item map=>", item);
          {
            /* const track = item.track; */
          }
          {
            /* console.log(track); */
          }
          {
            /* const trackImg = item.track.album.images[0].url; */
          }
          {
            /* console.log(trackImg); */
          }
          return (
            <PlaylistContainer>
              {/* <div>{item.track.name}</div> */}
              <img
                // src={trackImg}
                alt="track"
                style={{ width: "200px", height: "200px" }}
              />
            </PlaylistContainer>
          );
        })}
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
