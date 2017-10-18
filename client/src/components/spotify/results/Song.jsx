import React, { Component } from "react";
import { clearSearch } from "../../../actions/spotify";
import { connect } from "react-redux";
import { SongContainer, Inner, Image } from "../Spotify.Style";

class SpotifySong extends Component {
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
    const { song } = this.props;
    return (
      <SongContainer>
        {song.items.map(track => {
          return (
            <div
              key={track.id}
              onClick={() => this.playSong(track.preview_url)}
            >
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
              <Image src={track.trackImg} alt="track" />
            </div>
          );
        })}
      </SongContainer>
    );
  }
}
const mapStateToProps = ({ song }) => ({ song });

export default connect(mapStateToProps, { clearSearch })(SpotifySong);
