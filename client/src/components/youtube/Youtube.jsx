import React from "react";
import SearchBar from "./Search";
import VideoList from "./List";

const Youtube = ({ children }) => (
  <div>
    <SearchBar>{children}</SearchBar>
    <VideoList>{children}</VideoList>
  </div>
);
export default Youtube;
