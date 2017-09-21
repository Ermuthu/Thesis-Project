import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addLogs } from "../../actions";
import { fetchSong } from "../../actions";

class Spotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      song: ""
    };
  }
  addLogs() {
    this.props.addLogs(this.state.text);
    // console.log("logs", this);
  }

  // renderLogs() {
  //   const { logs } = this.props;
  //   return (
  //     <ul className="list-group col-sm-4">
  //       {logs.map(log => {
  //         return (
  //           <li key={log.id} className="list-group-item">
  //             <div>{log.text}</div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  fetchSong() {
    this.props.fetchSong(this.state.song, this.state.accessToken);
  }

  renderSongs() {
    // const { song } = this.props;
    // console.log("songs", song);
  }
  render() {
    // console.log("props at render", this.props);
    // const { acessToken } = this.props;
    // console.log("auth");
    return (
      <div>
        <div className="search">
          <div className="input">
            <input
              className="form-control"
              placeholder="search by song"
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addLogs()}
          >
            {/* {this.renderlogs()} */}
          </button>
          <input
            className="form-control"
            placeholder="search by song"
            onChange={event =>
              this.setState({
                accessToken: this.props.auth,
                song: event.target.value
              })}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={auth => this.fetchSong(this.props.auth)}
        >
          Search for song
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  console.log("props", state.accessToken);
  return {
    logs: state,
    auth: state.auth
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ addLogs, fetchSong }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(Spotify);
