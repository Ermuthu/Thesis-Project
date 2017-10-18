import React, { Component } from "react";
import { connect } from "react-redux";
import { clearSearch } from "../../../../actions/spotify";
import { SongContainer, Inner, Image } from "../../Spotify.Style";

class SelectedPlaylist extends Component {
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
    const { playlist } = this.props;
    if (!playlist) {
      return <div> Loading ... </div>;
    }
    return (
      <SongContainer>
        {playlist.selectedPlaylist.map(item => {
          return (
            <div key={item.uri} onClick={() => this.playSong(item.preview_url)}>
              {item.name}
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

const mapStateToProps = ({ playlist }) => ({ playlist });

export default connect(mapStateToProps, { clearSearch })(SelectedPlaylist);
