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

  render() {
    const { auth, artist, song, playlist, genre } = this.props;
    const accessToken = auth.accessToken;
    let input = this.state.input;
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
                  this.props.actions.fetchPlaylist(input, accessToken);
                }
              }}
            />
            <button
              type="button"
              className="btn waves-effect waves-light"
              disabled={!this.state.input}
              onClick={() => this.props.actions.fetchArtist(input, accessToken)}
            >
              Search for an Artist
            </button>
            <button
              type="button"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.props.actions.fetchSong(input, accessToken)}
            >
              Search for a Song!
            </button>
            <button
              type="button"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() =>
                this.props.actions.fetchPlaylist(input, accessToken)}
            >
              Search for a Playlist
            </button>
            <button
              type="button"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.props.actions.fetchGenre(input, accessToken)}
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

// anything returned from mapStateToProps will become props in spotify
function mapStateToProps({ auth, artist, song, playlist, genre }) {
  return { auth, artist, song, playlist, genre };
}

// make dispatch methods available as props for spotify
function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Spotify);
