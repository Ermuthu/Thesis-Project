import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="searchTrack" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "Search"
})(Search);
