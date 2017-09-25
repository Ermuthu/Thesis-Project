import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import * as actions from "../../actions";

class Youtube extends Component {
  componentDidMount() {
    this.props.fetchYouTube();
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}
// function mapStateToProps({ youtube }) {
//   return { youtube };
// }

// export default connect(mapStateToProps, actions)(Youtube);
export default connect(null, actions)(Youtube);
