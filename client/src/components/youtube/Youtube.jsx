import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./YouTubeSearch";
import VideoList from "./YouTubeList";

class Youtube extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}
const mapStateToProps = ({ youtube }) => {
  return { youtube };
};

export default connect(mapStateToProps)(Youtube);
// export default connect(null, actions)(Youtube);
