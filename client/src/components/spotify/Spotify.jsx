import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/spotify";
import { Link } from "react-router-dom";

class Spotify extends Component {
  state = { input: "" };

  render() {
    const {
      auth,
      fetchArtist,
      fetchSong,
      fetchGenre,
      fetchPlaylist
    } = this.props;
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
            />
            <Link
              to={"/spotify/artist"}
              className="btn btn-success"
              disabled={!this.state.input}
              onClick={() => fetchArtist(input)}
            >
              Search for an Artist
            </Link>
            <Link
              to={"/spotify/song"}
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => fetchSong(input)}
            >
              Search for a Song!
            </Link>
            <Link
              to="/spotify/playlist"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => fetchPlaylist(input)}
            >
              Search for a Playlist
            </Link>
            <Link
              to="/spotify/genre"
              disabled={!this.state.input}
              className="btn btn-success"
              onClick={() => fetchGenre(input)}
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

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(Spotify);
