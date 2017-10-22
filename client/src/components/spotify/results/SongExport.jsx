import { connect } from "react-redux";
import { playSong, pauseSong, nextTwenty } from "../../../actions/spotify";
import { bindActionCreators } from "redux";
import SpotifySong from "./Song";
import PropTypes from "prop-types";

const mapState = ({ song }) => ({ song, next: song.results.next });

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
  playSong: PropTypes.func,
  pauseSong: PropTypes.func,
  nextTwenty: PropTypes.func
};

export default connect(mapState, { playSong, pauseSong, nextTwenty })(
  SpotifySong
);
