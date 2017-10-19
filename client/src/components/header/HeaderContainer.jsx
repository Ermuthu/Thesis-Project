import React from "react";
import { Nav } from "./Children.Style";
import Header from "./Header";
import PropTypes from "prop-types";

const HeaderContainer = ({ children }) => (
  <Nav>
    <Header>{children}</Header>
  </Nav>
);

HeaderContainer.propTypes = {
  children: PropTypes.any
};

export default HeaderContainer;
