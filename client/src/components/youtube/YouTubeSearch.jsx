import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

class SearchBar extends Component {
  state = { term: "" };

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onKeyPress={event => {
            if (event.key === "Enter" && this.state.term) {
              this.props.actions.fetchYouTube(this.state.term);
            }
          }}
          onChange={event => this.setState({ term: event.target.value })}
        />
        <button
          type="button"
          className="btn waves-effect waves-light"
          disabled={!this.state.term}
          onClick={() => this.props.actions.fetchYouTube(this.state.term)}
        >
          Search
        </button>
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
