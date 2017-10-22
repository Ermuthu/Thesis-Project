import React from "react";
import { connect } from "react-redux";
import { Artist } from "../../containers/Headers";

const SelectedArtist = ({ selected }) => (
  <div>
    <Artist
      externalUrl={selected.external_url}
      name={selected.name}
      message={selected.message}
      img={selected.img}
      uri={selected.uri}
      followers={selected.followers}
    />
  </div>
);

const mapState = ({ artist }) => ({
  selected: artist.selectedArtist
});

export default connect(mapState)(SelectedArtist);
