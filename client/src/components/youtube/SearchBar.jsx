import React, { Component } from "react";
import { connect } from "react-redux";

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

function mapStateToProps({ youtube }) {
  return { youtube };
}

export default connect(mapStateToProps)(SearchBar);
