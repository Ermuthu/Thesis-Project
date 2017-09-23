import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import * as actions from "../../actions";
import SpotifyArtist from "./SpotifyArtist";
import SpotifySong from "./SpotifySong";

class Spotify extends Component {
  state = {
    input: ""
  };

  submitArtist() {
    this.props.actions.fetchArtist(this.state.input, this.state.accessToken);
  }

  submitSong() {
    this.props.actions.fetchSong(this.state.input, this.state.accessToken);
  }

  render() {
    // console.log("props at render", this.props);
    // console.log("auth");
    return (
      <div>
        <div className="search">
          <input
            className="form-control"
            placeholder="search by artist"
            onChange={event =>
              this.setState({
                accessToken: this.props.auth,
                input: event.target.value
              })}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.submitArtist();
              }
            }}
          />
        </div>
        <Button
          type="button"
          className="btn btn-success"
          onClick={() => this.submitArtist()}
        >
          "Search for an Artist!"
        </Button>
        <Button
          type="button"
          className="btn btn-success"
          onClick={() => this.submitSong()}
        >
          "Search for a Song!"
        </Button>
        {this.props.spotify ? <SpotifyArtist /> : ""}
        {this.props.song ? <SpotifySong /> : ""}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  // console.log("spotify state", state.spotify);
  // console.log("song state", state.song);
  return {
    auth: state.auth,
    spotify: state.spotify,
    song: state.song
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Spotify);
