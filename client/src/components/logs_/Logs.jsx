import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

class Logs extends Component {
  state = { text: "" };

  addLogs() {
    this.props.actions.addLogs(this.state.text);
    // console.log("logs", this);
  }

  renderLogs() {
    const { logs } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {logs.map(log => {
          return (
            <li key={log.id} className="list-group-item">
              <div>{log.text}</div>
            </li>
          );
        })}
      </ul>
    );
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
            onClick={() => this.addLogs()}
          >
            {this.renderlogs()}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  console.log("spotify state", state.spotify);
  return {
    logs: state,
    auth: state.auth,
    spotify: state.spotify
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Logs);
