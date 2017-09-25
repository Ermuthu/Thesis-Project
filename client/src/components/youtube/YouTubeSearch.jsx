import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

class SearchBar extends Component {
  state = { term: "" };

  submitYoutube() {
    this.props.actions.fetchYouTube(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onKeyPress={event => {
            if (event.key === "Enter" && this.state.term) {
              this.submitYoutube();
            }
          }}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

function mapStateToProps({ youtube }) {
  return { youtube };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(SearchBar);
