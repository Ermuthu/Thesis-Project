import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import configureStore from "./configureStore";
import Root from "./Root";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.querySelector("#root"));
