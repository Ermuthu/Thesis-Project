import React from "react";
import { connect } from "react-redux";

const Profile = ({ auth }) => {
  if (!auth) return <div>Loading...</div>;
  console.log("auth ->", auth);
  const profile = auth.map(person => {
    const profileId = auth.profile.displayName;
    console.log("profile ->", profile);

    return (
      //   <div key={auth}>
      <div>{profileId}</div>
    );
  });
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
