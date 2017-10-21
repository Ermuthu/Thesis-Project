import Landing from "./components/Landing";
import Home from "./components/home/Home";
import Spotify from "./components/spotify/SpotifyExport";
import Playlist from "./components/spotify/results/Playlist";
import Genre from "./components/spotify/results/Genre";
import Song from "./components/spotify/results/SongExport";
import Artist from "./components/spotify/results/Artist";
import SelectedPlaylist from "./components/spotify/results/selected/SelectedPlaylist";
import SelectedGenre from "./components/spotify/results/selected/SelectedGenre";
import SelectedArtist from "./components/spotify/results/selected/SelectedArtist";
import YouTube from "./components/youtube/YouTube";
import YouTubeList from "./components/youtube/YouTubeList";

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
    component: YouTube
  },
  {
    path: "/youtube/:id",
    component: YouTubeList
  }
];
