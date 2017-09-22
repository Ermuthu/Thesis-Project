import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import * as actions from "../../actions";

class Spotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      input: ""
    };
  }

  submitArtist() {
    this.props.actions.fetchArtist(this.state.input, this.state.accessToken);
  }

  submitSong() {
    this.props.actions.fetchSong(this.state.input, this.state.accessToken);
  }

  renderArtist() {
    const { spotify } = this.props;
    console.log("spotify after render", spotify.artists.items[0]);
    console.log("spotify images", spotify.artists.items[0].images);
    const track = spotify.artists.items;
    console.log(track);
    return (
      <div className="row">
        {track.map((item, index) => (
          <div className="row-two" key={index}>
            {item.images.length > 0 ? (
              <a href={item.external_urls.spotify}>
                <img src={item.images[0].url} alt="" />
              </a>
            ) : (
              <a href={item.external_urls.spotify}>listen</a>
            )}
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
            placeholder="search by input, artist"
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
          data-filter="button"
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
        {this.props.spotify ? this.renderArtist() : " "}
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
