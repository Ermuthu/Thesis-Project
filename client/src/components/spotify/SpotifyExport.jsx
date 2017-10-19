import Spotify from "./Spotify";
import { connect } from "react-redux";
import { clearSearch } from "../../actions/spotify";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";

export default reduxForm({
  form: "SpotifyForm"
})(connect(null, { clearSearch })(withRouter(Spotify)));
