import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <div>
      <HeaderContainer />
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </div>
  </BrowserRouter>
);
export default App;
