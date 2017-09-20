import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SpotifyField from "./SpotifyField";

class SpotifyForm extends Component {
  spotifySearchField() {
    return (
      <div>
        <Field type="text" name="spotifySearch" component={SpotifyField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(search => console.log(search))}>
          {this.spotifySearchField()}
          <button type="submit" className="teal btn-flat right white-text">
            Search!
            <i className="material-icons right">search</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "spotifyForm"
})(SpotifyForm);
