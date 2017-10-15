import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
// import ReallySmoothScroll from "really-smooth-scroll";
import { fetchUser } from "../actions/auth";
import PropTypes from "prop-types";
import Header from "./header/Header";
import Home from "./home/Home";
import Spotify from "./spotify/Spotify";
import Playlist from "./spotify/Playlist";
import SelectedPlaylist from "./spotify/SelectedPlaylist";
import Genre from "./spotify/Genre";
import Song from "./spotify/Song";
import Artist from "./spotify/Artist";
import Youtube from "./youtube/Youtube";
import Landing from "./Landing";

// ReallySmoothScroll.shim();

class App extends Component {
  componentWillMount = () => this.props.fetchUser();

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/spotify" component={Spotify} />
            <Route exact path="/spotify/artist" component={Artist} />
            {/* <Route exact path="/spotify/artist/:id" component={ArtistShow} /> */}
            <Route exact path="/spotify/song" component={Song} />
            <Route exact path="/spotify/genre" component={Genre} />
            <Route exact path="/spotify/playlist" component={Playlist} />
            <Route
              exact
              path="/spotify/playlist/:id"
              component={SelectedPlaylist}
            />
            <Route exact path="/youtube" component={Youtube} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func
};
export default connect(null, { fetchUser })(App);
