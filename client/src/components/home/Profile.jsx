import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { refreshToken } from "../../actions/auth";

const Profile = ({ auth }) => (
  <div>
    {auth.displayName}
    {auth.user.followers}
    {auth.user.profile.emails[0].value}
    <a href={auth.user.profileUrl}>Your Spotify Profile</a>
    <img src={auth.photos} alt="" />
  </div>
);

const mapState = ({ auth }) => ({ auth });

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapState)(Profile);
