import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";
import * as actions from "../actions";

import Header from "./Header";
import Home from "./Home";
import SurveyNew from "./surveys/SurveyNew";
import SpotifyNew from "./spotify/SpotifyNew";
import Youtube from "./youtube/Youtube";
import Spotify from "./spotify/Spotify";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/home" component={Home} />
            <Route exact path="/spotify/new" component={SpotifyNew} />
            <Route exact path="/surveys/new" component={SurveyNew} />
            <Route exact path="/youtube" component={Youtube} />
            <Route exact path="/spotify" component={Spotify} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
