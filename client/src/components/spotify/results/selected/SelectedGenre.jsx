import React, { Component } from "react";
import { connect } from "react-redux";
import { SongContainer, Inner, Image } from "../../Spotify.Style";

class SelectedGenre extends Component {
  state = { playUrl: "", audio: null, playing: false };

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
    return (
      <SongContainer>
        {genre.selectedGenre.map(item => {
          return (
            <div key={item.id} onClick={() => this.playSong(item.preview_url)}>
              <div>{item.name}</div>
              <Inner>
                {this.state.playing ? (
                  <span>
                    <i className="material-icons">pause</i>
                  </span>
                ) : (
                  <span>&#9654;</span>
                )}
              </Inner>
              <Image src={item.trackImg} alt="song" />
            </div>
          );
        })}
      </SongContainer>
    );
  }
}

const mapStateToProps = ({ genre }) => ({ genre });

export default connect(mapStateToProps)(SelectedGenre);
