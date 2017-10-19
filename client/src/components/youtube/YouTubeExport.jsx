import YouTube from "./YouTube";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";

const mapStateToProps = ({ youtube }) => ({ youtube });

export default reduxForm({
  form: "SpotifyForm"
})(connect(mapStateToProps)(withRouter(YouTube)));
