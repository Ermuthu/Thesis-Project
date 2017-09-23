import React, { Component } from "react";
import { connect } from "react-redux";

class SpotifyArtist extends Component {
  renderArtist() {
    const { spotify, tracks } = this.props;
    // console.log("spotify after render", spotify.artists.items[0]);
    // console.log("spotify images", spotify.artists.items[0].images);
    const track = spotify.artists.items;
    // console.log(track);
    return (
      <div className="row">
        {track.map((item, index) => (
          <div className="row-two" key={index}>
            {item.images.length > 0 ? (
              <a href={item.external_urls.spotify}>
                <p>{item.name}</p>
                <img src={item.images[0].url} alt="" />
              </a>
            ) : (
              <a href={item.external_urls.spotify}>listen</a>
            )}
          </div>
        ))}
      </div>
    );
  }
  render() {
    return <div>{this.renderArtist()}</div>;
  }
}

function mapStateToProps(state) {
  console.log("spotifyresult", state.spotify);
  return {
    auth: state.auth,
    spotify: state.spotify,
    song: state.song
  };
}

export default connect(mapStateToProps)(SpotifyArtist);
