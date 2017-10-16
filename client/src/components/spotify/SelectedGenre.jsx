import React, { Component } from "react";
import { connect } from "react-redux";
import { clearSearch } from "../../actions/spotify";
import { SongContainer, Inner, Image } from "./Spotify.Style";

class SelectedGenre extends Component {
  state = { playUrl: "", audio: null, playing: false };
  componentWillUnmount = () => this.props.clearSearch();

  playSong(url) {
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
      return <div> Loading ... </div>;
    }
    const results = genre.selectedGenre ? genre.selectedGenre : "";
    return (
      <SongContainer>
        {results.map(item => {
          const track = item.track ? item.track : "";
          const album = track.album ? track.album : "";
          const trackImg = album.images[0].url;
          return (
            <div key={item.id} onClick={() => this.playSong(track.preview_url)}>
              <div>{track.name}</div>
              <Inner>
                {this.state.playing ? (
                  <span>
                    <i className="material-icons">pause</i>
                  </span>
                ) : (
                  <span>&#9654;</span>
                )}
              </Inner>
              <Image src={trackImg} alt="song" />
            </div>
          );
        })}
      </SongContainer>
    );
  }
}

const mapStateToProps = ({ genre }) => ({ genre });

export default connect(mapStateToProps, { clearSearch })(SelectedGenre);
