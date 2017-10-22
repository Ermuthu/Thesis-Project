import SpotifyField from "./Field";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../../../actions/spotify";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default reduxForm({
  form: "SpotifyForm"
})(connect(null, mapDispatchToProps)(withRouter(SpotifyField)));
