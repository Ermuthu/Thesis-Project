import React from "react";
import SearchBar from "./Search";
import VideoList from "./List";
import { connect } from "react-redux";

const Youtube = ({ children, youtube }) => (
  <div>
    <SearchBar>{children}</SearchBar>
    <VideoList youtube={youtube}>{children}</VideoList>
  </div>
);

const mapStateToProps = ({ youtube }) => ({ youtube });

export default connect(mapStateToProps)(Youtube);
