import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import ReallySmoothScroll from "really-smooth-scroll";
import * as actions from "../actions";
import Header from "./header/Header";
import Home from "./home/Home";
import Spotify from "./spotify/Spotify";
import Youtube from "./youtube/Youtube";

ReallySmoothScroll.shim();

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/spotify" component={Spotify} />
            <Route exact path="/youtube" component={Youtube} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
