import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

const SpotifySongResult = ({ state, songReducer }) => {
  console.log(songReducer);
  console.log(state);
  console.log(this.props.actions.getSong);
  const renderResults = state => {
    console.log("state in render results", state);
    // if (true) return <h1>HOLA</h1>;
  };

  //   console.log(fetchSong);
  //   console.log(state);
  //   console.log(this.state);
  //   console.log(payload);
  //   console.log(action);
  //   console.log(props);
  // const { searchRes };

  return (
    <div className="row">
      {renderResults(state)
      /* {searchRes.data.albums &&
          searchRes.data.albums.items.map((item, index) => (
            <div className="col-md-4 singleItem" key={index}>
              <p> {item.name}</p>
              {item.images.length > 0 ? (
                <a href={item.external_urls.spotify}>
                  <img src={item.images[1].url} />
                </a>
              ) : (
                <a href={item.external_urls.spotify}>listen</a>
              )}
            </div>
          ))} */
      }
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);

  return {
    state,
    song: state.songReducer
  };
}

export default connect(mapStateToProps)(SpotifySongResult);
