import Home from "./home/Home";
import Spotify from "./spotify/SpotifyExport";
import Playlist from "./spotify/results/Playlist";
import Genre from "./spotify/results/Genre";
import Song from "./spotify/results/Song";
import Artist from "./spotify/results/Artist";
import SelectedPlaylist from "./spotify/results/selected/SelectedPlaylist";
import SelectedGenre from "./spotify/results/selected/SelectedGenre";
import SelectedArtist from "./spotify/results/selected/SelectedArtist";
import Youtube from "./youtube/Youtube";
import Landing from "./Landing";

export default [
  {
    path: "/",
    component: Landing,
    exact: true
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/spotify",
    component: Spotify
  },
  {
    path: "/spotify/artist",
    component: Artist,
    exact: true
  },
  {
    path: "/spotify/artist/:id",
    component: SelectedArtist
  },
  {
    path: "/spotify/song",
    component: Song
  },
  {
    path: "/spotify/genre",
    component: Genre,
    exact: true
  },
  {
    path: "/spotify/genre/:id",
    component: SelectedGenre
  },
  {
    path: "/spotify/playlist",
    component: Playlist,
    exact: true
  },
  {
    path: "/spotify/playlist/:id",
    component: SelectedPlaylist
  },
  {
    path: "/youtube",
    component: Youtube,
    exact: true
  }
];
