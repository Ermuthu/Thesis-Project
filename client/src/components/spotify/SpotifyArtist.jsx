import React, { Component } from "react";
import { connect } from "react-redux";
import { ArtistContainer } from "./Spotify.Style";

class SpotifyArtist extends Component {
  renderArtist() {
    const { artist } = this.props;
    const list = artist.artists.items;
    return (
      <ArtistContainer>
        {list.map((item, index) => {
          /* const trackImg = item.images[0].url; */
          return (
            <div key={index}>
              <div>
                <div>{item.name}</div>
                <img src={item.images[0].url} alt="" />
              </div>
            </div>
          );
        })}
      </ArtistContainer>
    );
  }
  render() {
    return <div>{this.renderArtist()}</div>;
  }
}

function mapStateToProps(state) {
  // console.log("spotifyresult", state.spotify);
  const { auth, artist, song } = state;
  return {
    auth,
    artist,
    song
  };
}

export default connect(mapStateToProps)(SpotifyArtist);
