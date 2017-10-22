import { connect } from "react-redux";
import * as actions from "../../../../actions/spotify";
import SpotifyArtist from "./Artist";
import { bindActionCreators } from "redux";

const mapState = ({ artist }) => ({
  artist,
  next: artist.results.next,
  prev: artist.results.prev
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapState, mapDispatchToProps)(SpotifyArtist);
