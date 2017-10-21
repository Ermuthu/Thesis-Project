import { connect } from "react-redux";
import { playSong, pauseSong } from "../../../actions/spotify";
import { bindActionCreators } from "redux";
import SpotifySong from "./Song";

const mapState = ({ song }) => ({ song });

export default connect(mapState, { playSong, pauseSong })(SpotifySong);
