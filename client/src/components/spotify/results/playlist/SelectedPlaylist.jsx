import React from "react";
import { connect } from "react-redux";
import { SongsDisplay } from "../../containers/Headers";

const SelectedPlaylist = ({ playlist }) => {
  return (
    <div>
      {playlist.selectedPlaylist.map(item => (
        <div key={item.uri}>
          <SongsDisplay
            trackImg={item.trackImg}
            name={item.name}
            uri={item.uri}
          />
        </div>
      ))}
    </div>
  );
};

const mapState = ({ playlist }) => ({ playlist });

export default connect(mapState)(SelectedPlaylist);
