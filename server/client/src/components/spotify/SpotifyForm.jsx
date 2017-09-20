import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SpotifyField from "./SpotifyField";
const TYPES = [
  {
    kind: "Search Title",
    name: "title",
    placeholder: "title"
  },
  {
    kind: "Search Arist",
    name: "artist",
    placeholder: "artist"
  },
  {
    kind: "Search Album",
    name: "album",
    placeholder: "album"
  },
  {
    kind: "Search Playlist",
    name: "playlist",
    placeholder: "playlist"
  }
];

class SpotifyForm extends Component {
  spotifySearchField() {
    return _.map(TYPES, ({ kind, name, placeholder }) => {
      return (
        <form
          key={name}
          onSubmit={this.props.handleSubmit(() => this.props.onSearchSubmit())}
        >
          <Field
            key={kind}
            type="text"
            label={kind}
            name={name}
            placeholder={placeholder}
            component={SpotifyField}
          />
          <button type="submit" className="green btn-flat right white-text">
            Search!
            <i className="material-icons right">search</i>
          </button>
        </form>
      );
    });
  }

  render() {
    return <div>{this.spotifySearchField()}</div>;
  }
}

export default reduxForm({
  form: "spotifyForm",
  destroyOnUnmount: false
})(SpotifyForm);
