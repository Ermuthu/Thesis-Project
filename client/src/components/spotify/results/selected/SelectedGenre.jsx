import React from "react";
import { connect } from "react-redux";
import { SongsDisplay } from "../../containers/Headers";

const SelectedGenre = ({ genre }) => {
  return (
    <div>
      {genre.selectedGenre.map(item => (
        <div key={item.id}>
          <SongsDisplay
            name={item.name}
            trackImg={item.trackImg}
            uri={item.uri}
          />
        </div>
      ))}
    </div>
  );
};

const mapState = ({ genre }) => ({ genre });

export default connect(mapState)(SelectedGenre);
