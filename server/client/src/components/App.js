import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Home = () => <h1> Home Page </h1>
const User = () => <h1> User Page </h1>

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
