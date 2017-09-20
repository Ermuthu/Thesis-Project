// this will show search options and search results
import React, { Component } from "react";
import SpotifyForm from "./SpotifyForm";
import SpotifyResult from "./SpotifyResult";

class SearchNew extends Component {
  constructor(props) {
    super(props);
    this.state = { results: true };
  }

  render() {
    return (
      <div>
        <SpotifyForm />
      </div>
    );
  }
}

export default SearchNew;
