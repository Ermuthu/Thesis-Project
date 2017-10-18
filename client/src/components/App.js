import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";
import Home from "./home/Home";
import Spotify from "./spotify/Spotify";
import Playlist from "./spotify/results/Playlist";
import Genre from "./spotify/results/Genre";
import Song from "./spotify/results/Song";
import Artist from "./spotify/results/Artist";
import SelectedPlaylist from "./spotify/results/selected/SelectedPlaylist";
import SelectedGenre from "./spotify/results/selected/SelectedGenre";
import SelectedArtist from "./spotify/results/selected/SelectedArtist";
import Youtube from "./youtube/Youtube";
import Landing from "./Landing";

const App = () => (
  <BrowserRouter>
    <div>
      <HeaderContainer />
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/spotify" component={Spotify} />
      <Route exact path="/spotify/artist" component={Artist} />
      <Route path="/spotify/artist/:id" component={SelectedArtist} />
      <Route path="/spotify/song" component={Song} />
      <Route exact path="/spotify/genre" component={Genre} />
      <Route path="/spotify/genre/:id" component={SelectedGenre} />
      <Route exact path="/spotify/playlist" component={Playlist} />
      <Route path="/spotify/playlist/:id" component={SelectedPlaylist} />
      <Route exact path="/youtube" component={Youtube} />
    </div>
  </BrowserRouter>
);
export default App;
