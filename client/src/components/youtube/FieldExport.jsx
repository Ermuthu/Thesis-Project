import YouTubeField from "./Field";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { reqYT } from "../../actions/youtube";
import { withRouter } from "react-router-dom";

export default reduxForm({
  form: "YoutubeForm"
})(connect(null, { reqYT })(withRouter(YouTubeField)));
