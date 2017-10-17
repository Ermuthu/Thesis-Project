import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";
import Home from "./home/Home";
import Spotify from "./spotify/Spotify";
import Playlist from "./spotify/Playlist";
import SelectedPlaylist from "./spotify/SelectedPlaylist";
import SelectedGenre from "./spotify/SelectedGenre";
import SelectedArtist from "./spotify/SelectedArtist";
import Genre from "./spotify/Genre";
import Song from "./spotify/Song";
import Artist from "./spotify/Artist";
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
