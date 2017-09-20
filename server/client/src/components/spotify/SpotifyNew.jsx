// this will show search options and search results
import React, { Component } from "react";
import SpotifyForm from "./SpotifyForm";
import SpotifyResult from "./SpotifyResult";

class SearchNew extends Component {
  state = { showResult: false };

  renderResult() {
    if (this.state.showResult) {
      return (
        <SpotifyResult onCancel={() => this.setState({ showResult: false })} />
      );
    }

    return (
      <SpotifyForm onSearchSubmit={() => this.setState({ showResult: true })} />
    );
  }

  render() {
    return <div>{this.renderResult()}</div>;
  }
}

export default SearchNew;
