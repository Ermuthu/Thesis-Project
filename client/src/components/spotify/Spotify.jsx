import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import SpotifyArtist from "./Artist";
import SpotifySong from "./Song";
import SpotifyPlaylist from "./Playlist";
import SpotifyGenre from "./Genre";
import { Link } from "react-router-dom";

class Spotify extends Component {
  state = { input: "" };

  render() {
    const { auth } = this.props;
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
                  input: event.target.value
                })}
              onKeyPress={event => {
                if (event.key === "Enter" && this.state.input) {
                  this.props.actions.fetchPlaylist(input);
                }
              }}
            />
            <Link
              to={"/spotify/artist"}
              className="btn waves-effect waves-light"
              disabled={!this.state.input}
              onClick={() => this.props.actions.fetchArtist(input)}
            >
              Search for an Artist
            </Link>
            <Link
              to={"/spotify/song"}
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.props.actions.fetchSong(input)}
            >
              Search for a Song!
            </Link>
            <Link
              to="/spotify/playlist"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.props.actions.fetchPlaylist(input)}
            >
              Search for a Playlist
            </Link>
            <Link
              to="/spotify/genre"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.props.actions.fetchGenre(input)}
            >
              Search for a Genre
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

// anything returned from mapStateToProps will become props in spotify
function mapStateToProps({ auth }) {
  return { auth };
}

// make dispatch methods available as props for spotify
function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Spotify);
