import { connect } from "react-redux";
import * as actions from "../../../../actions/spotify";
import SpotifyGenre from "./Genre";
import { bindActionCreators } from "redux";

const mapState = ({ genre }) => ({
  genre,
  next: genre.results.next,
  prev: genre.results.prev
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapState, mapDispatchToProps)(SpotifyGenre);
