import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SpotifyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(search => console.log(search))}>
          <Field type="text" name="spotifySearch" component="input" />
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
