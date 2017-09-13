import React, { Component } from 'react';
import './App.css';
import Spotify from './components/Spotify/Spotify';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Users</h1> */}
          <Spotify />
      </div>
    );
  }
}

export default App;