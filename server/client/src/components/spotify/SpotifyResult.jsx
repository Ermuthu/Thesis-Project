import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const SpotifyResult = ({
  onCancel,
  formValues,
  submitSong,
  submitArtist,
  submitAlbum,
  submitGenre
}) => {
  return (
    <div>
      <h3> {formValues.title}</h3>
      <button onClick={() => submitSong(formValues)}>submit search</button>

      <h3> {formValues.artist}</h3>
      <button onClick={() => submitArtist(formValues)}>submit search</button>

      <h3> {formValues.album}</h3>
      <button onClick={() => submitAlbum(formValues)}>submit search</button>

      <h3> {formValues.playlist}</h3>
      <button onClick={() => submitGenre(formValues)}>submit search</button>

      <button className="red btn-flat" onClick={onCancel}>
        back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.spotifyForm.values };
}

export default connect(mapStateToProps, actions)(SpotifyResult);
