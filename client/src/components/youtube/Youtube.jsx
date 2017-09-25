import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./YouTubeSearch";
import VideoList from "./YouTubeList";
import * as actions from "../../actions";
import { ytc } from "./YouTube.Style";

class Youtube extends Component {
  componentDidMount() {
    this.props.fetchYouTube();
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center"
        }}
      >
        <SearchBar />
        <div
          style={{
            paddingTop: "70px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center"
            /* justifyContent: "center" */
          }}
        >
          <VideoList />
        </div>
      </div>
    );
  }
}
// function mapStateToProps({ youtube }) {
//   return { youtube };
// }

// export default connect(mapStateToProps, actions)(Youtube);
export default connect(null, actions)(Youtube);
