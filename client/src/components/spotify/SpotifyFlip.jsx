import React, { Component } from "react";
import Spotify from "./Spotify";
import { connect } from "react-redux";
import SpotifyResult from "./SpotifyResult";

class SpotifyFlip extends Component {
  state = { showResult: false };

  renderContent() {
    if (this.state.showResult) {
      return <Spotify onCancel={() => this.setState({ showResult: false })} />;
    }
    return (
      <SpotifyResult
        onSurveySubmit={() => this.setState({ showResult: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(auth) {
  {
    auth;
  }
}

export default connect(mapStateToProps)(SpotifyFlip);
