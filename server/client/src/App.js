import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="/auth/google">Sign in with your Google account?</a>
        <a href="/auth/spotify">Sign in with your Spotify account?</a>
      </div>
    );
  }
}

export default App;
