import { connect } from "react-redux";
import * as actions from "../../../../actions/spotify";
import { bindActionCreators } from "redux";
import SpotifySong from "./Song";
import PropTypes from "prop-types";

const mapState = ({ song }) => ({
  song,
  next: song.results.next,
  prev: song.results.prev
});

SpotifySong.PropTypes = {
  song: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      trackImg: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      preview_url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  next: PropTypes.string,
  prev: PropTypes.string,
  playSong: PropTypes.func,
  pauseSong: PropTypes.func,
  nextTwenty: PropTypes.func,
  prevTwenty: PropTypes.func
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapState, mapDispatchToProps)(SpotifySong);
