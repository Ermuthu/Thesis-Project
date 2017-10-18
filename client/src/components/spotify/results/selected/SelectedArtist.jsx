import React from "react";
import { connect } from "react-redux";

const SelectedArtist = ({ selectedArtist }) => (
  <div>
    <a href={selectedArtist.external_urls}>
      <h1>
        {selectedArtist.name} {selectedArtist.message}
      </h1>
    </a>
    <img src={selectedArtist.img} alt="" />
  </div>
);

const mapStateToProps = ({ artist }) => ({
  selectedArtist: artist.selectedArtist
});

export default connect(mapStateToProps)(SelectedArtist);
