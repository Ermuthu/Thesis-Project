import YouTube from "./YouTube";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";

const mapState = ({ youtube }) => ({ youtube });

export default reduxForm({
  form: "SpotifyForm"
})(connect(mapState)(withRouter(YouTube)));
