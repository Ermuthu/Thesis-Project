import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./App.css";
import App from "./components/App";
import { store, rootElement } from "./createStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
