import React from "react";
import { connect } from "react-redux";

const Profile = ({ auth }) => {
  if (!auth) return <div>Loading...</div>;
  console.log("auth ->", auth);
  const profile = auth.map(person => {
    const profileId = auth.profile.displayName;
    console.log("profile ->", profile);

    //   const url = `https://www.video.com/embed/${videoId}`;
    return (
      //   <div>
      //   <div key={auth}>
      <div>{profileId}</div>
    );
  });
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
