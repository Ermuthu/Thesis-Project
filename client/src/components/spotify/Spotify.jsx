import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import * as actions from "../../actions";
import SpotifyArtist from "./SpotifyArtist";
import SpotifySong from "./SpotifySong";

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
    this.props.actions.fetchArtist(this.state.input, this.state.accessToken);
  }
  submitPlaylist() {
    this.props.actions.fetchSong(this.state.input, this.state.accessToken);
  }

  render() {
    return (
      <div>
        {this.props.auth ? (
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
                  {
                    this.submitArtist();
                  }
                }
              }}
            />

            <button
              type="button"
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              disabled={!this.state.input}
              className="btn"
              onClick={() => this.submitArtist()}
            >
              Search for an Artist!
            </button>
            <button
              type="button"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => this.submitSong()}
            >
              Search for a Song!
            </button>
            {this.props.spotify ? <SpotifyArtist /> : ""}
            {this.props.song ? <SpotifySong /> : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth, spotify, song }) {
  return { auth, spotify, song };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Spotify);
