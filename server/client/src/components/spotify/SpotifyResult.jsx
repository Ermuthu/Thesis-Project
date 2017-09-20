import React from "react";
import { connect } from "react-redux";

const SpotifyResult = ({ onCancel }) => {
  return (
    <div>
      results
      <button className="red btn-flat" onClick={onCancel}>
        back
      </button>
    </div>
  );
};

function mapStateToProps(auth) {
  console.log(auth);
  return {};
}

export default connect(mapStateToProps)(SpotifyResult);
