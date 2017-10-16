import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchYouTube } from "../../actions/youtube";

class SearchBar extends Component {
  state = { term: "" };

  render() {
    const { fetchYouTube } = this.props;
    return (
      <div className="search-bar">
        <input
          onKeyPress={event => {
            if (event.key === "Enter" && this.state.term) {
              fetchYouTube(this.state.term);
            }
          }}
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        <button
          type="button"
          className="btn waves-effect waves-light"
          disabled={!this.state.term}
          onClick={() => this.props.fetchYouTube(this.state.term)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default connect(null, { fetchYouTube })(SearchBar);
