import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Profile = ({ auth }) => {
  const profile = auth.map(person => {
    const profileId = auth.profile.displayName;
    console.log("profile ->", profile);

    return (
      //   <div key={auth}>
      <div>{profileId}</div>
    );
  });
};

const mapStateToProps = ({ auth }) => ({ auth });

YouTubeField.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Profile);
