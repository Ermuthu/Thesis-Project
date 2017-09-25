import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class Youtube extends Component {
  render() {
    const { youtube } = this.props;
    console.log(youtube);
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(Youtube);
