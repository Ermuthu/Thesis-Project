import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
  }
}
export default App;
