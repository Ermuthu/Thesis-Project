import { connect } from "react-redux";
import * as actions from "../../../../actions/spotify";
import SpotifyPlaylist from "./Playlist";
import { bindActionCreators } from "redux";

const mapState = ({ playlist }) => ({
  playlist,
  next: playlist.results.next,
  prev: playlist.results.prev
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapState, mapDispatchToProps)(SpotifyPlaylist);
