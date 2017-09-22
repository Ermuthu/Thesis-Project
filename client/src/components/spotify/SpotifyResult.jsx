// import React, { Component } from "react";
// import _ from "lodash";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchSong } from "../../actions";
// import * as actions from "../../actions";
// import { bindActionCreators } from "redux";
//
// class SpotifyResult extends Component {
//   componentDidMount() {
//     this.actions.fetchSongs();
//   }
//   renderSongs() {
//     const { spotify } = this.props;
//     // return resdata.map(spotify => {
//     // <div className="card blue-grey darken-1" key={artist}>
//
//     // });
//   }
//   render() {
//     return <div>{this.renderSongs()}</div>;
//   }
// }
//
// function mapStateToProps(state) {
//   console.log("spotifyresult", state.spotify);
//   return {
//     auth: state.auth,
//     spotify: state.spotify
//   };
// }
// function mapDispatchtoProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchtoProps)(SpotifyResult);
