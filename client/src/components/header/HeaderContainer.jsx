import React from "react";
import { Nav } from "./Children.Style";
import Header from "./Header";

const HeaderContainer = ({ children }) => (
  <Nav>
    <Header>{children}</Header>
  </Nav>
);

export default HeaderContainer;
