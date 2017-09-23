import React, { Component } from "react";
import { connect } from "react-redux";

class SpotifyArtist extends Component {
  renderArtist() {
    const { spotify, tracks } = this.props;
    const track = spotify.artists.items;
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
  // console.log("spotifyresult", state.spotify);
  const { auth, spotify, song } = state;
  return {
    auth,
    spotify,
    song
  };
}

export default connect(mapStateToProps)(SpotifyArtist);
