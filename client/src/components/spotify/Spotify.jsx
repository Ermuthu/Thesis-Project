import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

class Spotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      song: ""
    };
  }

  submitSearch() {
    this.props.actions.fetchSong(this.state.song, this.state.accessToken);
  }

  renderSongs() {
    const { spotify } = this.props;
    console.log("spotify after render", spotify.artists.items[0].images);
    const track = spotify.artists;
    console.log(track);
    return (
      <div className="row">
        {track.items.map((item, index) => (
          <div className="row-two" key={index}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  }
  render() {
    // console.log("props at render", this.props);
    // const { acessToken } = this.props;
    // console.log("auth");
    return (
      <div>
        <div className="search">
          <input
            className="form-control"
            placeholder="search by song"
            onChange={event =>
              this.setState({
                accessToken: this.props.auth,
                song: event.target.value
              })}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.submitSearch();
              }
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.submitSearch()}
        />
        {this.props.spotify ? this.renderSongs() : "Search for a Song!"}{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  console.log("spotify state", state.spotify);
  return {
    auth: state.auth,
    spotify: state.spotify
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Spotify);
