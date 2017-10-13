import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGenre, clearSearch } from "../../actions";
import { SongContainer, Inner } from "./Spotify.Style";

class SpotifyGenre extends Component {
  state = { playUrl: "", audio: null, playing: false };
  // componentDidMount() {
  //   this.props.fetchGenre();
  // }
  componentWillUnmount() {
    this.props.clearSearch();
  }

  // i did not write this playing method on my own
  playGenre(url) {
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

  render() {
    const { genre } = this.props;
    if (!genre) {
      return <div> Loading... </div>;
    }
    console.log("genre", genre);
    const playlists = genre.items;
    console.log("playlist", playlists[0]);
    return (
      <SongContainer>
        {playlists.map((playlist, index) => {
          const trackImg = playlist.images[0].url;
          return (
            <div
              key={index}
              onClick={() => this.playGenre(playlist.preview_url)}
            >
              <div>{playlist.name}</div>
              <Inner>
                {this.state.playing ? (
                  <span>
                    <i className="material-icons">pause</i>
                  </span>
                ) : (
                  <span>&#9654;</span>
                )}
              </Inner>
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
  // render() {
  // const { genre } = this.props;
  // const playlist = data.playlists.items;
  // return <div>{this.renderGenre()}</div>;
  // }
}

const mapStateToProps = ({ genre }) => {
  return {
    genre
  };
};

export default connect(mapStateToProps, { fetchGenre, clearSearch })(
  SpotifyGenre
);
