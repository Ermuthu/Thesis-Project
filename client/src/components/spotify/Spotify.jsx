import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import SpotifyArtist from "./SpotifyArtist";
import SpotifySong from "./SpotifySong";
import SpotifyPlaylist from "./SpotifyPlaylist";
import SpotifyGenre from "./SpotifyGenre";

class Spotify extends Component {
  state = { input: "" };
  componentWillMount() {
    this.props.actions.clearSearch();
  }

  submitArtist() {
    this.props.actions.fetchArtist(this.state.input, this.state.accessToken);
  }
  submitSong() {
    this.props.actions.fetchSong(this.state.input, this.state.accessToken);
  }
  submitGenre() {
    this.props.actions.fetchGenre(this.state.input, this.state.accessToken);
  }
  submitPlaylist() {
    this.props.actions.fetchPlaylist(this.state.input, this.state.accessToken);
  }

  render() {
    const { auth, artist, song, playlist, genre } = this.props;
    console.log(auth);
    return (
      <div>
        {auth ? (
          <div>
            <input
              style={{
                width: "300px",
                textAlign: "center"
              }}
              className="form-control"
              placeholder="search by artist or song"
              onChange={event =>
                this.setState({
                  accessToken: this.props.auth,
                  input: event.target.value
                })}
              onKeyPress={event => {
                if (event.key === "Enter" && this.state.input) {
                  this.submitArtist();
                }
              }}
            />
            <button
              type="button"
              className="btn waves-effect waves-light"
              disabled={!this.state.input}
              onClick={() => this.submitArtist()}
            >
              Search for an Artist
            </button>
            <button
              type="button"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.submitSong()}
            >
              Search for a Song!
            </button>
            <button
              type="button"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.submitPlaylist()}
            >
              Search for a Playlist
            </button>
            <button
              type="button"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.submitPlaylist()}
            >
              Search for a Genre
            </button>
            {artist ? <SpotifyArtist /> : ""}
            {song ? <SpotifySong /> : ""}
            {playlist ? <SpotifyPlaylist /> : ""}
            {genre ? <SpotifyGenre /> : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth, artist, song, playlist, genre }) {
  return { auth, artist, song, playlist, genre };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Spotify);
