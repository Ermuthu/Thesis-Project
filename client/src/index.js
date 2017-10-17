import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./configureStore";
import Root from "./Root";
import "./theme/global";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.querySelector("#root"));
